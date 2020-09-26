import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    formConatiner: {
      display: "flex",
      alignItems: "flex-end",
      "& > div": {
        marginRight: theme.spacing(1),
      },
      "& > button": {
        height: 36,
      },
      marginRight: theme.spacing(1),
    },
    datePicker: {
      maxWidth: 200,
    },
    mobileButton: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      mobileButton: {
        padding: 5,
        minWidth: 40,
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
