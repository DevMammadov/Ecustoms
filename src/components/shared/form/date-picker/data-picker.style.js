import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    picker: {
      border: `1px solid ${theme.palette.custom.borderColor}`,
      padding: theme.spacing(0.8),
      width: "100%",
      borderRadius: theme.spacing(1),
      margin: 0,
      "& .MuiInputBase-input": {
        border: "none",
        padding: 0,
      },
      "& .MuiButtonBase-root": {
        padding: theme.spacing(0.3),
        "& .MuiSvgIcon-root": {
          fontSize: "1.4rem",
        },
      },
    },
    label: {
      color: theme.palette.custom.grayToWhite,
      width: "100%",
      margin: 0,
      textAlign: "left",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
