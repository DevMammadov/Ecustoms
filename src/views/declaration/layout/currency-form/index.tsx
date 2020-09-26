import React, { FC, useEffect } from "react";
import { useStyles } from "./currency-form.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Paper, Grid } from "@material-ui/core";
import { Form } from "components/shared/redux-form";
import { Field } from "redux-form";
import { TextField } from "components/shared/redux-form";
import { Button } from "components/shared";
import { DeclarationActions } from "views/declaration/store/action";
import { Manat } from "components/shared";
import { Autocomplete } from "components/shared/redux-form";
import { ICurrency } from "views/declaration/types";
import { required } from "helpers/form-validators";

export interface ICurrencyFormPage {
  onSubmit(data: any): void;
  CurrencyList: ICurrency[];
  getDics(filter: string[]): void;
}

const CurrencyForm: FC<ICurrencyFormPage> = ({ onSubmit, CurrencyList, getDics }) => {
  const lang = useTranslator();
  const classes = useStyles();

  useEffect(() => {
    getDics(["currencyList"]);
  }, []);

  const initialValues = {};

  return (
    <Grid container component={Paper} className={classes.container}>
      <Grid item xs={12} className={classes.titleContainer}>
        <div>{lang.currency}</div>
      </Grid>
      <Grid item xs={12} className={classes.formContainer}>
        <Form
          onSubmit={onSubmit}
          name="declaration/step-one"
          className={classes.form}
          backButtonText={lang.back}
          showBackButton
          config={{ initialValues }}
        >
          <Grid item xs={12}>
            <Field component={TextField} iconText="$" name="usd" label={lang.usd} />
            <Field component={TextField} iconText="₽" name="rubl" label={lang.russianRubl} />
          </Grid>
          <Grid item xs={12}>
            <Field component={TextField} iconText="€" name="euro" label={lang.euro} />
            <Field
              component={TextField}
              validate={[required]}
              iconText={<Manat className={classes.manat} />}
              name="manat"
              label={lang.azn}
            />
          </Grid>
          <Grid item xs={6}>
            {lang.ifYouHaveAnotherCurrencyAddThem}
          </Grid>
          <Grid item xs={6} className={classes.amuntContainer}>
            <Field
              component={Autocomplete}
              options={CurrencyList}
              optionLabel="name"
              name="currency"
              label={lang.selectCurrency}
              validate={[required]}
            />
            <Field className={classes.currencyInput} component={TextField} name="amount" label={lang.amount} />
            <Button variant="contained" color="primary">
              {lang.add}
            </Button>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ CurrencyList: state.declaration.CurrencyList });
//@ts-ignore
export default connect(mapStateToProps, DeclarationActions)(CurrencyForm);
