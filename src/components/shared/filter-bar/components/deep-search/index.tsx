import React, { FC, Fragment } from "react";
import { useStyles } from "./deep-search.style.js";
import { Modal, Backdrop, Fade, Paper, Button } from "@material-ui/core";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "../../../redux-form";
import { useTranslator } from "localization";
import { IModalData } from "../../types.js";
import { renderField } from "../../helpers/render-fields";

export interface IDeepSearch {
  open: boolean;
  onClose(): void;
  modalTitle?: string;
  modalData: IModalData[];
  formName?: string;
  initial?: {};
}

const DeepSearch: FC<IDeepSearch & any> = ({ formName, initial, ...rest }) => {
  const classes = useStyles();
  const lang = useTranslator("postal-services");

  const ModalForm: FC<any> = ({ modalData, handleSubmit, formValues, open, onClose, modalTitle }) => {
    return (
      <Modal
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Button onClick={onClose} className={classes.closebutton}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
            <div className={classes.modalTitle}> {modalTitle} </div>
            <div className={classes.container}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.inputGroup}>
                  <Field component={DatePicker} name="startDate" label={lang.from} className={classes.input} />
                  <Field component={DatePicker} name="endDate" label={lang.to} />
                </div>

                {modalData?.map((data: IModalData, index: number) => (
                  <Fragment key={index}>{renderField(data, formValues && formValues[data.name])}</Fragment>
                ))}

                <div className={classes.formFooter}>
                  <Button type="submit" variant="contained" color="primary">
                    {lang.search}
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </Fade>
      </Modal>
    );
  };

  const initialValues = initial
    ? initial
    : {
        startDate: new Date(),
        endDate: new Date(),
      };

  const FormWrapped = reduxForm({ form: formName, initialValues, destroyOnUnmount: false })(ModalForm);
  return <FormWrapped {...rest} />;
};

export default DeepSearch;
