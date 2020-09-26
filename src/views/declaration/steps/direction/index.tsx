import React, { FC } from "react";
import { useStyles } from "./direction.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Field } from "redux-form";
import { Autocomplete, RadioGroup, Form } from "components/shared/redux-form";
import { Radio } from "components/shared/form";
import { ICountry } from "views/postal-services/types";
import { DeclarationActions } from "views/declaration/store/action";
import { formValueSelector } from "redux-form";
import { Paper } from "@material-ui/core";

export interface IDirectionPage {
  countries: ICountry[];
  loading: boolean;
  isActive: boolean;
  onNext(): void;
  onBack(): void;
  regime: number;
}

const Direction: FC<IDirectionPage> = ({ isActive, onBack, onNext, countries, loading, regime }) => {
  const lang = useTranslator("declaration");
  const classes = useStyles();

  const initialValues = {
    regime: "1",
    countryFrom: countries.filter((c) => c.code === "031")[0],
    countryTo: countries.filter((c) => c.code === "031")[0],
  };

  const handleFormsubmit = (data: any) => {
    //if (!infoImproved) {
    //checkPersonalInfo({ nationality: data?.country?.code, ...data });
    onNext();
    // }
  };

  return isActive ? (
    <Paper className={classes.formContainer}>
      {/* <Form
        onSubmit={handleFormsubmit}
        name="declaration/direction-step"
        className={classes.form}
        backButtonText={lang.back}
        showBackButton
        onBackClick={onBack}
        config={{ initialValues }}
      >
        <Field component={RadioGroup} name="regime" row>
          <Radio value="1" label={lang.toCountry} color="primary" />
          <Radio value="2" label={lang.fromCountry} color="primary" />
          <Radio value="3" label={lang.transit} color="primary" />
        </Field>
        <Field
          component={Autocomplete}
          options={countries || []}
          optionLabel="name"
          name="countryFrom"
          label={lang.selectToOrFromCountry}
          loading={loading}
        />
        <Field
          component={Autocomplete}
          options={countries || []}
          optionLabel="name"
          name="countryTo"
          label={lang.selectToOrFromCountry}
          loading={loading}
        />
      </Form> */}
    </Paper>
  ) : (
    <></>
  );
};

const selector = formValueSelector("declaration/direction-step");

const mapStateToProps = (state: IAppState) => ({
  countries: state.declaration.Countries,
  loading: state.declaration.loading,
  regime: selector(state, "regime"),
});

export default connect(mapStateToProps, DeclarationActions)(Direction);
