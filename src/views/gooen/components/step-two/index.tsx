import React, { FC } from "react";
import { connect } from "react-redux";
import { GooenActions } from "views/gooen/store/action";
import { IAppState } from "store/reducers";
import { formValueSelector, reduxForm, Field, FormSection, clearFields, resetSection } from "redux-form";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./step-two.style";
import { TextField, DatePicker } from "components/shared/redux-form";
import { useTranslator } from "localization";
import { WizardButtons } from "..";
import { useDispatch } from "react-redux";
import { required, length7 } from "helpers/form-validators";
import { IStepTwo } from "views/gooen/types";

const StepTwo: FC<IStepTwo & any> = ({
  selectedCountry,
  invalid,
  handleSubmit,
  initialValues,
  loading,
  clearGooenStore,
}) => {
  const classes = useStyles();
  const lang = useTranslator("gooen", ["myInfo"]);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(clearFields("gooenWizard", false, true));
    dispatch(resetSection("gooenWizard.stepTwo"));
    clearGooenStore();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormSection name="stepTwo">
        <Grid container component={Paper}>
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item xs={6}>
              <Field
                component={TextField}
                name="surname"
                label={lang.lastName}
                className={classes.inputContainer}
                validate={[required]}
                disabled={selectedCountry === "031"}
              />
              <Field
                component={TextField}
                name="name"
                label={lang.name}
                className={classes.inputContainer}
                validate={[required]}
                disabled={selectedCountry === "031"}
              />
              <Field
                component={TextField}
                name="fatherName"
                label={lang.patronymic}
                className={classes.inputContainer}
                validate={selectedCountry === "031" ? [required] : []}
                disabled={selectedCountry === "031"}
              />
              <Field
                component={DatePicker}
                name="birthDate"
                label={lang.birthDate}
                className={classes.inputContainer}
                validate={[required]}
                disabled={selectedCountry === "031"}
              />
              <Field
                component={TextField}
                name="pin"
                label={selectedCountry === "031" ? lang.pinCode : lang.foreignPassportNum}
                className={classes.inputContainer}
                validate={selectedCountry === "031" ? [required, length7] : [required]}
                disabled={selectedCountry === "031" || initialValues?.stepTwo?.pin?.length > 0}
              />
            </Grid>
            <Grid item xs={6}>
              {selectedCountry === "031" && (
                <Field
                  component={TextField}
                  name="serialNumber"
                  label={lang.serialNumber}
                  className={classes.inputContainer}
                  validate={[required]}
                  disabled={true}
                />
              )}
              <Field
                component={TextField}
                name="issuiAuthority"
                label={lang.issuiAuthority}
                className={classes.inputContainer}
                validate={selectedCountry === "031" ? [required] : []}
                disabled={selectedCountry === "031"}
              />
              <Field
                component={DatePicker}
                name="issuingDate"
                label={lang.issuingDate}
                className={classes.inputContainer}
                validate={selectedCountry === "031" ? [required] : []}
                disabled={selectedCountry === "031"}
              />
              <Field
                component={DatePicker}
                name="expiryDate"
                label={lang.expiryDate}
                className={classes.inputContainer}
                validate={selectedCountry === "031" ? [required] : []}
                disabled={selectedCountry === "031"}
              />
            </Grid>
          </Grid>
        </Grid>
        <WizardButtons
          backDisabled={false}
          handleBack={handleBack}
          nextDisabled={invalid || loading}
          nextButtonDisbaleLoader={!loading}
        />
      </FormSection>
    </form>
  );
};

const formValues = formValueSelector("gooenWizard");

const initialValues = {
  stepTwo: {
    birthDate: null,
    issuingDate: null,
    expiryDate: null,
  },
};

const mapStateToProps = (state: IAppState) => ({
  selectedCountry: formValues(state, "stepOne.country.code"),
  initialValues: {
    stepTwo: state.gooen.person ? state.gooen.person : (undefined as any),
  },
  loading: state.gooen.loading,
});

export default connect(
  mapStateToProps,
  GooenActions
)(
  reduxForm({
    form: "gooenWizard",
    initialValues,
    keepValues: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    destroyOnUnmount: true,
    updateUnregisteredFields: true,
  })(StepTwo)
);
