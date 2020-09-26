import React, { FC } from "react";
import { Grid, Paper, FormLabel } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { RadioGroup, TextField } from "components/shared/redux-form";
import { useStyles } from "./add-feedback.style";
import { Radio, Button } from "components/shared";
import { useTranslator } from "localization";
import { required, email } from "helpers/form-validators";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { FeedbackActions } from "views/feedback/store/action";
import { IAddFeedback } from "views/feedback/types";

const AddFeedback: FC<IAddFeedback & any> = ({ invalid, handleSubmit, setCurrentStep }) => {
  const classes = useStyles();
  const lang = useTranslator("feedback");

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <Grid item xs={12} component={Paper} className={classes.addFeedback}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.field}>
          <FormLabel component="legend">{lang.attitude}</FormLabel>
          <Field component={RadioGroup} name="quality" validate={required} row>
            <Radio value="1" label={lang.excellent} color="primary" />
            <Radio value="2" label={lang.mustImproved} color="primary" />
            <Radio value="3" label={lang.bad} color="primary" />
          </Field>
        </div>
        <div className={classes.field}>
          <Field component={TextField} name="feedback" label={lang.feedback} validate={required} multiline rows={7} />
        </div>
        <div className={classes.field}>
          <Field component={TextField} name="email" label={lang.email} validate={[required, email]} />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            type="button"
            onClick={handleBack}
            className={classes.button}
            disableLoader={true}
            color="primary"
            variant="outlined"
          >
            {lang.back}
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={invalid}
            disableLoader={true}
          >
            {lang.send}
          </Button>
        </div>
      </form>
    </Grid>
  );
};

export default connect(
  null,
  FeedbackActions
)(reduxForm({ form: "FeedbackForm", enableReinitialize: true, keepDirtyOnReinitialize: false })(AddFeedback));
