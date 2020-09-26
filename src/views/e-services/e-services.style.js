import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => {
  return {
    MuiListItemRoot: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1.5),
      "& > div": {
        display: "flex",
        justifyContent: "space-between",
      },
    },
    swapIcon: {
      paddingRight: theme.spacing(1),
      color: theme.palette.custom.textPrimary,
      fontSize: "1.2rem",
      width: "30px !important",
      display: "inline-block",
      marginTop: 2,
    },
    MuiIconButtonRoot: {
      fontSize: "1rem",
      color: theme.palette.custom.textPrimary,
      "& .MuiIconButton-label": {
        color: theme.palette.custom.textPrimary,
      },
    },
    MuiSvgIconRoot: {
      display: "flex",
      alignItems: "center",
      fontSize: 17,
    },
    lockIcon: {
      paddingLeft: theme.spacing(1),
      transform: "rotateY(180deg)",
      fontSize: "1rem",
      color: theme.palette.custom.textPrimary,
    },
    link: {
      paddingRight: theme.spacing(5),
    },
  };
});
