import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    labelContainer: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    labelRoot: {
      margin: 0,
      width: '100%',
      textAlign: 'left',
    },
    label: {
      width: '100%',
      marginBottom: theme.spacing(1),
    },
    select: {
      width: '100%',
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
