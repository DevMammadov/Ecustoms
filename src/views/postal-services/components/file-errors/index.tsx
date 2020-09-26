import React, { FC, useState } from "react";
import { useStyles } from "./file-errors.style";
import { useTranslator } from "localization";
import { List, ListItem } from "@material-ui/core";
import { IFileErrors, IError } from "views/postal-services/types";
import { Button } from "components/shared/form";
import { Copy } from "components/shared";

export interface IFileErrorsPage {
  errors: IFileErrors[];
  show: number;
}

export const FileErrors: FC<IFileErrorsPage> = ({ errors, show }) => {
  const lang = useTranslator("postal-services", ["header"]);
  const classes = useStyles();
  const [lookAll, setLookAll] = useState<boolean>(false);

  const renderArray = () => {
    if (errors.length > show && !lookAll) {
      return errors.slice(0, show);
    } else {
      return errors;
    }
  };

  return (
    <>
      <List className={classes.mainList}>
        {renderArray().map((error: IFileErrors, index: number) => (
          <ListItem key={index} className={classes.listItem}>
            <div>
              {index + 1}) {lang.receiptNo}{" "}
              <Copy className={classes.copyText} tooltip={lang.copy} text={error.goodNo} /> {lang.ofGood}
            </div>
            <div>
              <List className={classes.subList}>
                {error.errors.map((err: IError) => (
                  <ListItem key={err.name}>
                    <span>
                      <Copy className={classes.copyText} tooltip={lang.copy} text={err.value} />
                    </span>
                    <div className={classes.errorDescription}>{lang[err.error]}</div>
                  </ListItem>
                ))}
              </List>
            </div>
          </ListItem>
        ))}
      </List>
      {errors.length > show && !lookAll && (
        <Button className={classes.showMoreButton} onClick={() => setLookAll(true)}>
          {errors.length - show} {lang.moreErrors}
        </Button>
      )}
    </>
  );
};
