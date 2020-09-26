import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: "24px 100px 60px",
    },
    header: {
      marginBottom: theme.spacing(4),
      borderBottom: `1px solid ${theme.palette.color.gray}`,
      paddingBottom: theme.spacing(2),
      display: "flex",
      "& > div": {
        display: "flex",
        "& svg": {
          marginRight: theme.spacing(0.5),
          color: theme.palette.custom.textPrimary,
          marginTop: 3,
        },
        "& span": {
          fontWeight: "bold",
          marginLeft: theme.spacing(1),
        },
        "& div": {
          whiteSpace: "nowrap",
        },
        padding: theme.spacing(0, 3),
        borderRight: `1px solid ${theme.palette.color.gray}`,
      },
      "& > div:last-child": {
        border: "none",
      },
    },
    alert: {
      "& svg": {
        height: "3rem",
        width: "3rem",
      },
    },
    alertContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& > span": {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
    alertButtons: {
      display: "flex",
      alignItems: "flex-end",
      "& button": {
        padding: theme.spacing(1.5, 3),
      },
      "& button:first-child": {
        marginRight: theme.spacing(2),
        padding: theme.spacing(1.3, 0.5),
      },
    },
    separateCards: {
      "& > div": {
        marginBottom: theme.spacing(2),
      },
      "& > div:last-child": {
        marginBottom: theme.spacing(0),
      },
    },
    goodCards: {
      paddingRight: theme.spacing(2),
      position: "relative",
      minHeight: 500,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    goodsCardContainer: {
      padding: theme.spacing(0, 1, 0, 0),
      marginBottom: theme.spacing(5),
    },
    aside: {
      paddingLeft: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      container: {
        padding: "16px 30px",
      },
      aside: {
        paddingLeft: theme.spacing(0),
      },
      alertContent: {
        "& > span": {
          fontSize: 15,
          fontWeight: "bold",
        },
      },
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "16px 16px",
      },
      goodCards: {
        paddingRight: theme.spacing(0),
        minHeight: 100,
      },
      goodsCardContainer: {
        padding: theme.spacing(0, 0),
      },
      [theme.breakpoints.down("xs")]: {
        header: {
          marginBottom: theme.spacing(2),
          borderBottom: `1px solid ${theme.palette.color.gray}`,
          paddingBottom: theme.spacing(2),
          display: "block",
          "& > div": {
            display: "flex",
            padding: theme.spacing(0, 0),
            marginBottom: theme.spacing(0.5),
            borderRight: 0,
          },
          "& > div:last-child": {
            border: "none",
          },
        },
        aside: {
          paddingLeft: theme.spacing(0),
        },
        alert: {
          "& .MuiAlert-root": {
            padding: theme.spacing(0.6, 1),
          },
          "& svg": {
            height: "2rem",
            width: "2rem",
          },
          marginTop: theme.spacing(2),
        },
        alertContent: {
          display: "block",
          "& >span": {
            fontSize: 16,
            fontWeight: "normal",
          },
        },
        alertButtons: {
          display: "block",
          "& button:first-child": {
            marginRight: theme.spacing(0),
            margin: theme.spacing(1, 0),
          },
          "& button": {
            width: "100%",
          },
        },
      },
    },
  };
});
