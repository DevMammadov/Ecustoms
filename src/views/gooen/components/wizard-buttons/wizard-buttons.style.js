import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
    },
    button: {
      padding: theme.spacing(1, 8),
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
