import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      "& .MuiFormHelperText-root": {
        margin: 0,
      },
      "& .MuiInputBase-root": {
        display: "flex",
        margin: 0,
        "& .Mui-disabled": {
          color: "#4B506D",
        },
        "& .MuiInputBase-input": {
          borderRadius: theme.spacing(1),
          padding: theme.spacing(1),
          //marginTop: -5,
        },
      },
      "& .MuiInputBase-multiline": {
        padding: 0,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px !important",
        top: 0,
      },
      "& fieldset": {
        "& legend": {
          "& span": {
            display: "none",
          },
        },
      },
    },
    labelContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    label: {
      marginBottom: 5,
      lineHeight: 1.3,
    },
    labelDisabled: {
      color: "rgba(0, 0, 0, 0.38)",
    },
    questionMark: {
      color: theme.palette.custom.textPrimary,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
