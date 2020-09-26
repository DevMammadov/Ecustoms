import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "24px 160px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      root: {
        padding: "24px 70px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: "24px 50px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        padding: "24px 20px",
      },
    },
  };
});
