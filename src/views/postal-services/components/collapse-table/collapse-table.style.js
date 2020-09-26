import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    collapseTableContainer: {
      position: "relative",
    },
    collapseTable: {
      "& > table": {
        "& > tr": {
          "& td": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
        },
      },
    },
    tableCell: {
      paddingLeft: "0 !important",
      paddingRight: "0 !important",
    },
    rowContentContainer: {
      display: "flex",
      padding: theme.spacing(1, 4),
      color: theme.palette.custom.textColor,
      cursor: "pointer",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: theme.spacing(2),
    },
    collapseIcon: {
      fontSize: "1.2rem",
    },
    icon: {
      fontSize: "0.8rem",
      marginRight: theme.spacing(0.5),
      color: theme.palette.custom.grayToWhite,
    },
    subtableCell: {
      border: "none",
    },
    collapseButton: {
      textAlign: "left",
      width: "100%",
    },
    fin: {
      fontWeight: "bold",
      marginBottom: theme.spacing(0.5),
      marginRight: theme.spacing(2),
      minWidth: 120,
      display: "inline-block",
    },
    nameSurname: {
      textTransform: "capitalize",
      marginRight: theme.spacing(2),
      minWidth: 190,
      display: "inline-block",
    },
    pagination: {
      display: "flex",
      justifyContent: "flex-end",
      "& .MuiPagination-root": {
        padding: theme.spacing(1),
      },
    },
    collapseAllButton: {
      position: "absolute",
      zIndex: 2000,
      margin: theme.spacing(1, 0),
      marginLeft: theme.spacing(2.5),
      fontSize: "1.2rem",
      color: theme.palette.custom.textPrimary,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
