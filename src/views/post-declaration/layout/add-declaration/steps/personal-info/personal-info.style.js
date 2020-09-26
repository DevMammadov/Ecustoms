import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    formContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "80px 0px",
    },
    formPaper: {
      position: "relative",
    },
    form: {
      width: "40%",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
