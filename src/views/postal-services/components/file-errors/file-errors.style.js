import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    mainList: {
      maxHeight: 250,
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: 6,
      },
      "&::-webkit-scrollbar-track": {
        background: theme.palette.alert.error.background,
        borderRadius: 4,
      },
      "&::-webkit-scrollbar-thumb": {
        background: theme.palette.alert.error.color,
        borderRadius: 4,
      },
    },
    listItem: {
      display: "block",
      padding: 0,
    },
    subList: {
      padding: theme.spacing(0.5, 0, 0.5, 4),
      "& .MuiListItem-root": {
        padding: theme.spacing(0.5),
        display: "block",
      },
    },
    errorDescription: {
      fontSize: "0.8rem",
      fontStyle: "italic",
    },
    copyText: {
      fontWeight: "bold",
    },
    moreErrorsItem: {
      textAlign: "center",
      fontWeight: "bold",
    },
    showMoreButton: {
      width: "100%",
      fontWeight: "bold",
    },
    buttonIcon: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
