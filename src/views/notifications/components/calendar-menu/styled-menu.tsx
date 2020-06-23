import { withStyles, MenuProps, Menu } from "@material-ui/core";
import React from "react";

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    maxHeight: "450px",
    width: "310px",
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
