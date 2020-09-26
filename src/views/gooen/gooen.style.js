import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    alertContainer: {
      marginBottom: theme.spacing(2),
    },
    stepperRoot: {
      width: '100%',
      stepperBorder: {
        border: '1px solid #ddd',
      },
    },
    steps: {
      margin: theme.spacing(2, 0),
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
    },
    button: {
      padding: theme.spacing(1, 8),
      margin: theme.spacing(0, 1),
    },
    hasVoen: {
      padding: theme.spacing(15),
      '& .MuiButton-root': {
        marginTop: '60px',
      },
    },
    gooen: {
      color: theme.palette.danger.main,
      fontWeight: 'bolder',
    },
    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {},
  };
});
