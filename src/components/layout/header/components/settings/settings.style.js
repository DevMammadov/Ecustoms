import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    settings: {
      position: "relative",
      cursor: "pointer",
      padding: "3px 0 10px",
      height: "30px",
      width: "30px",
      fontSize: "22px",
      boxShadow: "none",
      opacity: 0.5,
    },
    icon: {
      color: theme.palette.color.darkGray,
    },
    menuRoot: {
      width: "320px",
      maxHeight: "600px",
      background: "#f7f8fc",
      padding: "4px 10px",
    },
    listItemText: {
      fontSize: "12px",
      padding: "0px",
    },
    menuHeader: {
      fontSize: "14px",
      margin: "0px",
      padding: "6px  12px",
    },
    listHeader: {
      fontSize: "14px",
      padding: "2px 18px",
      margin: "4px",
    },
    link: {
      paddingLeft: "0px",
      fontWeight: "bold",
      fontSize: "14px",
    },
    MuiListItemRoot: {
      paddingTop: "0px",
    },
    MuiListRoot: {
      padding: "0px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
