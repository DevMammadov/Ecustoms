import React, { FC } from "react";
import { useStyles } from "./personal-info";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Field } from "redux-form";
import { TextField, Form } from "components/shared/redux-form";
import { Paper } from "@material-ui/core";
import { InputGroup } from "components/shared";

export interface IPersonalInfo {
  isActive: boolean;
  onNext(): void;
  onBack(): void;
}

const PersonalInfo: FC<IPersonalInfo> = ({ isActive, onBack, onNext }) => {
  const lang = useTranslator("declaration");
  const classes = useStyles();

  const initialValues = {};

  const handleFormsubmit = () => {
    onNext();
  };

  return isActive ? (
    <Paper className={classes.formContainer}>
      <Form
        onSubmit={handleFormsubmit}
        name="declaration/step-one"
        className={classes.form}
        backButtonText={lang.back}
        showBackButton
        onBackClick={onBack}
        config={{ initialValues }}
      >
        <Field component={TextField} name="surName" label={lang.surname} />
        <InputGroup>
          <Field component={TextField} name="name" label={lang.name} />
          <Field component={TextField} name="patronymic" label={lang.patronymic} />
        </InputGroup>
        <Field component={TextField} name="phoneNumber" label={lang.contactNumber} />
      </Form>
    </Paper>
  ) : (
    <></>
  );
};

const mapStateToProps = (state: IAppState) => ({});

export default connect(mapStateToProps, null)(PersonalInfo);
