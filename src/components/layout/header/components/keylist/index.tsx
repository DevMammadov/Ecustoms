import React, { FC, useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./keylist.style";
import { ISertificate } from "types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faSpinnerThird } from "@fortawesome/pro-light-svg-icons";
import { useTranslator } from "localization";

interface ISelectProps {
  onChange(key: string | null): void;
  className?: string;
  sertificates: ISertificate[];
  selected: string | undefined;
  loading?: boolean;
}

export const Keylist: FC<ISelectProps> = ({ onChange, className, sertificates, selected, loading }) => {
  const classes = useStyles();
  const [sertificate, setSertificate] = useState<string | undefined>(selected);
  const lang = useTranslator("main");

  const handleChange = (e: any) => {
    setSertificate(e.target.value);
    onChange(e.target.value);
  };

  const renderList = (list: ISertificate[] | undefined) => {
    return (
      <Select
        value={sertificate}
        classes={{ root: classes.selectRoot, select: classes.select }}
        onChange={(e) => handleChange(e)}
      >
        {list &&
          list.map((serificate: ISertificate) => (
            <MenuItem key={serificate.certificateNumber} value={serificate.certificateNumber}>
              {serificate.structureData
                ? `${serificate.structureData.voen} - ${serificate.structureData.positionName}`
                : lang.citizen}
            </MenuItem>
          ))}
      </Select>
    );
  };

  const renderLeftIcon = () => {
    return (
      <div className={classes.selectIcon}>
        <FontAwesomeIcon spin={loading} className={classes.keyIcon} icon={loading ? faSpinnerThird : faKey} />
      </div>
    );
  };

  return (
    <div className={clsx(classes.selectBox, className && className)}>
      {renderLeftIcon()}
      {renderList(sertificates)}
    </div>
  );
};
