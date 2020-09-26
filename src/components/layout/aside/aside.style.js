import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 280;

export const useStyles = makeStyles((theme) => {
  return {
    drawePaper: {
      background: theme.palette.primary.main,
      top: "unset", // will be removed after beta
      "&:hover": {
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.light,
        },
      },
      "&::-webkit-scrollbar": {
        width: 6,
      },
      "&::-webkit-scrollbar-track": {},
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.color.gray,
        borderRadius: 4,
      },
      "&::-webkit-scrollbar-thumb:hover": {},
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8.5),
      },
    },
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0, 2, 2.5, 2),
      marginTop: theme.spacing(1),
      "& a": {
        color: theme.palette.color.white,
        whiteSpace: "nowrap",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        "& img": {
          marginRight: theme.spacing(2),
        },
      },
    },
    closeButton: {
      color: theme.palette.color.white,
    },
    keylistContainer: {},
    mobileDrawerPaper: {
      background: theme.palette.primary.main,
      top: "25px", // will be removed after beta
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      keylistContainer: {
        padding: "0 20px",
      },
    },
  };
});
