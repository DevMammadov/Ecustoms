import React, { FC } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { useStyles } from "./settings.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/pro-solid-svg-icons";

interface ISettingsPage {
  onThemeChange(thme: string): void;
  selected: string;
}

export const Settings: FC<ISettingsPage> = ({ onThemeChange, selected }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (theme: string) => {
    localStorage.setItem("theme", theme);
    onThemeChange(theme);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} className={classes.settings}>
        <FontAwesomeIcon icon={faTh} className={classes.icon} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose(selected)}
      >
        <MenuItem selected={selected === "darkTheme"} onClick={() => handleClose("darkTheme")}>
          Dark theme
        </MenuItem>
        <MenuItem selected={selected === "lightTheme"} onClick={() => handleClose("lightTheme")}>
          Light theme
        </MenuItem>
      </Menu>
    </div>
  );
};
