import React, { FC, useEffect } from "react";
import { useStyles } from "./start.style";
import { useTranslator } from "localization";
import { Field } from "redux-form";
import { Autocomplete, TextField, DatePicker, Form } from "components/shared/redux-form";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { DeclarationActions } from "../../store/action";
import { ICountry } from "views/postal-services/types";
import { IPersonalInfoPayload } from "views/declaration/types";
import { Paper } from "@material-ui/core";
import { InputGroup } from "components/shared";

export interface IStartStepPage {
  isActive: boolean;
  countries: ICountry[];
  getDics(filter: string[]): void;
  loading: boolean;
  checkPersonalInfo(data: IPersonalInfoPayload): void;
  infoImproved: boolean;
  onNext(): void;
  onBack(): void;
}

const StartStep: FC<IStartStepPage> = ({
  isActive,
  countries,
  getDics,
  loading,
  checkPersonalInfo,
  infoImproved,
  onBack,
  onNext,
}) => {
  const lang = useTranslator("declaration", ["gooen"]);
  const classes = useStyles();

  useEffect(() => {
    getDics(["countries"]);
  }, [getDics]);

  const initialValues = {
    birthDate: new Date(),
    documentNumber: "",
    country: countries.filter((c) => c.code === "031")[0],
  };

  const handleFormsubmit = (data: any) => {
    //if (!infoImproved) {
    checkPersonalInfo({ nationality: data?.country?.code, ...data });
    onNext();
    // }
  };

  return isActive ? (
    <Paper className={classes.formContainer}>
      <Form
        onSubmit={handleFormsubmit}
        name="declaration/start-step"
        className={classes.form}
        backButtonText={lang.back}
        showBackButton
        onBackClick={onBack}
        config={{ initialValues }}
      >
        <Field
          component={Autocomplete}
          options={countries || []}
          optionLabel="name"
          name="country"
          label={lang.citizenship}
          loading={loading}
        />
        <InputGroup>
          <Field component={TextField} name="documentNumber" label={lang.passportOrPin} />
          <Field component={DatePicker} name="birthDate" label={lang.birthDate} />
        </InputGroup>
      </Form>
    </Paper>
  ) : (
    <></>
  );
};

const mapStateToProps = (state: IAppState) => ({
  countries: state.declaration.Countries,
  loading: state.declaration.loading,
  infoImproved: state.declaration.infoImproved,
});

export default connect(mapStateToProps, DeclarationActions)(StartStep);
