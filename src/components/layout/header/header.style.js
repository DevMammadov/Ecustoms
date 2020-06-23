import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      width: "100%",
      padding: theme.spacing(1, 10),
      display: "flex",
      justifyContent: "space-between",
      background: theme.palette.background.wildSand,
    },
    menuButton: {
      padding: "0px 10px",
      marginLeft: theme.spacing(-7),
      color: theme.palette.custom.grayToWhite,
    },
    headerRight: {
      display: "flex",
      "& > div": {
        padding: theme.spacing(0, 2),
        borderLeft: `1px solid ${theme.palette.color.gray}`,
      },
    },
    profile: {
      border: "none !important",
    },
    keylist: {
      border: "none !important",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      navbar: {
        padding: theme.spacing(1, 2),
        "& $menuButton": {
          padding: "0px",
          marginLeft: theme.spacing(0),
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      navbar: {
        padding: theme.spacing(1, 1.1),
      },
    },
  };
});
