import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    inputGroup: {
      alignItems: "flex-end",
      display: "flex",
      "& > *": {
        flex: 1,
      },
      "& > *": {
        marginRight: theme.spacing(2),
      },
      "& > *:last-child": {
        marginRight: theme.spacing(0),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      inputGroup: {
        display: "block",
        "& > *": {
          marginRight: theme.spacing(0),
          marginBottom: theme.spacing(2),
        },
        "& > *:last-child": {
          marginBottom: theme.spacing(0),
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
