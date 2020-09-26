import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    alert: {
      marginTop: theme.spacing(6),
      padding: 0,
      width: "100%",
      "& .MuiAlert-icon": {
        display: "flex",
        alignItems: "center",
      },
    },
    alertError: {
      "& .MuiAlert-icon": {
        alignItems: "flex-start",
        paddingTop: theme.spacing(1.2),
      },
    },
    alertTitle: {
      margin: 0,
    },
    checkSuccessContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    successAlertMessage: {
      width: "100%",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
