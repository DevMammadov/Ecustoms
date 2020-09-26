import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
const drawerWidth = 280;

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      height: "100%",
      paddingTop: 25,
    },
    beta: {
      position: "fixed",
      width: "100%",
      background: theme.palette.warning.main,
      color: theme.palette.common.white,
      height: 25,
      fontSize: 14,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 55555,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      position: "fixed",
      width: `calc(100% - ${theme.spacing(8.5)}px)`,
      marginLeft: theme.spacing(8.5),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    aside: {
      width: "100%",
    },
    main: {
      height: "100%",
      width: "100%",
    },
    section: {
      paddingTop: 80,
      padding: theme.spacing(0, 10),
      paddingBottom: theme.spacing(4),
      background: theme.palette.background.wildSand,
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      // appBar: {
      //   width: "100%",
      //   marginLeft: 0,
      // },
      // appBarShift: {
      //   marginLeft: 0,
      //   width: `100%`,
      // },
    },
    [theme.breakpoints.down("sm")]: {
      section: {
        padding: theme.spacing(0, 3),
        paddingTop: 55,
      },
    },
    [theme.breakpoints.down("xs")]: {
      appBarShift: {
        marginLeft: 0,
        width: `100%`,
      },
      appBar: {
        width: `100%`,
        marginLeft: theme.spacing(0),
      },
    },
  };
});
