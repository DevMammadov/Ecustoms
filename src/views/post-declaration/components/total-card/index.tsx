import React, { FC } from "react";
import { useStyles } from "./card.style";
import { useTranslator } from "localization";
import { CardContent, Card as MuiCard, List, ListItem } from "@material-ui/core";
import clsx from "clsx";
import { ITotalPrice, IGoodTotalPrice } from "../../types";
import LinearProgress from "@material-ui/core/LinearProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/pro-light-svg-icons";
import { Manat } from "components/shared";

export interface ITotalCard {
  title: string;
  className?: string;
  color?: "koromiko" | "permission";
  totalPrice?: ITotalPrice | IGoodTotalPrice | any;
  type?: "total" | "month";
  showQuestionMark?: boolean;
}

export const TotalCard: FC<ITotalCard> = ({
  className,
  title,
  color = "koromiko",
  totalPrice,
  type,
  showQuestionMark = false,
}) => {
  const lang = useTranslator("postal-declaration");
  const classes = useStyles();

  const renderList = () => {
    return (
      <List disablePadding dense className={classes.dutyList}>
        {totalPrice?.duty?.map((dt: any) => (
          <ListItem key={`${dt.name}${dt.value}`}>
            <span> {dt.name} </span>
            <span>
              {dt.value || 0} <Manat />
            </span>
          </ListItem>
        ))}
      </List>
    );
  };

  const renderThums = () => {
    return (
      <div className={classes.thumbs}>
        <div>
          <div>{lang.limit}</div>
          <div>
            {totalPrice?.limitUsd || 0} $ / {totalPrice?.limitAzn || 0} <Manat />
          </div>
        </div>
        <div>
          <div>{lang.residue}</div>
          <div>
            {totalPrice?.remainderPriceUsd || 0} $ / {totalPrice?.remainderPriceAzn || 0} <Manat />
          </div>
        </div>
      </div>
    );
  };

  const renderPrice = () => {
    return type === "month" ? (
      <span>
        {totalPrice?.invoicePriceUsd || 0} $ / {totalPrice?.invoicePriceAzn || 0} <Manat />
      </span>
    ) : (
      <span>
        {totalPrice?.dutySumAzn || 0} <Manat />
      </span>
    );
  };

  const getProsent = () => {
    //totalPrice?.invoicePriceUsd
    let prosent = (Number(totalPrice?.invoicePriceUsd) / Number(totalPrice?.limitUsd)) * 100;
    prosent = prosent >= 100 ? 100 : prosent;
    return !isNaN(prosent) ? prosent : 0;
  };

  return (
    <MuiCard variant="outlined" className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.title}>
          <span>{title}</span>
          {showQuestionMark && <FontAwesomeIcon icon={faQuestionCircle} className={classes.questionMark} />}
        </div>
        <div className={clsx(classes.price, classes[color])}>{renderPrice()}</div>
        <LinearProgress
          classes={{
            root: classes.progress,
            bar: clsx(
              classes.progressBar,
              classes[`progress${color}`],
              type === "month" && getProsent() >= 100 && classes.progressdanger
            ),
            colorPrimary: classes.progressTrack,
          }}
          variant="determinate"
          value={type === "month" ? getProsent() : 100}
        />
        <div className={classes.footer}>{type === "total" ? renderList() : renderThums()}</div>
      </CardContent>
    </MuiCard>
  );
};
