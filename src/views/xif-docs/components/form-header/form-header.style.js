import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(2),
      justifyContent: "center",
      fontSize: "0.9rem",
      display: "flex",
      flexWrap: "wrap",
      "& div": {
        marginRight: theme.spacing(3),
        display: "flex",
      },
    },
    headerIcon: {
      width: "25px !important",
      textAlign: "left",
      marginRight: theme.spacing(0.5),
      color: theme.palette.custom.textPrimary,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: theme.spacing(2),
        fontSize: "0.9rem",
        display: "block",
        "& > div": {
          marginRight: theme.spacing(3),
          marginBottom: theme.spacing(1.5),
          display: "flex",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
