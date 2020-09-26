import React, { FC } from "react";
import { useStyles } from "./form-header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarker, faKey } from "@fortawesome/pro-light-svg-icons";

export interface IFormHeader {
  voen: string;
  company: string;
  address: string;
}

export const FormHeader: FC<IFormHeader> = ({ voen, company, address }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <FontAwesomeIcon className={classes.headerIcon} icon={faKey} />
        <div>{voen}</div>
      </div>
      <div>
        <FontAwesomeIcon className={classes.headerIcon} icon={faUser} />
        <div>{company}</div>
      </div>
      <div>
        <FontAwesomeIcon className={classes.headerIcon} icon={faMapMarker} />
        <div>{address}</div>
      </div>
    </div>
  );
};
