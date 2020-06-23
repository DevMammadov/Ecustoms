import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    input: {
      "& .MuiInputBase-input": {
        padding: theme.spacing(0, 0, 0, 1),
      },
      marginBottom: theme.spacing(2),
    },
    statusRows: {
      marginBottom: theme.spacing(2),
    },
    inputTextLabel: {
      margin: theme.spacing(1, 0, 0.5, 0),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
