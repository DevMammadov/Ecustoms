import React, { FC } from "react";
import { useStyles } from "./aside.style";
import menuData from "../../../data/menu.json";
import { Menu } from "./components/menu";
import logo from "assets/logo.png";
import clsx from "clsx";
import { IconButton, withWidth, isWidthUp, Drawer, Hidden, SwipeableDrawer, isWidthDown } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useUser } from "hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import { Keylist } from "../header/components";
import { ISertificate } from "types";
import { setToStorage } from "helpers/storage";
import { useDispatch } from "react-redux";
import { sendToken } from "views/login/store/action";

interface IAside {
  open: boolean;
  className: string;
  setCollapse(collapse: boolean): void;
  width: any;
}

const Aside: FC<IAside> = ({ open, className, setCollapse, width }) => {
  const classes: any = useStyles();
  const currentUser = useUser();
  const dispatch = useDispatch();

  const handleSertificateSelect = (sertNumber: string) => {
    if (currentUser.isLogin) {
      const voen =
        currentUser.sertificates.filter((sert: ISertificate) => sert.certificateNumber === sertNumber)[0].structureData
          ?.voen || "null";
      dispatch(sendToken({ token: currentUser.asanToken, voen: voen }));
      setToStorage("selectedSert", currentUser.sertificates.filter((c) => c.certificateNumber === sertNumber)[0]);
      //hubConn.stop();
    }
  };

  const drawer = (
    <>
      <div className={classes.logo}>
        <div>
          <Link to="/">
            <img draggable="false" alt="GDK logo" src={logo} />
            <span>e-customs</span>
          </Link>
        </div>
        <Hidden smUp implementation="js">
          <IconButton onClick={() => setCollapse(!open)} className={classes.closeButton}>
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </Hidden>
      </div>
      <div className={classes.keylistContainer}>
        {currentUser.loginType !== "loginWithPassword" && currentUser.isLogin && isWidthDown("sm", width) && (
          <Keylist
            sertificates={currentUser.sertificates}
            selected={currentUser.selectedSertificate?.certificateNumber}
            onChange={handleSertificateSelect}
            className={classes.keylist}
            loading={currentUser.pageLoading}
          />
        )}
      </div>
      <div>
        <Menu
          menu={menuData}
          isLoggedIn={currentUser.isLogin}
          isMobile={isWidthUp("sm", width)}
          collapsed={open}
          onMenuClick={() => !isWidthUp("md", width) && setCollapse(!open)}
        />
      </div>
    </>
  );

  return (
    <>
      <Hidden smUp implementation="js">
        <SwipeableDrawer
          classes={{ paper: classes.mobileDrawerPaper }}
          open={open}
          onOpen={() => setCollapse(true)}
          onClose={() => setCollapse(false)}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.drawePaper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default withWidth()(Aside);
