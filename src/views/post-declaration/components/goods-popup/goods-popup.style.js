import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formContainer: {
      padding: "80px 180px 20px 180px",
      width: "50%",
      overflow: "auto",
    },
    form: {
      "& > div": {
        marginBottom: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      formContainer: {
        padding: "80px 160px",
        width: "60%",
        minWidth: 400,
      },
    },
    [theme.breakpoints.down("md")]: {
      formContainer: {
        padding: "60px 100px",
        width: "70%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      formContainer: {
        padding: "60px 20px",
        width: "60%",
        minWidth: 350,
      },
    },
    [theme.breakpoints.down("xs")]: {
      formContainer: {
        padding: "50px 20px",
        width: "60%",
      },
    },
  };
});
