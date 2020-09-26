import { createMuiTheme } from "@material-ui/core/styles";
import {
  mulishExtraLight,
  mulishExtraLightItalic,
  mulishLight,
  mulishLightItalic,
  mulishRegular,
  mulishItalic,
  mulishMedium,
  mulishMediumItalic,
  mulishSemiBold,
  mulishSemiBoldItalic,
  mulishBold,
  mulishBoldItalic,
  mulishExtraBold,
  mulishExtraBoldItalic,
  mulishBlack,
  mulishBlackItalic,
} from "./fonts";

// A custom theme for this app
export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: ["'Mulish'"].join(","),
  },
  overrides: {
    MuiTypography: {
      body1: {},
      body2: {
        padding: 0,
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          mulishExtraLight,
          mulishExtraLightItalic,
          mulishLight,
          mulishLightItalic,
          mulishRegular,
          mulishItalic,
          mulishMedium,
          mulishMediumItalic,
          mulishSemiBold,
          mulishSemiBoldItalic,
          mulishBold,
          mulishBoldItalic,
          mulishExtraBold,
          mulishExtraBoldItalic,
          mulishBlack,
          mulishBlackItalic,
        ],
      },
    },
    MuiStepper: {
      root: {
        "& .MuiSvgIcon-root": {
          fontSize: 28,
        },
      },
    },
    MuiCard: {
      root: {
        boxShadow: 0,
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
    primary: {
      light: "#465e8a",
      main: "#394e75",
      dark: "#2f446b",
      contrastText: "#fff",
      catskillWhite: "#eef1f7",
    },
    warning: {
      main: "#fca50f",
    },
    danger: {
      main: "#F12B2C",
    },
    success: {
      main: "#29CC97",
      light: "rgb(233, 249, 244)",
      dark: "#19AE82",
    },
    custom: {
      trStripped: "rgba(55, 81, 255, 0.04)",
      cardsBack: "#fff",
      borderColor: "rgba(191, 182, 182, 0.45)",
      textPrimary: "#394e75",
      whiteToBlack: "#fff",
      textColor: "#363636",
      grayToWhite: "#808080",
      grayToDark: "#fafafa",
      labelcolor: "rgba(0, 0, 0, 0.87)",
    },
    color: {
      yellow: "#FFDA1B",
      white: "#fff",
      gray: "rgba(191, 182, 182, 0.45)",
      darkGray: "rgba(0, 0, 0, 0.54)",
      koromiko: "#4CB8FF",
      permission: "#EA6607",
    },
    alert: {
      error: {
        color: "rgb(97, 26, 21)",
        background: "#FFEDEA",
      },
      info: {
        color: "rgb(13, 60, 97)",
        background: "rgb(232, 244, 253)",
      },
    },
  },
});
