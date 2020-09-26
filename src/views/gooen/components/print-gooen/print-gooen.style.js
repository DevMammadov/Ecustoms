import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    gooenHeader: {
      padding: theme.spacing(2, 3),
      color: theme.palette.primary.main,
    },
    gridContainer: {
      padding: theme.spacing(2, 3),
    },
    inputGroup: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    input: {
      marginRight: theme.spacing(1),
    },
    form: {
      width: '100%',
    },
    gooenNoteAttention: {
      color: theme.palette.danger.main,
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
