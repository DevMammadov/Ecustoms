import { Grid, isWidthUp, Paper, Tab, Tabs, withWidth } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { IAppState } from "store/reducers";
import { TabPanel } from "views/myInfo/components";
import { FormContainer } from "views/myInfo/components/form-container/form-container";
import { ISmsInfoPage } from "views/myInfo/types";
import { MyinfoActions } from "../../store/action";
import { useStyles } from "./sms-info.style";
import { useTranslator } from "localization";
import { useUser } from "hooks";
import { faInfoCircle } from "@fortawesome/pro-duotone-svg-icons";
import { AlertPage } from "components/shared";

const SmsInfo: FC<ISmsInfoPage> = ({
  getUserContacts,
  toggleNumberActivity,
  toggleEmailActivity,
  contacts,
  sendUserNumber,
  sendNumberCode,
  removeNumber,
  saveUserNumber,
  saveUserEmail,
  sendUserEmailCode,
  sendUserEmail,
  removeEmail,
  localToken,
  pageLoading,
  width,
}) => {
  useEffect(() => {
    getUserContacts();
  }, [getUserContacts, localToken]);

  const lang = useTranslator("myInfo", ["alerts"]);
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const currentUser = useUser();

  const handleNumberSend = (number: string) => {
    if (!contacts.phoneNumbers?.some((num) => num.field === number.trim())) {
      sendUserNumber(number);
      saveUserNumber(number);
    } else {
      toast.error(lang.thisNumberIsAlredyExists);
    }
  };

  const handleNumberConfirm = (code: string) => {
    sendNumberCode({ address: contacts.phoneNumber, confirmCode: code });
  };

  const handleEmailSend = (email: string) => {
    if (!contacts.emails?.some((em) => em.field === email.trim())) {
      sendUserEmail(email);
      saveUserEmail(email);
    } else {
      toast.error(lang.thisEmailIsAlredyExists);
    }
  };

  const handleEmailConfirm = (code: string) => {
    sendUserEmailCode({ address: contacts.emailAddress, confirmCode: code });
  };

  const handleTabChange = (event: any, newValue: any) => {
    setTab(newValue);
  };

  return !currentUser.voen ? (
    <AlertPage
      icon={faInfoCircle}
      classes={{ icon: classes.alertIcon, root: classes.alertContainer }}
      color="primary"
      title={lang.permissionalert}
    />
  ) : isWidthUp("sm", width) ? (
    <Paper component="div" className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.itemContainer}>
            <h4>{lang.contactNumber}</h4>
            <FormContainer
              onStatusChange={(data) => toggleNumberActivity(data)}
              type="number"
              title={lang.contactNumber}
              visible={contacts?.numberConfirmed}
              onRemove={(data) => removeNumber(data)}
              onSend={handleNumberSend}
              onConfirm={handleNumberConfirm}
              formList={contacts?.phoneNumbers}
              userContact={contacts?.phoneNumber}
              onFormClose={() => saveUserNumber(null)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.itemContainer}>
            <h4>{lang.email}</h4>
            <FormContainer
              onStatusChange={(data) => toggleEmailActivity(data)}
              type="email"
              visible={contacts?.emailconfirmed}
              title={lang.email}
              onRemove={(data) => removeEmail(data)}
              onSend={handleEmailSend}
              onConfirm={handleEmailConfirm}
              formList={contacts?.emails}
              userContact={contacts?.emailAddress}
              onFormClose={() => saveUserEmail(null)}
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  ) : (
    <div>
      <Tabs
        value={tab}
        centered={false}
        variant="scrollable"
        scrollButtons="auto"
        classes={{
          indicator: classes.indicator,
          root: classes.mobileTabRoot,
        }}
        onChange={handleTabChange}
      >
        <Tab disabled={pageLoading} label={lang.contactNumber} />
        <Tab disabled={pageLoading} label={lang.email} />
      </Tabs>

      <TabPanel value={tab} index={0}>
        <div className={classes.itemContainer}>
          <h4>{lang.contactNumber}</h4>
          <FormContainer
            onStatusChange={(data) => toggleNumberActivity(data)}
            type="number"
            title={lang.contactNumber}
            visible={contacts?.numberConfirmed}
            onRemove={(data) => removeNumber(data)}
            onSend={handleNumberSend}
            onConfirm={handleNumberConfirm}
            formList={contacts?.phoneNumbers}
            userContact={contacts?.phoneNumber}
            onFormClose={() => saveUserNumber(null)}
          />
        </div>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <div className={classes.itemContainer}>
          <h4>{lang.email}</h4>
          <FormContainer
            onStatusChange={(data) => toggleEmailActivity(data)}
            type="email"
            visible={contacts?.emailconfirmed}
            title={lang.email}
            onRemove={(data) => removeEmail(data)}
            onSend={handleEmailSend}
            onConfirm={handleEmailConfirm}
            formList={contacts?.emails}
            userContact={contacts?.emailAddress}
            onFormClose={() => saveUserEmail(null)}
          />
        </div>
      </TabPanel>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  contacts: state.myInfo.contacts,
  loading: state.myInfo.loading,
  localToken: state.user.localToken,
  pageLoading: state.user.pageLoading,
});

export default withWidth()(connect(mapStateToProps, MyinfoActions)(SmsInfo));
