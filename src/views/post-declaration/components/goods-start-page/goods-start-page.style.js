import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(10, 0),
      "& .MuiGrid-item": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    icon: {
      fontSize: "5rem",
      color: "red",
    },
    titleContainer: {
      textAlign: "center",
      "& div": {
        fontWeight: "bold",
        marginTop: theme.spacing(2),
      },
    },
    button: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
