import { Grid } from "@material-ui/core";
import { SectionHeader, Spinner, AlertPage } from "components/shared";
import React, { FC, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { IAppState } from "store/reducers";
import { StartPage, AddXifDoc } from "./layouts";
import { XifDocsActions } from "./store/action";
import { IXifDocsPage, ISearchResponse } from "./types";
import { useUser } from "hooks";
import { useTranslator } from "localization";
import { faInfoCircle } from "@fortawesome/pro-duotone-svg-icons";
import { IAddDocRequest, IUpdateDoc } from "./types";
import moment from "moment";
import { toFormData } from "helpers";
import { stopSubmit } from "redux-form";
import { XifDocList } from "./components";
import { useHistory } from "react-router-dom";
import { links } from "routes/links";

const XifDocs: FC<IXifDocsPage> = ({
  match,
  xifDocs,
  getXifDocs,
  sendXifDocs,
  toogleFiltering,
  sendFilterForm,
  getFile,
  removeDoc,
  updateDoc,
}) => {
  const lang = useTranslator("xifDocs", ["alerts", "formAlerts"]);
  const currentUser = useUser();
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewRoute = match.params.page;

  useEffect(() => {
    if (currentUser.voen && !addNewRoute) {
      getXifDocs();
    }
  }, [getXifDocs, currentUser.localToken, currentUser.lang, addNewRoute, currentUser.voen]);

  const handleDocFormSubmit = (data: any) => {
    const response: IAddDocRequest = {
      firmName: xifDocs.companyInfo?.companyName,
      address: xifDocs.companyInfo?.companyAddress,
      docType: data.docType,
      hasContractNo: data.formSection.hasContractNo,
      contractNo: data.formSection.contractNo,
      contractDate: moment(data.formSection.contractDate).format("DD.MM.yyyy"),
      validityDate: moment(data.formSection.validityDate).format("DD.MM.yyyy"),
      invoice: data.formSection.invoys,
      currencyType: String(data.formSection.currency),
      recieverVoen: data.formSection.recieverVoen,
      recieverName: data.formSection.recieverName,
      senderVoen: data.formSection.senderVoen,
      senderName: data.formSection.senderName,
      note: data.formSection.note,
      doc: data.formSection.doc && data.formSection.doc[0],
    };

    if (!data.id) {
      if (data.formSection.doc && data.formSection.doc[0]?.name) {
        console.log(data);
        //sendXifDocs(toFormData(response));
      } else {
        dispatch(stopSubmit("addXifDocForm", { formSection: { doc: lang.required } }));
      }
    } else {
      updateDoc({ data: toFormData(response), id: data.id });
    }

    history.push(links.XifDoc.baseUrl);
  };

  const handleFilterFormSend = (data: any) => {
    toogleFiltering(true);
    let senddata: ISearchResponse = {
      startDate: moment(data.startDate).format("DD.MM.YYYY"),
      endDate: moment(data.endDate).format("DD.MM.YYYY"),
      docType: data.docType,
    };
    sendFilterForm(senddata);
  };

  return !currentUser.voen ? (
    <AlertPage icon={faInfoCircle} color="primary" title={lang.voenRequired} />
  ) : (
    <Grid container style={{ opacity: currentUser.pageLoading ? 0.5 : 1 }}>
      <Grid item xs={12}>
        <SectionHeader title={lang.xifDocs} />
      </Grid>
      {addNewRoute ? (
        <AddXifDoc onSubmit={handleDocFormSubmit} />
      ) : xifDocs?.xifDocs?.length > 0 ? (
        <XifDocList
          sendFilterForm={handleFilterFormSend}
          onFilterStart={() => toogleFiltering(true)}
          xifDocs={xifDocs.xifDocs}
          onRemove={(data) => removeDoc(data)}
          onFileOpen={(idn) => getFile(idn)}
        />
      ) : (
        !currentUser.pageLoading && !xifDocs?.loading && <StartPage onClick={() => history.push(links.XifDoc.add)} />
      )}
      <Spinner hidden={!currentUser.pageLoading && !xifDocs?.loading} />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  xifDocs: state.xifDocs,
});

export default withRouter(connect(mapStateToProps, XifDocsActions)(XifDocs));
