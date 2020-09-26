import React, { FC, useEffect } from "react";
import { useStyles } from "./dec-info.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { PostDeclarationActions } from "views/post-declaration/store/action";
import { Modal, Fade, Backdrop, Paper, Button, Link } from "@material-ui/core";
import { useUser } from "hooks";
import { IDeclarationInfo, IGoodsInvoicePriceList, IReceiver } from "views/post-declaration/types";
import { Spinner, ScrollBar, Manat } from "components/shared";
import { DecInfoCard } from "../dec-info-card";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import { GoodsCard } from "../goods-card";

export interface IGetDeclarationInfoRequest {
  declarationNo: string;
  docNo: string;
  nationality: string;
}

export interface IGoodCatalog {
  getDeclarationInfo(data: IGetDeclarationInfoRequest): void;
  open: boolean;
  declarationNo: string;
  decInfo: IDeclarationInfo;
  onClose?(): void;
}

const GoodCatalog: FC<IGoodCatalog> = ({ getDeclarationInfo, declarationNo, open, decInfo, onClose = () => {} }) => {
  const lang = useTranslator();
  const classes = useStyles();
  const currentUser = useUser();

  useEffect(() => {
    if (declarationNo) {
      getDeclarationInfo({
        declarationNo: declarationNo,
        docNo: currentUser.pin,
        nationality: currentUser.citizenship,
      });
    }
  }, [declarationNo]);

  const getPaymentStatus = (paymentStatus: number) => {
    switch (paymentStatus) {
      case 0:
        return (
          <Link
            href="https://gpp.az/WebPortal/Infosite/RedirectFromSc/980200/aHR0cHM6Ly9ncHAuYXov"
            target="_blank"
            className={clsx(classes.bgRed, classes.badge)}
          >
            {lang.notPaid}
          </Link>
        );
      case 1:
        return <span className={clsx(classes.bgGreen, classes.badge)}> {lang.paid} </span>;
      case 2:
        return <span className={clsx(classes.bgGray, classes.badge)}> {lang.notExceedLimit} </span>;
    }
  };

  const getPrice = (decInfo: any) => (
    <>
      {decInfo?.invoicePriceUsd} $ / {decInfo?.invoicePriceAzn} <Manat />
    </>
  );

  const getDuty = (duty: any) => (
    <>
      {duty} <Manat />
    </>
  );

  const getFullName = (reciever: IReceiver) => `${reciever.name} ${reciever.surname} ${reciever.fatherName}`;

  const renderCards = (goods: IGoodsInvoicePriceList[]) => {
    return goods.map((good, index) => (
      <GoodsCard
        key={index}
        goodIndex={index}
        good={good}
        quantityName={good.quantityUnitName}
        currencyName={good.currencyName}
        showEditButtons={false}
        className={classes.goodCard}
      />
    ));
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        {decInfo.declarationInfo ? (
          <Paper className={classes.container}>
            <Button onClick={() => onClose()} className={classes.closebutton}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
            <DecInfoCard
              title={lang.declarationInfo}
              labels={[
                lang.declarationNumber,
                lang.trackingId,
                lang.declared,
                lang.date,
                lang.totalPrice,
                lang.customsDuty,
                lang.paymentStatus,
                lang.seller,
                lang.companyName,
                lang.countryName,
              ]}
              values={[
                decInfo.declarationInfo?.declarationNumber,
                decInfo.sender.trackingId,
                getFullName(decInfo.receiver),
                decInfo.declarationInfo?.declarationDate,
                getPrice(decInfo.declarationInfo),
                getDuty(decInfo.declarationInfo?.dutyAzn),
                getPaymentStatus(decInfo.declarationInfo.paymentStatus),
                decInfo.sender.name,
                decInfo.sender.companyName,
                decInfo.sender.countryName,
              ]}
            />

            <DecInfoCard
              title={lang.totalPaidDuty}
              labels={decInfo.goodsInvoicePrice?.totalPrices.duty.map((d) => d.name)}
              values={decInfo.goodsInvoicePrice?.totalPrices.duty.map((d) => (
                <span>
                  {d.value} <Manat />
                </span>
              ))}
            />

            <DecInfoCard
              renderContent={() => renderCards(decInfo.goodsInvoicePrice.goodsInvoicePriceList)}
              title={lang.goods}
              className={classes.borderlessDecCard}
            />
          </Paper>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: IAppState) => ({ decInfo: state.postalDeclaration.declarationInfo });
export default connect(mapStateToProps, PostDeclarationActions)(GoodCatalog);
