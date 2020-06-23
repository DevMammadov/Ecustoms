import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      "& .Mui-error": {
        "& .MuiInputBase-input": {
          border: `1px solid red`,
        },
      },
      "& .MuiInputBase-root": {
        display: "flex",
        margin: 0,
        "& .Mui-disabled": {
          color: "#4B506D",
          background: grey[100],
        },
        "& .MuiInputBase-input": {
          borderRadius: "8px",
          padding: "8px",
          border: `1px solid rgba(191, 182, 182, 0.45)`,
        },
      },
      "& .MuiInputBase-multiline": {
        padding: 0,
      },
      "& .MuiFormLabel-root": {
        display: "block",
        position: "relative",
        transform: "unset",
        lineHeight: "1.5",
        color: theme.palette.custom.grayToWhite,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
