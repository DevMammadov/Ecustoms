import React, { FC } from "react";
import { useStyles } from "./declaration.style.js";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IDeclarationPage } from "./types";
import { DeclarationActions } from "./store/action";
import { IAppState } from "store/reducers";
import { Grid, Paper, Stepper, StepLabel, Step } from "@material-ui/core";
import { SectionHeader } from "components/shared/";
import { useSteps } from "./helper";
import { StartStep, PersonalInfo, Direction, CurrencyInfo } from "./steps";

const Declaration: FC<IDeclarationPage> = ({ setStep, declaration }) => {
  const lang = useTranslator("declaration");
  const classes = useStyles();
  const steps = useSteps();

  return (
    <Grid container>
      <SectionHeader title={lang.declarationTitle} />
      <Grid item xs={12} component={Paper} className={classes.stepperBar}>
        <Stepper alternativeLabel activeStep={declaration.activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={12}>
        <StartStep onNext={() => setStep(1)} onBack={() => setStep(0)} isActive={declaration.activeStep === 0} />
        <PersonalInfo onNext={() => setStep(2)} onBack={() => setStep(0)} isActive={declaration.activeStep === 1} />
        <Direction onNext={() => setStep(3)} onBack={() => setStep(1)} isActive={declaration.activeStep === 2} />
        <CurrencyInfo onNext={() => setStep(3)} onBack={() => setStep(2)} isActive={declaration.activeStep === 3} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ declaration: state.declaration });
export default connect(mapStateToProps, DeclarationActions)(Declaration);
