import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    inputLabel: {
      margin: theme.spacing(1, 0, 0.5, 0),
    },
    search: {
      position: "relative",
      width: "100%",
      display: "flex",
      "& form": {
        display: "inherit",
        width: "100%",
      },
    },
    searchIcon: {
      width: theme.spacing(5),
      height: "100%",
      position: "absolute",
      right: 0,
      fontSize: "14px",
    },
    inputRoot: {
      width: "100%",
    },
    noAccessIconContainer: {
      fontSize: "7rem",
      color: theme.palette.warning.main,
      textAlign: "center",
    },
    searchInput: {
      width: "90%",
      "& .MuiInputBase-input": {
        border: "none",
        width: "90%",
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
