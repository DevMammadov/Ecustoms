import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    popupContainer: {
      padding: theme.spacing(4, 8, 3, 8),
      textAlign: "center",
    },
    popupActions: {
      justifyContent: "center",
      "& button + button": {
        marginLeft: "20px !important",
      },
    },
    iconContainer: {
      textAlign: "center",
    },
    icon: {
      padding: theme.spacing(2),
      fontSize: "5rem",
      color: theme.palette.danger.main,
      borderRadius: "50%",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      popupContainer: {
        padding: theme.spacing(1, 4),
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
