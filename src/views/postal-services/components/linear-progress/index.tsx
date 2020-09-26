import React, { FC } from "react";
import { useStyles } from "./linear-progress.style";
import { useTranslator } from "localization";
import { LinearProgress as MuiProgress, LinearProgressProps, Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faExclamation } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";

export interface ILinearProgress {
  totalCount: number;
  warn?: number;
  error?: number;
  success?: number;
  currentIndex: number;
  showError?: boolean;
  showWarn?: boolean;
  showSuccess?: boolean;
}

export const LinearProgress: FC<ILinearProgress & LinearProgressProps> = ({
  warn = 0,
  error = 0,
  success = 0,
  totalCount,
  currentIndex,
  showError = true,
  showWarn = true,
  showSuccess = true,
  ...rest
}) => {
  const lang = useTranslator();
  const classes = useStyles();
  const index = currentIndex === 0 ? 0 : currentIndex + 1;

  return (
    <div className={classes.container}>
      <MuiProgress
        variant="determinate"
        classes={{ root: classes.progress, bar: classes.progressBar }}
        value={(index / totalCount) * 100 || 0}
        {...rest}
      />
      <div className={classes.progressContent}>
        {showSuccess && (
          <Tooltip title={lang.uploadedSuccessfuly || ""} arrow>
            <span>
              <FontAwesomeIcon className={clsx(classes.contentIcon, classes.success)} icon={faCheck} />
              {success}
            </span>
          </Tooltip>
        )}
        {showError && (
          <Tooltip title={lang.notUploaded || ""} arrow>
            <span>
              <FontAwesomeIcon className={clsx(classes.contentIcon, classes.error)} icon={faTimes} />
              {error}
            </span>
          </Tooltip>
        )}

        {showWarn && (
          <Tooltip title={lang.existFile || ""} arrow>
            <span>
              <FontAwesomeIcon className={clsx(classes.contentIcon, classes.warn)} icon={faExclamation} />
              {warn}
            </span>
          </Tooltip>
        )}
      </div>
      <div className={classes.procent}>
        <span>{Math.trunc((index / totalCount) * 100) || 0}%</span>
      </div>
    </div>
  );
};
