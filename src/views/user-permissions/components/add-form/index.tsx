import React, { FC, useState } from "react";
import { useStyles } from "./add-form.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Select, TextField } from "components/shared";
import { IconButton, MenuItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { UserPermissionsActions } from "views/user-permissions/store/action";
import clsx from "clsx";
import { IPermissionPayload, IUserCardType, IUserToUpdate } from "views/user-permissions/types";

export interface IAddForm {
  className?: string;
  user: IUserToUpdate;
  onSearch(pin: string): void;
  onSertChange(data: IPermissionPayload): void;
}

const AddForm: FC<IAddForm> = ({ className, user, onSearch, onSertChange }) => {
  const lang = useTranslator();
  const [values, setValues] = useState({ pinCode: "", sertificate: -1, signature: -1 });
  const classes = useStyles();

  const handleInputChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values.sertificate);
  };

  const handleSertNumberChange = (event: any) => {
    onSertChange({ signature: event.target.value, pin: values.pinCode });
    handleInputChange(event);
  };

  return (
    <div className={clsx(classes.container, className)}>
      <TextField
        label={lang.pinCode}
        value={values.pinCode}
        onChange={handleInputChange}
        className={classes.searchInput}
        name="pinCode"
        focused={!values.pinCode}
        InputProps={{
          endAdornment: (
            <IconButton className={classes.searchButton} onClick={() => onSearch(values.pinCode)}>
              <FontAwesomeIcon className={classes.searchIcon} icon={faSearch} />
            </IconButton>
          ),
        }}
      />
      <TextField label={`${lang.lastName}, ${lang.name}, ${lang.patronymic}`} disabled value={user.fullName || ""} />
      <Select
        value={values.sertificate}
        onChange={handleInputChange}
        label={lang.selectSugnaType}
        name="sertificate"
        disabled={!user.userSignatureList}
      >
        <MenuItem value={-1}>İmza növünü seçin</MenuItem>
        {user.userSignatureList?.map((signa: IUserCardType, index: number) => (
          <MenuItem key={index} value={signa.cardType}>
            {signa.cardType === 1 ? lang.electronicSignature : lang.asanSignature}
          </MenuItem>
        ))}
      </Select>
      <Select
        value={values.signature}
        onChange={handleSertNumberChange}
        label={lang.selectSignatureNumber}
        name="signature"
        disabled={values.sertificate === -1}
      >
        <MenuItem value={-1}>İmza növünü seçin</MenuItem>
        {user.userSignatureList
          ?.filter((u) => u.cardType === values.sertificate)[0]
          ?.signatureNumber?.map((signa: string, index: number) => (
            <MenuItem key={index} value={signa}>
              {signa}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({});
export default connect(mapStateToProps, UserPermissionsActions)(AddForm);
