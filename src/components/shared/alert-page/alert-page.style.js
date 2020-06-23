import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "100%",
      "& .MuiGrid-item": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    primary: {
      color: theme.palette.custom.textPrimary,
    },
    warning: {
      color: theme.palette.warning.main,
    },
    danger: {
      color: theme.palette.danger.main,
    },
    iconContainer: {
      fontSize: "7rem",
      color: theme.palette.warning.main,
      textAlign: "center",
    },
    textContainer: {
      color: theme.palette.custom.textPrimary,
      marginBottom: theme.spacing(2),
      "& span": {
        fontWeight: "bold",
        fontSize: "18px",
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
