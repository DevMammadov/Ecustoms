import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    aside: {
      paddingTop: theme.spacing(1),
      transition: "all .3s ease 0s",
      position: "relative",
      minHeight: "100vh",
      boxSizing: "border-box",
      background: theme.palette.background.main,
      color: theme.palette.color.white,
      fontWeight: "400",
      "& $logo": {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0, 0, 1, 2.2),
        "& $logoContainer": {
          "& a": {
            display: "flex",
            alignItems: "center",
            "& img": {
              height: "30px",
              width: "30px",
            },
            "& span": {
              fontSize: "16px",
              lineHeight: "30px",
              display: "inline-block",
              whiteSpace: "nowrap",
              marginLeft: "15px",
              color: theme.palette.color.white,
            },
          },
        },
      },
    },
    closeButton: {},
    collapse: {},
    logoContainer: {},
    logo: {},
    [theme.breakpoints.down("xl")]: {
      collapse: {
        overflow: "hidden",
        width: "60px !important",
        "& div:nth-child(2)": {
          "& > ul > li > a": {
            visibility: "hidden",
            padding: "0 !important",
          },
        },
      },
      closeButton: {
        display: "none",
      },
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      aside: {
        left: "-300px",
        "& $closeButton": {
          position: "absolute",
          right: "20px",
          color: theme.palette.common.white,
          padding: theme.spacing(1.2),
          display: "block",
        },
      },
      collapse: {
        left: 0,
        width: "280px !important",
        marginLeft: 0,
        "& div:nth-child(2)": {
          "& > ul > li > a": {
            visibility: "visible",
            padding: "15px 20px !important",
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      aside: {
        left: "-100%",
        "& $logo": {
          justifyContent: "center",
          textDecoration: "none",
          paddingLeft: 0,
          "& $logoContainer": {
            "& a": {
              flexDirection: "column",
              textDecoration: "none",
              alignItems: "center",
              "& img": {
                height: "100px",
                width: "100px",
                display: "block",
              },
              "& span": {
                fontSize: "16px",
                lineHeight: "30px",
                display: "block",
                marginLeft: "10px",
                flex: 1,
              },
              "&:hover": {
                textDecoration: "none",
              },
              "&:active": {
                textDecoration: "none",
              },
            },
          },
        },
        "& $closeButton": {
          position: "absolute",
          right: "20px",
          color: theme.palette.common.white,
          padding: theme.spacing(1.2),
          display: "block",
        },
      },
      collapse: {
        left: 0,
        marginLeft: 0,
        "& div:nth-child(2)": {
          "& > ul > li > a": {
            visibility: "visible",
            padding: "15px 20px !important",
          },
        },
      },
    },
  };
});
