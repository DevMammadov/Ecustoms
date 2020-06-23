import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { infoTabEnum } from "enum";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { useStyles } from "../my-info.style";
import { BankInfo, CustomWarehouses, Info, Permission, SmsInfo } from "../tabs";
import { useTranslator } from "localization";

export const MyInfoMobile = ({ page }: any) => {
  const lang = useTranslator("myInfo");
  const [tab, setTab] = useState<number>(0);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    let tab = Number(_.invert(infoTabEnum)[page]) || 0;
    setTab(tab);
  }, [page]);

  const handleChange = (e: any) => {
    history.push(`/my-info/${infoTabEnum[e.target.value as keyof typeof infoTabEnum]}`);
    if (e.target.value !== tab) {
      setTab(e.target.value);
      console.log(tab);
    }
  };

  const renderSelectedTab = () => {
    switch (tab) {
      case 0:
        return <Info />;
      case 1:
        return <Permission />;
      case 2:
        return <BankInfo />;
      case 3:
        return <CustomWarehouses />;
      case 4:
        return <SmsInfo />;
    }
  };

  const renderLabel = (index: number) => {
    switch (index) {
      case 0:
        return lang.myInfo;
      case 1:
        return lang.myPermissions;
      case 2:
        return lang.bankInformation;
      case 3:
        return lang.customsWarehouses;
      case 4:
        return lang.emailMessaging;
    }
  };

  return (
    <>
      <Select
        value={tab}
        className={classes.mobileSelectRoot}
        classes={{ select: classes.mobileSelect }}
        onChange={(e) => handleChange(e)}
      >
        {Object.keys(infoTabEnum).map((val) => (
          <MenuItem key={val} value={val}>
            {renderLabel(Number(val))}
          </MenuItem>
        ))}
      </Select>
      <div>{renderSelectedTab()}</div>
    </>
  );
};
