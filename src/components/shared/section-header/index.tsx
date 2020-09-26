import React, { FC } from "react";
import { useStyles } from "./section-header";
import clsx from "clsx";
import { PageTitle } from "components/shared";
import { Grid, Typography } from "@material-ui/core";

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

  // const handleClick = () => {
  //   console.log("test");
  // };

  return (
    <Grid item xs={12}>
      <PageTitle title={title} />
      <div className={clsx(classes.sectionHeader, className)}>
        <Typography className={sizeClass(size)}>{title}</Typography>
        {/* <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs> */}
      </div>
    </Grid>
  );
};
