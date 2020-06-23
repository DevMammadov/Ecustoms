import React, { FC, useEffect, useState } from "react";

export interface ITimerProps {
  started?: boolean;
  onComplate?(): void;
  onStart?(): void;
  startTime?: number;
  endTime?: number;
  interval?: number;
  countDown?: boolean;
  format?: "hh:mm:ss:ml" | string;
  callbackContent?: string | JSX.Element; // will shown after and previous timer started
  visible?: boolean;
}

export const Timer: FC<ITimerProps> = ({
  started = false,
  onComplate = () => {},
  onStart = () => {},
  startTime = 0,
  endTime = 0,
  interval = 1,
  countDown = false,
  //format,
  callbackContent,
  visible = true,
}) => {
  const [formattedTime, setFormattedTime] = useState(`00:${startTime}`);
  const [timerComplated, setTimerComplated] = useState(false);

  useEffect(() => {
    if (started) {
      // onStart();
      startTimer();
    }
  }, [started]);

  const addPrefix = (digit: number) => {
    return digit / 10 < 1 ? `0${digit}` : digit;
  };

  const formatTime = (second: number) => {
    let minutes = addPrefix(Math.floor(second / 60));
    let seconds = addPrefix(second);
    setFormattedTime(`${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setTimerComplated(false);
    let timerInterval = setInterval(() => {
      countDown ? startTime-- : startTime++;
      if (startTime === endTime) {
        clearInterval(timerInterval);
        setTimerComplated(true);
        onComplate();
      }
      formatTime(startTime);
    }, interval * 1000);
  };

  const timerContent = () => {
    return timerComplated || !started ? (callbackContent ? callbackContent : "") : formattedTime;
  };

  return visible ? <span> {timerContent()} </span> : <></>;
};
