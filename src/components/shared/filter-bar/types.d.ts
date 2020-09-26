import { StringNullableChain } from "lodash";
import { ReactNode } from "react";

export interface IModalData {
  name: string;
  type: "text" | "select" | "number";
  label: string;
  data: any[];
  optionLabel?: string;
  optionValue?: string;
  showAtBar: boolean;
}

export interface IFilterBar {
  searchButtonDisabled?: boolean;
  clearButtonDisabled?: boolean;
  onSend?(data: any): void;
  onClear?(): void;
  onTitleButtonClick?(): void;
  titleButtonIcon?: IconProp;
  titleButtonText?: string;
  titleButtonLink?: string;
  renderTitleButton?: ReactNode;
  modalTitle?: string;
  formName: string;
  modalData?: IModalData[];
  width: any;
  dependency?: any[];
  config?: IFilterConfig;
  initialValues?: {};
}

interface IFilterConfig {
  formatDate?: boolean;
  formatSelects?: boolean;
  showTitleButton?: boolean;
  showFilterButton?: boolean;
  autoClose?: boolean;
}
