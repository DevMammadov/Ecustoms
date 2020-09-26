import { Grid, withWidth, isWidthUp, Paper } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { MyinfoActions } from "views/myInfo/store/action";
import { useStyles } from "./permission.style";
import { PermissionCheckList } from "views/giving-permissions/components/permission-checkList";
import { decode } from "jsonwebtoken";
import { ILocalTokenDecoded } from "types";
import { IMainPermissions, IInfoPermissions } from "views/giving-permissions/types";
import { useTranslator } from "localization";
import { useUser } from "hooks";

export interface IPermissionPage {
  width: any;
}

const Permission: FC<IPermissionPage> = ({ width }) => {
  const lang = useTranslator("myInfo");
  const classes = useStyles();
  const [permissions, setPermissions] = useState<IMainPermissions & IInfoPermissions>({} as any);
  const currentUser = useUser();

  useEffect(() => {
    const decoded: ILocalTokenDecoded = decode(currentUser.localToken) as ILocalTokenDecoded;
    setPermissions(decoded.permissions);
  }, [currentUser.localToken]);

  return (
    <Grid container component={Paper} className={classes.container}>
      <Grid item xs={12}>
        <h4 className={classes.sectionTitle}> {lang.permissions} </h4>
      </Grid>
      {isWidthUp("sm", width) ? (
        <>
          <Grid item xs={6}>
            <PermissionCheckList renderall sort="up" permissions={permissions} />
          </Grid>
          <Grid item xs={6}>
            <PermissionCheckList renderall sort="down" permissions={permissions} />
          </Grid>
        </>
      ) : (
        <PermissionCheckList renderall permissions={permissions} />
      )}
    </Grid>
  );
};

export default connect(null, MyinfoActions)(withWidth()(Permission));
