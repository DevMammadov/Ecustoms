import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    labelright: {
      alignItems: "center",
      margin: 0,
      width: "auto",
    },
    input: {
      borderRadius: theme.spacing(1),
    },
    checkbox: {
      "& .MuiSvgIcon-root": {
        fontSize: "1.7rem",
      },
    },
    errorLabel: {
      color: "red",
    },
    errorCheckbox: {
      color: "red",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
