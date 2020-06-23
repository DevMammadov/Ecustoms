import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: "relative",
    },
    updateButton: {
      position: "absolute",
      top: theme.spacing(3),
      right: theme.spacing(2),
    },
    tableContainer: {
      position: "relative",
    },
    alertContainer: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "& .MuiAlertTitle-root": {
        fontWeight: "bold !important",
      },
      "& .MuiAlert-message": {
        fontSize: "1rem",
      },
      "& .MuiAlert-icon": {
        fontSize: "25px",
      },
    },
    alertIcon: {
      fontSize: "5rem",
    },
    alertPageContainer: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
