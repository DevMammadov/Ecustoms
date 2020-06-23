import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    labelContainer: {
      width: "100%",
      "& .MuiInputBase-inputMultiline": {
        border: 0,
        color: theme.palette.custom.textPrimary,
      },
    },
    labelTop: {
      alignItems: "flex-start",
      margin: 0,
      width: "100%",
      "& .MuiInputBase-root.Mui-disabled": {
        backgroundColor: theme.palette.background.disabled,
      },
    },
    labelright: {
      alignItems: "center",
      margin: 0,
      width: "auto",
    },
    inputRoot: {
      width: "100%",
    },
    input: {
      borderRadius: theme.spacing(1),
      //border: `1px solid ${theme.palette.custom.borderColor} !important`,
    },
    checkbox: {
      "& .MuiSvgIcon-root": {
        fontSize: "1.7rem",
      },
    },
    disableNumberArrows: {
      "&::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      MozAppearance: "textfield",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      text: {
        "& .MuiInputBase-input": {
          width: "100%",
        },
      },
    },
  };
});
