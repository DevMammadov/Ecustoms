import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    menu: {
      listStyle: "none",
      padding: theme.spacing(2.5, 0, 0, 0),
      margin: 0,
      "& a": {
        textDecoration: "none",
        color: theme.palette.color.white,
        display: "flex",
        whiteSpace: "nowrap",
      },
      "& > li > ul": {
        position: "relative",
        padding: "0px 0 20px 0",
      },
      "& > ul > li > ul::after": {
        content: "''",
        height: "1px",
        width: "80%",
        background: "#515371",
        position: "absolute",
        left: "50%",
        bottom: 0,
        transform: "translateX(-50%)",
      },
      "& > li:last-child > ul::after": {
        height: 0,
        width: 0,
      },
      "& > li > a": {
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "15px",
        textTransform: "capitalize",
        transition: "all .3s ease 0s",
        padding: `${theme.spacing(0, 2.5, 2.5, 2.8)} !important`,
      },
      "& > li > ul > li > a": {
        borderLeft: "2px solid transparent",
        opacity: ".6",
        padding: theme.spacing(1.5, 2.8),
        "& div": {
          marginRight: "10px",
        },
      },
      "& > li > ul > li > a div": {
        display: "inline-block",
      },
      "& > li > ul > li > a span": {
        display: "inline-block",
      },
      "& > li > ul > li > a.active": {
        background: "rgba(255,255,255,0.25)",
        borderLeft: "2px solid",
        borderColor: theme.palette.color.white,
        opacity: 1,
      },
      "& > li > ul > li > a:hover": {
        background: "rgba(255,255,255,0.25)",
        opacity: 1,
      },
    },
    iconContaioner: {
      width: "30px",
    },
    icon: {
      color: theme.palette.color.white,
      marginRight: theme.spacing(1.5),
      fontSize: "19px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
