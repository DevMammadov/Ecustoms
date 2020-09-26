import React, { FC, useState } from "react";
import { useStyles } from "./copy.style";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import clsx from "clsx";
import { useTranslator } from "localization";

export interface ICopy {
  text: string | number;
  onCopy?(): void;
  onFail?(): void;
  tooltip?: string;
  copiedTooltip?: string;
  disableTooltip?: boolean;
  className?: string;
}

export const Copy: FC<ICopy> = ({
  text,
  onCopy = () => {},
  onFail = () => {},
  tooltip,
  copiedTooltip,
  className,
  disableTooltip,
}) => {
  const classes = useStyles();
  const lang = useTranslator("main");
  const [toolTip, setToolTip] = useState({ color: "primary", text: tooltip || lang.copy });

  const handleCopy = async () => {
    const copiedText = await navigator.clipboard.readText();

    if (text !== copiedText) {
      try {
        await navigator.clipboard.writeText(String(text));
        setToolTip({ color: "success", text: lang.copied });
        onCopy();
      } catch (err) {
        onFail();
      }
    }
  };

  const handleTooltipCheck = async () => {
    try {
      const copiedText = await navigator.clipboard.readText();
      if (copiedText === text) {
        setToolTip({ color: "success", text: copiedTooltip || lang.copied });
      } else {
        setToolTip({ color: "primary", text: tooltip || lang.copy });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const renderContent = () => {
    return (
      <Link href="#" className={clsx(classes.link, className)} onClick={handleCopy} component="span">
        {text ? text : ""}
      </Link>
    );
  };

  return !disableTooltip ? (
    <Tooltip
      placement="bottom"
      arrow={true}
      onMouseEnter={handleTooltipCheck}
      classes={{ tooltip: clsx(classes[toolTip.color]), arrow: clsx(classes[`arrow${toolTip.color}`]) }}
      title={toolTip.text}
    >
      {renderContent()}
    </Tooltip>
  ) : (
    renderContent()
  );
};
