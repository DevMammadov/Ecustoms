import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    input: {
      display: "none",
    },
    fileIcon: {
      marginRight: theme.spacing(1),
      color: theme.palette.custom.textPrimary,
    },
    fileName: {
      fontSize: "1rem",
      color: theme.palette.custom.textPrimary,
    },
    errorText: {
      color: "red",
      fontSize: "1rem",
    },
    redFont: {
      color: "red",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
