import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    settings: {
      position: "relative",
      cursor: "pointer",
      padding: "3px 0 10px",
      height: "30px",
      width: "30px",
      fontSize: "22px",
      boxShadow: "none",
      opacity: 0.5,
    },
    icon: {
      color: theme.palette.color.darkGray,
    },
  };
});
