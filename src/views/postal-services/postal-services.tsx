import React, { FC, useEffect, useState } from "react";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IPostalServicesPage, ISubData, IPostals } from "./types";
import { PostalServicesActions } from "./store/action";
import { IAppState } from "store/reducers";
import { SectionHeader, Popup, FilterBar } from "components/shared";
import { CollapseTable } from "./components";
import { Grid } from "@material-ui/core";
import { columns, Subcolumns, useModalForm } from "./table-data";
import { links } from "routes";
import { useUser } from "hooks";
import { faFileCode } from "@fortawesome/pro-solid-svg-icons";
import { getLimitOffset } from "helpers/common";

const PostalServices: FC<IPostalServicesPage> = ({
  postalState,
  getSubData,
  removePostal,
  toggleFilter,
  getPostal,
  getCountries,
}) => {
  const [dialogData, setDialogData] = useState<{ open: boolean; item: number | null }>({ open: false, item: null });
  const lang = useTranslator("postal-services");
  const currentUser = useUser();

  useEffect(() => {
    getPostal({
      filter: !postalState.filter?.isFiltered ? {} : postalState.filter?.form,
      ...getLimitOffset(postalState.filter?.offset, postalState.filter?.limit),
    });
  }, [getPostal, postalState.filter]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const handleDialogOpen = (id: number) => {
    setDialogData({ open: true, item: id });
  };

  const handleDialogAllow = () => {
    const fin = postalState.subData?.filter(
      (sub: ISubData) => sub.data.filter((data: IPostals) => data.idn === dialogData.item)[0]
    )[0].fin;
    removePostal({ id: dialogData.item as number, fin });
    setDialogData({ open: false, item: null });
  };

  const handleCollapseTablePaging = (page: number) => {
    if (postalState.filter?.offset !== page) {
      toggleFilter({ ...postalState.filter, offset: page });
    }
  };

  const handleGetSubData = (fin: string) => {
    if (!postalState?.subData?.filter((sub) => sub.fin === fin)[0]) {
      getSubData(fin);
    }
  };

  return (
    <Grid container>
      <SectionHeader title={lang.postalServices} />
      <Grid item xs={12}>
        <FilterBar
          titleButtonText={lang.addDoc}
          titleButtonIcon={faFileCode}
          titleButtonLink={links.PostalServices.add}
          modalTitle={lang.deepSearch}
          onClear={() => toggleFilter({ ...postalState.filter, isFiltered: false })}
          onSend={(data: any) => toggleFilter({ ...postalState.filter, offset: 1, isFiltered: true, form: data })}
          formName="postalFilterForm"
          modalData={useModalForm(postalState.countries)}
          clearButtonDisabled={!postalState.filter.isFiltered}
          dependency={[postalState.filter.isFiltered]}
        />
      </Grid>
      <Grid item xs={12}>
        <CollapseTable
          subData={postalState?.subData}
          onRowOpen={(fin: string) => handleGetSubData(fin)}
          columns={columns}
          subColumns={Subcolumns(handleDialogOpen)}
          data={postalState?.data?.headers}
          dataCount={postalState?.data?.count}
          loading={postalState?.loading || currentUser.pageLoading}
          onPageChange={handleCollapseTablePaging}
          currentPage={postalState.filter?.offset}
          limit={postalState.filter?.limit}
          subDataID="fin"
        />
        <Popup
          type="remove"
          open={dialogData.open}
          children={null}
          onAllow={handleDialogAllow}
          onDeny={() => setDialogData({ open: false, item: null })}
          title={lang.removeWorkerPermissionDialog}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  postalState: state.postalServices,
});
export default connect(mapStateToProps, PostalServicesActions)(PostalServices);
