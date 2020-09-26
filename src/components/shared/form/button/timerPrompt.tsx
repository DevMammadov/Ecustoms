import React, { FC } from "react";
import Timer from "react-compound-timer";
import NavigationPrompt from "react-router-navigation-prompt";
import { Popup } from "components/shared";
import { useTranslator } from "localization/useTranslator";

export interface ITimerPrompt {
  time: number;
  onPromptAllow(): void;
  onPromptDeny(): void;
  clearTime(): void;
  promptMessage: string | undefined;
}

export const TimerPrompt: FC<ITimerPrompt> = ({
  time,
  onPromptAllow,
  onPromptDeny,
  clearTime,
  promptMessage,
}) => {
  const lang = useTranslator("main");

  return (
    <Timer
      formatValue={(value: any) => `${value < 10 ? `0${value}` : value}`}
      initialTime={time}
      checkpoints={[{ time: 0, callback: () => clearTime() }]}
      direction="backward"
    >
      {({ resume, pause }: any) => (
        <>
          <NavigationPrompt
            renderIfNotActive={true}
            when={(crntLocation: any, nextLocation: any) =>
              (!nextLocation ||
                !nextLocation.pathname.startsWith(crntLocation.pathname)) &&
              time > 0
            }
            allowGoBack={false}
          >
            {({ isActive, onCancel, onConfirm }: any) => {
              if (isActive) {
                pause();
                return (
                  <Popup
                    onAllow={() => {
                      onConfirm();
                      onPromptAllow();
                    }}
                    onDeny={() => {
                      onCancel();
                      onPromptDeny();
                    }}
                    title={promptMessage || lang.areYouSureToLieveThisPage}
                    open={true}
                  />
                );
              } else {
                return <div>{resume()}</div>;
              }
            }}
          </NavigationPrompt>
          <Timer.Minutes /> : <Timer.Seconds />
        </>
      )}
    </Timer>
  );
};
