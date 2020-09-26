import React, { FC } from "react";
import { SearchForm } from "./components/search-form";
import { Grid, Paper, IconButton, Link } from "@material-ui/core";
import { SectionHeader } from "components/shared";
import { useTranslator } from "localization";
import { useStyles } from "./declaration-form.style";
import { connect } from "react-redux";
import { searchDeclData } from "./store/actions";

export interface IDeclaration {
  searchDeclData(data: any): void;
}

const DeclarationInfo: FC<IDeclaration> = ({ searchDeclData }) => {
  const lang = useTranslator("declarationInfo");
  const classes = useStyles();

  const handleSubmit = (declData: any) => {
    searchDeclData(declData);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <SectionHeader title={lang.declarationTitle} />
      </Grid>

      <Grid item xs={12} component={Paper} className={classes.container}>
        <SearchForm onSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
};

export default connect(null, { searchDeclData })(DeclarationInfo);
