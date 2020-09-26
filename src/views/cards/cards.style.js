import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    mainContent: {
      marginLeft: theme.spacing(-1),
      "& $cardContainer": {
        padding: theme.spacing(1),
      },
    },
    cardContainer: {},
    nonFavorite: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& span": {
        padding: theme.spacing(30, 0),
        fontSize: 20,
        fontWeight: "bold",
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      mainContent: {
        marginLeft: theme.spacing(-1),
        "& $cardContainer": {
          padding: theme.spacing(1),
        },
      },
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      mainContent: {
        margin: theme.spacing(0),
        width: "100%",
        "& $cardContainer": {
          padding: theme.spacing(0),
          marginTop: theme.spacing(1),
        },
      },
    },
  };
});
