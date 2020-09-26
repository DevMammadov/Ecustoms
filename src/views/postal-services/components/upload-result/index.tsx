import React, { FC, useState } from "react";
import { useStyles } from "./upload-result.style";
import { useTranslator } from "localization";
import { Tabs, Tab, List, ListItem } from "@material-ui/core";
import { TabPanel } from "./tabPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faExclamation } from "@fortawesome/pro-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IFailWarning } from "views/postal-services/types";
import clsx from "clsx";
import { Copy } from "components/shared";

export interface IUploadResult {
  showWarnTab?: boolean;
  showErrTab?: boolean;
  errTitle?: string;
  warnTitle?: string;
  errCount?: number;
  warnCount?: number;
  errList?: IFailWarning[];
  warnList?: IFailWarning[];
  errContentTitle?: string;
  warnContentTitle?: string;
  className?: string;
  showErrReason?: boolean;
}

export const UploadResult: FC<IUploadResult> = ({
  errContentTitle,
  errCount = 0,
  errList,
  errTitle,
  showErrTab = true,
  showWarnTab = true,
  showErrReason = true,
  warnContentTitle,
  warnCount = 0,
  warnList,
  warnTitle,
  className,
}) => {
  const [value, setValue] = useState(showErrTab ? 1 : 2);
  const lang = useTranslator("postal-services");
  const classes = useStyles();

  const renderTabTitle = (icon: IconProp, title: string, count: number) => {
    return (
      <span>
        <FontAwesomeIcon icon={icon} /> {title} ( {count} )
      </span>
    );
  };

  return (
    <div className={clsx(className)}>
      <Tabs
        value={value}
        classes={{ indicator: classes.TabIndicator, root: classes.tabs }}
        onChange={(e: any, v: number) => setValue(v)}
      >
        {showErrTab && <Tab value={1} label={renderTabTitle(faTimes, errTitle || lang.noSendedGoods, errCount)} />}
        {showWarnTab && (
          <Tab value={2} label={renderTabTitle(faExclamation, warnTitle || lang.existGoods, warnCount)} />
        )}
      </Tabs>
      <TabPanel header={errContentTitle} value={1} index={value}>
        <List>
          {errList?.map((err, index) => (
            <ListItem key={index}>
              <Copy className={classes.copyText} tooltip={lang.copy} text={err.index} />
              {showErrReason && <span> {err.message}</span>}
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel header={warnContentTitle} value={2} index={value}>
        <List>
          {warnList?.map((warn, index) => (
            <ListItem key={index}>
              <b>
                {index + 1}) <Copy className={classes.copyText} tooltip={lang.copy} text={warn.index} />
              </b>
            </ListItem>
          ))}
        </List>
      </TabPanel>
    </div>
  );
};
