import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 7),
      maxWidth: 500,
      position: "relative",
    },
    modalTitle: {
      fontWeight: "bold",
      color: theme.palette.custom.textPrimary,
      textAlign: "center",
      marginBottom: theme.spacing(2),
    },
    form: {
      "& > div": {
        marginBottom: theme.spacing(1),
      },
    },
    closebutton: {
      position: "absolute",
      minWidth: 50,
      top: 0,
      right: 0,
      background: theme.palette.action.hover,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      "&:hover": {
        background: red[400],
        color: theme.palette.common.white,
      },
    },
    formFooter: {
      marginTop: theme.spacing(2),
      display: "flex",
      justifyContent: "flex-end",
    },
    inputGroup: {
      display: "flex",
      "& > div": {
        marginBottom: theme.spacing(1),
      },
      "& > div:nth-child(1)": {
        marginRight: theme.spacing(1),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      inputGroup: {
        display: "block",
        "& > div": {
          marginBottom: theme.spacing(2),
        },
        "& > div:nth-child(1)": {
          marginRight: theme.spacing(0),
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
