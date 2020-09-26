import React, { FC } from "react";
import { Field, reduxForm } from "redux-form";
import { useStyles } from "./search-form.style";
import { Button } from "components/shared";
import { useTranslator } from "localization";
import { TextField } from "components/shared/redux-form/text-field";

const SearchForm: FC<any> = ({ handleSubmit }) => {
  const classes = useStyles();
  const lang = useTranslator("declarationInfo");

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Field name="requestNumber" component={TextField} type="number" label={lang.requestNumberTitle} />

      <Field name="voen" component={TextField} type="text" label={lang.voenTitle} />
      <Button variant="contained" type="submit" color="primary" className={classes.button}>
        {lang.search}
      </Button>
    </form>
  );
};

export default reduxForm({ form: "searchForm" })(SearchForm);
