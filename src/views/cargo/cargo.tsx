import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { ICargoPage, ICargoFilterForm } from "./types";
import { CargoActions } from "./store/action";
import { IAppState } from "store/reducers";
import { Grid } from "@material-ui/core";
import { SectionHeader, FilterBar } from "components/shared";
import { CollapseTable } from "views/postal-services/components";
import { useTranslator } from "localization";
import { links } from "routes";
import { columns, useModalForm } from "./table-data";
import { useStyles } from "./cargo.style";
import { getLimitOffset } from "helpers/common";

const Cargo: FC<ICargoPage> = ({ cargo, getCargo, getSubData, getCountries, toggleFilter }) => {
  const lang = useTranslator("cargo", ["postal-services"]);
  const classes = useStyles();

  useEffect(() => {
    getCargo({
      filter: !cargo.filter?.isFiltered ? {} : cargo.filter?.form,
      ...getLimitOffset(cargo.filter?.offset, cargo.filter?.limit),
    });
  }, [getCargo, getCountries, cargo.filter]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const handleCollapseTablePaging = (page: number) => {
    if (cargo.filter?.offset !== page) {
      toggleFilter({ ...cargo.filter, offset: page });
    }
  };

  const handleSearchfilterSend = (data: ICargoFilterForm) => {
    toggleFilter({ ...cargo.filter, offset: 1, isFiltered: true, form: data });
  };

  const handleGetSubData = (IDXAL_VOEN: string) => {
    if (!cargo?.subData?.filter((sub) => sub.idxaL_VOEN === IDXAL_VOEN)[0]) {
      getSubData(IDXAL_VOEN);
    }
  };

  return (
    <Grid container>
      <SectionHeader title={lang.cargoTitle} />
      <Grid item xs={12}>
        <FilterBar
          titleButtonText={lang.addDoc}
          titleButtonLink={links.Cargo.add}
          formName="cargofilter"
          modalData={useModalForm(cargo.countries)}
          modalTitle={lang.deepSearch}
          onClear={() => toggleFilter({ ...cargo.filter, isFiltered: false, form: {} })}
          onSend={(data: any) => handleSearchfilterSend(data)}
          clearButtonDisabled={!cargo.filter.isFiltered}
          dependency={[cargo.filter.isFiltered]}
        />
      </Grid>
      <Grid item xs={12}>
        <CollapseTable
          subData={cargo?.subData}
          onRowOpen={(IDXAL_VOEN: string) => handleGetSubData(IDXAL_VOEN)}
          columns={columns}
          subColumns={columns}
          data={cargo?.data?.headers}
          dataCount={cargo?.data?.count}
          loading={cargo?.loading}
          onPageChange={handleCollapseTablePaging}
          currentPage={cargo.filter?.offset}
          limit={cargo.filter?.limit}
          subDataID="idxaL_VOEN"
          classes={{ subTableCell: classes.collapseTableSubTableCell }}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ cargo: state.cargo });
export default connect(mapStateToProps, CargoActions)(Cargo);
