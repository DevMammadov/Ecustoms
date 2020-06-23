import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    formHeader: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      justifyContent: "center",
      fontSize: "0.9rem",
      display: "flex",
      flexWrap: "wrap",
      "& div": {
        marginBottom: theme.spacing(0.5),
        marginRight: theme.spacing(3),
      },
    },
    headerIcon: {
      width: "25px !important",
      textAlign: "left",
      marginRight: theme.spacing(0.5),
      color: theme.palette.custom.textPrimary,
    },
    form: {
      width: "50%",
      margin: "0 auto",
    },
    formContainer: {
      padding: theme.spacing(3),
    },
    radio: {
      marginBottom: theme.spacing(2),
    },
    input: {},
    label: {
      marginBottom: theme.spacing(1),
    },
    formFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: theme.spacing(2),
    },
    inputGroup: {
      display: "flex",
      "& > *": {
        width: "50%",
      },
      "& .MuiTextField-root": {
        marginRight: theme.spacing(2),
      },
    },
    dateGroup: {
      display: "flex",
      justifyContent: "space-between",
      "& > div": {
        width: "50%",
      },
      "& > div:first-child": {
        marginRight: theme.spacing(2),
      },
    },
    buttonGroup: {
      "& .MuiButton-root:first-child": {
        marginRight: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      form: {
        width: "70%",
      },
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
