import React, { FC, useEffect } from "react";
import { useStyles } from "./add-xif-doc.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { IAddXifDocPage, IAddDocRequest } from "../../types";
import { XifDocsActions } from "../../store/action";
import { Grid, Paper } from "@material-ui/core";
import { useUser } from "hooks";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { SectionHeader } from "components/shared";
import AddUpdateForm from "./add-update-form";
import { FormHeader } from "views/xif-docs/components";
import { checkFile } from "views/xif-docs/helpers";
import { toFormData } from "helpers";
import { stopSubmit } from "redux-form";
import moment from "moment";

const AddXifDoc: FC<IAddXifDocPage & any> = ({
  xifDocState,
  getXifDocTypes,
  getCompanyInfo,
  getCurrency,
  getDoc,
  clearDoc,
  sendXifDocs,
  updateDoc,
}) => {
  const classes = useStyles();
  const lang = useTranslator("xifDocs", ["alerts"]);
  const currentUser = useUser();
  const params: any = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getCompanyInfo();
  }, [getCompanyInfo]);

  useEffect(() => {
    if (params.page === "update" && params.id) {
      getDoc(params.id);
    }
    getXifDocTypes();
    getCurrency();
  }, [getXifDocTypes, currentUser.lang, getCurrency, getDoc, params.id, params.page]);

  useEffect(() => {
    return () => {
      clearDoc();
    };
  }, [clearDoc]);

  const handleDocFormSubmit = (data: any) => {
    const response: IAddDocRequest = {
      firmName: xifDocState.companyInfo?.companyName,
      address: xifDocState.companyInfo?.companyAddress,
      docType: data.docType,
      hasContractNo: data.formSection.hasContractNo,
      contractNo: data.formSection.contractNo,
      contractDate: moment(data.formSection.contractDate).format("DD.MM.YYYY"),
      validityDate: moment(data.formSection.validityDate).format("DD.MM.YYYY"),
      invoice: data.formSection.invoice,
      currencyType: String(data.formSection.currencyType),
      receiverVoen: data.formSection.receiverVoen,
      receiverName: data.formSection.receiverName,
      senderVoen: data.formSection.senderVoen,
      senderName: data.formSection.senderName,
      note: data.formSection.note,
      doc: checkFile(data.formSection.doc, !!data.id),
    };

    if (!data.id) {
      if (data.formSection.doc && data.formSection.doc[0]?.name) {
        sendXifDocs(toFormData(response));
      } else {
        dispatch(stopSubmit("addXifDocForm", { formSection: { doc: lang.required } }));
      }
    } else {
      updateDoc({ data: toFormData(response), id: data.id, pinCode: data.pinCode });
    }
  };

  return (
    <Grid container justify="center" style={{ opacity: xifDocState?.loading ? 0.5 : 1 }}>
      <SectionHeader title={lang.xifDocs} />
      <Grid item xs={12} className={classes.formHeader} component={Paper}>
        <FormHeader
          voen={xifDocState.companyInfo?.voen}
          company={xifDocState.companyInfo?.companyName}
          address={xifDocState.companyInfo?.companyAddress}
        />
      </Grid>
      <Grid item xs={12} component={Paper} className={classes.formContainer}>
        <AddUpdateForm onSubmit={handleDocFormSubmit} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ xifDocState: state.xifDocs });
export default connect(mapStateToProps, XifDocsActions)(AddXifDoc);
