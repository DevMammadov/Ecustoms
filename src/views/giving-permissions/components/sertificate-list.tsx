import { MenuItem, Select, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { IWorkerCartType } from "../types";
import { useStyles } from "../giving-permissions.style";
import { ISertificatePage } from "../types";
import { useTranslator } from "localization";

export const SertificateList: FC<ISertificatePage> = ({ singleWorler, onSelect, selected }) => {
  const lang = useTranslator("givingPermission", ["myInfo"]);
  const classes = useStyles();

  const handleChange = (e: any) => {
    onSelect(e.target.value);
  };

  return (
    <div>
      <Typography component="div" className={classes.inputLabel}>
        {lang.selectSignatureType}
      </Typography>
      <Select
        value={selected ? selected : -1}
        className={classes.sertificateSelect}
        onChange={handleChange}
        disabled={!singleWorler.userSignatureList}
      >
        <MenuItem value={-1}>İmza növünü seçin</MenuItem>
        {singleWorler.userSignatureList &&
          singleWorler.userSignatureList.map((signa: IWorkerCartType, index: number) => (
            <MenuItem key={index} value={signa.cardType}>
              {signa.cardType === 1 ? lang.electronicSignature : lang.asanSignature}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};
