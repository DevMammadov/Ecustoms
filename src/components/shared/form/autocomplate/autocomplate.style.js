import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      "& .MuiOutlinedInput-input.MuiAutocomplete-input": {
        padding: `8px !important`,
      },
      "& .MuiAutocomplete-endAdornment": {
        background: theme.palette.custom.whiteToBlack,
        marginTop: -2,
        marginRight: -2,
      },
    },
    autocomplateInputRoot: {
      padding: "0 !important",
      "& .MuiInputBase-root .MuiInputBase-input": {
        border: "none",
      },
    },
    autocomlpateInput: {
      border: "none !important",
      padding: `${theme.spacing(1)} !important`,
    },
    progress: {
      marginRight: 80,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      progress: {
        marginRight: 60,
      },
    },
    [theme.breakpoints.down("xs")]: {},
  };
});
