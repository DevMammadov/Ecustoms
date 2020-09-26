import React, { FC } from "react";
import { useStyles } from "./validate-result.style";
import { useTranslator } from "localization";
import { IFileErrors } from "views/postal-services/types";
import { Alert, Button } from "components/shared";
import { FileErrors } from "../file-errors";
import clsx from "clsx";

export interface IAlert {
  docError: string | null;
  objectErrors: IFileErrors[];
}

export interface IValidateResult {
  goodCount: number;
  alerts: IAlert;
  uploading: boolean;
  uploadIndex: number;
  onUpload(): void;
  uploadBtnTitle?: string;
  complateTitle?: string;
}

export const ValidateResult: FC<IValidateResult> = ({
  goodCount,
  onUpload,
  alerts,
  uploading,
  uploadIndex,
  uploadBtnTitle,
  complateTitle,
}) => {
  const lang = useTranslator();
  const classes = useStyles();

  const renderAlertContent = () => {
    if (uploading) {
      return <> {lang.uploadingGoods} </>;
    } else if (goodCount - 1 === uploadIndex) {
      return <> {complateTitle && complateTitle} </>;
    } else {
      return (
        <>
          <b>{goodCount}</b> {lang.fileChecked}
        </>
      );
    }
  };

  console.log(uploading);

  return (
    <>
      {alerts.objectErrors.length > 0 && (
        <Alert
          classes={{ message: classes.title, title: classes.alertTitle }}
          titleContent={
            <span>
              {lang.error}! <b> {alerts.objectErrors.length} </b> {lang.errorInGood}
            </span>
          }
          collapsable={false}
          severity="error"
          text={<FileErrors show={4} errors={alerts.objectErrors} />}
          className={clsx(classes.alert, classes.alertError)}
        />
      )}
      {alerts.docError && (
        <Alert
          classes={{ message: classes.title, title: classes.alertTitleError }}
          titleContent={lang.error}
          collapsable={false}
          severity="error"
          text={lang[alerts.docError]}
          className={clsx(classes.alert, classes.alertError)}
        />
      )}
      {goodCount > 0 && (
        <Alert
          classes={{ message: classes.successAlertMessage, title: classes.alertTitle }}
          titleContent={
            <div className={classes.checkSuccessContent}>
              <span>{renderAlertContent()}</span>
              <Button onClick={onUpload} disabled={uploadIndex > 0} disableLoader variant="contained" color="primary">
                {uploadBtnTitle || lang.uploadToDatabase}
              </Button>
            </div>
          }
          collapsable={false}
          severity="success"
          className={classes.alert}
        />
      )}
    </>
  );
};
