import React from "react";
import * as MIcon from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./components/menu/menu.style";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { emptyStorage } from "helpers/storage";

const findIcon = (name: string) => {
  return (
    name && (
      <div>
        <FontAwesomeIcon icon={MIcon[name as keyof typeof MIcon] as IconProp} />
      </div>
    )
  );
};

export const renderLink = (link: string, title: string, icon: string, handleMenuClick: any) => {
  if (link.includes("http")) {
    return (
      <a target="_blank" href={link}>
        {findIcon(icon)}
        <span>{title}</span>
      </a>
    );
  } else if (link.includes("/logout")) {
    // logout button
    return (
      <a onClick={() => emptyStorage()} href={process.env.REACT_APP_ASAN_BASE_URL}>
        {findIcon(icon)}
        <span>{title}</span>
      </a>
    );
  } else {
    return (
      <NavLink onClick={handleMenuClick} to={link}>
        {findIcon(icon)}
        <span>{title}</span>
      </NavLink>
    );
  }
};

export const checMenuAuth = (menu: any, isLoggedIn: boolean) => {
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
