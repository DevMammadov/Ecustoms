import React, { FC } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Field, reduxForm, formValueSelector, reset } from "redux-form";
import { DatePicker, Select } from "components/shared/redux-form";
import { useStyles } from "./filter-form.style";
import { IFilter } from "views/notifications/types";
import { IAppState } from "store/reducers";
import { Button } from "components/shared/form";
import { notifyActions } from "../../store/action";

interface IFilterForm {
  handleSubmit: any;
  getNotify(data: { offset: number; limit?: number }): void;
  toogleFiltering(isFiltering: boolean): void;
}

const FilterForm: FC<IFilterForm & any> = ({ handleSubmit, getNotify, toogleFiltering }) => {
  const classes = useStyles();
  const state = useSelector((state: IAppState) => state);
  const formValues = formValueSelector("notifyFilter");
  const startDate = formValues(state, "startDate");
  const endDate = formValues(state, "endDate");
  const dispatch = useDispatch();

  const handleClear = () => {
    toogleFiltering(false);
    dispatch(reset("notifyFilter"));
    getNotify({ offset: 0, limit: 10 });
  };

  return (
    <form className={classes.filterContainer} onSubmit={handleSubmit}>
      <Field
        className={classes.datePicker}
        maxDate={endDate}
        disableFuture={true}
        component={DatePicker}
        label="dan"
        name="startDate"
      />
      <Field
        className={classes.datePicker}
        minDate={startDate}
        maxDate={new Date()}
        label="dek"
        component={DatePicker}
        name="endDate"
      />
      <Field
        selected={0}
        data={[
          { id: 0, value: "hamisi" },
          ...state.notify.filters?.map((n: IFilter) => ({ id: n?.idn, value: n?.name })),
        ]}
        component={Select}
        className={classes.select}
        name="infoType"
        label="kateqoriyalar"
      />
      <div className={classes.buttonGroup}>
        <Button
          disabled={state.notify.loading}
          className={classes.searchButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Axtar
        </Button>
        <Button
          onClick={handleClear}
          disabled={!state.notify.isFiltered}
          className={classes.clearButton}
          variant="outlined"
          color="primary"
          disableLoader
        >
          Temizle
        </Button>
      </div>
    </form>
  );
};

const initialValues = {
  startDate: new Date(),
  endDate: new Date(),
  infoType: 0,
};

export default connect(
  null,
  notifyActions
)(reduxForm({ form: "notifyFilter", initialValues, enableReinitialize: false })(FilterForm));
