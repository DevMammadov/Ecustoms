import React, { FC, useState, memo, useMemo } from "react";
import { useStyles } from "./filter-bar.style";
import { Button } from "components/shared/form";
import { useHistory } from "react-router-dom";
import { useTranslator } from "localization";
import { faUser } from "@fortawesome/pro-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Grid, Paper, withWidth, isWidthUp } from "@material-ui/core";
import { faFilter, faBrush } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeepSearch, FilterBarForm } from "./components";
import { IModalData, IFilterBar } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { reset, getFormValues } from "redux-form";
import { formatData } from "./helpers";
import clsx from "clsx";

const FilterBar: FC<IFilterBar> = memo(
  ({
    searchButtonDisabled = false,
    clearButtonDisabled = false,
    onSend = () => {},
    onClear = () => {},
    onTitleButtonClick = () => {},
    titleButtonIcon,
    renderTitleButton,
    titleButtonLink,
    titleButtonText,
    modalTitle,
    formName,
    modalData,
    dependency = [],
    initialValues,
    config = { formatDate: true, formatSelects: true, showFilterButton: true, showTitleButton: true, autoClose: true },
    width,
  }) => {
    const [modalState, setModalState] = useState<boolean>(false);

    const history = useHistory();
    const lang = useTranslator("xifDocs");
    const styles = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const formValues = getFormValues(formName)(state);

    const showFilter = () => {
      if (!isWidthUp("sm", width)) {
        return true;
      } else {
        return config.showFilterButton;
      }
    };

    const handleClear = () => {
      dispatch(reset(formName));
      onClear();
    };

    const handleFormSubmit = (data: any) => {
      onSend(formatData(data, modalData, config));
      config?.autoClose && setModalState(false);
    };

    const titleButtonClick = (link: string | undefined) => {
      history.push(link || "");
      onTitleButtonClick();
    };

    return useMemo(() => {
      return (
        <Grid item xs={12} component={Paper} className={styles.conatiner}>
          <div className={styles.formConatiner}>
            {config?.showTitleButton ? (
              renderTitleButton ? (
                renderTitleButton
              ) : (
                <Button
                  variant="contained"
                  className={styles.addNewButton}
                  onClick={() => titleButtonClick(titleButtonLink)}
                  design="green"
                  color="primary"
                  icon={titleButtonIcon && (titleButtonIcon as IconProp)}
                >
                  {titleButtonText}
                </Button>
              )
            ) : (
              <div></div>
            )}
            <div className={styles.filterBarRightSide}>
              <FilterBarForm
                modalData={(modalData as IModalData[]) || []}
                buttonDisabled={searchButtonDisabled}
                onSubmit={(data: any) => handleFormSubmit(data)}
                formName={formName}
                formValues={formValues}
              />

              <div className={styles.buttonGroup}>
                {showFilter() && (
                  <Button
                    className={clsx(styles.filterButton, styles.mobileButton)}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    onClick={() => setModalState(true)}
                  >
                    <FontAwesomeIcon icon={faFilter} />
                  </Button>
                )}
                <Button
                  onClick={handleClear}
                  disabled={clearButtonDisabled}
                  className={clsx(styles.clearButton, styles.mobileButton)}
                  variant="contained"
                  color="primary"
                  disableLoader
                >
                  {isWidthUp("sm", width) ? lang.clear : <FontAwesomeIcon icon={faBrush} />}
                </Button>
                <DeepSearch
                  open={modalState}
                  modalTitle={modalTitle}
                  onClose={() => setModalState(false)}
                  formName={formName}
                  onSubmit={(data: any) => handleFormSubmit(data)}
                  modalData={modalData}
                  formValues={formValues}
                  initial={initialValues}
                />
              </div>
            </div>
          </div>
        </Grid>
      );
    }, [modalState, ...dependency]);
  }
);

export default withWidth()(FilterBar);
