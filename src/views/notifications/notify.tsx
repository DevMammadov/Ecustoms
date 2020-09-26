import React, { useEffect, FC } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { SectionHeader, FilterBar } from "components/shared";
import { useStyles } from "./notify.style";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { notifyActions } from "./store/action";
import { INotifyPage } from "./types";
import { useUser } from "hooks";
import { NotifyList } from "./components";
import { useTranslator } from "localization";
import { getLimitOffset } from "helpers/common";
import { IModalData } from "components/shared/filter-bar/types";

const Notify: FC<INotifyPage> = ({ getNotify, notify, getFilterFields, toggleFilter }) => {
  const classes = useStyles();
  const lang = useTranslator();
  let currentUser = useUser();

  useEffect(() => {
    getNotify({
      gridFilter: !notify.filter?.isFiltered ? "main" : "search",
      filter: !notify.filter?.isFiltered ? {} : notify.filter?.form,
      ...getLimitOffset(notify.filter?.offset, notify.filter?.limit),
    });
    getFilterFields();
  }, [currentUser.lang, getNotify, getFilterFields, notify.filter]);

  const handlePaginate = (page: number) => {
    if (notify.filter?.offset !== page) {
      toggleFilter({ ...notify.filter, offset: page });
    }
  };

  const filterForm = (filters: any[]) => {
    return [
      {
        name: "infoIdn",
        type: "select",
        data: filters,
        optionValue: "idn",
        optionLabel: "name",
        label: lang.categories,
        showAtBar: true,
      },
    ] as IModalData[];
  };

  return (
    <Grid container>
      <SectionHeader title="Bildirişlər" />
      <FilterBar
        modalTitle={lang.deepSearch}
        onClear={() => toggleFilter({ ...notify.filter, isFiltered: false })}
        onSend={(data: any) => toggleFilter({ ...notify.filter, offset: 1, isFiltered: true, form: data })}
        formName="notifyFilterForm"
        modalData={filterForm(notify.filters)}
        dependency={[notify.filters.length, notify.filter.isFiltered]}
        clearButtonDisabled={!notify.filter.isFiltered}
        config={{ showFilterButton: true }}
      />
      {notify?.notifications?.count ? (
        <Grid item xs={12}>
          <NotifyList
            currentPage={notify.filter.offset}
            data={notify?.notifications?.notify}
            count={Math.ceil(notify?.notifications?.count / 10)}
            onPaginate={handlePaginate}
          />
        </Grid>
      ) : (
        <Grid item xs={12} component={Paper} className={classes.notFound}>
          <Typography>{lang.notFound}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ notify: state.notify });
export default connect(mapStateToProps, notifyActions)(Notify);
