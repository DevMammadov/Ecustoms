import React, { FC } from "react";
import { useStyles } from "./goods-popup.style";
import { useTranslator } from "localization";
import { Paper, Fade, Modal, Backdrop } from "@material-ui/core";
import { IAppState } from "store/reducers";
import { connect, useDispatch } from "react-redux";
import { PostDeclarationActions } from "views/post-declaration/store/action";
import { IPostDeclarationState } from "views/post-declaration/store/reducer";
import { reduxForm, Field, change } from "redux-form";
import { Autocomplete, TextField } from "components/shared/redux-form";
import { InputGroup, Button, ButtonGroup } from "components/shared";
import { required, onlyNumber } from "helpers/form-validators";
import { isNull } from "lodash";

export interface IGoodsPopupPage {
  onClose(): void;
  open: boolean;
  postDecState: IPostDeclarationState;
  handleSubmit: any;
  getGoodsGroup(id?: number): void;
  invalid: boolean;
}

const GoodsPopup: FC<IGoodsPopupPage & any> = ({
  onClose,
  open,
  postDecState,
  handleSubmit,
  getGoodsGroup,
  invalid,
}) => {
  const lang = useTranslator("postal-declaration");
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleGroupChange = (good: any) => {
    if (good?.id) {
      getGoodsGroup(good.id);
      dispatch(change("add-declaration/goods", "good", null));
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => onClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.formContainer}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Field
              component={Autocomplete}
              name="goodsGroupId"
              options={postDecState.groups || []}
              label={lang.selectGoodsCompany}
              optionLabel="name"
              validate={required}
              onChange={handleGroupChange}
            />
            <Field
              component={Autocomplete}
              name="good"
              options={postDecState.subGroups || []}
              label={lang.selectGoodsSubCompany}
              optionLabel="name"
              validate={required}
            />
            <InputGroup>
              <Field
                component={TextField}
                validate={[required, onlyNumber]}
                name="invoicePrice"
                showQuestionMark
                label={lang.goodsCost}
                type="number"
                step="0.01"
                InputProps={{
                  inputProps: { min: 0, max: 9999999999999 },
                }}
              />
              <Field
                component={Autocomplete}
                name="currencyType"
                label={lang.currency}
                options={postDecState.MainCurrenciesList || []}
                validate={required}
                optionLabel="name"
              />
            </InputGroup>
            <InputGroup>
              <Field
                component={TextField}
                validate={[required, onlyNumber]}
                name="quantity"
                step="0.01"
                showQuestionMark
                label={lang.quantity}
                type="number"
                InputProps={{ inputProps: { min: 0, max: 9999999999999 } }}
              />
              <Field
                component={Autocomplete}
                name="quantityUnit"
                label={lang.UnitOfMeasurement}
                options={postDecState.MainUnits || []}
                optionLabel="name"
                showQuestionMark
                validate={required}
              />
            </InputGroup>
            <ButtonGroup>
              <Button onClick={() => onClose()} variant="outlined" color="primary">
                {lang.deny}
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={invalid} disableLoader>
                {lang.add}
              </Button>
            </ButtonGroup>
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
};

const _initialValues = (state: IAppState) => {
  return {
    // currencyType: state.postalDeclaration.MainCurrenciesList?.filter((c) => c.code === "840")[0],
    // good: state.postalDeclaration?.subGroups ? state.postalDeclaration.subGroups[0] : null,
    // invoicePrice: 0,
    // quantity: 0,
    // quantityUnit: state.postalDeclaration.MainUnits[0],
  };
};

const _valuesToUpdate = (state: IAppState) => {
  const goodToUpdate = state.postalDeclaration.totalObject.goodsList.filter(
    (g, i) => i === state.postalDeclaration.updateIndex
  )[0];
  return {
    currencyType: state.postalDeclaration.MainCurrenciesList.filter((c) => c.code === goodToUpdate.currencyType)[0],
    goodsGroupId: state.postalDeclaration.groups.filter((g) => g.id === goodToUpdate.goodsGroupId)[0],
    good: state.postalDeclaration.subGroups.filter((sb) => sb.id === goodToUpdate.goodsId)[0],
    invoicePrice: goodToUpdate.invoicePrice,
    quantity: goodToUpdate.quantity,
    quantityUnit: state.postalDeclaration.MainUnits.filter((u) => u.code === goodToUpdate.quantityUnit)[0],
  };
};

const mapStateToProps = (state: IAppState) => ({
  postDecState: state.postalDeclaration,
  initialValues: !isNull(state.postalDeclaration.updateIndex) ? _valuesToUpdate(state) : _initialValues(state),
});

export default connect(
  mapStateToProps,
  PostDeclarationActions
)(reduxForm({ form: "add-declaration/goods", enableReinitialize: true, keepDirtyOnReinitialize: true })(GoodsPopup));
