import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    link: {
      display: "inline",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
      color: "inherit",
      cursor: "pointer",
    },
    success: {
      backgroundColor: theme.palette.success.main,
    },
    arrowsuccess: {
      color: theme.palette.success.main,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
