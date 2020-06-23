import React from "react";
import { useStyles } from "./aside.style";
import menuData from "../../../data/menu.json";
import { Menu } from "./components/menu";
import logo from "assets/logo.png";
import clsx from "clsx";
import { IconButton, Icon, withWidth, isWidthUp } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useUser } from "hooks";

interface IProps {
  collapse: boolean;
  className: string;
  setCollapse(collapse: boolean): void;
  width: any;
}

const Aside = ({ collapse, className, setCollapse, width }: IProps) => {
  const classes = useStyles();
  const currentUser = useUser();

  return (
    <div className={clsx(collapse && classes.collapse, classes.aside, className)}>
      <div className={classes.logo}>
        <div className={classes.logoContainer}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img draggable="false" alt="GDK logo" src={logo} />
            <span>e-customs</span>
          </Link>
        </div>
        <IconButton onClick={() => setCollapse(!collapse)} className={classes.closeButton}>
          <Icon>menu</Icon>
        </IconButton>
      </div>
      <div>
        <Menu
          menu={menuData}
          isLoggedIn={currentUser.isLogin}
          isMobile={isWidthUp("sm", width)}
          collapsed={collapse}
          onMenuClick={() => !isWidthUp("md", width) && setCollapse(!collapse)}
        />
      </div>
    </div>
  );
};

export default withWidth()(Aside);
