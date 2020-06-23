import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    notifyHeader: {
      padding: theme.spacing(0.8, 2, 1.5),
      display: "flex",
      justifyContent: "flex-end",
    },
    notifyBody: {
      marginTop: theme.spacing(2),
    },
    searchBar: {
      width: "300px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
