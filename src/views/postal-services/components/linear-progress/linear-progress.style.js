import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(4),
      background: theme.palette.success.light,
      padding: theme.spacing(0.5),
      borderRadius: 4,
      color: "rgb(16, 81, 60);",
    },
    procent: {
      position: "absolute",
      left: "calc(50% - 80px)",
      transform: "translateX(-50%)",
      //background: theme.palette.success.light,
    },
    progressContent: {
      width: 210,
      textAlign: "right",
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(0, 0.5),
    },
    progress: {
      height: 10,
      borderRadius: 5,
      width: "100%",
    },
    progressBar: {
      borderRadius: 5,
      backgroundColor: theme.palette.success.main,
    },
    contentIcon: {
      fontSize: "1rem",
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1),
    },
    error: {
      color: theme.palette.danger.main,
    },
    warn: {
      color: theme.palette.warning.main,
    },
    primaryProgress: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
