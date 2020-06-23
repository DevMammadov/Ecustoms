import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as MIcon from "@fortawesome/pro-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useStyles } from "./menu.style";

interface IMenuPage {
  menu: any[];
  onMenuClick(): void;
  collapsed: boolean;
  isLoggedIn: boolean;
  isMobile: boolean;
}

export const Menu: FC<IMenuPage> = ({ menu, onMenuClick, collapsed, isLoggedIn, isMobile }) => {
  const classes = useStyles();

  const handleMenuClick = () => {
    onMenuClick();
  };

  const findIcon = (name: string) => {
    return (
      name && (
        <div className={classes.iconContaioner}>
          <FontAwesomeIcon className={classes.icon} icon={MIcon[name as keyof typeof MIcon] as IconProp} />
        </div>
      )
    );
  };

  const renderLink = (link: string, icon: string, title: string) => {
    return link.includes("http") ? (
      <a href={link}>
        {findIcon(icon)}
        <span>{title}</span>
      </a>
    ) : (
      <NavLink onClick={handleMenuClick} to={link}>
        {findIcon(icon)}
        <span>{title}</span>
      </NavLink>
    );
  };

  const checkAuth = (menu: any) => {
    if (isLoggedIn && menu.auth === "1") {
      return false;
    } else if (!isLoggedIn && menu.auth === "1") {
      return true;
    } else if (isLoggedIn && menu.auth === "0") {
      return true;
    } else if (!isLoggedIn && menu.auth === "0") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ul className={classes.menu}>
      {menu.map((item: any) => (
        <li key={item.title}>
          {renderLink(item.link, item.icon, item.title)}
          <ul>
            {item.menu
              .filter((i: any) => checkAuth(i))
              .map((subMenu: any) => (
                <li key={subMenu.title}>
                  <Tooltip
                    placement="right"
                    disableHoverListener={!collapsed || !isMobile}
                    disableTouchListener
                    title={subMenu.title}
                    arrow
                  >
                    {renderLink(subMenu.link, subMenu.icon, subMenu.title)}
                  </Tooltip>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
