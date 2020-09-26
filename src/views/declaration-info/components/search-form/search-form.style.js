import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    form: {
      width: "30%",
      display: "flex",
      flexFlow: "column wrap",
      alignItems: "center",
      "& >div": {
        marginBottom: theme.spacing(3),
      },
    },
    button: {
      padding: theme.spacing(0.5, 8),
    },
    [theme.breakpoints.down("xl")]: {
      form: {
        width: "25%",
      },
    },
    [theme.breakpoints.down("lg")]: {
      form: {
        width: "50%",
      },
    },
    [theme.breakpoints.down("md")]: {
      form: {
        width: "70%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      form: {
        width: "20%",
        "& > div": {
          marginBottom: theme.spacing(3),
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      form: {
        width: "90%",
      },
    },
  };
});
