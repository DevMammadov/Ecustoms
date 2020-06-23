import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    messageBox: {
      position: "relative",
      cursor: "pointer",
      padding: "3px 0 10px",
      height: "30px",
      width: "30px",
      fontSize: "25px",
      boxShadow: "none",
    },
    icon: {
      color: theme.palette.color.darkGray,
      opacity: 0.5,
    },
    notifyHeader: {
      textAlign: "center",
      "& .MuiListItemText-primary": {
        fontWeight: "bold",
        color: theme.palette.custom.textPrimary,
        fontSize: "0.8rem",
      },
    },
    notifyBody: {
      maxHeight: "350px",
      overflowY: "auto",
    },
    headerIcon: {
      fontSize: "0.9rem",
      marginRight: theme.spacing(1),
    },
    lastItem: {
      textAlign: "center",
      "& .MuiListItemText-primary": {
        fontWeight: "bold",
        color: theme.palette.custom.textPrimary,
        fontSize: "0.9rem",
      },
    },
    green: {
      backgroundColor: green[400],
    },
    readedNotify: {
      background: theme.palette.custom.grayToDark,
    },
  };
});
