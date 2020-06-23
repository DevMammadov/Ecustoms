import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    selectBox: {
      display: "flex",
    },
    selectRoot: {
      minWidth: "270px",
    },
    select: {
      borderLeft: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    selectIcon: {
      border: "1px solid",
      padding: theme.spacing(1),
      borderColor: theme.palette.custom.borderColor,
      borderBottomLeftRadius: theme.spacing(1.2),
      borderTopLeftRadius: theme.spacing(1.2),
      display: "flex",
      alignItems: "center",
    },
    keyIcon: {
      fontSize: "15px",
      color: theme.palette.custom.textPrimary,
    },
    selectItem: { minHeight: "25px" },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      selectBox: {
        display: "none",
      },
    },
  };
});
