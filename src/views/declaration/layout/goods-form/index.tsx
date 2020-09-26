import { Grid } from "@material-ui/core";
import { Radio } from "components/shared";
import { Autocomplete, Checkbox, RadioGroup, TextField, DatePicker } from "components/shared/redux-form";
import { useTranslator } from "localization";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { IAppState } from "store/reducers";
import { Form } from "components/shared/redux-form";
import { DeclarationActions } from "views/declaration/store/action";
import { ICurrency } from "views/declaration/types";
import { useStyles } from "./goods.style";
import { LayoutPaper } from "views/declaration/components";

export interface IGoodsFormPage {
  onSubmit(data: any): void;
  GoodsCategory: ICurrency[];
  getDics(filter: string[]): void;
}

const GoodsForm: FC<IGoodsFormPage> = ({ onSubmit, GoodsCategory, getDics }) => {
  const lang = useTranslator("declaration", ["xifDocs"]);
  const classes = useStyles();

  useEffect(() => {
    getDics(["GoodsCategory"]);
  }, []);

  const initialValues = {};

  return (
    <Grid container component={LayoutPaper} className={classes.container}>
      <Grid item xs={12} className={classes.titleContainer}>
        <div>{lang.currency}</div>
      </Grid>
      <Grid item xs={12}>
        <Form
          onSubmit={onSubmit}
          name="declaration/step-one"
          className={classes.form}
          backButtonText={lang.back}
          showBackButton
          config={{ initialValues }}
        >
          <Grid container className={classes.formContainer}>
            <Grid item xs={12} md={6}>
              <Field
                component={Autocomplete}
                options={GoodsCategory || []}
                optionLabel="name"
                name="currency"
                label={lang.selectCategoryOfGoods}
              />
              <Field component={TextField} multiline rows={4} name="euro" label={lang.goodsDescription} />
              <div className={classes.inputGroup}>
                <Field component={TextField} showQuestionMark name="euro" label={lang.goodsCostUsd} />
                <Field component={TextField} showQuestionMark name="euro" label={lang.quantity} />
                <Field component={TextField} showQuestionMark name="euro" label={lang.UnitOfMeasurement} />
              </div>
              <div> {lang.moverCompanyOrLuggage} </div>
              <Field component={RadioGroup} name="radio" row>
                <Radio value="1" label={lang.yes} color="primary" />
                <Radio value="0" label={lang.no} color="primary" />
              </Field>
              <Field component={Checkbox} name="" label={lang.permissionDocRequired} color="primary" />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.inputGroup}>
                <Field component={TextField} showQuestionMark name="asd" label={lang.docSenderCompany} />
                <Field component={TextField} showQuestionMark name="asd" label={lang.documentNumber} />
                <Field component={DatePicker} showQuestionMark name="asd" label={lang.givingDate} />
              </div>
              <div className={classes.inputGroup}>
                <Field component={Checkbox} name="" label={lang.dutyFreeGoods} color="primary" />
                <Field component={Checkbox} name="" label={lang.temporaryGoods} color="primary" />
              </div>
              <Field component={TextField} showQuestionMark name="euro" label={lang.returnDateOfGoods} />
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ GoodsCategory: state.declaration.GoodsCategory });
export default connect(mapStateToProps, DeclarationActions)(GoodsForm);
