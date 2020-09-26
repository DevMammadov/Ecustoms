export interface ICategory {
  id: number;
  name: string;
}

export interface IFeedbackPage {
  currentStep: number;
  submitFeedback(data: any): void;
}

export interface IFeedbackCategories {
  loading: boolean;
  getCategories(id?: any): void;
  categories: ICategory[];
  selectedCategory: string;
  invalid: boolean;
}

export interface IFeedbackSubCategories {
  loading: boolean;
  subCategories: ICategory[];
  setCurrentStep(step: number);
  invalid: boolean;
}

export interface IAddFeedback {
  setCurrentStep(step: number);
  invalid: boolean;
  handleSubmit: any;
}
