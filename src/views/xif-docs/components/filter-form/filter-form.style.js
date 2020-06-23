import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    xifFilterFormConatiner: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
    },
    filterContainer: {
      display: "flex",
      alignItems: "flex-end",
      "& > *": {
        marginLeft: `${theme.spacing(2)}px !important`,
      },
    },
    addNewButton: {
      display: "block",
    },
    datePicker: {
      maxWidth: "150px",
    },
    select: {
      width: "280px",
    },
    filterButtonArrow: {
      color: theme.palette.custom.textPrimary,
    },
    buttonGroup: {
      display: "flex",
    },
    searchButton: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
