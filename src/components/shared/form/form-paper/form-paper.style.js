import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "40px 20px",
      "& form": {
        width: "40%",
      },
    },
    marginsBetweenInputs: {
      "& form": {
        "& >*": {
          marginBottom: theme.spacing(2),
        },
        "& >*:last-child": {
          marginBottom: theme.spacing(0),
        },
      },
    },
    buttonContainer: {
      "& > *": {
        marginRight: theme.spacing(2),
      },
      "& >*:last-child": {
        marginRight: theme.spacing(0),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      root: {
        "& form": {
          width: "60%",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      root: {
        "& form": {
          width: "80%",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        "& form": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
