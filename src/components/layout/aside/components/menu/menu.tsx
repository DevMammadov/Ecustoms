import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { useStyles } from "./menu.style";
import { renderLink, checMenuAuth } from "../../helpers";
import clsx from "clsx";

interface IMenuPage {
  menu: any[];
  onMenuClick(): void;
  collapsed: boolean;
  isLoggedIn: boolean;
  isMobile: boolean;
}

export const Menu: FC<IMenuPage> = ({ menu, onMenuClick, collapsed, isLoggedIn, isMobile }) => {
  const classes = useStyles();

  return (
    <ul className={classes.menu}>
      {menu.map((item: any) => (
        <li key={item.title}>
          <NavLink className={clsx(!collapsed && classes.hideLink)} to="#">
            {item.title}
          </NavLink>
          <ul>
            {item.menu
              .filter((i: any) => checMenuAuth(i, isLoggedIn))
              .map((subMenu: any) => (
                <li key={subMenu.title}>
                  <Tooltip
                    placement="right"
                    disableHoverListener={collapsed || !isMobile}
                    disableTouchListener
                    title={subMenu.title}
                    arrow
                  >
                    {renderLink(subMenu.link, subMenu.title, subMenu.icon, onMenuClick)}
                  </Tooltip>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
