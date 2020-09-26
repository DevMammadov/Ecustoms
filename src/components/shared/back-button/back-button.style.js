import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    button: {
      position: "absolute",
      top: 0,
      left: 0,
      background: theme.palette.action.hover,
      fontWeight: "bold",
      padding: theme.spacing(0.7, 2),
    },
    icon: {
      fontSize: ".8rem",
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
