import React, { FC, Fragment } from "react";
import { useStyles } from "./filter-bar-form.style";
import { useTranslator } from "localization";
import { IModalData } from "../../types";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "components/shared/redux-form";
import { Button } from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { renderField } from "../../helpers";
import { withWidth, isWidthUp } from "@material-ui/core";
import clsx from "clsx";

export interface IFilterBarFormPage {
  modalData: IModalData[];
  buttonDisabled: boolean;
  formName: string;
  onSubmit: any;
}

export const FilterBarForm: FC<IFilterBarFormPage & any> = ({ formName, ...rest }) => {
  const lang = useTranslator();
  const classes = useStyles();

  const Form: FC<any> = ({ handleSubmit, buttonDisabled, modalData, formValues, width }) => {
    return (
      <form onSubmit={handleSubmit} className={classes.formConatiner}>
        {isWidthUp("sm", width) && (
          <>
            <Field component={DatePicker} name="startDate" label={lang.from} className={classes.datePicker} />
            <Field component={DatePicker} name="endDate" label={lang.to} className={classes.datePicker} />
            {modalData.map(
              (data: IModalData, i: number) =>
                data.showAtBar && (
                  <Fragment key={i}> {renderField(data, formValues && formValues[data.name])} </Fragment>
                )
            )}
          </>
        )}

        <Button
          disabled={buttonDisabled}
          className={clsx(classes.searchButton, classes.mobileButton)}
          variant="outlined"
          color="primary"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </form>
    );
  };

  const FormWrapped = withWidth()(reduxForm({ form: formName, destroyOnUnmount: false })(Form));
  return <FormWrapped {...rest} />;
};
