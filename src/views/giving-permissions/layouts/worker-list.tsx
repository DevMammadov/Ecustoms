import { Grid, Switch, Button, withWidth, isWidthUp, IconButton } from "@material-ui/core";
import { DataTable, Column } from "components/shared/data-table";
import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IWorker } from "../types";
import { useStyles } from "../giving-permissions.style";
import { IWorkerListPage } from "../types";
import { Popup } from "components/shared";
import { MobileAddButton } from "../components/mobile-add-button";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { PermissionsActions } from "../store/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTrash, faPen, faPrint } from "@fortawesome/pro-solid-svg-icons";
import { useTranslator } from "localization";

const WorkerList: FC<IWorkerListPage> = ({
  workers,
  updateWorkerActivity,
  removeWorkerPermissions,
  width,
  clearSingleWorker,
  setSearchPin,
  setSertNumber,
  getWorkerPermission,
}) => {
  const lang = useTranslator("givingPermission", ["myInfo"]);
  const history = useHistory();
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();
  const [workerInfo, setWorkerInfo] = useState<{ pin: string; signature: string }>({} as any);

  useEffect(() => {
    clearSingleWorker();
  }, [clearSingleWorker]);

  const columns: Column<any>[] = [
    { title: `${lang.signatureNumber}`, field: "signatureNumber" },
    { title: `${lang.pinCode}`, field: "pinCode" },
    { title: `${lang.lastName} ${lang.name}`, field: "fullName" },
    {
      title: `${lang.active} / ${lang.deactive}`,
      field: "status",
      editable: "never",
      render: (rowData: IWorker) => (
        <Switch
          checked={rowData.status === 1}
          onChange={handleStatusChange(rowData)}
          color="primary"
          value="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      ),
    },
    {
      //@ts-ignore
      width: 160,
      title: "",
      field: "action",
      editable: "never",
      render: (rowData: IWorker) => (
        <div className={classes.dataTableButtonsContainer}>
          <IconButton className={classes.dataTableButton} onClick={() => handleEdit(rowData)}>
            <FontAwesomeIcon icon={faPen} />
          </IconButton>
          <IconButton className={classes.dataTableButton} onClick={() => handleRemove(rowData)}>
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
          <IconButton className={classes.dataTableButton}>
            <FontAwesomeIcon icon={faPrint} />
          </IconButton>
        </div>
      ),
    },
  ];

  const handleRemove = (worker: IWorker) => {
    setWorkerInfo({ pin: worker.pinCode, signature: worker.signatureNumber });
    setOpen(true);
  };

  const handleDialogAllow = () => {
    removeWorkerPermissions(workerInfo);
    setOpen(false);
  };

  const handleEdit = (worker: IWorker) => {
    setSearchPin(worker.pinCode);
    setSertNumber(worker.signatureNumber);
    getWorkerPermission({
      pin: worker.pinCode,
      signature: worker.signatureNumber,
    });
    history.push(`/giving-permissions/manage/${worker.pinCode}`);
  };

  const handleStatusChange = (worker: IWorker) => (event: React.ChangeEvent<HTMLInputElement>) => {
    updateWorkerActivity({
      pinCode: worker.pinCode,
      signatureNumber: worker.signatureNumber,
      activityStatus: `${worker.status === 1 ? `0` : `1`}`,
    });
  };

  const handleRedirectClick = () => {
    clearSingleWorker();
    history.push(`/giving-permissions/manage/`);
  };

  return (
    <Grid item xs={12} style={{ marginBottom: "80px" }} className={classes.workersTableContainer}>
      <DataTable
        columns={columns}
        data={workers}
        options={{
          search: true,
          showTitle: isWidthUp("sm", width),
        }}
        title={
          <Button
            variant="contained"
            className={classes.dataTableTitleButton}
            onClick={handleRedirectClick}
            type="submit"
            color="primary"
          >
            <FontAwesomeIcon icon={faUser} className={classes.titleButtonIcon} />
            {lang.addNewPermission}
          </Button>
        }
      />
      <Popup
        type="remove"
        open={open}
        children={null}
        onAllow={handleDialogAllow}
        onDeny={() => setOpen(false)}
        title={lang.removeWorkerPermissionDialog}
      />
      <MobileAddButton />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ ...state.permissions, ...state.user });
export default withWidth()(connect(mapStateToProps, PermissionsActions)(WorkerList));
