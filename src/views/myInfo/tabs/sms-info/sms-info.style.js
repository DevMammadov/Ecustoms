import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: theme.spacing(6, 8),
    },
    itemContainer: {
      paddingRight: "200px",
      "& h4": {
        marginTop: 0,
      },
    },
    formContainer: {
      display: "flex",
      alignItems: "flex-end",
    },
    sendButton: {
      marginLeft: theme.spacing(3),
      minWidth: "120px",
    },
    updateForm: {
      display: "block",
      "& div:nth-child(2)": {
        display: "flex",
        "& $removeButton": {
          marginLeft: theme.spacing(1.5),
          fontSize: "13px",
          minWidth: "35px !important",
          minHeight: "35px !important",
          padding: 0,
        },
      },
    },
    addButton: {
      borderRadius: "100%",
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(0.5),
      marginRight: theme.spacing(1),
      "&:hover": {
        background: theme.palette.primary.light,
      },
    },
    formCloseLink: {
      marginTop: theme.spacing(1),
      fontSize: "15px",
      fontWeight: "bold",
    },
    removeButton: {},
    [theme.breakpoints.down("xl")]: {
      paper: {
        minHeight: "300px",
      },
    },
    alertContainer: {
      marginTop: theme.spacing(5),
    },
    alertIcon: {
      fontSize: "5rem",
    },
    mobileTabRoot: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      itemContainer: {
        paddingRight: 0,
      },
      mobileTabRoot: {
        "& .MuiTab-root": {
          flex: 1,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
