import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    list: {},
    listItem: {
      padding: theme.spacing(0.2, 2),
      "& >div::first-letter": {
        textTransform: "uppercase",
      },
      "& >div": {
        flex: 1,
      },
    },
    card: {
      padding: theme.spacing(2, 1, 0.5, 1),
      position: "relative",
      overflow: "unset",
      borderLeft: `4px solid ${theme.palette.color.koromiko}`,
    },
    title: {
      position: "absolute",
      left: 13,
      top: -12,
      background: theme.palette.color.white,
      padding: theme.spacing(0, 2),
      borderLeft: `1px solid ${theme.palette.color.gray}`,
      borderRight: `1px solid ${theme.palette.color.gray}`,
      borderRadius: 8,
      fontWeight: "bold",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      listItem: {
        padding: theme.spacing(0.4, 0.5),
        "& >div": {
          fontSize: 15,
        },
      },
      card: {
        padding: theme.spacing(1, 0.5, 0.5, 0.5),
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
