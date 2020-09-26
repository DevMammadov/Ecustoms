import React, { FC } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { useStyles } from "./info-form.style";
import { TextField } from "components/shared/redux-form";
import { useTranslator } from "localization";
import clsx from "clsx";
import { IAppState } from "store/reducers";
import { declarationSearchActions } from "views/declaration-info/store/actions";
import { connect } from "react-redux";

export interface IInfoForm {
  loading: boolean;
  className?: any;
}

const InfoForm: FC<IInfoForm & any> = ({ className }) => {
  const classes = useStyles();
  const lang = useTranslator("declarationInfo");
  return (
    <form className={clsx(className, classes.form)}>
      <Field name="importVoen" component={TextField} label={lang.voen} disabled />
      <Field name="declarationType" component={TextField} label={lang.type} disabled />
      <Field name="releaseDate" component={TextField} label={lang.releaseDate} disabled />
      <Field name="importName" component={TextField} label={lang.importer} disabled />
    </form>
  );
};

const mapStateToProps = (state: IAppState) => ({
  initialValues: state.declarationInfo.searchData ? state.declarationInfo.searchData : (undefined as any),
  loading: state.declarationInfo.loading,
});

export default connect(
  mapStateToProps,
  declarationSearchActions
)(
  reduxForm({
    form: "infoForm",
  })(InfoForm)
);
