import React, { FC } from "react";
import { useStyles } from "./currency-info.style";
import { useTranslator } from "localization";
import { Field } from "redux-form";
import { Radio, Button } from "components/shared/form";
import { RadioGroup } from "components/shared/redux-form";
import { Grid, Paper } from "@material-ui/core";

export interface IFormField {
  text: string;
  name: string;
  title: string;
  showButton?: boolean;
  onClick?(): void;
}

export const FormField: FC<IFormField> = ({ name, text, title, showButton = true, onClick = () => {} }) => {
  const lang = useTranslator("declaration");
  const classes = useStyles();

  return (
    <Grid item xs={12} component={Paper}>
      <div className={classes.sectionContent}>
        <div className={classes.sectionTitle}>{title}</div>
        <div>{text}</div>
      </div>
      <Field component={RadioGroup} name={name} row>
        <Radio value="1" label={lang.yes} color="primary" />
        <Radio value="0" label={lang.no} color="primary" />
      </Field>
      {showButton && <Button onClick={() => onClick()}>+ Valyuta haqqında məlumatı daxil edin</Button>}
    </Grid>
  );
};
