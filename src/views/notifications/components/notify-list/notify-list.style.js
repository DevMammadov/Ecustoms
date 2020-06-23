import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    listContainer: {
      height: "100%",
    },
    listRoot: {
      "& .MuiListItem-root": {
        backgroundColor: theme.palette.custom.whiteToBlack,
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
        padding: theme.spacing(0.5, 1),
      },
    },
    calendarIcon: {
      marginRight: theme.spacing(0.5),
    },
    markerIcon: {
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(2),
    },
    textPrimary: {
      "& b": {
        fontSize: "0.95rem",
      },
      "& div": {
        fontSize: "0.95rem",
      },
    },
    avatar: {
      height: theme.spacing(6),
      width: theme.spacing(6),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
