import { DataTable } from "components/shared/data-table";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { IBankInfo } from "../../types";
import { MyinfoActions } from "views/myInfo/store/action";
import { Button, Collapse, IconButton } from "@material-ui/core";
import { useStyles } from "./bank-info.style";
import { Alert, AlertTitle } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import { useUser } from "hooks";
import { useTranslator } from "localization";
import { useTableData } from "./table-data";
import { AlertPage } from "components/shared";
import { faInfoCircle } from "@fortawesome/pro-duotone-svg-icons";

export interface IBankInfoPage {
  bankInfo: IBankInfo[];
  getBankInfo(): void;
  updateBankInfo(): void;
  loading: boolean;
}

const BankInfo: FC<IBankInfoPage> = ({ bankInfo, getBankInfo, updateBankInfo, loading }) => {
  const lang = useTranslator("myInfo", ["alerts"]);
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const currentUser = useUser();
  const { columns } = useTableData();

  useEffect(() => {
    if (currentUser.voen) {
      getBankInfo();
    }
  }, [getBankInfo, currentUser.voen]);

  return (
    <div className={classes.container}>
      {currentUser.voen ? (
        <>
          <Collapse in={open}>
            <Alert
              severity="info"
              className={classes.alertContainer}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>{lang.atention}</AlertTitle>
              {lang.bankInfoAlert}
            </Alert>
          </Collapse>
          <div className={classes.tableContainer}>
            <DataTable
              columns={columns}
              data={bankInfo ? bankInfo : [{}]}
              isLoading={loading}
              stripped
              options={{
                search: false,
                showTitle: true,
                paginationType: "normal",
              }}
              title={lang.bankInformation}
            />
            {currentUser.hasStamp && (
              <Button
                disabled={loading}
                onClick={() => updateBankInfo()}
                className={classes.updateButton}
                variant="contained"
                color="primary"
              >
                {lang.updateInformation}
              </Button>
            )}
          </div>
        </>
      ) : (
        <AlertPage
          icon={faInfoCircle}
          classes={{ icon: classes.alertIcon, root: classes.alertPageContainer }}
          color="primary"
          title={lang.voenRequired}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  bankInfo: state.myInfo.bankInfo,
  loading: state.myInfo.loading,
});
export default connect(mapStateToProps, MyinfoActions)(BankInfo);
