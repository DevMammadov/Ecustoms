import { Tab, Tabs } from "@material-ui/core";
import { infoTabEnum } from "enum";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TabPanel } from "../components/tab-panel";
import { useStyles } from "../my-info.style";
import { BankInfo, CustomWarehouses, Permission, SmsInfo, Info } from "../tabs";
import { Spinner } from "components/shared";
import { useUser } from "hooks";
import { useTranslator } from "localization";

export const MyInfoDesktop = ({ page }: any) => {
  const [tab, setTab] = useState(0);
  const classes = useStyles();
  const lang = useTranslator("myInfo");
  const history = useHistory();
  const currentUser = useUser();

  useEffect(() => {
    let tab = Number(_.invert(infoTabEnum)[page]) || 0;
    setTab(tab);
  }, [page]);

  const handleTabChange = (event: any, newValue: any) => {
    history.push(`/my-info/${infoTabEnum[newValue as keyof typeof infoTabEnum]}`);
    setTab(newValue);
  };

  return (
    <>
      <div style={{ opacity: currentUser.pageLoading ? 0.5 : 1 }}>
        <Tabs
          value={tab}
          centered={false}
          variant="scrollable"
          scrollButtons="auto"
          classes={{
            root: classes.tabRoot,
          }}
          onChange={handleTabChange}
        >
          <Tab disabled={currentUser.pageLoading} label={lang.myInfo} />
          <Tab disabled={currentUser.pageLoading} label={lang.myPermissions} />
          <Tab disabled={currentUser.pageLoading} label={lang.bankInformation} />
          <Tab disabled={currentUser.pageLoading} label={lang.customsWarehouses} />
          <Tab disabled={currentUser.pageLoading} label={lang.emailMessaging} />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <Info />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Permission />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <BankInfo />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <CustomWarehouses />
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <SmsInfo />
        </TabPanel>
      </div>
      <Spinner hidden={!currentUser.pageLoading} />
    </>
  );
};
