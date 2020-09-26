import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    scrollBar: {
      overflow: "auto",
      "&:hover": {
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.light,
        },
      },
      "&::-webkit-scrollbar": {
        width: 6,
      },
      "&::-webkit-scrollbar-track": {},
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.color.gray,
        borderRadius: 4,
      },
      "&::-webkit-scrollbar-thumb:hover": {},
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
