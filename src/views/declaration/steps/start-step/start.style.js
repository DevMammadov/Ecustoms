import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    formContainer: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(5, 0),
    },
    form: {
      width: "40%",
    },
    inputGroup: {
      marginTop: theme.spacing(2),
      alignItems: "flex-end",
      display: "flex",
      "& > div": {
        flex: 1,
      },
      "& > div:nth-child(1)": {
        marginRight: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
