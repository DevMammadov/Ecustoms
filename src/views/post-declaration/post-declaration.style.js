import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    tableContainer: {
      paddingRight: theme.spacing(2),
    },
    cardContainer: {
      "& > div:nth-child(2)": {
        marginTop: theme.spacing(2),
      },
    },
    pagination: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: theme.spacing(2),
    },
    previewButton: {
      "& button": {
        fontSize: "0.9rem",
        padding: theme.spacing(1.1),
        borderRadius: "100%",
        "&:hover": {
          opacity: 0.7,
        },
      },
    },
    tableButton: {
      padding: theme.spacing(0.2, 1),
    },
    colorWarn: {
      color: theme.palette.color.permission,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      tableContainer: {
        paddingRight: theme.spacing(0),
      },
      cardContainer: {
        "& > div": {
          marginTop: theme.spacing(2),
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
