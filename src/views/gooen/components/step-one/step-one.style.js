import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    form: {
      width: '100%',
    },
    gooenHeader: {
      padding: theme.spacing(2, 3),
      color: theme.palette.primary.main,
    },
    gooenNoteAttention: {
      color: theme.palette.danger.main,
    },
    gridContainer: {
      padding: theme.spacing(2, 3),
    },
    field: {
      marginBottom: theme.spacing(2),
      '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input:first-child': {
        padding: theme.spacing(1),
      },
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
