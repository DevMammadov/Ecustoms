import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
    },
    price: {
      display: "block",
      padding: theme.spacing(0.5, 0),
      fontSize: 20,
      fontWeight: "bold",
    },
    title: {
      marginBottom: theme.spacing(0.1),
      display: "flex",
      justifyContent: "space-between",
    },
    footer: {
      marginTop: theme.spacing(2),
    },
    thumbs: {
      display: "flex",
      justifyContent: "space-between",
      "& > div": {
        "& div:first-child": {},
        "& div:last-child": {
          fontWeight: "bold",
        },
      },
    },
    dutyList: {
      width: "100%",
      paddingTop: theme.spacing(1),
      "& .MuiListItem-root": {
        padding: theme.spacing(0.2, 0),
        display: "flex",
        justifyContent: "space-between",
        "& span:last-child": {
          whiteSpace: "nowrap",
        },
      },
    },
    questionMark: {
      cursor: "pointer",
    },
    progress: {
      height: 2,
      borderRadius: 5,
    },
    progressBar: {
      borderRadius: 5,
    },
    progresskoromiko: {
      backgroundColor: theme.palette.color.koromiko,
    },
    progresspermission: {
      backgroundColor: theme.palette.color.permission,
    },
    progressdanger: {
      backgroundColor: theme.palette.danger.main,
    },
    progressTrack: {
      background: theme.palette.color.gray,
    },
    koromiko: {
      // color: theme.palette.color.koromiko,
    },
    permission: {
      // color: theme.palette.color.permission,
    },

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      dutyList: {
        width: "unset",
        "& .MuiListItem-root": {
          padding: 0,
          paddingBottom: 8,
        },
      },
      price: {
        fontSize: 17,
      },
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
