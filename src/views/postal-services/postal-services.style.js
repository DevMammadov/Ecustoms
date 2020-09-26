import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    dataTableButtonsContainer: {
      display: "flex",
      justifyContent: "space-between",
      "& button": {
        fontSize: "0.9rem",
        padding: theme.spacing(1.1),
        borderRadius: "100%",
        "&:hover": {
          opacity: 0.7,
        },
      },
      "& button:nth-child(1)": {
        color: theme.palette.danger.main,
      },
    },
    lockIcon: {
      color: theme.palette.custom.grayToWhite,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
