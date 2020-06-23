import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    aside: {
      width: "240px"
    },
    mainContent: {
      "& $cardContainer": {
        paddingLeft: theme.spacing(3),
        marginTop: theme.spacing(4)
      }
    },
    cardContainer: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      mainContent: {
        margin: theme.spacing(0),
        width: "100%",
        "& $cardContainer": {
          padding: theme.spacing(0),
          marginTop: theme.spacing(1)
        }
      }
    }
  };
});
