import React, { FC, useState } from "react";
import { useStyles } from "../../tabs/sms-info/sms-info.style";
import { TextField } from "components/shared/form/";
import { IUserField } from "../../types";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import { Popup } from "components/shared/popup";
import { IToggleActivityPayload } from "../../types";

export interface IUpdateForm {
  field: IUserField;
  title: string;
  onStatusChange(data: IToggleActivityPayload): void;
  onRemove(data: number): void;
}

export const UpdateForm: FC<IUpdateForm> = ({ field, title, onStatusChange, onRemove }) => {
  const [pupopVisible, setPupopVisible] = useState(false);
  const classes = useStyles();

  const handleRemove = () => {
    onRemove(field.orderNumber);
    setPupopVisible(false);
  };

  const handleSwitchChange = (e: any) => {
    let status = e.target.value === "1" ? 0 : 1;
    onStatusChange({ status: status, order: field.orderNumber });
  };

  return (
    <form className={classes.updateForm}>
      <div>
        <span> {title} </span>
        <Switch
          checked={field.active === 1}
          onChange={(e) => handleSwitchChange(e)}
          color="primary"
          value={field.active}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
      <div>
        <TextField value={field.field} disabled={true} name="text" />
        <Button
          onClick={() => setPupopVisible(true)}
          variant="contained"
          color="primary"
          className={classes.removeButton}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      </div>
      <Popup
        title="Silmək istədiyinizə əminsiniz?"
        type="remove"
        open={pupopVisible}
        onAllow={handleRemove}
        children={null}
        onDeny={() => setPupopVisible(false)}
      />
    </form>
  );
};
