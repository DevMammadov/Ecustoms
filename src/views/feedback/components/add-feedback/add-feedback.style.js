import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    addFeedback: {
      padding: theme.spacing(2, 10),
    },
    field: {
      marginBottom: theme.spacing(2),
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(3, 0, 1),
      "& .MuiButton-root": {
        padding: theme.spacing(1, 8),
        margin: theme.spacing(0, 1),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
