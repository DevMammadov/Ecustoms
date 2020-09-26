import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    form: {
      "& > div:nth-child(1) > div": {
        marginBottom: theme.spacing(2),
      },
    },
    buttonContainer: {
      //marginTop: theme.spacing(6),
      display: "flex",
      justifyContent: "flex-end",
      "& > .MuiButtonBase-root:nth-child(1)": {
        marginRight: theme.spacing(1),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
