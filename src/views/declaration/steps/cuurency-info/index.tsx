import { Grid } from "@material-ui/core";
import { useTranslator } from "localization";
import React, { FC } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { Form } from "components/shared/redux-form";
import { DeclarationActions } from "views/declaration/store/action";
import { useStyles } from "./currency-info.style";
import { FormField } from "./form-field";
import { CurrencyForm, GoodsForm } from "../../layout";

export interface ICurrencyInfoPage {
  isActive: boolean;
  onNext(): void;
  onBack(): void;
}

const CurrencyInfo: FC<ICurrencyInfoPage> = ({ isActive, onBack, onNext }) => {
  const lang = useTranslator("declaration");
  const classes = useStyles();

  const handleFormsubmit = (data: any) => {
    //if (!infoImproved) {
    //checkPersonalInfo({ nationality: data?.country?.code, ...data });
    onNext();
    // }
  };

  const initialValues = {};

  return isActive ? (
    // <Form
    //   onSubmit={handleFormsubmit}
    //   initialValues={initialValues}
    //   formName="declaration/currency-info-step"
    //   className={classes.form}
    //   backButtonText={lang.back}
    //   showBackButton
    //   onBackClick={onBack}
    // >
    //   <Grid container className={classes.sectionsContainer}>
    //     <FormField title="Text" text={lang.isChildWithYou} showButton={false} name="regime" />
    //     <FormField title={lang.currency} text={lang.isMoneyMoreThanDefault} name="regime" />
    //     <FormField title={lang.goods} text={lang.isGoodsMoreThanDefault} name="regime" />
    //     <FormField title={lang.diedPersons} text={lang.isCoffinWithYou} name="regime" />
    //   </Grid>
    // </Form>
    // <CurrencyForm onSubmit={() => {}} />
    <GoodsForm onSubmit={() => {}} />
  ) : (
    <></>
  );
};

const mapStateToProps = (state: IAppState) => ({});
export default connect(mapStateToProps, DeclarationActions)(CurrencyInfo);
