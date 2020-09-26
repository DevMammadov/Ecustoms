import React, { FC, useEffect } from "react";
import { useStyles } from "./add-permission.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { UserPermissionsActions } from "../../store/action";
import { Grid, Paper } from "@material-ui/core";
import { BackButton, Button, Checkbox, SectionHeader, Spinner } from "components/shared";
import { AddForm, PermissionCheckList } from "views/user-permissions/components";
import { IUserPermissionState } from "views/user-permissions/store/reducer";
import { IPermissionPayload } from "views/user-permissions/types";
import { IInfoPermissions, IMainPermissions, IPersmission } from "types";

export interface IAddPermission {
  userPermState: IUserPermissionState;
  getUserPerms(data: IPermissionPayload): void;
  getAllPermissions(): void;
  searchByPin(pin: string): void;
}

const AddPermission: FC<IAddPermission> = ({ userPermState, searchByPin, getUserPerms, getAllPermissions }) => {
  const lang = useTranslator();
  const classes = useStyles();

  useEffect(() => {
    getAllPermissions();
  }, []);

  const _getAllPermissions = (): any => {
    const perms = userPermState.user.permissions ? userPermState.user.permissions : userPermState.allPermissions;
    if (perms) {
      return {
        ...perms.infoPermissions,
        ...perms.mainPermissions,
      };
    } else {
      return {} as any;
    }
  };

  return (
    <Grid container>
      <SectionHeader title={lang.users} />
      <Grid container component={Paper} className={classes.container}>
        <BackButton />
        <Grid item xs={6} className={classes.formContainer}>
          <AddForm
            onSertChange={(data) => getUserPerms(data)}
            user={userPermState.user}
            onSearch={(pin: string) => searchByPin(pin)}
            className={classes.addForm}
          />
        </Grid>
        <Grid item xs={6} style={{ position: "relative" }}>
          {userPermState.allPermissions ? (
            <form>
              {Object.keys(_getAllPermissions()).map((key: string) => (
                <Checkbox
                  onChange={(e: any) => {}}
                  name={key}
                  checked={_getAllPermissions()[key as keyof IMainPermissions & IInfoPermissions] === 1}
                  value={_getAllPermissions()[key] || "0"}
                  disabled={!userPermState.user.permissions}
                  key={key}
                  label={lang[key]}
                  color="primary"
                />
              ))}
              <div>
                <Button
                  type="submit"
                  disabled={!userPermState.user.permissions}
                  className={classes.sendButton}
                  disableLoader
                  variant="contained"
                  color="primary"
                >
                  {lang.approve}
                </Button>
              </div>
            </form>
          ) : (
            <Spinner />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ userPermState: state.userPermissions });
export default connect(mapStateToProps, UserPermissionsActions)(AddPermission);
