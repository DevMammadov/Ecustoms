import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    gooen: {
      color: theme.palette.danger.main,
      fontWeight: 'bolder',
    },
    hasVoen: {
      padding: theme.spacing(15),
      '& .MuiButton-root': {
        marginTop: '60px',
      },
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
