import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    alertMessage: {
      width: '100%',
    },
    alertAction: {
      alignItems: 'start !important',
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
