import React, { FC, useEffect } from "react";
import { useStyles } from "./personal-info.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { TextField, Autocomplete } from "components/shared/redux-form";
import { Field, reduxForm } from "redux-form";
import { PostDeclarationActions } from "views/post-declaration/store/action";
import { InputGroup, Button, FormPaper, ButtonGroup, Spinner, ReloadAlert, BackButton } from "components/shared";
import { ICountry } from "views/postal-services/types";
import { decodedAsanToken } from "helpers/storage";

export interface IPersonalInfoPage {
  loading: boolean;
  countries: ICountry[];
  handleSubmit: any;
}

const PersonalInfo: FC<IPersonalInfoPage> = ({ loading, countries, handleSubmit }) => {
  const lang = useTranslator();
  const classes = useStyles();

  return (
    <FormPaper className={classes.formPaper}>
      <BackButton />
      <ReloadAlert />
      <form onSubmit={handleSubmit}>
        <Field
          component={Autocomplete}
          options={countries}
          optionLabel="name"
          name="nationality"
          label={lang.citizenship}
          loading={loading}
          disabled
        />
        <InputGroup>
          <Field component={TextField} disabled name="docNo" label={lang.passportOrPin} />
          {/* <Field component={DatePicker} name="birthDate" label={lang.birthDate} /> */}
        </InputGroup>
        <Field component={TextField} disabled name="surname" label={lang.surname} />
        <Field component={TextField} disabled name="name" label={lang.name} />
        <Field component={TextField} disabled name="fatherName" label={lang.patronymic} />
        <Field component={TextField} name="phoneNumber" label={lang.phone} />
        <ButtonGroup>
          <Button type="submit" variant="contained" color="primary">
            {lang.forward}
          </Button>
        </ButtonGroup>
      </form>
    </FormPaper>
  );
};

const mapStateToProps = (state: IAppState) => {
  return {
    loading: state.postalDeclaration.loading,
    countries: state.postalDeclaration.Countries,
    initialValues: {
      birthDate: new Date(),
      nationality: state.postalDeclaration.Countries.filter((c) => c.code === "031")[0],
      name: decodedAsanToken()?.name,
      surname: decodedAsanToken()?.surname,
      fatherName: decodedAsanToken()?.fatherName,
      docNo: decodedAsanToken()?.pin,
      phoneNumber: state.postalDeclaration.totalObject.receiver?.phoneNumber,
    },
  };
};

export default connect(
  mapStateToProps,
  PostDeclarationActions
  //@ts-ignore
)(reduxForm({ form: "postal-declaration/personal-info" })(PersonalInfo));
