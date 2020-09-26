import React, { FC } from "react";
import { useStyles } from "./upload-progress.style";
import { Alert, Button } from "components/shared";
import { useTranslator } from "localization";
import { LinearProgress } from "@material-ui/core";
import { IFileSendStatus } from "views/cargo/types";

export interface IUploadProgress {
  uploadStatus: IFileSendStatus;
  successText?: string;
  buttonText?: string;
  uploadingText?: string;
  failText?: string;
  title?: string;
  onUpload(): void;
}

export const UploadProgress: FC<IUploadProgress> = ({
  uploadStatus,
  buttonText,
  successText = "",
  uploadingText,
  failText,
  title,
  onUpload,
}) => {
  const lang = useTranslator();
  const classes = useStyles();

  const renderAlertContent = () => {
    switch (uploadStatus.status) {
      case "uploading":
        return <LinearProgress style={{ width: "100%" }} />;
      case "fail":
        return uploadStatus.text || failText;
      case "success":
        return successText;
      default:
        return title;
    }
  };

  return (
    <Alert
      classes={{ message: classes.title, title: classes.alertTitle }}
      titleContent={
        <div className={classes.checkSuccessContent}>
          <div className={classes.alertContent}>{renderAlertContent()}</div>
          <Button
            onClick={onUpload}
            disabled={
              uploadStatus.status === "uploading" || uploadStatus.status === "success" || uploadStatus.status === "fail"
            }
            disableLoader
            variant="contained"
            color="primary"
          >
            {uploadStatus.status === "uploading" ? uploadingText : buttonText || lang.uploadToDatabase}
          </Button>
        </div>
      }
      collapsable={false}
      severity={uploadStatus.status === "fail" ? "error" : "success"}
      className={classes.alert}
      // icon={uploadStatus === "uploading" && <BackupIcon />}
    />
  );
};
