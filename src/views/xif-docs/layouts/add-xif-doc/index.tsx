import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./add-xif-doc.style";
import { Button, Radio } from "components/shared/form";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { IAddXifDocPage } from "../../types";
import { XifDocsActions } from "../../store/action";
import { Grid, Paper } from "@material-ui/core";
import { useUser } from "hooks";
import { InputContainer } from "../../components";
import { faPaperclip } from "@fortawesome/pro-light-svg-icons";
import { renderInput } from "../../form-enum";
import { Field, reduxForm, change, formValueSelector, resetSection, FormSection } from "redux-form";
import { TextField, DatePicker, RadioGroup, FileUploader, Select } from "components/shared/redux-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { required, onlyPdf, fileRequired, size4mb } from "helpers/form-validators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarker, faKey } from "@fortawesome/pro-light-svg-icons";
import { useParams } from "react-router-dom";
import { links } from "routes/links";

const AddXifDoc: FC<IAddXifDocPage & any> = ({
  xifDocs,
  getXifDocTypes,
  handleSubmit,
  docType,
  contractNo,
  getCompanyInfo,
  getCurrency,
  initialValues,
  getDoc,
  clearDoc,
  submitting,
}) => {
  const classes = useStyles();
  const lang = useTranslator("xifDocs", ["alerts"]);
  const dispatch = useDispatch();
  const currentUser = useUser();
  const params: any = useParams();

  useEffect(() => {
    if (params.page === "update" && params.id) {
      getDoc(params.id);
    }
    getXifDocTypes();
    getCurrency();
  }, [getXifDocTypes, currentUser.lang, getCurrency]);

  useEffect(() => {
    return () => {
      clearDoc();
    };
  }, [clearDoc]);

  useEffect(() => {
    getCompanyInfo();
  }, [currentUser.localToken, getCompanyInfo]);

  const history = useHistory();

  const handleHasContractNoChange = (e: any) => {
    if (e.target.value === "false") {
      dispatch(change("addXifDocForm", "formSection.contractNo", "N-SIZ"));
    } else {
      dispatch(change("addXifDocForm", "formSection.contractNo", ""));
    }
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.formHeader} component={Paper}>
        <div>
          <FontAwesomeIcon className={classes.headerIcon} icon={faKey} />
          <span>{xifDocs?.companyInfo?.voen}</span>
        </div>
        <div>
          <FontAwesomeIcon className={classes.headerIcon} icon={faUser} />
          <span>{xifDocs?.companyInfo?.companyName}</span>
        </div>
        <div>
          <FontAwesomeIcon className={classes.headerIcon} icon={faMapMarker} />
          <span>{xifDocs?.companyInfo?.companyAddress}</span>
        </div>
      </Grid>
      <Grid item xs={12} component={Paper} className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field
            component={Select}
            name="docType"
            data={xifDocs?.xifDocTypes?.map((doc: any) => ({ id: doc?.idn, value: doc?.name })) || []}
            selected={xifDocs?.xifDocTypes ? xifDocs.xifDocTypes[0]?.idn : ""}
            label={lang.docType}
            onChange={() => dispatch(resetSection("addXifDocForm", "formSection"))}
          />
          <Field component="input" type="hidden" name="id" />
          <FormSection name="formSection">
            <InputContainer visible={renderInput(docType, 0)}>
              <Field component={RadioGroup} name="hasContractNo" onChange={handleHasContractNoChange} row>
                <Radio value="true" label={lang.hasContractNo} color="primary" />
                <Radio value="false" label={lang.notHasContractNo} color="primary" />
              </Field>
            </InputContainer>

            <InputContainer visible={renderInput(docType, 1)}>
              <Field
                component={TextField}
                name="contractNo"
                disabled={contractNo === "N-SIZ"}
                label={lang.contractNo}
                validate={required}
              />
            </InputContainer>
            <div className={classes.dateGroup}>
              <InputContainer visible={renderInput(docType, 2)}>
                <Field component={DatePicker} name="contractDate" label={lang.contractDate} className={classes.input} />
              </InputContainer>
              <InputContainer visible={renderInput(docType, 3)}>
                <Field component={DatePicker} name="validityDate" label={lang.validityDate} />
              </InputContainer>
            </div>
            <InputContainer className={classes.inputGroup} visible={renderInput(docType, 8)}>
              <Field component={TextField} name="invoys" type="number" label={lang.invoice} />
              <Field
                component={Select}
                name="currency"
                data={xifDocs?.currency?.map((curr: any) => ({ id: curr?.codeN, value: curr?.name })) || []}
                selected={xifDocs?.currency ? xifDocs.currency[0]?.codeN : ""}
                label={lang.currency}
              />
            </InputContainer>

            <InputContainer visible={renderInput(docType, 4)}>
              <Field component={TextField} name="recieverVoen" label={lang.recieverVoen} />
            </InputContainer>

            <InputContainer visible={renderInput(docType, 5)}>
              <Field component={TextField} name="recieverName" label={lang.recieverName} />
            </InputContainer>

            <InputContainer visible={renderInput(docType, 6)}>
              <Field component={TextField} name="senderVoen" label={lang.senderVoen} />
            </InputContainer>

            <InputContainer visible={renderInput(docType, 7)}>
              <Field component={TextField} name="senderName" label={lang.senderName} />
            </InputContainer>

            <InputContainer visible={true}>
              <Field component={TextField} name="note" multiline rows={5} label={lang.note} />
            </InputContainer>
            <div className={classes.formFooter}>
              <InputContainer visible={true}>
                {params.page === "update" ? (
                  <Field
                    component={FileUploader}
                    accept="application/pdf"
                    icon={faPaperclip}
                    label={initialValues?.formSection?.doc}
                    name="doc"
                    validate={[onlyPdf, size4mb]}
                  />
                ) : (
                  <Field
                    component={FileUploader}
                    accept="application/pdf"
                    icon={faPaperclip}
                    label={lang.addFile}
                    name="doc"
                    validate={[onlyPdf, fileRequired, size4mb]}
                  />
                )}
              </InputContainer>
              <div className={classes.buttonGroup}>
                <Button onClick={() => history.push(links.XifDoc.baseUrl)}>{lang.deny}</Button>
                <Button type="submit" variant="contained" color="primary" disabled={submitting}>
                  {lang.send}
                </Button>
              </div>
            </div>
          </FormSection>
        </form>
      </Grid>
    </Grid>
  );
};

const formValues = formValueSelector("addXifDocForm");

const initialValues = {
  docType: 1,
  formSection: {
    hasContractNo: "true",
    contractNo: "",
    contractDate: null,
    validityDate: null,
    currency: 932,
  },
};

const mapStateToProps = (state: IAppState) => ({
  xifDocs: state.xifDocs,
  contractNo: formValues(state, "formSection.contractNo"),
  docType: formValues(state, "docType"),
  initialValues: state.xifDocs.docToUpdate.id ? state.xifDocs.docToUpdate : (undefined as any),
});

export default connect(
  mapStateToProps,
  XifDocsActions
)(
  reduxForm({ form: "addXifDocForm", initialValues, enableReinitialize: true, keepDirtyOnReinitialize: true })(
    AddXifDoc
  )
);
