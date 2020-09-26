import React, { FC } from 'react';
import { Button } from 'components/shared';
import { useStyles } from './wizard-buttons.style';
import { useTranslator } from 'localization';

interface IWizardButtons {
  backDisabled?: boolean;
  nextDisabled?: boolean;
  nextButtonDisbaleLoader?: boolean;
  handleBack?(): void;
}

export const WizardButtons: FC<IWizardButtons> = ({
  backDisabled,
  nextDisabled,
  handleBack,
  nextButtonDisbaleLoader,
}) => {
  const classes = useStyles();
  const lang = useTranslator();

  return (
    <div className={classes.buttonContainer}>
      <Button
        disabled={backDisabled}
        onClick={handleBack}
        className={classes.button}
        disableLoader={true}
        color="primary"
        variant="contained"
      >
        {lang.back}
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={nextDisabled}
        disableLoader={nextDisabled && nextButtonDisbaleLoader}
      >
        {lang.next}
      </Button>
    </div>
  );
};
