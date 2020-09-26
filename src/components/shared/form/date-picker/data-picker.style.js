import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    picker: {
      width: "100%",
      margin: 0,
      "& .Mui-disabled": {
        color: "#4B506D",
        background: grey[100],
      },
      "& .MuiInputBase-root": {
        overflow: "hidden",
      },
      "& .MuiOutlinedInput-adornedEnd": {
        paddingRight: 0,
      },
    },
    pickerInput: {
      background: "red",
    },
    heplerText: {
      fontSize: "0.75rem",
      marginTop: theme.spacing(0.5),
      color: "red",
    },
    errorBorder: {
      border: `1px solid red`,
      "& .MuiSvgIcon-root": {
        color: "red",
      },
    },

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
