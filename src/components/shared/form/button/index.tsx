import { Button as MuiButton, ButtonProps, CircularProgress } from "@material-ui/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC, useState } from "react";
import { useStyles } from "./button.style";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimerPrompt } from "./timerPrompt";
import { useDispatch } from "react-redux";
import { checkToken } from "views/login/store/action";
import { useUser } from "hooks";

interface IButtonProps {
  disableLoader?: boolean;
  icon?: IconProp;
  disableTime?: number;
  disabled?: boolean;
  onPromptAllow?(): void;
  onPromptDeny?(): void;
  promptMessage?: string;
  onClick?(e: string): void;
  design?: "green" | "primary";
  className?: string;
  dontCheckLogin?: boolean;
}

export const Button: FC<ButtonProps & IButtonProps> = ({
  disableLoader,
  icon,
  disableTime,
  disabled,
  promptMessage,
  onPromptAllow = () => {},
  onPromptDeny = () => {},
  onClick = () => {},
  design,
  className,
  dontCheckLogin = false,
  ...rest
}) => {
  const classes = useStyles();
  const [time, setTime] = useState<number>(0);
  const dispatch = useDispatch();
  const currentUser = useUser();

  const handleButtonClick = (e: any) => {
    if (!dontCheckLogin && rest.type === "submit") {
      dispatch(checkToken(currentUser.asanToken));
    }

    if (disableTime) {
      setTime(disableTime);
    }
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  const renderLoader = () => {
    if (disabled && !disableLoader && !disableTime) {
      return <CircularProgress color="primary" className={classes.progress} />;
    }

    if (time > 0 && disableTime) {
      return <TimerPrompt clearTime={() => setTime(0)} {...{ time, onPromptAllow, onPromptDeny, promptMessage }} />;
    }
  };

  return (
    <MuiButton
      disabled={disabled || time > 0}
      onClick={(e) => handleButtonClick(e)}
      className={clsx(classes.button, design && classes[design], className)}
      {...rest}
    >
      {renderLoader()}
      {time === 0 && (
        <>
          {icon && <FontAwesomeIcon className={classes.icon} icon={icon} />}
          {rest.children}
        </>
      )}
    </MuiButton>
  );
};
