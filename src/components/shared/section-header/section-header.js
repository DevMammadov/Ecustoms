import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    sectionHeader: {
      paddingBottom: theme.spacing(3),
      //textTransform: "capitalize",
    },
    large: { fontSize: "2rem", fontWeight: "bold" },
    medium: { fontSize: "1.3rem", fontWeight: "bold" },
    small: { fontSize: "0.9rem", fontWeight: "bold" },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      sectionHeader: {
        padding: theme.spacing(1, 0, 2, 0),
        textTransform: "uppercase",
        color: theme.palette.primary.main,
      },
      large: { fontSize: "1rem" },
      medium: { fontSize: "0.9rem" },
      small: { fontSize: "0.7rem" },
    },
  };
});
