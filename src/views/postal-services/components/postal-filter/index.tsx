import React, { FC } from "react";
import { useStyles } from "./postal-filter.style";
import { useTranslator } from "localization";
import { Field, reduxForm } from "redux-form";
import { TextField, DatePicker, Autocomplete } from "components/shared/redux-form";
import { Button } from "components/shared";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { PostalServicesActions } from "../../store/action";

export interface IPostalFilter {
  handleSubmit: any;
  filter: IPostalFilter;
}

const PostalFilter: FC<IPostalFilter & any> = ({ handleSubmit, filter }) => {
  const lang = useTranslator("postal-services");
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.inputGroup}>
          <Field component={DatePicker} name="startDate" label={lang.date} className={classes.input} />
          <Field component={DatePicker} name="endDate" label={lang.date} />
        </div>

        <Field component={TextField} name="GOODS_ID" label={lang.goodsCode} />

        <Field component={TextField} name="NAME_OF_GOODS" label={lang.goodsName} />

        <Field component={TextField} name="IDXAL_NAME" label={lang.importer} />

        <Field
          component={Autocomplete}
          name="GOODS_TRAFFIC_FR"
          options={[
            { name: "Don", age: 18 },
            { name: "Jue", age: 21 },
            { name: "work", age: 22 },
            { name: "Franklin", age: 23 },
            { name: "Pele", age: 24 },
            { name: "James", age: 25 },
          ]}
          optionLabel="name"
          label={lang.senderCountry}
        />

        <Field component={TextField} name="TR_NUMBER" label={lang.importerVoenGoen} />

        <div className={classes.formFooter}>
          <Button type="submit" variant="contained" color="primary">
            {lang.search}
          </Button>
        </div>
      </form>
    </div>
  );
};

const initialValues = {
  startDate: new Date(),
  endDate: new Date(),
  goodS_ID: null,
  namE_OF_GOODS: null,
  idxaL_NAME: null,
  goodS_TRAFFIC_FR: null,
  tR_NUMBER: null,
};

const mapStateToProps = (state: IAppState) => ({ filter: state.postalServices.filter });

export default connect(
  mapStateToProps,
  PostalServicesActions
)(reduxForm({ form: "postalFilterForm", initialValues, destroyOnUnmount: false })(PostalFilter));
