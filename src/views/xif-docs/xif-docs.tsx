import React, { FC, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { SectionHeader, Spinner, FilterBar, DataTable, Popup } from "components/shared";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { XifDocsActions } from "./store/action";
import { IXifDocsPage, IRemoveDoc, IXifDoc } from "./types";
import { useUser } from "hooks";
import { useTranslator } from "localization";
import { links } from "routes/links";
import { faFile } from "@fortawesome/pro-duotone-svg-icons";
import { useModalForm, useColumns } from "./table-data";

const XifDocs: FC<IXifDocsPage> = ({
  xifDocState,
  getXifDocs,
  searchXifDoc,
  getFile,
  removeDoc,
  getXifDocTypes,
  toggleFilter,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [itemToRemove, setItemToRemove] = useState<IRemoveDoc | null>(null);
  const lang = useTranslator("xifDocs", ["alerts", "formAlerts"]);
  const currentUser = useUser();

  useEffect(() => {
    if (xifDocState.filter?.isFiltered) {
      searchXifDoc(xifDocState.filter.form);
    } else {
      getXifDocs();
    }
  }, [getXifDocs, currentUser.lang, getXifDocTypes, xifDocState.filter]);

  useEffect(() => {
    getXifDocTypes();
  }, []);

  const handleFileOpen = (id: number) => {
    getFile(id);
  };

  const handleDialogAllow = () => {
    if (itemToRemove) {
      removeDoc(itemToRemove);
      setOpen(!open);
    }
  };

  const handleRemove = (worker: IXifDoc) => {
    setItemToRemove({ id: worker.id, pinCode: worker.pinCode } as IRemoveDoc);
    setOpen(!open);
  };

  const handleDialogDeny = () => {
    setItemToRemove(null);
    setOpen(!open);
  };

  return (
    <Grid container style={{ opacity: currentUser.pageLoading ? 0.5 : 1 }}>
      <SectionHeader title={lang.xifDocs} />
      <FilterBar
        titleButtonText={lang.addDoc}
        titleButtonIcon={faFile}
        titleButtonLink={links.XifDoc.add}
        modalTitle={lang.deepSearch}
        onClear={() => toggleFilter({ ...xifDocState.filter, isFiltered: false, form: {} as any })}
        onSend={(data) => toggleFilter({ ...xifDocState.filter, isFiltered: true, form: data })}
        formName="xifFilterForm"
        modalData={useModalForm(xifDocState.xifDocTypes)}
        clearButtonDisabled={!xifDocState.filter.isFiltered}
        dependency={[xifDocState.filter.isFiltered]}
      />
      <Grid item xs={12}>
        <DataTable
          // @ts-ignore
          columns={useColumns(handleRemove, handleFileOpen)}
          data={xifDocState.xifDocs}
          options={{
            search: false,
            toolbar: false,
          }}
        />
        <Popup
          type="remove"
          open={open}
          children={null}
          onAllow={handleDialogAllow}
          onDeny={handleDialogDeny}
          title={lang.removeXifDoc}
        />
      </Grid>
      <Spinner hidden={!currentUser.pageLoading && !xifDocState?.loading} />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  xifDocState: state.xifDocs,
});

export default connect(mapStateToProps, XifDocsActions)(XifDocs);
//<StartPage onClick={() => history.push(links.XifDoc.add)} />
