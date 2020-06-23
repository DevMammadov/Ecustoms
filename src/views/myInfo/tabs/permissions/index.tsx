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

export interface IPermissionPage {
  width: any;
  localToken: string;
}

const Permission: FC<IPermissionPage> = ({ width, localToken }) => {
  const lang = useTranslator("myInfo");
  const classes = useStyles();
  const [permissions, setPermissions] = useState<IMainPermissions & IInfoPermissions>({} as any);

  useEffect(() => {
    const decoded: ILocalTokenDecoded = decode(localToken) as ILocalTokenDecoded;
    setPermissions(decoded.permissions);
  }, [localToken]);

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

const mapStateToProps = (state: IAppState) => ({
  localToken: state.user.localToken,
});
export default connect(mapStateToProps, MyinfoActions)(withWidth()(Permission));
