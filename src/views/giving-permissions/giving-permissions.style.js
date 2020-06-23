import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    startPage: {
      textAlign: "center",
      "& img": {
        height: "120px",
        position: "relative",
        marginTop: "130px",
        marginBottom: "30px",
      },
      "& p": {
        fontWeight: "bold",
      },
      "& .MuiButton-root": {
        marginTop: "60px",
      },
    },
    searchBarContainerGrid: {
      marginBottom: theme.spacing(3),
      position: "relative",
      padding: theme.spacing(4),
      flexWrap: "wrap",
      "& > div": {
        display: "flex",
        "& > div:nth-child(1)": {
          flexBasis: "50%",
          paddingRight: theme.spacing(10),
        },
        "& > div:nth-child(2)": {
          flexBasis: "50%",
          paddingLeft: theme.spacing(10),
        },
      },
      "& > div:nth-child(2)": {
        paddingTop: theme.spacing(3),
      },
    },
    sertificateSelect: {
      display: "block",
      width: "100%",
    },
    checkBox: {
      display: "block",
    },
    checkboxContainer: {
      display: "flex",
      "& > div": {
        flexBasis: "50%",
      },
    },
    formPaper: {
      padding: theme.spacing(4),
    },
    checkboxexSubmitButton: {
      textAlign: "right",
      display: "flex",
      justifyContent: "flex-end",
      marginTop: theme.spacing(3),
      "& .MuiButton-root:nth-child(1)": {
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(0.5),
        fontWeight: "bold",
      },
    },
    inputLabel: {
      margin: theme.spacing(1, 0, 0.5, 0),
    },
    mobileAddButton: {
      display: "none",
    },
    mobileMenuPaper: {
      border: `1px solid ${theme.palette.color.gray}`,
    },
    dataTableTitleButton: {
      textTransform: "capitalize",
    },
    titleButtonIcon: {
      marginRight: theme.spacing(1),
    },
    dataTableButtonsContainer: {
      display: "flex",
      justifyContent: "space-between",
      "& button": {
        fontSize: "0.9rem",
        padding: theme.spacing(1.1),
        borderRadius: "100%",
        color: theme.palette.common.white,
        "&:hover": {
          opacity: 0.7,
        },
      },
      "& button:nth-child(1)": {
        background: theme.palette.primary.main,
      },
      "& button:nth-child(2)": {
        background: theme.palette.danger.main,
      },
      "& button:nth-child(3)": {
        background: theme.palette.color.gray,
      },
    },
    sertificateSelectRoot: {},
    searchForm: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      dataTableTitleButton: {
        fontSize: "12px",
        whiteSpace: "nowrap",
      },
      searchForm: {
        display: "flex",
        width: "100%",
      },
      inputRoot: { width: "100%" },
      search: { width: "100%" },
      mobileAddButton: {
        display: "block",
        position: "fixed",
        bottom: "20px",
        right: "20px",
      },
      manageSearchContainer: {
        padding: theme.spacing(4),
        flexWrap: "wrap",
        "& > div": {
          display: "block",
          "& > div:nth-child(1)": {
            paddingRight: theme.spacing(0),
          },
          "& > div:nth-child(2)": {
            paddingLeft: theme.spacing(0),
          },
        },
        "& > div:nth-child(2)": {
          display: "flex",
          flexWrap: "wrap",
          paddingTop: theme.spacing(1),
          "& > div": {
            flexBasis: "100%",
          },
        },
      },
      checkboxContainer: {
        display: "block",
      },
      checkboxexSubmitButton: {
        paddingTop: theme.spacing(2),
        justifyContent: "center",
      },
    },
  };
});
