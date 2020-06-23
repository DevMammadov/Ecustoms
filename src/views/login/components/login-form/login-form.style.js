import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    tabContainer: {
      //backgroundColor: theme.palette.custom.whiteToBlack,
      backgroundColor: theme.palette.background.wildSand,
      borderRadius: "15px",
      overflow: "hidden",
    },
    tabs: {
      width: "100%",
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      "& .MuiTab-root": {
        width: "50%",
        maxWidth: "unset",
        textTransform: "capitalize",
      },
    },
    tabContent: {
      padding: theme.spacing(4, 8, 2, 8),
      minHeight: "380px",
      display: "flex",
      flexWrap: "wrap",
      "& .MuiButton-root": {
        padding: theme.spacing(1, 6),
      },
      "& > div": {
        width: "100%",
      },
      "& > div:nth-child(1)": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiBox-root": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        },
      },
    },
    tabIndicator: {
      //display: "none",
    },
    loginForm: {
      "& div": {
        marginBottom: theme.spacing(1.3),
      },
      "& .MuiButton-root": {
        marginTop: theme.spacing(5),
        margin: "0 auto",
        display: "block",
      },
    },
    registerText: {
      fontSize: "13px",
      textAlign: "center",
      marginTop: theme.spacing(4),
    },
    asanButton: {
      position: "relative",
      height: "45px",
      width: "180px",
      textDecoration: "none",
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
      overflow: "hidden",
      borderRadius: "6px",
      display: "block",
      cursor: "pointer",
    },
    iconContainer: {
      background: theme.palette.common.white,
      width: "70px",
      height: "70px",
      position: "relative",
      borderRadius: "100%",
      top: "-10px",
      left: "-10px",
      float: "left",
    },
    icon: {
      color: theme.palette.background.main,
      position: "absolute",
      fontSize: "28px",
      borderRadius: "100%",
      left: "55%",
      top: "48%",
      transform: "translate(-50%,-50%)",
    },
    asanButtonText: {
      width: "100%",
      height: "100%",
      lineHeight: "45px",
    },
    asanLoginText: {
      width: "80%",
      textAlign: "center",
      marginTop: theme.spacing(6),
      color: theme.palette.custom.textPrimary,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
