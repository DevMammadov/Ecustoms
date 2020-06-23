import React, { FC } from "react";
import { List, ListItemText, ListItem, ListItemIcon, Paper, Typography, CircularProgress } from "@material-ui/core";
import { useStyles } from "./sertificates.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/pro-solid-svg-icons";
import { ISertificate } from "types";
import { Spinner } from "components/shared";
import { useTranslator } from "localization";

export interface ISertificateList {
  onSelect(voen: string, number: string): void;
  list: ISertificate[];
  loading: boolean;
}

export const Sertificates: FC<ISertificateList> = ({ onSelect, list, loading }) => {
  const classes = useStyles();
  const lang = useTranslator("login");

  const renderList = () => {
    return (
      <Typography component="div" className={classes.container}>
        <Typography component="div" className={classes.listTitle}>
          <h3> {lang.userSertificates} </h3>
          <span>{lang.selectOneforLogin}</span>
        </Typography>
        <List component={Paper} className={classes.list}>
          {list.map((serificate: ISertificate) => (
            <ListItem
              button
              onClick={() => onSelect(serificate.structureData?.voen, serificate.certificateNumber)}
              key={serificate.certificateNumber}
              disabled={loading}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className={classes.listIcon} />
              </ListItemIcon>
              {serificate.structureData ? (
                <ListItemText
                  primary={`${serificate.structureData?.voen} - ${serificate.structureData?.positionName}`}
                />
              ) : (
                <ListItemText primary="Vətəndaş" />
              )}
            </ListItem>
          ))}
          <Spinner hidden={!loading} color="primary" />
        </List>
      </Typography>
    );
  };

  return list && list.length > 0 ? renderList() : <CircularProgress className={classes.loader} color="primary" />;
};
