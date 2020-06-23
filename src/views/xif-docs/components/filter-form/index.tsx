import React, { FC } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Field, reduxForm, formValueSelector, reset } from "redux-form";
import { DatePicker, Select } from "components/shared/redux-form";
import { useStyles } from "./filter-form.style";
import { IFilter } from "views/notifications/types";
import { IAppState } from "store/reducers";
import { Button } from "components/shared/form";
import { XifDocsActions } from "../../store/action";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslator } from "localization";
import { faUser } from "@fortawesome/pro-solid-svg-icons";
import { links } from "routes";

interface IFilterForm {
  handleSubmit: any;
  getXifDoc(data: { offset: number; limit?: number }): void;
  toogleFiltering(isFiltering: boolean): void;
}

const XifFilterForm: FC<IFilterForm & any> = ({ handleSubmit, getXifDoc, toogleFiltering }) => {
  const classes = useStyles();
  const state = useSelector((state: IAppState) => state);
  const formValues = formValueSelector("xifDocFilter");
  const startDate = formValues(state, "startDate");
  const endDate = formValues(state, "endDate");
  const dispatch = useDispatch();
  const history = useHistory();
  const lang = useTranslator("xifDocs");

  const handleClear = () => {
    toogleFiltering(false);
    dispatch(reset("xifDocFilter"));
    getXifDoc({ offset: 0, limit: 10 });
  };

  return (
    <div className={classes.xifFilterFormConatiner}>
      <Button
        variant="contained"
        className={classes.addNewButton}
        onClick={() => history.push(links.XifDoc.add)}
        type="submit"
        color="primary"
      >
        <FontAwesomeIcon icon={faUser} className={classes.titleButtonIcon} />
        {lang.addXifDoc}
      </Button>
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
            ...state.xifDocs.xifDocTypes?.map((n: IFilter) => ({ id: n?.idn, value: n?.name })),
          ]}
          component={Select}
          className={classes.select}
          name="docType"
          label="kateqoriyalar"
        />
        <div className={classes.buttonGroup}>
          <Button
            disabled={state.xifDocs.loading}
            className={classes.searchButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            {lang.search}
          </Button>
          <Button
            onClick={handleClear}
            disabled={!state.xifDocs.isFiltered}
            className={classes.clearButton}
            variant="outlined"
            color="primary"
            disableLoader
          >
            {lang.clear}
          </Button>
        </div>
      </form>
    </div>
  );
};

const initialValues = {
  startDate: new Date(),
  endDate: new Date(),
  docType: 0,
};

export default connect(
  null,
  XifDocsActions
)(reduxForm({ form: "xifDocFilter", initialValues, enableReinitialize: false })(XifFilterForm));
