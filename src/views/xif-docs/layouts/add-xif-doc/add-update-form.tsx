import React, { FC } from "react";
import { useStyles } from "./add-xif-doc.style";
import { useTranslator } from "localization";
import { connect, useDispatch } from "react-redux";
import { IAppState } from "store/reducers";
import { Field, FormSection, formValueSelector, reduxForm, resetSection, change } from "redux-form";
import { InputContainer } from "views/xif-docs/components";
import { Select, RadioGroup, TextField, DatePicker, FileUploader } from "components/shared/redux-form";
import { Button, Radio } from "components/shared";
import { renderInput } from "views/xif-docs/helpers";
import { required, onlyPdf, size4mb, fileRequired } from "helpers/form-validators";
import { faPaperclip } from "@fortawesome/pro-solid-svg-icons";
import { links } from "routes";
import { useParams, useHistory } from "react-router-dom";
import { XifDocsActions } from "views/xif-docs/store/action";
import { IXifDocsState } from "views/xif-docs/store/reducer";
import { IDocToUpdate } from "views/xif-docs/types";

export interface IAddUpdateForm {
  handleSubmit: any;
  submitting: boolean;
  xifDocs: IXifDocsState;
  docType: number;
  contractNo: string;
  initialValues: IDocToUpdate;
}

const AddUpdateForm: FC<IAddUpdateForm & any> = ({
  handleSubmit,
  submitting,
  xifDocs,
  docType,
  contractNo,
  initialValues,
}) => {
  const lang = useTranslator();
  const classes = useStyles();
  const params: any = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleHasContractNoChange = (e: any) => {
    if (e.target.value === "false") {
      dispatch(change("addXifDocForm", "formSection.contractNo", "N-SIZ"));
    } else {
      dispatch(change("addXifDocForm", "formSection.contractNo", ""));
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Field
        component={Select}
        disabled={params.page === "update" && !!params.id}
        name="docType"
        data={xifDocs?.xifDocTypes?.map((doc: any) => ({ id: doc?.idn, value: doc?.name })) || []}
        selected={xifDocs?.xifDocTypes ? xifDocs.xifDocTypes[0]?.idn : ""}
        label={lang.docType}
        onChange={() => dispatch(resetSection("addXifDocForm", "formSection"))}
      />
      <Field component="input" type="hidden" name="id" />
      <Field component="input" type="hidden" name="pinCode" />
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
            <Field
              validate={required}
              component={DatePicker}
              name="contractDate"
              label={lang.contractDate}
              className={classes.input}
            />
          </InputContainer>
          <InputContainer visible={renderInput(docType, 3)}>
            <Field component={DatePicker} name="validityDate" label={lang.validityDate} />
          </InputContainer>
        </div>
        <InputContainer className={classes.inputGroup} visible={renderInput(docType, 8)}>
          <Field component={TextField} name="invoice" type="number" label={lang.invoice} />
          <Field
            component={Select}
            name="currencyType"
            data={xifDocs?.currency?.map((curr: any) => ({ id: curr?.codeN, value: curr?.name })) || []}
            selected={xifDocs?.currency ? xifDocs.currency[0]?.codeN : ""}
            label={lang.currency}
          />
        </InputContainer>

        <InputContainer visible={renderInput(docType, 4)}>
          <Field component={TextField} name="receiverVoen" label={lang.recieverVoen} />
        </InputContainer>

        <InputContainer visible={renderInput(docType, 5)}>
          <Field component={TextField} name="receiverName" label={lang.recieverName} />
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
  initialValues: state.xifDocs.docToUpdate?.id ? state.xifDocs.docToUpdate : (undefined as any),
});

export default connect(
  mapStateToProps,
  XifDocsActions
)(
  reduxForm({ form: "addXifDocForm", initialValues, enableReinitialize: true, keepDirtyOnReinitialize: true })(
    AddUpdateForm
  )
);
