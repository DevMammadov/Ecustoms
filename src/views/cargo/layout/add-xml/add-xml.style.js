import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(6, 8),
      position: "relative",
    },
    dropZoneContainer: {
      display: "flex",
      justifyContent: "center",
      "& > .MuiGrid-item": {
        padding: "0 100px",
      },
    },
    dropZone: {
      border: `1px dashed ${theme.palette.custom.textPrimary}`,
      textAlign: "center",
      borderRadius: "10px",
      padding: theme.spacing(2),
      marginTop: theme.spacing(5),
      width: "100%",
    },
    activeZone: {
      backgroundColor: blue[100],
    },
    uploadIcon: {
      fontSize: "4rem",
      color: theme.palette.custom.textPrimary,
    },
    uploadResult: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
