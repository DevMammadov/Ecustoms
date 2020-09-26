import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import { useStyles } from "./settings.style";
import { govList, IGovList } from "./goverment-list";
import Divider from "@material-ui/core/Divider";

export const GovList = () => {
  const classes = useStyles();
  return (
    <div>
      <Divider component="hr" />
      <List classes={{ root: classes.MuiListRoot }}>
        {govList.map((item: IGovList) => (
          <div key={item.url}>
            <Link href={item.url} target="_blank" className={classes.link}>
              <h6 className={classes.listHeader}>{item.label}</h6>
            </Link>
            <ListItem classes={{ root: classes.MuiListItemRoot }}>
              <span className={classes.listItemText}>{item.about}</span>
            </ListItem>
            <Divider component="hr" />
          </div>
        ))}
      </List>
    </div>
  );
};
