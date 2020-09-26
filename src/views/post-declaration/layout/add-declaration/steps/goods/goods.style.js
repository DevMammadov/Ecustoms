import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: "16px 100px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(3),
      "& > span": {
        fontWeight: "bold",
        "& span": {
          color: theme.palette.primary.light,
          fontWeight: "bolder",
          fontSize: "20px",
        },
      },
      borderBottom: `1px solid ${theme.palette.color.gray}`,
      paddingBottom: 8,
    },
    body: {},
    separateCards: {
      "& > div": {
        marginBottom: theme.spacing(2),
      },
      "& > div:last-child": {
        marginBottom: theme.spacing(0),
      },
    },
    noGoodContent: {
      position: "absolute",
      top: "50%",
      textAlign: "center",
      width: "100%",
      transform: "transitionY(-50%)",
      fontWeight: "bold",
    },
    goodCards: {
      paddingRight: theme.spacing(2),
      position: "relative",
      minHeight: 500,
    },
    goodsCardContainer: {
      padding: theme.spacing(0, 1),
    },
    totalCards: {
      paddingLeft: theme.spacing(4),
    },
    addButton: {
      padding: "4px 16px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: theme.spacing(4),
      "& .MuiButton-contained": {
        padding: theme.spacing(0.6, 8),
        marginLeft: theme.spacing(2),
      },
      "& .MuiButton-outlined": {
        padding: theme.spacing(0.6, 5),
      },
    },
    buttonContainer: {
      whiteSpace: "nowrap",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      container: {
        padding: "16px 50px",
      },
      totalCards: {
        paddingLeft: theme.spacing(0),
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
      totalCards: {
        paddingLeft: theme.spacing(0),
      },
      footer: {
        display: "block",
        paddingTop: theme.spacing(4),
        "& .MuiButton-contained": {
          width: "100%",
          marginTop: theme.spacing(2),
          marginLeft: 0,
        },
        "& .MuiButton-outlined": {
          marginTop: theme.spacing(2),
          width: "100%",
        },
      },
      noGoodContent: {
        top: "50%",
        transform: "translateY(-50%)",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
