import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./alert-page.style";
import { PageTitle, Spinner } from "components/shared";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import { useUser } from "hooks";

interface IClasses {
  icon?: string;
  root?: string;
  title?: string;
  button?: string;
}

interface IAlertPage {
  title: any;
  link?: string;
  hasButton?: boolean;
  icon?: IconProp;
  buttonTitle?: string;
  color?: "primary" | "warning" | "danger" | "info";
  pageTitle?: string;
  classes?: IClasses;
  onButtonClick?(): void;
  renderButtons?: ReactNode;
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
  onButtonClick,
  renderButtons,
}) => {
  const styles = useStyles();
  const history = useHistory();
  const currentUser = useUser();

  return currentUser.pageLoading ? (
    <></>
  ) : (
    <Grid className={clsx(styles.container, classes?.root)} container>
      {pageTitle && <PageTitle title={pageTitle} />}
      <Grid item xs={12}>
        <Typography component="div">
          <Typography className={styles.iconContainer} component="div">
            {icon && <FontAwesomeIcon className={clsx(color && styles[color], classes?.icon)} icon={icon} />}
          </Typography>
          <Typography className={styles.textContainer} component="div">
            <Typography className={classes?.title} component="span">
              {title}
            </Typography>
          </Typography>
        </Typography>
        <div>
          {renderButtons && renderButtons}
          {hasButton && !renderButtons && (
            <Button
              onClick={onButtonClick ? () => onButtonClick() : () => history.push(link ? link : "")}
              className={classes?.button}
              variant="contained"
              color="primary"
            >
              {buttonTitle}
            </Button>
          )}
        </div>
      </Grid>
    </Grid>
  );
};
