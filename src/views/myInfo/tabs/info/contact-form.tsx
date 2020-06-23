import React from "react";
import { useStyles } from "./info.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Field, reduxForm } from "redux-form";
import { TextField } from "components/shared/redux-form";
import { Button } from "components/shared";
import { email } from "helpers/form-validators";

const ContactForm = ({ handleSubmit, submitting }: any) => {
  const lang = useTranslator();
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.contactForm}>
      <Field component={TextField} name="email" validate={email} label={lang.email} />
      <Field component={TextField} name="phone" label={lang.contactNumber} />
      <Field component={TextField} name="address" label={lang.currentAddress} />
      <Button disabled={submitting} variant="contained" type="submit" color="primary">
        {lang.save}
      </Button>
    </form>
  );
};

const mapStateToProps = (state: IAppState) => ({
  initialValues: {
    email: state.myInfo?.info?.email,
    phone: state.myInfo?.info?.phone,
    address: state.myInfo?.info?.address,
  },
});
export default connect(
  mapStateToProps,
  null
)(reduxForm({ form: "infoContact", enableReinitialize: true, keepDirtyOnReinitialize: true })(ContactForm));
