import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    closebutton: {
      position: "absolute",
      zIndex: 55,
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
    container: {
      position: "relative",
      padding: theme.spacing(5, 10),
      minWidth: 900,
      "& .MuiCard-root": {
        marginBottom: theme.spacing(3.5),
      },
    },
    borderlessDecCard: {
      borderLeft: `0 !important`,
      borderRight: 0,
      borderBottom: 0,
      paddingLeft: `0 !important`,
      paddingTop: `${theme.spacing(4)}px !important`,
    },
    goodCard: {
      marginBottom: theme.spacing(1),
    },
    badge: {
      borderRadius: 4,
      padding: theme.spacing(0.3, 1),
      color: theme.palette.common.white,
    },
    bgRed: {
      background: theme.palette.danger.main,
    },
    bgGreen: {
      background: theme.palette.success.main,
    },
    bgGray: {
      background: theme.palette.color.gray,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      container: {
        position: "relative",
        padding: theme.spacing(2.5, 10, 1),
        minWidth: 900,
        maxHeight: 600,
        overflowY: "auto",
        "& .MuiCard-root": {
          marginBottom: theme.spacing(3.5),
        },
      },
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      modal: {
        padding: theme.spacing(1),
      },
      container: {
        padding: theme.spacing(1, 1),
        minWidth: 250,
        "& .MuiCard-root": {
          marginBottom: theme.spacing(2.5),
        },
      },
      scrollBar: {
        maxHeight: 200,
        "& > div": {
          marginBottom: theme.spacing(1),
        },
      },
      borderlessDecCard: {
        paddingTop: `${theme.spacing(2)}px !important`,
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
