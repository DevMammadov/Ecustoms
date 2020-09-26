import React, { FC, useState } from "react";
import { useStyles } from "./goods-card.style";
import { useTranslator } from "localization";
import { IconButton, Button, Collapse, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/pro-solid-svg-icons";
import { faChevronCircleUp } from "@fortawesome/pro-light-svg-icons";
import { IDuty, IGoodsInvoicePriceList } from "views/post-declaration/types";
import { ICurrency } from "views/declaration/types";
import { IUnit } from "types";
import clsx from "clsx";
import { Manat } from "components/shared/manat";

export interface IGoodsCard {
  good: IGoodsInvoicePriceList;
  currencyList?: ICurrency[];
  onEdit?(id: number): void;
  onRemove?(id: number): void;
  showEditButtons?: boolean;
  quantityName?: string;
  currencyName?: string;
  goodIndex: number;
  className?: string;
  units?: IUnit[];
}

export const GoodsCard: FC<IGoodsCard> = ({
  onEdit = () => {},
  onRemove = () => {},
  good,
  currencyList = [],
  units = [],
  goodIndex,
  quantityName,
  currencyName,
  className,
  showEditButtons = true,
}) => {
  const lang = useTranslator();
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  const getFieldFromArray = (arr: any[], arrField: any, objField: any, field: any) => {
    const sorted = arr.filter((elm) => elm[arrField] === objField);
    if (sorted && sorted[0]) {
      return sorted[0][field];
    } else {
      return "";
    }
  };

  return (
    <div className={clsx(classes.container, className)}>
      <div className={classes.content}>
        <div className={classes.cardTitle}>
          <span>
            {good.goodsGroupName} - {good.goodsName}: {good.quantity}{" "}
            {quantityName || getFieldFromArray(units, "code", good.quantityUnit, "name")} - {good.invoicePrice}{" "}
            {currencyName || getFieldFromArray(currencyList, "code", good.currencyType, "abbreviation3")}
          </span>
        </div>
        {showEditButtons && (
          <div className={classes.buttonContainer}>
            <IconButton onClick={() => onEdit(goodIndex)}>
              <FontAwesomeIcon icon={faPen} />
            </IconButton>
            <IconButton onClick={() => onRemove(goodIndex)}>
              <FontAwesomeIcon icon={faTrash} />
            </IconButton>
          </div>
        )}
      </div>
      <div>
        <Button disableRipple onClick={() => setCollapsed(!collapsed)} className={classes.collapseButton}>
          <span>Gömük ödənişlərinin hesablanması</span>
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            className={clsx(!collapsed && classes.arrowDown, classes.checvronIcon)}
          />
        </Button>
        <Collapse in={collapsed}>
          <List disablePadding dense className={classes.dutyList}>
            {good.dutyList?.map((dt) => (
              <ListItem key={dt.code}>
                <span> {dt.name} </span>
                <span>
                  {dt.value} <Manat />
                </span>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    </div>
  );
};
