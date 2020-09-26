import React, { FC, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./step-one.style";
import { Alert } from "components/shared";
import { useTranslator } from "localization";
import { Field, formValueSelector, reduxForm, FormSection } from "redux-form";
import { Autocomplete, TextField } from "components/shared/redux-form";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { GooenActions } from "views/gooen/store/action";
import { required, length7, minLength7 } from "helpers/form-validators";
import { WizardButtons } from "..";
import { IStepOne } from "views/gooen/types";

const StepOne: FC<IStepOne & any> = ({
  countries,
  getCountries,
  selectedCountry,
  handleSubmit,
  invalid,
  countriesLoading,
  loading,
}) => {
  const classes = useStyles();
  const lang = useTranslator("gooen", ["myInfo"]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormSection name="stepOne">
        <Grid container component={Paper}>
          <Grid item xs={12} className={classes.gooenHeader}>
            <Alert
              severity="info"
              collapsable={false}
              text={
                <>
                  <Typography variant="body2" gutterBottom>
                    {lang.gooenNote}
                  </Typography>
                  <Typography variant="body1" className={classes.gooenNoteAttention}>
                    {lang.gooenNoteAttention}
                  </Typography>
                </>
              }
            />
          </Grid>
          <Grid container spacing={3} className={classes.gridContainer} justify="center">
            <Grid item xs={6}>
              <Field
                component={Autocomplete}
                options={countries || []}
                optionLabel="name"
                name="country"
                label={lang.citizenship}
                loading={countriesLoading}
                className={classes.field}
                validate={[required]}
              />
              <Field
                component={TextField}
                name="pin"
                label={selectedCountry?.code === "031" ? lang.pinCode : lang.foreignPassportNum}
                validate={selectedCountry?.code === "031" ? [required, length7] : [required, minLength7]}
              />
            </Grid>
          </Grid>
        </Grid>
        <WizardButtons backDisabled={true} nextDisabled={invalid || loading} nextButtonDisbaleLoader={!loading} />
      </FormSection>
    </form>
  );
};

const selector = formValueSelector("gooenWizard");

const mapStateToProps = (state: IAppState) => ({
  countries: state.gooen.countries.data,
  selectedCountry: selector(state, "stepOne.country"),
  countriesLoading: state.gooen.countries.loading,
  loading: state.gooen.loading,
  initialValues: {
    stepOne: {
      country: state.gooen.countries.data.filter((c) => c.code === "031")[0],
    },
  },
});

export default connect(
  mapStateToProps,
  GooenActions
)(
  reduxForm({
    form: "gooenWizard",
    keepValues: true,
    enableReinitialize: false,
    keepDirtyOnReinitialize: true,
    destroyOnUnmount: false,
  })(StepOne)
);
