import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    profile: {
      height: "30px",
      width: "30px",
      borderRadius: "100%",
      border: "1px solid",
      cursor: "pointer",
      padding: "4px",
      boxSizing: "border-box",
      borderRight: `1px solid ${theme.palette.color.white}`,
      borderColor: theme.palette.primary.main,
      "& img": {
        borderRadius: "100%",
        height: "23px",
        width: "23px",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
    user: {
      marginLeft: 3,
    },
  };
});
