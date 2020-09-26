import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      border: `1px solid ${theme.palette.color.gray}`,
      borderRadius: 4,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(2),
    },
    cardTitle: {
      fontWeight: "bold",
      color: theme.palette.custom.textPrimary,
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    buttonContainer: {
      whiteSpace: "nowrap",
      marginLeft: 5,
      "& .MuiIconButton-root": {
        padding: theme.spacing(0.8),
        fontSize: 10,
        borderRadius: "100%",
        color: theme.palette.common.white,
      },
      "& .MuiIconButton-root:first-child": {
        background: theme.palette.primary.main,
        marginRight: theme.spacing(1),
      },
      "& .MuiIconButton-root:last-child": {
        background: theme.palette.danger.main,
      },
    },
    collapseButton: {
      padding: 0,
      width: 270,
      justifyContent: "flex-start",
    },
    checvronIcon: {
      marginLeft: 8,
      color: theme.palette.custom.textPrimary,
      transition: "all 0.4s",
    },
    arrowDown: {
      transform: "rotateZ(-180deg)",
    },
    dutyList: {
      width: 270,
      paddingTop: theme.spacing(1),
      "& .MuiListItem-root": {
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        "& span:last-child": {
          color: "#667ACD",
        },
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
