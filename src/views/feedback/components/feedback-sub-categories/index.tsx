import React, { FC } from "react";
import { useStyles } from "./feedback-sub-categories.style";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { FeedbackActions } from "../../store/action";
import { IFeedbackSubCategories, ICategory } from "../../types";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { RadioGroup } from "components/shared/redux-form";
import { Radio, Button, Spinner } from "components/shared";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTranslator } from "localization";
import { required } from "helpers/form-validators";

const FeedbackSubCategories: FC<IFeedbackSubCategories & any> = ({
  loading,
  subCategories,
  setCurrentStep,
  invalid,
}) => {
  const classes = useStyles();
  const lang = useTranslator("feedback");

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(0);
  };

  return (
    <Grid item xs={12} component={Paper} className={classes.subCategories}>
      <Typography className={classes.subCategoriesHeader}>{lang.categoriesHeader}</Typography>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Field component={RadioGroup} name="subCategory" validate={required}>
            {subCategories?.map((subCategory: ICategory) => {
              return (
                <Radio
                  key={subCategory.id}
                  value={subCategory.id.toString()}
                  label={subCategory.name}
                  color="primary"
                />
              );
            })}
          </Field>
          <div className={classes.buttonContainer}>
            <Button
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
              onClick={handleNext}
              disabled={invalid}
              disableLoader={true}
            >
              {lang.next}
            </Button>
          </div>
        </>
      )}
    </Grid>
  );
};

const selector = formValueSelector("FeedbackForm");

const mapStateToProps = (state: IAppState) => ({
  loading: state.feedback.loading,
  subCategories: state.feedback.subCategories,
  selectedSubCategory: selector(state, "subCategory"),
});

export default connect(
  mapStateToProps,
  FeedbackActions
)(
  reduxForm({ form: "FeedbackForm", enableReinitialize: true, keepDirtyOnReinitialize: true, destroyOnUnmount: false })(
    FeedbackSubCategories
  )
);
