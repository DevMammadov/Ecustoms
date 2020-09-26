import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {},
    formContainer: {
      "& > .MuiGrid-item:nth-child(1)": {
        paddingRight: theme.spacing(4),
        "& > div": {
          marginBottom: theme.spacing(2),
        },
      },
      "& > .MuiGrid-item:nth-child(2)": {
        paddingLeft: theme.spacing(4),
        "& > div": {
          marginBottom: theme.spacing(2),
        },
      },
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
    inputGroup: {
      display: "flex",
      marginBottom: theme.spacing(0.5),
      "& > .MuiFormControl-root": {
        marginRight: theme.spacing(2),
      },
      "& > .MuiFormControl-root:last-child": {
        marginRight: theme.spacing(0),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      container: {
        "& .MuiGrid-container": {
          "& > .MuiGrid-item:nth-child(1)": {
            paddingRight: theme.spacing(0),
          },
          "& > .MuiGrid-item:nth-child(2)": {
            paddingLeft: theme.spacing(0),
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
