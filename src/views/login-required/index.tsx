import { AlertPage } from 'components/shared';
import React from 'react';
import { useTranslator } from 'localization';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';

export const LoginRequired = () => {
  const lang = useTranslator('alerts');

  return (
    <AlertPage
      hasButton
      link="/login"
      buttonTitle={lang.login}
      icon={faExclamationTriangle}
      color="warning"
      title={lang.loginRequired}
    />
  );
};
