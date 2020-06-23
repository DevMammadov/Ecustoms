import { MenuItem, Select, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "../giving-permissions.style";
import { ISignatureListPage } from "../types";
import { useTranslator } from "localization";

export const SignatureList: FC<ISignatureListPage> = ({ signatures, onSelect, selected, disabled }) => {
  const lang = useTranslator("givingPermission", ["myInfo"]);
  const classes = useStyles();

  const handleChange = (e: any) => {
    onSelect(e.target.value);
  };

  return (
    <div>
      <Typography component="div" className={classes.inputLabel}>
        {lang.selectSignatureNumber}
      </Typography>
      <Select
        value={selected ? selected : "null"}
        className={classes.sertificateSelect}
        onChange={handleChange}
        disabled={disabled}
      >
        <MenuItem selected value="null">
          İmza nömrəsini seçin
        </MenuItem>
        {signatures &&
          signatures.map((signa: string, index: number) => (
            <MenuItem key={index} value={signa}>
              {signa}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};
