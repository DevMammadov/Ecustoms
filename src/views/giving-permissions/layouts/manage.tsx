import { Grid, Paper } from "@material-ui/core";
import { TextField } from "components/shared";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { IAppState } from "store/reducers";
import { Checkboxes, SertificateList, SignatureList } from "../components";
import { useStyles } from "../giving-permissions.style";
import { PermissionsActions } from "../store/action";
import { IManagePage, IPersmission, IWorkerCartType } from "../types";
import { useTranslator } from "localization";
import { SearchInput } from "components/shared";

export const Manage: FC<IManagePage> = ({
  permissions,
  getWorkerPermission,
  setSertNumber,
  setSearchPin,
  setSearchSert,
  clearSingleWorker,
  getWorkerSert,
  updateWorkerPermission,
  toggleWorkerPermission,
  showSearchBar = true,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const lang = useTranslator("givingPermission", ["myInfo"]);

  const handleSertificateChange = (sertType: number) => {
    setSearchSert(sertType);
  };

  const handleSearch = (text: string) => {
    getWorkerSert(text);
    setSearchPin(text);
  };

  const handlePermissionSend = () => {
    const headers = {
      pinCode: permissions.singleWorker.pin,
      signatureNumber: permissions.singleWorker.signature,
    };
    updateWorkerPermission({ model: permissions.singleWorker.permissions, headers: headers });
  };

  const handleCheckBoxCheck = (data: IPersmission) => {
    toggleWorkerPermission(data);
  };

  const handleSertNumberSelect = (number: string) => {
    if (number !== "null") {
      getWorkerPermission({ pin: permissions.singleWorker.pin, signature: number });
      setSertNumber(number);
    } else {
      clearSingleWorker();
    }
  };

  return (
    <>
      {showSearchBar && (
        <Grid item xs={12} component={Paper} className={classes.searchBarContainerGrid}>
          <div className={classes.manageSearchContainer}>
            <SearchInput defaultValue={permissions.singleWorker.pin} onSearch={handleSearch} label={lang.pinCode} />
            <TextField
              label={`${lang.lastName}, ${lang.name}, ${lang.patronymic}`}
              multiline
              disabled
              value={permissions.singleWorker.fullName}
            />
          </div>
          <div>
            <SertificateList
              selected={permissions.singleWorker.sertificate}
              onSelect={handleSertificateChange}
              singleWorler={permissions.singleWorker}
            />
            <SignatureList
              signatures={
                permissions.singleWorker.userSignatureList?.filter(
                  (l: IWorkerCartType) => l.cardType === permissions.singleWorker.sertificate
                )[0]?.signatureNumber
              }
              selected={permissions.singleWorker.signature}
              onSelect={handleSertNumberSelect}
              disabled={!permissions.singleWorker.sertificate}
            />
          </div>
        </Grid>
      )}
      <Checkboxes
        loading={permissions.loading}
        permissions={permissions.singleWorker?.permissions}
        onCheck={handleCheckBoxCheck}
        onSend={handlePermissionSend}
      />
    </>
  );
};

const mapStateToProps = (state: IAppState) => ({ permissions: state.permissions });
export default connect(mapStateToProps, PermissionsActions)(Manage);
