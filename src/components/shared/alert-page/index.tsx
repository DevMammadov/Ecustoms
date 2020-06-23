import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./alert-page.style";
import { PageTitle } from "components/shared";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

interface IClasses {
  icon?: string;
  root?: string;
  title?: string;
  button?: string;
}

interface IAlertPage {
  title: string;
  link?: string;
  hasButton?: boolean;
  icon?: IconProp;
  buttonTitle?: string;
  color?: "primary" | "warning" | "danger" | "info";
  pageTitle?: string;
  classes?: IClasses;
}

export const AlertPage: FC<IAlertPage> = ({
  title,
  hasButton = false,
  link,
  icon,
  buttonTitle,
  color,
  pageTitle,
  classes,
}) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Grid className={clsx(styles.container, classes?.root)} container>
      {pageTitle && <PageTitle title={pageTitle} />}
      <Grid item xs={12}>
        <Typography component="div">
          <Typography className={styles.iconContainer} component="div">
            {icon && (
              <FontAwesomeIcon swapOpacity className={clsx(color && styles[color], classes?.icon)} icon={icon} />
            )}
          </Typography>
          <Typography className={styles.textContainer} component="div">
            <Typography className={classes?.title} component="span">
              {title}
            </Typography>
          </Typography>
        </Typography>
        <Typography component="div">
          {hasButton && (
            <Button
              onClick={() => history.push(link ? link : "")}
              className={classes?.button}
              variant="contained"
              color="primary"
            >
              {buttonTitle}
            </Button>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};
