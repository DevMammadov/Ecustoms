import { Grid, Paper } from "@material-ui/core";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { List } from "views/myInfo/components";
import { MyinfoActions } from "views/myInfo/store/action";
import { IIinfoPage } from "views/myInfo/types";
import { useStyles } from "./info.style";
import { useTranslator } from "localization";
import { useTableData } from "./useTableData";
import ContactForm from "./contact-form";
import { useUser } from "hooks";

const Info: FC<IIinfoPage> = ({ info, getInfo, updateInfo, loading }) => {
  const lang = useTranslator("myInfo");
  const { companyInfo, modifyData, personalInfo, statusKeys } = useTableData();
  const classes = useStyles();
  const currentUser = useUser();

  useEffect(() => {
    getInfo();
  }, [getInfo, currentUser.localToken]);

  const handleFormSubmit = (data: any) => {
    updateInfo(data);
  };

  return (
    <Grid container className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Paper variant="outlined">
            <h4 className={classes.sectionHeader}>{lang.personalInformation}</h4>
            <List keys={personalInfo} values={modifyData(info)} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper variant="outlined">
            <h4 className={classes.sectionHeader}>{lang.OrganizationInformation}</h4>
            <List keys={companyInfo} values={modifyData(info)} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Paper variant="outlined">
            <h4 className={classes.sectionHeader}> {lang.contacts} </h4>
            <ContactForm onSubmit={handleFormSubmit} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper variant="outlined">
            <h4 className={classes.sectionHeader}> {lang.hisStatus} </h4>
            <List keys={statusKeys(info)} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const MapStateToProps = () => (state: IAppState) => ({
  info: state.myInfo.info,
  loading: state.myInfo.loading,
});

export default connect(MapStateToProps, MyinfoActions)(Info);
