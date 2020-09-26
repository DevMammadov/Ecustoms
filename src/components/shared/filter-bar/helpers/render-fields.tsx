import React from "react";
import { IModalData } from "../types";
import { TextField, Autocomplete } from "../../redux-form";
import { Field } from "redux-form";

export const renderField = (data: IModalData, stateValue?: string) => {
  switch (data.type) {
    case "text":
      return <Field component={TextField} name={data.name} type={data.type} label={data.label} />;
    case "select":
      return (
        <Field
          component={Autocomplete}
          name={data.name}
          options={data.data || []}
          optionLabel={data.optionLabel || ""}
          defaultValue={stateValue}
          label={data.label}
        />
      );
    case "number":
      return <Field component={TextField} name={data.name} type="number" label={data.label} />;
  }
};
