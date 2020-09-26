import React, { FC, useEffect } from "react";
import { useStyles } from "./add-declaration.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Grid, Stepper, Step, StepLabel, Paper, withWidth, isWidthUp, MobileStepper } from "@material-ui/core";
import { SectionHeader } from "components/shared";
import { PostDeclarationActions } from "views/post-declaration/store/action";
import { IPostDeclarationState } from "views/post-declaration/store/reducer";
import { PersonalInfo, MovingInfo, Goods, Approve } from "./steps";
import { ITotalObject, IReceiver, ISender } from "views/post-declaration/types";
import moment from "moment";
import { useUser } from "hooks";

export interface IAddDeclarationPage {
  decState: IPostDeclarationState;
  getDics(filter: string[]): void;
  setStep(step: number): void;
  addToTotal(data: ITotalObject): void;
  getTotalPrices(data: { docNo: string; nationality: string }): void;
  getCompanies(): void;
  emptyTotalObject(): void;
  width: any;
}

const AddDeclaration: FC<IAddDeclarationPage> = ({
  decState,
  setStep,
  addToTotal,
  getDics,
  getCompanies,
  width,
  emptyTotalObject,
  getTotalPrices,
}) => {
  const lang = useTranslator("postal-declaration");
  const classes = useStyles();
  const currentUser = useUser();

  useEffect(() => {
    getTotalPrices({ docNo: currentUser.pin, nationality: currentUser.citizenship });
  }, []);

  const setPersonalInfo = (data: any) => {
    const nationality = data?.nationality?.code;
    const dateTime = data.birthDate ? moment(data.birthDate).format("DD.MM.yyyy") : null;
    const receiver: IReceiver = { ...data, nationality, dateTime };
    addToTotal({ ...decState.totalObject, receiver });
    setStep(1);
  };

  const setMovingInfo = (data: any) => {
    const carrierCompany = data?.carrierCompany?.id;
    const country = data?.country?.code;
    console.log({ ...data, carrierCompany, country });
    const sender: ISender = { ...data, carrierCompany, country };
    addToTotal({ ...decState.totalObject, sender });
    setStep(2);
  };

  const getStep = () => {
    switch (decState.activeStep) {
      case 0:
        return <PersonalInfo onSubmit={setPersonalInfo} />;
      case 1:
        return <MovingInfo onSubmit={setMovingInfo} />;
      case 2:
        return <Goods />;
      case 3:
        return <Approve />;
      default:
        return <PersonalInfo onSubmit={setPersonalInfo} />;
    }
  };

  useEffect(() => {
    getDics(["countries"]);
    getCompanies();
    return () => {
      emptyTotalObject();
    };
  }, []);

  useEffect(() => {
    return () => {
      setStep(0);
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <SectionHeader title={lang.postalDeclatationTitle} />
      </Grid>
      <Grid item xs={12} component={Paper} className={classes.stepperBar}>
        {isWidthUp("sm", width) ? (
          <Stepper activeStep={decState.activeStep}>
            {[lang.personalInfo, lang.movingInfo, lang.goods, lang.improveDone].map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : (
          <MobileStepper
            variant="progress"
            classes={{ progress: classes.mobileStepperProgress }}
            steps={4}
            position="static"
            activeStep={decState.activeStep}
            nextButton={null}
            backButton={null}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        {decState.Countries?.length > 0 && decState.companies?.length > 0 ? getStep() : <></>}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ decState: state.postalDeclaration });
export default connect(mapStateToProps, PostDeclarationActions)(withWidth()(AddDeclaration));
