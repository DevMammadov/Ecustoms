import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    conatiner: {
      padding: theme.spacing(1.5, 2),
      marginBottom: theme.spacing(2),
    },
    formConatiner: {
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
    filterBarRightSide: {
      display: "flex",
      alignItems: "flex-end",
    },
    addNewButton: {
      display: "block",
      minWidth: 170,
    },
    select: {
      width: 280,
    },
    filterButtonArrow: {
      color: theme.palette.custom.textPrimary,
    },
    buttonGroup: {
      display: "flex",
      "&  button": {
        height: 36,
      },
    },
    filterButton: {
      marginRight: theme.spacing(1),
    },
    mobileButton: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      formConatiner: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      },
      addNewButton: {
        display: "block",
        minWidth: 150,
      },
      mobileButton: {
        padding: 4,
        minWidth: 35,
      },
      filterBarRightSide: {
        alignItems: "unset",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
