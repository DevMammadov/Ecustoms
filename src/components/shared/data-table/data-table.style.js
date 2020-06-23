import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    stripped: {
      '& table tr:nth-child(even)': {
        backgroundColor: theme.palette.custom.trStripped,
      },
    },
    root: {
      '& table': {
        '& th': {
          textAlign: 'center',
          '& div': {
            color: theme.palette.custom.textPrimary,
          },
        },
        '& td': {
          padding: '.3rem .6rem',
          textAlign: 'center',
          verticalAlign: 'center',
        },
      },
      '& .MuiTypography-h6': {
        fontWeight: 'bold',
        fontSize: '1rem',
      },
      '& .MuiTablePagination-toolbar': {
        padding: theme.spacing(1),
      },
      '& .MuiTableHead-root': {
        '& .MuiTableRow-head': {
          '& .MuiTableCell-root': {
            backgroundColor: theme.palette.custom.whiteToBlack,
          },
        },
      },
      '& .MuiFormControl-root': {
        '& .MuiInputBase-root': {
          border: `1px solid ${theme.palette.color.gray} !important`,
          overflow: 'hidden',
          '& .MuiInputBase-input': {
            border: 'none',
          },
        },
      },
    },
  };
});
