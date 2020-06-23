import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface IPageTitle {
  title: string | undefined;
}

export const PageTitle: FC<IPageTitle> = ({ title }) => {
  let defaultTitle = "ecustoms";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};
