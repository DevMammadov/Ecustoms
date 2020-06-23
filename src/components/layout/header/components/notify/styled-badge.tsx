import { withStyles, createStyles, Badge } from "@material-ui/core";

export const StyledBadge = withStyles((theme: any) =>
  createStyles({
    badge: {
      right: -3,
      top: 4,
      border: `2px solid ${theme.palette.background.wildSand}`,
      padding: "0 4px",
      background: theme.palette.custom.textPrimary,
      color: theme.palette.custom.whiteToBlack,
      fontSize: ".7rem",
      fontWeight: "bold",
    },
  })
)(Badge);
