import React, { useEffect, FC } from "react";
import { Grid, Paper } from "@material-ui/core";
import { SectionHeader } from "components/shared";
import { useStyles } from "./notify.style";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { notifyActions } from "./store/action";
import { INotifyPage, ISearchResponse } from "./types";
import { useUser } from "hooks";
import { NotifyList, FilterForm } from "./components";
import moment from "moment";
import { getFormValues } from "redux-form";

const Notify: FC<INotifyPage> = ({
  getNotify,
  notify,
  getFilterFields,
  sendNotifyFilterForm,
  togglePage,
  toogleFiltering,
  filters,
}) => {
  const classes = useStyles();
  let currentUser = useUser();

  useEffect(() => {
    getNotify({ offset: (notify.page - 1) * 10, limit: 10 });
    getFilterFields();
  }, [currentUser.localToken, currentUser.lang, getNotify, getFilterFields, notify.page]);

  const handleFormSend = (data: any) => {
    toogleFiltering(true);
    togglePage(1);
    let Senddata: ISearchResponse = {
      startDate: moment(data.startDate).format("DD.MM.YYYY"),
      endDate: moment(data.endDate).format("DD.MM.YYYY"),
      infoType: data.infoType,
      offset: 0,
      limit: 10,
    };
    sendNotifyFilterForm(Senddata);
  };

  const handlePaginate = (page: number) => {
    if (page !== notify.page) {
      togglePage(page);
      if (notify.isFiltered) {
        let Senddata: ISearchResponse = {
          startDate: moment(filters.startDate).format("DD.MM.YYYY"),
          endDate: moment(filters.endDate).format("DD.MM.YYYY"),
          infoType: filters.infoType,
          offset: (page - 1) * 10,
          limit: 10,
        };
        sendNotifyFilterForm(Senddata);
      } else {
        getNotify({ offset: (page - 1) * 10, limit: 10 });
      }
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <SectionHeader title="Bildirişlər" />
      </Grid>
      <Grid component={Paper} item xs={12} className={classes.notifyHeader}>
        <FilterForm onSubmit={handleFormSend} />
      </Grid>
      <Grid item xs={12} className={classes.notifyBody}>
        <NotifyList
          currentPage={notify.page}
          data={notify?.notifications?.notify}
          count={Math.ceil(notify?.notifications?.count / 10)}
          onPaginate={handlePaginate}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ notify: state.notify, filters: getFormValues("notifyFilter")(state) });
export default connect(mapStateToProps, notifyActions)(Notify);
