import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      minHeight: "100vh",
    },
    aside: {
      background: theme.palette.background.main,
      color: theme.palette.common.white,
      padding: theme.spacing(10, 5, 4, 5),
    },
    asideContent: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "space-between",
      height: "100%",
      "& img": {
        height: "150px",
        width: "150px",
        marginBottom: theme.spacing(6.5),
      },
    },
    asideTitle: {
      fontSize: "0.8rem",
    },
    main: {
      background: theme.palette.background.wildSand,
      paddingTop: theme.spacing(1),
    },
    mainContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      marginTop: theme.spacing(-5),
    },
    loginForm: {
      width: "40%",
      position: "relative",
    },
    header: {
      padding: theme.spacing(0, 5),
      display: "flex",
      justifyContent: "flex-end",
    },
    lang: {
      width: "60px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
