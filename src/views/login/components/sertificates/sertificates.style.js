import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: theme.spacing(-10),
    },
    listTitle: {
      "& h3": {
        margin: theme.spacing(0, 0, 0, 0),
        letterSpacing: "1px",
      },
      "& span": {
        fontSize: ".9rem",
      },
    },
    list: {
      padding: 0,
      marginTop: theme.spacing(2),
      "& .MuiListItem-root": {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        "&::after": {
          content: "''",
          position: "absolute",
          backgroundColor: theme.palette.color.gray,
          height: "100%",
          width: "3px",
          left: theme.spacing(3),
          zIndex: 0,
        },
        "& .MuiListItemIcon-root": {
          fontSize: "18px",
          zIndex: 55,
          color: theme.palette.color.gray,
        },
        "& $listIcon": {
          border: `1.5px solid ${theme.palette.color.gray}`,
          padding: "2px",
          borderRadius: "50%",
        },
        "&:hover": {
          "& .MuiListItemIcon-root": {
            color: theme.palette.primary.main,
            "& $listIcon": {
              borderColor: theme.palette.primary.main,
            },
          },
        },
      },
    },
    listIcon: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
