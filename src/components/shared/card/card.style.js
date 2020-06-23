import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    headerTitle: {
      fontSize: "0.9rem",
      color: theme.palette.custom.textPrimary,
    },
    headerAction: {
      position: "absolute",
      top: 0,
      right: 0,
      "& .MuiIconButton-root": {
        padding: theme.spacing(1, 2.5),
        "& .MuiIconButton-label": {
          fontSize: "30px",
          color: theme.palette.custom.textPrimary,
        },
      },
    },
    cardHeader: {
      position: "relative",
      padding: 0,
      height: "35px",
      borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
      marginBottom: theme.spacing(2),
      overflow: "hidden",
    },
    menuItemContainer: {
      display: "flex",
      "& .MuiListItem-gutters": {
        padding: theme.spacing(1.2),
        fontSize: "1rem",
      },
    },
    listContainer: {
      padding: 0,
      "& .MuiMenuItem-root": {
        width: "100%",
        justifyContent: "flex-start",
        "& .MuiListItemIcon-root": {
          minWidth: theme.spacing(3.2),
        },
      },
    },
    listIcon: {
      color: theme.palette.custom.textPrimary,
    },
    cardContainer: {
      position: "relative",
      padding: "5px",
      overflow: "hidden",
      height: "100%",
      width: "100%",
      "& $card": {
        transformStyle: "preserve-3d",
        minHeight: "160px",
        width: "100%",
        transition: "all .5s ease",
        backgroundColor: theme.palette.custom.cardsBack,
        "& $cardIcon": {
          margin: "20px 0",
          fontSize: "60px",
        },
        "& $cardFront": {
          textAlign: "center",
          color: theme.palette.custom.textPrimary,
          fontWeight: "bold",
          cursor: "pointer",
          padding: "5px",
          height: "100%",
          width: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          backgroundColor: theme.palette.custom.cardsBack,
        },
        "& $cardBack": {
          textAlign: "center",
          color: theme.palette.primary.main,
          height: "100%",
          width: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          top: 0,
          right: 0,
          padding: 0,
          backgroundColor: theme.palette.custom.cardsBack,
        },
        "& $flipIcon": {
          position: "absolute",
          right: 0,
          top: 0,
          cursor: "pointer",
          padding: theme.spacing(1, 2),
          "& > *": {
            fontSize: "30px",
            lineHeight: 0,
            height: "16px",
            color: theme.palette.primary.main,
          },
        },
      },
      "& $reverse": {
        transform: "rotateY(180deg)",
      },
    },
    card: {},
    reverse: {},
    cardFront: {},
    flipIcon: {},
    cardBack: {},
    cardIcon: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      menuItemContainer: {
        "& .MuiListItem-gutters": {
          fontSize: "0.9rem",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
