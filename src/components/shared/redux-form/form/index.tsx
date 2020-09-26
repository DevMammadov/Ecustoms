import React, { FC, useMemo } from "react";
import { useTranslator } from "localization";
import { reduxForm, ConfigProps } from "redux-form";
import { Button } from "components/shared";
import { useStyles } from "./form.style";
import clsx from "clsx";

export interface IForm {
  name: string;
  onSubmit: any;
  className?: string;
  submitButtonText?: string;
  backButtonText?: string;
  onBackClick?(): void;
  showBackButton?: boolean;
  config?: Omit<ConfigProps, "form">;
  renderButtons?(): void;
}

export const Form: FC<IForm> = ({ name, config, ...rest }) => {
  const lang = useTranslator();
  const styles = useStyles();

  const ReduxForm: FC<any> = ({
    children,
    handleSubmit,
    className,
    submitButtonText,
    backButtonText,
    onBackClick = () => {},
    showBackButton = false,
  }) => {
    return (
      <form onSubmit={handleSubmit} className={clsx(className, styles.form)}>
        <div>{children}</div>
        {rest.renderButtons ? (
          rest.renderButtons
        ) : (
          <div className={styles.buttonContainer}>
            {showBackButton && (
              <Button variant="outlined" color="primary" onClick={() => onBackClick()}>
                {backButtonText || lang.back}
              </Button>
            )}
            <Button type="submit" variant="contained" color="primary">
              {submitButtonText || lang.send}
            </Button>
          </div>
        )}
      </form>
    );
  };

  const FormWrapped = reduxForm({ form: name, ...config })(ReduxForm);

  return <FormWrapped {...rest} />;
};
