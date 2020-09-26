import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    paperContainer: {
      margin: theme.spacing(0, 2),
      // width: "50%",
      // padding: theme.spacing(0, 4, 4),
      // marginRight: theme.spacing(4),
    },

    makeStylesMedium81: {
      "& > p": {
        fontSize: "1rem",
      },
    },
    form: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      margin: theme.spacing(3, 0),
    },

    infoContainer: {
      display: "flex",
    },
    divContainer: {
      padding: theme.spacing(5),
    },
    fontColor: {
      color: "#2F4163",
    },
    link: {
      paddingLeft: theme.spacing(1),
    },

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      paper: {
        width: "10%",
      },
    },
    [theme.breakpoints.down("md")]: {
      paper: {
        width: "70%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      paper: {
        width: "100%",
        "& > div": {
          marginBottom: theme.spacing(3),
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      paper: {
        width: "60%",
      },
    },
  };
});
