import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    menuHeader: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(1, 2.5),
      "& button": {
        width: "48%",
      },
    },
    dateButtonIcon: {
      fontSize: ".9rem",
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
