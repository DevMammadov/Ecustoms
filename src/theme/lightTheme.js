import { createMuiTheme } from "@material-ui/core/styles";
import { muli } from "./fonts";

// A custom theme for this app
export const lightTheme = createMuiTheme({
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
    MuiIconButton: {
      root: {
        borderRadius: "5px",
        boxShadow: 0,
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
    MuiSelect: {
      select: {
        border: "1px solid rgba(191, 182, 182, 0.45)",
        background: "#fff",
        borderRadius: "8px",
        padding: "7.2px",
        boxSizing: "border-box",
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "#2F4163",
      },
    },
    MuiTab: {
      wrapper: {
        fontWeight: "bold",
      },
    },
    MuiButton: {
      root: {
        textTransform: "normal",
      },
      contained: {
        boxShadow: "none",
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
  },
  palette: {
    background: {
      main: "#2F4163",
      wildSand: "#F7F8FC",
      borderColor: "rgba(224, 224, 224, 1)",
      disabled: "#f4f4f4",
    },
    color: {
      white: "#fff",
      gray: "rgba(191, 182, 182, 0.45)",
      darkGray: "rgba(0, 0, 0, 0.54)",
    },
    primary: {
      light: "#465e8a",
      main: "#394e75",
      dark: "#2f446b",
      contrastText: "#fff",
    },
    warning: {
      main: "#fca50f",
    },
    danger: {
      main: "#F12B2C",
    },
    success: {
      main: "#29CC97",
    },
    custom: {
      trStripped: "rgba(55, 81, 255, 0.04)",
      cardsBack: "#fff",
      borderColor: "rgba(191, 182, 182, 0.45)",
      textPrimary: "#394e75",
      whiteToBlack: "#fff",
      grayToWhite: "#808080",
      grayToDark: "#fafafa",
    },
  },
});
