import React, { FC } from "react";
import { useStyles } from "./approve.style";
import { useTranslator, replaceLang } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Paper, Grid, Hidden } from "@material-ui/core";
import { ScrollBar, Alert, Button, Copy } from "components/shared";
import { PostDeclarationActions } from "views/post-declaration/store/action";
import { IPostDeclarationState } from "views/post-declaration/store/reducer";
import { GoodsCard, TotalCard } from "views/post-declaration/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { faFileAlt, faBuilding, faPortrait } from "@fortawesome/pro-solid-svg-icons";
import { useHistory } from "react-router-dom";

export interface IApprove {
  postDecState: IPostDeclarationState;
}

const Approve: FC<IApprove> = ({ postDecState }) => {
  const lang = useTranslator();
  const classes = useStyles();
  const history = useHistory();
  const totalObject = postDecState.totalObject;
  const carrierCompany = postDecState.companies.filter((c) => c.id === Number(totalObject.sender?.carrierCompany));

  const renderButtons = () => {
    return (
      <div className={classes.alertButtons}>
        <Button variant="outlined" onClick={() => history.push("/postal-declaration/")} color="primary">
          {lang.complate}
        </Button>
        {postDecState.goods.exceed?.status ? (
          <Button
            variant="contained"
            design="green"
            dontCheckLogin
            onClick={() =>
              window.open("https://gpp.az/WebPortal/Infosite/RedirectFromSc/980200/aHR0cHM6Ly9ncHAuYXov", "_blank")
            }
            className={classes.payButton}
          >
            {lang.pay} ( {postDecState.goods.totalPrices.dutySumAzn} {lang.azn} )
          </Button>
        ) : (
          <Button
            design="green"
            onClick={() => history.push("/postal-declaration/add-declaration/")}
            variant="contained"
          >
            {lang.addNewDeclaration}
          </Button>
        )}
      </div>
    );
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.header}>
        <div>
          <FontAwesomeIcon icon={faFileAlt} />
          <div>{lang.declarationNumber}</div>
          <span>
            <Copy text={postDecState.declarationNumber} />
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPortrait} />
          <div>{lang.trackingId}</div>
          <Copy text={totalObject.sender.trackingId} />
        </div>
        <div>
          <FontAwesomeIcon icon={faBuilding} />
          <div>{lang.carrierCompany}</div>
          <span>{carrierCompany && carrierCompany[0]?.name}</span>
        </div>
      </div>
      <Grid container className={classes.body}>
        <Grid item xs={12} md={8} xl={7} className={clsx(classes.goodCards)}>
          <ScrollBar maxHeight={600} className={clsx(classes.separateCards, classes.goodsCardContainer)}>
            {postDecState.totalObject.goodsList.map((good, index) => (
              <GoodsCard
                key={index}
                goodIndex={index}
                good={good}
                currencyList={postDecState.MainCurrenciesList}
                units={postDecState.MainUnits}
                showEditButtons={false}
              />
            ))}
          </ScrollBar>
        </Grid>
        <Grid item xs={12} md={4} xl={5} className={clsx(classes.aside, classes.separateCards)}>
          <TotalCard
            totalPrice={postDecState.goods.totalPrices}
            type="total"
            color="permission"
            title={lang.totalPaidDuty}
          />
        </Grid>
        <Grid item xs={12}>
          <Alert
            severity={postDecState.goods.exceed?.status ? "error" : "success"}
            collapsable={false}
            className={classes.alert}
            text={
              <div className={classes.alertContent}>
                <span>
                  {postDecState.goods.exceed?.status
                    ? replaceLang(lang.declarationAddedPaymentNeeded, [postDecState.goods.totalPrices.dutySumAzn])
                    : lang.declarationAccepted}
                </span>
                <Hidden smDown>{renderButtons()}</Hidden>
              </div>
            }
          />
          <Hidden smUp>{renderButtons()}</Hidden>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state: IAppState) => ({
  postDecState: state.postalDeclaration,
});

export default connect(mapStateToProps, PostDeclarationActions)(Approve);
