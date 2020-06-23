import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      width: "100%",
      "& $aside": {
        width: "280px",
      },
      "& main": {
        flex: 1,
        display: "flex",
        flexDirection: "column",
      },
    },
    aside: {},
    header: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      container: {
        minHeight: "100vh",
        "& $aside": {
          width: "300px",
          zIndex: 555,
          position: "fixed",
          overflow: "scroll",
        },
        "& main": {
          width: "100%",
          "& section": {
            padding: theme.spacing(0, 2),
            paddingBottom: theme.spacing(3),
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        "& $aside": {
          width: "100% !important",
          zIndex: 555,
        },
        "& main": {
          width: "100%",
          "& section": {
            padding: theme.spacing(0, 1.1),
          },
        },
      },
    },
  };
});
