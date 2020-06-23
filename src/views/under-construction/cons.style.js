import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    conatiner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
    },
    icon: {
      fontSize: "7rem",
      //color: theme.palette.primary.main,
      color: theme.palette.warning.main,
      display: "block",
    },
    text: {
      display: "block",
      fontSize: "18px",
      fontWeight: "bold",
      color: theme.palette.primary.main,
      marginTop: "15px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
