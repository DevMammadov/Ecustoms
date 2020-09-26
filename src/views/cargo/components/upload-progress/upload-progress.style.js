import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    alert: {
      marginTop: theme.spacing(6),
      width: "100%",
      "& .MuiAlert-icon": {
        alignItems: "center",
      },
    },
    alertTitle: {
      margin: 0,
    },
    alertContent: {
      flex: 1,
      paddingRight: theme.spacing(3),
      display: "flex",
      alignItems: "center",
    },
    checkSuccessContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      width: "100%",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
