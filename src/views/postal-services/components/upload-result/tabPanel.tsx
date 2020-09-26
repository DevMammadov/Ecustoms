import React, { FC } from "react";
import { useStyles } from "./upload-result.style";

export interface ITabPanel {
  children?: React.ReactNode;
  header?: string;
  index: number;
  value: number;
}

export const TabPanel: FC<ITabPanel> = ({ children, value, index, header }) => {
  const classes = useStyles();
  return value === index ? (
    <div className={classes.tabPanel}>
      <div>
        <div className={classes.tabPanelHeader}>{header}</div>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};
