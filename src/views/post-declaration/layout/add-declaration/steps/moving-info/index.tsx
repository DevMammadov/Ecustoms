import React, { FC, useEffect } from "react";
import { useStyles } from "./moving-info.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { PostDeclarationActions } from "views/post-declaration/store/action";
import { Autocomplete, TextField } from "components/shared/redux-form";
import { Field, reduxForm } from "redux-form";
import { ButtonGroup, Button, FormPaper, Spinner, ReloadAlert } from "components/shared";
import { ICountry } from "views/postal-services/types";
import { ICompany } from "views/post-declaration/types";
import { required } from "helpers/form-validators";

export interface IMovingInfoPage {
  loading: boolean;
  countries: ICountry[];
  companies: ICompany[];
  setStep(step: number): void;
  handleSubmit: any;
}

const MovingInfo: FC<IMovingInfoPage> = ({ loading, countries, handleSubmit, companies, setStep }) => {
  const lang = useTranslator();
  const classes = useStyles();

  useEffect(() => {}, []);

  return companies.length > 0 ? (
    <FormPaper>
      <ReloadAlert />
      <form onSubmit={handleSubmit}>
        <Field validate={required} component={TextField} name="trackingId" label={lang.baggageTrackingId} />
        <Field
          component={Autocomplete}
          options={companies}
          optionLabel="name"
          name="carrierCompany"
          label={lang.moverCompanyName}
          loading={loading}
          validate={required}
        />
        <Field
          component={Autocomplete}
          options={countries}
          optionLabel="name"
          name="country"
          label={lang.senderCountry}
          loading={loading}
          validate={required}
        />

        <Field component={TextField} validate={required} name="name" label={lang.sellerAddress} />

        <ButtonGroup>
          <Button onClick={() => setStep(0)} variant="outlined" color="primary">
            {lang.back}
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {lang.forward}
          </Button>
        </ButtonGroup>
      </form>
    </FormPaper>
  ) : (
    <Spinner />
  );
};

const _initialValues = (state: IAppState) => {
  const crCompany = state.postalDeclaration.totalObject.sender.carrierCompany;
  const country = state.postalDeclaration.totalObject.sender.country;
  return {
    carrierCompany: crCompany ? state.postalDeclaration.companies.filter((c) => c.voen === crCompany)[0] : null,
    country: country ? state.postalDeclaration.Countries.filter((c) => c.code === country)[0] : null,
    trackingId: state.postalDeclaration.totalObject.sender?.trackingId || "",
    name: state.postalDeclaration.totalObject.sender?.name || "",
  };
};

const mapStateToProps = (state: IAppState) => ({
  loading: state.postalDeclaration.loading,
  countries: state.postalDeclaration.Countries,
  companies: state.postalDeclaration.companies,
  initialValues: _initialValues(state),
});

export default connect(
  mapStateToProps,
  PostDeclarationActions
  //@ts-ignore
)(reduxForm({ form: "postal-declaration/moving-info" })(MovingInfo));
