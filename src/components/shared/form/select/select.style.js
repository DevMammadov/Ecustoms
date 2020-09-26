import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    labelRoot: {
      margin: 0,
      width: "100%",
      textAlign: "left",
    },
    label: {
      width: "100%",
    },
    selectRoot: {
      width: "100%",
    },
    select: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
