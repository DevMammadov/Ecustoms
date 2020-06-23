import React, { FC, useState, useEffect } from "react";
import { InputButton } from "../input-button/input-button";
import { UpdateForm } from "../update-form/update-form";
import { IUserField } from "../../types";
import { IconButton, Button } from "@material-ui/core";
import { IToggleActivityPayload } from "../../types";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "../../tabs/sms-info/sms-info.style";
import { Timer } from "components/shared";
import { useTranslator } from "localization";

export interface IFormContainer {
  title: string;
  onSend(text: string): void;
  sended?: boolean;
  onRemove(data: number): void;
  onConfirm(data: string): void;
  onStatusChange(data: IToggleActivityPayload): void;
  visible?: boolean;
  formList?: IUserField[];
  type: "number" | "email" | "code";
  userContact?: string | null;
  onFormClose?(): void;
}

export const FormContainer: FC<IFormContainer> = ({
  title,
  onSend,
  onConfirm,
  formList = [],
  visible = false,
  onStatusChange,
  onRemove,
  type,
  userContact,
  onFormClose = () => {},
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [timerComplated, setTimerComplated] = useState<boolean>(true);
  const lang = useTranslator("myInfo");
  const classes = useStyles();

  useEffect(() => {
    if (visible) {
      setShowForm(false);
    }
  }, [visible]);

  const handleSend = (text: string) => {
    onSend(text);
    setShowForm(false);
    setTimerComplated(false);
  };

  const handleConfirm = (text: string) => {
    onConfirm(text);
  };

  const handleFormClose = () => {
    onFormClose();
    setShowForm(false);
  };

  const renderUpdateForm = () => {
    return !formList?.length ? (
      <span>
        {title} {lang.notadded}
      </span>
    ) : (
      formList?.map(
        (field: IUserField, index: number) =>
          field.field && (
            <UpdateForm
              onRemove={onRemove}
              onStatusChange={onStatusChange}
              key={`${field.field}${index}`}
              field={field}
              title={`${title} ${index + 1}`}
            />
          )
      )
    );
  };

  return (
    <div>
      {renderUpdateForm()}
      <div>
        {formList?.filter((field: IUserField) => field.field).length < 2 && (
          <h5>
            <IconButton className={classes.addButton} color="primary" onClick={() => setShowForm(true)}>
              <AddIcon />
            </IconButton>
            {title} {lang.add}
          </h5>
        )}
        {(showForm || userContact) && (
          <>
            <InputButton
              visible={true}
              disabled={!timerComplated}
              onSubmit={handleSend}
              fieldType={type}
              numberArrows={false}
              placeholder={type === "email" ? "example@gmail.com" : "0555555555"}
              title={title}
              inputValue={userContact}
              buttonLabel={
                <Timer
                  onComplate={() => setTimerComplated(true)}
                  startTime={20}
                  endTime={0}
                  interval={1}
                  countDown
                  started={!timerComplated}
                  callbackContent={lang.send}
                />
              }
            />
            <InputButton
              visible={!!userContact}
              fieldType="code"
              placeholder={lang.typeNumberFromSms}
              onSubmit={handleConfirm}
              title={lang.typeCode}
              numberArrows={false}
              buttonLabel={lang.approve}
            />
            <Button className={classes.formCloseLink} onClick={handleFormClose}>
              {lang.deny}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
