import React, { FC } from "react";
import { Button } from "components/shared/form";
import { useStyles } from "../../tabs/sms-info/sms-info.style";
import { TextField } from "components/shared/form";
import { useForm } from "react-hook-form";

interface FormData {
  text: string;
}

export interface ICollapseForm {
  title: string;
  onSubmit(data: string): void;
  visible: boolean;
  placeholder?: string;
  fieldType?: "number" | "email" | "code";
  disabled?: boolean;
  inputType?: string;
  inputValue?: string | null;
  numberArrows: boolean;
  buttonLabel: string;
  buttonID?: number | string;
}

export const InputButton: FC<ICollapseForm> = ({
  title,
  onSubmit,
  visible,
  placeholder,
  fieldType,
  inputValue = "",
  numberArrows = true,
  disabled = false,
  buttonLabel,
  buttonID,
}) => {
  const { register, handleSubmit } = useForm<FormData>({ defaultValues: { text: inputValue as string } });
  const classes = useStyles();

  const onSubmitForm = ({ text }: FormData) => {
    if (text) {
      onSubmit(text);
    }
  };

  const handleInputChange = () => {
    //  console.log(register);
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmitForm)} className={classes.formContainer}>
        <TextField
          //classes={{ input: classes.collapseInput }}
          type={fieldType}
          onChange={handleInputChange}
          placeholder={placeholder}
          label={title}
          // numberArrows={numberArrows}
          name="text"
          inputRef={register}
        />
        <Button
          id={buttonID as string}
          disableTime={10000}
          variant="contained"
          type="submit"
          disabled={disabled}
          color="primary"
          className={classes.sendButton}
        >
          {buttonLabel}
        </Button>
      </form>
    );
  };

  return visible ? renderForm() : null;
};
