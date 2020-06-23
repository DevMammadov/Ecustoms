import { withStyles, MenuProps, MenuItem, Menu } from "@material-ui/core";
import React from "react";

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    maxHeight: "450px",
    width: "410px",
    "& .Mui-disabled": {
      opacity: 1,
    },
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    whiteSpace: "break-spaces",
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {},
    },
    "& div": {
      fontWeight: "bold",
      fontSize: "0.8rem",
    },
    "& span": {
      fontSize: "0.8rem",
    },
  },
}))(MenuItem);
