import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    startPage: {
      textAlign: "center",
      paddingBottom: theme.spacing(15),
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
    senderInfoContainerGrid: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2, 4),
    },
    newXifDocContainerGrid: {
      padding: theme.spacing(3),
    },

    dataTableTitleButton: {
      textTransform: "capitalize",
    },
    titleButtonIcon: {
      marginRight: theme.spacing(1),
    },
    sertificateSelectRoot: {},
    searchForm: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
