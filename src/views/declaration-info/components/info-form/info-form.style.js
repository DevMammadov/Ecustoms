import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    form: {
      "& >div": {
        marginBottom: theme.spacing(2),
      },
    },
  };
});
