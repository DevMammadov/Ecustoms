import { createMuiTheme } from "@material-ui/core/styles";
import { muli } from "./fonts";

// A custom theme for this app
export const darkTheme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {},
      body2: {
        padding: 0,
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [muli],
      },
    },
    MuiGrid: {
      item: {
        color: "#d9d9d9",
      },
    },
    MuiSelect: {
      select: {
        border: "1px solid rgba(191, 182, 182, 0.45)",
        background: "#282828",
        borderRadius: "8px",
        padding: "7.2px",
        boxSizing: "border-box",
        color: "#fff",
      },
      icon: {
        color: "#fff",
      },
    },
    MuiInputBase: {
      root: {
        color: "#fff",
      },
    },
    MuiMenuItem: {
      root: {
        color: "#fff",
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "#454545",
      },
    },
    MuiTab: {
      wrapper: {
        fontWeight: "bold",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#383838",
        color: "#d9d9d9",
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: "5px",
        boxShadow: 0,
        "&:hover": {
          backgroundColor: "#141414 !important",
        },
      },
    },
    MuiFormControlLabel: {
      labelPlacementTop: {
        "& span": {
          display: "block",
          width: "100%",
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "normal",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#141414 !important",
        },
      },
    },
    MuiSwitch: {
      root: {
        "& $checked": {
          "& .MuiSwitch-thumb": {
            backgroundColor: "#d9d9d9",
          },
        },
      },
      switchBase: {
        "&:hover": {
          backgroundColor: "unset !important",
        },
      },
      thumb: {
        backgroundColor: "#282828",
      },
    },
    MuiTextField: {
      root: {
        "& .MuiFormLabel-root": {
          color: "#fff",
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#2F4163",
        fontSize: "13px",
      },
      arrow: {
        color: "#2F4163",
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 0,
      },
    },
    MuiTablePagination: {
      toolbar: {
        color: "red",
      },
    },
  },
  palette: {
    background: {
      main: "#141414",
      wildSand: "#282828",
      borderColor: "rgba(224, 224, 224, 1)",
      disabled: "#454545",
    },
    color: {
      white: "#fff",
      gray: "#454545",
      black: "#4B506D",
      darkGray: "#a1a1a1",
    },
    primary: {
      light: "#465e8a",
      main: "#2b2b2b",
      dark: "#2f446b",
      contrastText: "#fff",
    },
    warning: {
      main: "#bd7a08",
    },
    success: {
      main: "#29CC97",
    },
    danger: {
      main: "#ad0e0f",
    },
    custom: {
      trStripped: "#4d4d4d",
      cardsBack: "#383838",
      borderColor: "rgba(191, 182, 182, 0.45)",
      textPrimary: "#d9d9d9",
      whiteToBlack: "#383838",
      grayToWhite: "#bfbfbf",
    },
  },
});
