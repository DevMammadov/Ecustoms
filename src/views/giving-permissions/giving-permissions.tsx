import { Grid } from "@material-ui/core";
import { SectionHeader, Spinner, AlertPage } from "components/shared";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { IAppState } from "store/reducers";
//import { useStyles } from "./giving-permissions.style";
import { StartPage, WorkerList, Manage } from "./layouts";
import { PermissionsActions } from "./store/action";
import { IGivingPermissionPage } from "./types";
import { useUser } from "hooks";
import { useTranslator } from "localization";
import { faInfoCircle } from "@fortawesome/pro-duotone-svg-icons";

const GivingPermissions: FC<IGivingPermissionPage> = ({ match, clearSingleWorker, workers, loading, getWorkers }) => {
  //const classes = useStyles();
  const selectedWorkerPin = match.params.pin;
  const managePage = match.params.manage;
  const lang = useTranslator("givingPermission", ["alerts"]);
  const currentUser = useUser();

  useEffect(() => {
    if (!selectedWorkerPin && !managePage && currentUser.hasStamp) {
      getWorkers();
    }
  }, [getWorkers, selectedWorkerPin, managePage, currentUser.localToken, currentUser.hasStamp]);

  return !currentUser.hasStamp ? (
    <AlertPage icon={faInfoCircle} color="primary" title={lang.stampRequired} />
  ) : (
    <Grid container style={{ opacity: currentUser.pageLoading ? 0.5 : 1 }}>
      <Grid item xs={12}>
        <SectionHeader title={lang.users} />
      </Grid>
      {managePage ? (
        <Manage showSearchBar={!selectedWorkerPin} />
      ) : workers.length > 0 ? (
        <WorkerList />
      ) : (
        !currentUser.pageLoading && !loading && <StartPage onClick={() => clearSingleWorker()} />
      )}
      <Spinner hidden={!currentUser.pageLoading && !loading} />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ ...state.permissions });

export default withRouter(connect(mapStateToProps, PermissionsActions)(GivingPermissions));
