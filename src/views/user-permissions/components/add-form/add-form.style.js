import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      "& > div": {
        marginBottom: theme.spacing(2),
      },
    },
    searchButton: {
      padding: 4,
      paddingRight: theme.spacing(2),
    },
    searchInput: {
      "& .MuiInputBase-root": {
        paddingRight: 0,
      },
    },
    searchIcon: {
      fontSize: 18,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
