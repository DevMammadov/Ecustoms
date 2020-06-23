import React, { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconButton } from "@material-ui/core";
import { useStyles } from "./file-uploader.style";
import { stringCutter } from "helpers";
import clsx from "clsx";

export interface IFileUploader {
  label?: string;
  icon: IconProp;
  errorText: any;
  helperText?: string;
  onChange(e: any): void;
}

export const FileUploader: FC<IFileUploader> = ({ label, icon, errorText, helperText, ...rest }) => {
  const classes = useStyles();
  const input = React.createRef<HTMLInputElement>();
  const [file, setFile] = useState<any>();

  useEffect(() => {
    if (input && input.current) {
      //@ts-ignore
      setFile(input?.current?.files[0]);
    }
  }, [input]);

  const renderLabel = () => {
    return helperText ? (
      <span className={classes.errorText}>{helperText}</span>
    ) : label ? (
      <span className={classes.fileName}>{helperText || stringCutter(file?.name, 30) || label}</span>
    ) : (
      <span className={classes.fileName}>{helperText || stringCutter(file?.name, 30)}</span>
    );
  };

  return (
    <label>
      <IconButton component="span">
        <FontAwesomeIcon className={clsx(classes.fileIcon, helperText && classes.redFont)} icon={icon} />
        {renderLabel()}
      </IconButton>
      <input className={classes.input} ref={input} type="file" {...rest} />
    </label>
  );
};
