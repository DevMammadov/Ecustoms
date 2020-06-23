import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    tabRoot: {
      borderBottom: `2px solid ${theme.palette.color.gray}`,
      "& button": {
        position: "relative",
        padding: "0 20px",
        "&::after": {
          content: "''",
          position: "absolute",
          backgroundColor: theme.palette.color.gray,
          height: "50%",
          width: "1px",
          right: 0,
        },
      },
      "& .MuiTab-root": {
        textTransform: "capitalize",
        fontSize: "15px",
      },
    },
    mobileSelect: {},
    mobileSelectRoot: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      mobileSelectRoot: {
        width: "100%",
        marginBottom: theme.spacing(2),
      },
      mobileSelect: {
        borderRadius: "5px",
        padding: theme.spacing(0.8),
      },
    },
  };
});
