import { IModalData, IFilterConfig } from "../types";
import moment from "moment";

export const formatData = (data: any, modalData?: IModalData[], formatSettings?: IFilterConfig) => {
  if (formatSettings && formatSettings.formatDate) {
    data = {
      ...data,
      endDate: moment(data.endDate).format("DD.MM.YYYY"),
      startDate: moment(data.startDate).format("DD.MM.YYYY"),
    };
  }

  if (modalData && formatSettings && formatSettings.formatSelects) {
    for (let field of modalData) {
      if (field.type === "select" && field.optionValue) {
        data = { ...data, [field.name]: data[field.name] ? data[field.name][field.optionValue] : null };
      }
    }
  }

  return data;
};
