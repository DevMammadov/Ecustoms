import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(4),
    },
    formContainer: {
      display: "flex",
      justifyContent: "center",
    },
    titleContainer: {
      fontWeight: "bold",
      marginBottom: 16,
      "& div": {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.catskillWhite,
        paddingLeft: 100,
        display: "inline-block",
        padding: 8,
      },
    },
    form: {
      width: "60%",
      "& .MuiGrid-item": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        "& .MuiFormControl-root:nth-child(1)": {
          marginRight: theme.spacing(6),
        },
      },
      "& .MuiGrid-item:nth-child(3)": {
        margin: theme.spacing(6, 0, 2),
        fontWeight: "bold",
      },
    },
    currencyInput: {
      maxWidth: 130,
    },
    amuntContainer: {
      paddingRight: theme.spacing(3),
      "& > div": {
        marginRight: theme.spacing(2),
      },
      "& .MuiAutocomplete-root": {
        width: 200,
      },
      "& > .MuiTextField-root": {
        width: 100,
      },
    },
    manat: {
      color: "rgba(0, 0, 0, 0.54)",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
