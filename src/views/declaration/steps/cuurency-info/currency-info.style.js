import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    sectionsContainer: {
      "& .MuiGrid-root": {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2, 3),
      },
      "& .MuiGrid-root:nth-child(odd)": {
        marginRight: theme.spacing(2),
      },
    },
    sectionContent: {
      marginBottom: theme.spacing(1),
    },
    sectionTitle: {
      fontWeight: "bold",
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
