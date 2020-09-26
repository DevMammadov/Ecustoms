import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    button: {
      display: "inline-flex",
      alignItems: "center",
      "& .MuiCircularProgress-root": {
        height: "20px !important",
        width: "20px !important",
        position: "absolute",
      },
      whiteSpace: "nowrap",
    },
    icon: {
      fontSize: "inherit",
      marginRight: theme.spacing(1),
    },
    green: {
      background: theme.palette.success.dark,
      color: theme.palette.common.white,
      "&:hover": {
        background: theme.palette.success.dark,
      },
    },
    primary: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover": {
        background: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
