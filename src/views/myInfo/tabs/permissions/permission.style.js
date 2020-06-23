import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(6, 8),
    },
    sectionTitle: {
      marginTop: 0,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
