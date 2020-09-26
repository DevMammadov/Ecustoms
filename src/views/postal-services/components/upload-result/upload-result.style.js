import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    TabIndicator: {
      display: "none",
    },
    tabs: {
      background: theme.palette.alert.info.background,
      "& .MuiTab-root": {
        textTransform: "capitalize",
        paddingTop: 0,
        paddingBottom: 0,
        flex: 1,
      },
    },
    tabPanel: {
      background: theme.palette.alert.info.background,
      color: theme.palette.alert.info.color,
      height: 230,
      overflowY: "auto",
    },
    tabPanelHeader: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    copyText: {
      fontWeight: "bold",
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
