import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      "& .MuiGrid-container": {
        marginBottom: theme.spacing(3),
        "& .MuiPaper-root": {
          height: "100%",
          padding: theme.spacing(6, 8),
        },
        "& .MuiGrid-item:nth-child(1)": {
          paddingRight: theme.spacing(4),
        },
      },
      "& .MuiPaper-root": {
        padding: theme.spacing(4),
      },
    },
    sectionHeader: {
      fontWeight: "bold",
      marginTop: 0,
    },
    contactForm: {
      "& .MuiInput-input": {
        marginBottom: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("xl")]: {
      sectionHeader: {
        margin: theme.spacing(3, 1, 2, 0),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      inputText: {
        width: "100%",
      },
      sectionHeader: {
        color: theme.palette.primary.main,
        fontWeight: 400,
        margin: theme.spacing(1, 0),
        paddingBottom: theme.spacing(1),
      },
      container: {
        "& .MuiGrid-container": {
          "& .MuiGrid-item:nth-child(1)": {
            paddingRight: theme.spacing(0),
            paddingBottom: theme.spacing(3),
          },
          "& .MuiPaper-root": {
            height: "100%",
            padding: theme.spacing(2),
          },
        },
      },
    },
  };
});
