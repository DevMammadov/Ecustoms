import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: "relative",
      padding: "60px 80px",
    },
    addForm: {},
    formContainer: {
      paddingRight: 80,
    },
    sendButton: {
      display: "block",
      margin: "0 auto",
      padding: theme.spacing(0.7, 4),
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
