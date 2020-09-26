import React, { FC } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { FeedbackActions } from "./store/action";
import { IFeedbackPage } from "./types";
import { FeedbackCategories, FeedbackSubCategories, AddFeedback } from "./components";
import { Grid } from "@material-ui/core";
import { SectionHeader } from "components/shared";
import { useTranslator } from "localization";
import { useUser } from "hooks";

const Feedback: FC<IFeedbackPage> = ({ currentStep, submitFeedback }) => {
  const lang = useTranslator();
  const currentUser = useUser();

  const handleFeedbackSubmit = (data: any) => {
    let requestData = {
      categoryId: data.category,
      subCategoryId: data.subCategory,
      quality: data.quality,
      feedback: data.feedback,
      email: data.email,
      userPinCode: currentUser?.isLogin ? currentUser.pin : null,
    };

    submitFeedback(requestData);
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <FeedbackCategories />;
      case 1:
        return <FeedbackSubCategories />;
      case 2:
        return <AddFeedback onSubmit={handleFeedbackSubmit} />;
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Grid container>
      <SectionHeader title={lang.feedbackHeader} />
      {getStepContent(currentStep)}
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  currentStep: state.feedback.currentStep,
});

export default connect(mapStateToProps, FeedbackActions)(Feedback);
