import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: "relative",
      display: "flex",
      borderRadius: 8,
      height: 150,
      padding: theme.spacing(1, 2, 0, 1),
    },
    cardMedia: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      fontSize: 30,
      padding: theme.spacing(3),
      cursor: "pointer",
      color: theme.palette.primary.main,
      background: "rgba(183, 183, 183, 0.1)",
      marginRight: theme.spacing(1),
    },
    content: {
      padding: 0,
      position: "relative",
      "& h3": {
        margin: 0,
        marginBottom: 2,
        fontSize: 15,
      },
      "& > div > span": {
        fontSize: 13,
        opacity: 0.8,
      },
      "&:last-child": {
        padding: 0,
      },
    },
    cardContent: {
      "& > div": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
    },
    bookMark: {
      fontSize: 16,
      padding: 2,
      color: theme.palette.color.yellow,
    },
    icons: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      opacity: 1,
      alignItems: "flex-end",
      "& $mediaIcon:nth-child(2)": {
        fontSize: 15,
        top: 2,
      },
    },
    mediaIcon: {
      position: "relative",
      fontSize: 14,
      color: theme.palette.color.gray,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
