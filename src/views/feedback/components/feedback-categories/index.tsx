import React, { useEffect, FC } from "react";
import { useStyles } from "./feedback-categories.style";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { FeedbackActions } from "../../store/action";
import { IFeedbackCategories, ICategory } from "../../types";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { RadioGroup } from "components/shared/redux-form";
import { Radio, Button, Spinner, Alert } from "components/shared";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTranslator } from "localization";
import { required } from "helpers/form-validators";

const FeedbackCategories: FC<IFeedbackCategories & any> = ({
  loading,
  getCategories,
  categories,
  selectedCategory,
  invalid,
}) => {
  const classes = useStyles();
  const lang = useTranslator("feedback");

  const handleNext = () => {
    getCategories(parseInt(selectedCategory));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Grid item xs={12} component={Paper} className={classes.categories}>
      <Alert
        severity="info"
        collapsable={false}
        text={
          <>
            <Typography variant="body1" gutterBottom>
              {lang.note}
            </Typography>
            <Typography variant="body1" className={classes.gooenNoteAttention}>
              <p>{lang.feedbackNote1}</p>
              <p>{lang.feedbackNote2}</p>
            </Typography>
          </>
        }
      />
      <Typography className={classes.categoriesHeader}>{lang.categoriesHeader}</Typography>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Field component={RadioGroup} name="category" validate={required}>
            {categories?.map((category: ICategory) => (
              <Radio key={category.id} value={category.id.toString()} label={category.name} color="primary" />
            ))}
          </Field>
          <div className={classes.buttonContainer}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleNext}
              disabled={invalid}
              disableLoader={!loading}
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
  categories: state.feedback.categories,
  selectedCategory: selector(state, "category"),
});

export default connect(
  mapStateToProps,
  FeedbackActions
)(
  reduxForm({ form: "FeedbackForm", enableReinitialize: true, keepDirtyOnReinitialize: true, destroyOnUnmount: false })(
    FeedbackCategories
  )
);
