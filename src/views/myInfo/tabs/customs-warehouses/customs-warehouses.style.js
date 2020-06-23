import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      "& .MuiPaper-root": {
        padding: theme.spacing(4, 0, 0, 0),
        "& .MuiToolbar-root": {
          padding: theme.spacing(0, 3),
          "& div:nth-child(1)": {
            width: "100% !important",
            "& h6": {
              margin: 0,
              fontSize: "1rem",
            },
            "& > div": {
              display: "flex",
              justifyContent: "space-between",
              "& .MuiInputBase-root": {
                flexBasis: "20%",
              },
            },
          },
          "&  div:nth-child(2)": {
            display: "none",
          },
        },
      },
    },
    alertContainer: {
      marginTop: theme.spacing(5),
    },
    alertIcon: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
