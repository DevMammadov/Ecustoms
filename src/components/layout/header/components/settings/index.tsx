import React, { FC } from "react";
import { IconButton, Menu } from "@material-ui/core";
import { useStyles } from "./settings.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GovList } from "./govList";
import { faTh } from "@fortawesome/pro-solid-svg-icons";
import { useTranslator } from "localization";

interface ISettingsPage {
  onThemeChange(thme: string): void;
  selected: string;
}

export const Settings: FC<ISettingsPage> = ({ onThemeChange, selected }) => {
  const classes = useStyles();
  const lang = useTranslator("header");

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
      <IconButton onClick={handleClick} className={classes.settings} aria-controls="simple-menu" aria-haspopup="true">
        <FontAwesomeIcon icon={faTh} className={classes.icon} />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(selected)}
        classes={{ paper: classes.menuRoot }}
      >
        <h6 className={classes.menuHeader}>{lang.asanLoginConnectedSystems}</h6>
        <GovList />
      </Menu>
    </div>
  );
};
