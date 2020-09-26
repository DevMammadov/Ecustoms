import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: 450,
    },
    form: {
      "& > div": {
        marginBottom: theme.spacing(2),
      },
    },
    inputGroup: {
      display: "flex",
      "& > div:nth-child(1)": {
        marginRight: theme.spacing(2),
      },
    },
    countryCode: {
      width: 100,
      marginRight: theme.spacing(2),
    },
    formFooter: {
      display: "flex",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
