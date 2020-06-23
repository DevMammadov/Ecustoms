import React, { FC } from "react";
import { useStyles } from "./section-header";
import clsx from "clsx";
import { PageTitle } from "components/shared";

export interface ISectionHeader {
  title: string | undefined;
  size?: "small" | "large" | "medium";
  className?: string;
}

export const SectionHeader: FC<ISectionHeader> = ({ title, size = "medium", className }) => {
  const classes = useStyles();

  const sizeClass = (size: string) => {
    switch (size) {
      case "small":
        return classes.small;
      case "large":
        return classes.large;
      case "medium":
        return classes.medium;
      default:
        return classes.medium;
    }
  };

  return (
    <>
      <PageTitle title={title} />
      <div className={clsx(classes.sectionHeader, sizeClass(size), className)}> {title} </div>
    </>
  );
};
