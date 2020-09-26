import React, { FC, useEffect } from "react";
import { useStyles } from "./gooen.style";
import { useTranslator } from "localization";
import { connect, useDispatch } from "react-redux";
import { IAppState } from "store/reducers";
import { IGooenPage } from "./types";
import { useUser } from "hooks";
import { Grid, Stepper, Step, StepLabel, Typography, Paper } from "@material-ui/core";
import { SectionHeader, AlertPage, Button, Spinner } from "components/shared";
import { faInfoCircle, faCheck } from "@fortawesome/pro-regular-svg-icons";
import { StepOne, StepTwo, StepThree } from "./components";
import { GooenActions } from "./store/action";
import { reset } from "redux-form";
import { useHistory } from "react-router-dom";
import moment from "moment";

const Gooen: FC<IGooenPage & any> = ({
  currentStep,
  handleStepOne,
  handleStepTwo,
  clearGooenStore,
  getGooenInfo,
  updateGooen,
  result,
  loading,
}) => {
  const lang = useTranslator("gooen");
  const classes = useStyles();
  const currentUser = useUser();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (currentUser.isLogin) {
      getGooenInfo({ pin: currentUser.pin });
    }

    return () => {
      clearGooenStore();
      dispatch(reset("gooenWizard"));
    };
  }, [clearGooenStore, dispatch]);

  const steps = ["Axtarış", "Şəxsi məlumatlar", "Son"];

  const handleStepOneFormSubmit = (data: any) => {
    console.log(data);

    let requestData = {
      countryId: `${data.stepOne.country.code}-${data.stepOne.country.abbreviation3}`,
      pin: data.stepOne.pin,
    };

    handleStepOne(requestData);
  };

  const handleStepTwoFormSubmit = (data: any) => {
    let requestData = {
      countryId: `${data.stepOne.country.code}-${data.stepOne.country.abbreviation3}`,
      pin: data.stepTwo.pin,
      surname: data.stepTwo.surname,
      name: data.stepTwo.name,
      fatherName: data.stepTwo.fatherName,
      birthDate: data.stepTwo.birthDate ? moment(data.stepTwo.birthDate).format("DD.MM.YYYY") : null,
      serialNumber: data.stepTwo.serialNumber,
      issuiAuthority: data.stepTwo.issuiAuthority,
      issuingDate: data.stepTwo.issuingDate ? moment(data.stepTwo.issuingDate).format("DD.MM.YYYY") : null,
      expiryDate: data.stepTwo.expiryDate ? moment(data.stepTwo.expiryDate).format("DD.MM.YYYY") : null,
    };

    handleStepTwo(requestData);
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <StepOne onSubmit={handleStepOneFormSubmit} />;
      case 1:
        return <StepTwo onSubmit={handleStepTwoFormSubmit} />;
      case 2:
        return <StepThree />;
      default:
        return "Unknown stepIndex";
    }
  };

  const handleReject = () => {
    history.push("for-individuals");
  };

  const handleAccept = () => {
    let data = {
      passport: currentUser.pin,
      country: "031",
    };
    updateGooen(data);
  };

  const renderDeletedButtons = () => {
    return (
      <div className={classes.buttonContainer}>
        <Button
          disabled={false}
          disableLoader={true}
          onClick={handleReject}
          className={classes.button}
          color="secondary"
          variant="outlined"
        >
          {lang.reject}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleAccept}
          disabled={false}
          disableLoader={false}
        >
          {lang.accept}
        </Button>
      </div>
    );
  };

  const renderTitle = (index1: string, gooen: number, index2: string) => {
    return (
      <div>
        {index1} <span className={classes.gooen}>{gooen}</span> {index2}
      </div>
    );
  };

  const renderInitialPage = () => {
    switch (result?.status) {
      case "deleted":
        return (
          <Grid item xs={12} component={Paper} className={classes.hasVoen}>
            <AlertPage
              icon={faInfoCircle}
              color="primary"
              title={renderTitle(lang.deletedGooen1, result?.gooen, lang.deletedGooen2)}
              renderButtons={renderDeletedButtons}
            />
          </Grid>
        );
      case "voen":
        return (
          <Grid item xs={12} component={Paper} className={classes.hasVoen}>
            <AlertPage
              icon={faInfoCircle}
              color="primary"
              title={renderTitle(lang.oldVoen1, result?.gooen, lang.oldVoen2)}
              buttonTitle={lang.print}
              hasButton={true}
            />
          </Grid>
        );
      case "old":
        return (
          <Grid item xs={12} component={Paper} className={classes.hasVoen}>
            <AlertPage
              icon={faCheck}
              color="primary"
              title={renderTitle(lang.hasGooen1, result?.gooen, lang.hasGooen2)}
              buttonTitle={lang.print}
              hasButton={true}
            />
          </Grid>
        );
      default:
        return renderDefaultPage();
    }
  };

  const renderDefaultPage = () => {
    return (
      <div className={classes.stepperRoot}>
        <Stepper activeStep={currentStep} alternativeLabel className={classes.stepperBorder}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className={classes.steps}>
          {currentStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
            </div>
          ) : (
            <div>{getStepContent(currentStep)}</div>
          )}
        </div>
      </div>
    );
  };

  const renderPage = () => {
    if (!currentUser.isLogin) {
      return renderDefaultPage();
    } else {
      if (loading) {
        return <Spinner />;
      } else {
        return renderInitialPage();
      }
    }
  };

  return (
    <Grid container>
      <SectionHeader title={lang.gooenHeader} />
      {renderPage()}
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  currentStep: state.gooen.currentStep,
  result: state.gooen.result,
  loading: state.gooen.loading,
});

export default connect(mapStateToProps, GooenActions)(Gooen);
