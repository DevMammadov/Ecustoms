import { Grid, withWidth, isWidthUp, Typography, Paper } from "@material-ui/core";
import React, { FC, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { ICheckboxes } from "../types";
import { IPersmission } from "../types";
import { useHistory } from "react-router-dom";
import { useStyles } from "../giving-permissions.style";
import { SectionHeader, Spinner, Button } from "components/shared";
import { PermissionCheckList } from "./permission-checkList";
import { useTranslator } from "localization";

const Checkboxes: FC<ICheckboxes> = ({ permissions, onCheck, onSend, loading, width, title }) => {
  const classes = useStyles();
  const history = useHistory();
  const lang = useTranslator("givingPermission");
  const { handleSubmit } = useForm<IPersmission>();

  const onSubmit = (data: IPersmission) => {
    onSend();
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    let StateCopy = { ...permissions };
    const value = Number(e.currentTarget.value) === 1 ? 0 : 1;

    if (e.currentTarget.name in StateCopy.infoPermissions) {
      StateCopy.infoPermissions[e.currentTarget.name as keyof typeof StateCopy.infoPermissions] = value;
    } else {
      StateCopy.mainPermissions[e.currentTarget.name as keyof typeof StateCopy.mainPermissions] = value;
    }

    onCheck(StateCopy);
  };

  const renderForm = () => {
    return (
      permissions &&
      Object.keys(permissions).length > 0 && (
        <Paper className={classes.formPaper}>
          {title && <SectionHeader title={title} size="small" />}
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <Typography component="div" className={classes.checkboxContainer}>
              {isWidthUp("sm", width) ? (
                <>
                  <PermissionCheckList sort="up" permissions={permissions} onchange={handleChange} />
                  <PermissionCheckList sort="down" permissions={permissions} onchange={handleChange} />
                </>
              ) : (
                <PermissionCheckList permissions={permissions} onchange={handleChange} />
              )}
            </Typography>
            <Typography component="div" className={classes.checkboxexSubmitButton}>
              <Button onClick={() => history.push("/giving-permissions")} color="primary">
                {lang.deny}
              </Button>
              <Button disabled={loading} variant="contained" type="submit" color="primary">
                {lang.save}
              </Button>
            </Typography>
          </form>
        </Paper>
      )
    );
  };

  return (
    <Grid item xs={12}>
      {permissions && Object.keys(permissions).length <= 0 && loading ? <Spinner /> : renderForm()}
    </Grid>
  );
};

export default withWidth()(Checkboxes);
