import React from "react";
import { Menu, Fab, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useStyles } from "../giving-permissions.style";
import AddIcon from "@material-ui/icons/Add";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useHistory } from "react-router-dom";
import { useTranslator } from "localization";

export const MobileAddButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const history = useHistory();
  const lang = useTranslator("givingPermission");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Fab aria-label="add" onClick={handleClick} className={classes.mobileAddButton} color="primary">
        <AddIcon />
      </Fab>
      <Menu
        id="mobile-menu"
        elevation={0}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        classes={{ paper: classes.mobileMenuPaper }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={() => history.push(`/giving-permissions/manage/`)}>
          <ListItemIcon>
            <PersonAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{lang.addNewPermission}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
