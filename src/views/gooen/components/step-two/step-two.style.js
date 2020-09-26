import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    form: {
      width: '100%',
    },
    gridContainer: {
      padding: theme.spacing(2, 3),
    },
    inputContainer: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
