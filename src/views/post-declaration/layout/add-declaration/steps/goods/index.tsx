import React, { FC, useState, useEffect } from "react";
import { useStyles } from "./goods.style";
import { useTranslator } from "localization";
import { connect, useDispatch } from "react-redux";
import { IAppState } from "store/reducers";
import { GoodsPopup, TotalCard, GoodsCard } from "../../../../components";
import { PostDeclarationActions } from "views/post-declaration/store/action";
import { IPostDeclarationState } from "views/post-declaration/store/reducer";
import { Paper, Grid, withWidth } from "@material-ui/core";
import { Button, ScrollBar, Alert, Checkbox, Popup, ReloadAlert } from "components/shared";
import { IGoodRequest, IGoodsInvoicePriceList, ITotalObject } from "views/post-declaration/types";
import { useUser } from "hooks";
import clsx from "clsx";
import { isNull } from "lodash";
import { reset } from "redux-form";

export interface IGoodsPage {
  postDecState: IPostDeclarationState;
  calculateGood(data: IGoodRequest): void;
  getGoodsGroup(id?: number): void;
  getDics(data: string[]): void;
  setUpdateIndex(index: number | null): void;
  addDeclaration(data: ITotalObject): void;
  setStep(step: number): void;
  width: any;
}

const Goods: FC<IGoodsPage> = ({
  postDecState,
  calculateGood,
  width,
  getGoodsGroup,
  getDics,
  setUpdateIndex,
  addDeclaration,
  setStep,
}) => {
  const lang = useTranslator();
  const classes = useStyles();
  const currentUser = useUser();
  const dispatch = useDispatch();
  const [modalOpened, setModalState] = useState(false);
  const [popupOpened, setPopupOpened] = useState(false);
  const [permAccepted, setPermAccept] = useState<boolean | null>(false);

  useEffect(() => {
    getGoodsGroup();
    getDics(["MainCurrenciesList", "MainUnits"]);
    getGoodsGroup(1);
  }, []);

  const handleAddGoodModalOpen = () => {
    dispatch(reset("add-declaration/goods"));
    setModalState(true);
  };

  const handleAddGood = (data: any) => {
    let goodsInvoicePriceList = [];

    const good: IGoodsInvoicePriceList = {
      invoicePrice: Number(data.invoicePrice),
      goodsGroupId: Number(data.goodsGroupId),
      quantity: Number(data.quantity),
      goodsId: data.good?.id,
      quantityUnit: data.quantityUnit?.code,
      rate: data.good?.rate,
      currencyType: data.currencyType?.code,
    };

    if (!isNull(postDecState.updateIndex)) {
      const goodsCopy = [...postDecState.totalObject.goodsList];
      goodsCopy[postDecState.updateIndex as number] = good;
      goodsInvoicePriceList = goodsCopy;
    } else {
      if (postDecState.totalObject.goodsList?.length) {
        goodsInvoicePriceList = [...postDecState.totalObject.goodsList, good];
      } else {
        goodsInvoicePriceList = [good];
      }
    }

    calculateGood({
      receiverFullName: `${currentUser.name} ${currentUser.surname} ${currentUser.fatherName}`,
      goodsInvoicePriceList,
      totalInvoicePrice: postDecState.totalPrice.invoicePriceUsd,
    });
    setModalState(false);
    setUpdateIndex(null);
  };

  const handleDialogAllow = () => {
    calculateGood({
      receiverFullName: `${currentUser.name} ${currentUser.surname} ${currentUser.fatherName}`,
      goodsInvoicePriceList: postDecState.totalObject.goodsList.filter((g, i) => i !== postDecState.updateIndex),
      totalInvoicePrice: postDecState.totalPrice.invoicePriceUsd,
    });
    setPopupOpened(false);
    setUpdateIndex(null);
  };

  const handleGoodEdit = (index: number) => {
    setUpdateIndex(index);
    setModalState(true);
  };

  const handleGoodRemove = (index: number) => {
    setUpdateIndex(index);
    setPopupOpened(true);
  };

  const handleModalClose = () => {
    setUpdateIndex(null);
    setModalState(false);
    dispatch(reset("add-declaration/goods"));
  };

  const handlePermissionAllow = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPermAccept(event.target.checked);
  };

  const handleAddDeclaration = () => {
    if (permAccepted) {
      addDeclaration(postDecState.totalObject);
    } else {
      setPermAccept(null);
    }
  };

  return (
    <Paper className={classes.container}>
      <ReloadAlert />
      <div className={classes.header}>
        <div>
          <Button
            onClick={() => handleAddGoodModalOpen()}
            variant="contained"
            design="green"
            className={classes.addButton}
          >
            + {lang.addNewGood}
          </Button>
        </div>
        <span>{lang.goods}</span>
      </div>
      <Grid container className={classes.body}>
        <Grid item xs={12} md={8} xl={7} className={clsx(classes.goodCards)}>
          <ScrollBar maxHeight={600} className={clsx(classes.separateCards, classes.goodsCardContainer)}>
            {postDecState.totalObject.goodsList?.length > 0 ? (
              postDecState.totalObject.goodsList.map((good, index) => (
                <GoodsCard
                  key={index}
                  goodIndex={index}
                  good={good}
                  currencyList={postDecState.MainCurrenciesList}
                  units={postDecState.MainUnits}
                  onRemove={handleGoodRemove}
                  onEdit={handleGoodEdit}
                />
              ))
            ) : (
              <div className={classes.noGoodContent}> {lang.noGoodAdded} test </div>
            )}
          </ScrollBar>
        </Grid>
        <Grid item xs={12} md={4} xl={5} className={clsx(classes.totalCards, classes.separateCards)}>
          <TotalCard
            totalPrice={postDecState.goods.totalPrices}
            type="total"
            color="permission"
            title={lang.totalPaidDuty}
          />
          {postDecState.goods.exceed?.message && (
            <Alert
              severity={postDecState.goods.exceed?.status ? "error" : "info"}
              collapsable={false}
              text={<span>{postDecState.goods.exceed?.message}</span>}
            />
          )}
        </Grid>

        <Grid xs={12} item className={classes.footer}>
          <Checkbox
            onChange={handlePermissionAllow}
            error={isNull(permAccepted)}
            color="primary"
            label={lang.postalDecPermission}
          />
          <div className={classes.buttonContainer}>
            <Button variant="outlined" onClick={() => setStep(1)} color="primary">
              {lang.back}
            </Button>
            <Button
              variant="contained"
              disabled={!permAccepted || postDecState.totalObject.goodsList?.length <= 0 || postDecState.loading}
              disableLoader
              onClick={handleAddDeclaration}
              color="primary"
            >
              {lang.approve}
            </Button>
          </div>
        </Grid>
      </Grid>
      <div className={classes.footer}></div>
      {
        //@ts-ignore
        <GoodsPopup onClose={handleModalClose} onSubmit={handleAddGood} open={modalOpened} />
      }
      <Popup
        type="remove"
        open={popupOpened}
        children={null}
        onAllow={handleDialogAllow}
        onDeny={() => setPopupOpened(false)}
        title={lang.removeGoodDialog}
      />
    </Paper>
  );
};

const mapStateToProps = (state: IAppState) => ({
  postDecState: state.postalDeclaration,
});

export default connect(mapStateToProps, PostDeclarationActions)(withWidth()(Goods));
