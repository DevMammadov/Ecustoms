export interface IGooenPage {
  loading: boolean;
  currentStep: number;
  handleStepOne(data: any): void;
  clearGooenStore(): void;
  getGooenInfo(data: any): void;
  updateGooen(data: any): void;
  result: IGooenResult;
}

export interface ICountry {
  code: string;
  name: string;
  abbreviation3: string;
}

export interface IPerson {
  surname: string;
  name: string;
  fatherName: string;
  birthDate: string;
  serialNumber: string;
  pin: string;
  issuiAuthority: string;
  issuingDate: string;
  expiryDate: string;
}

export interface IGooenResult {
  gooen: string;
  status: string;
}

export interface IStepOne {
  countries: ICountry;
  selectedCountry: string;
  getCountries(): void;
  handleSubmit: any;
  invalid: boolean;
  submitting: boolean;
  countriesLoading: boolean;
  loading: boolean;
}

export interface IStepTwo {
  selectedCountry: string;
  handleSubmit: any;
  invalid: boolean;
  clearGooenStore(): void;
  initialValues: any;
  loading: boolean;
}

export interface IStepThree {
  result: IGooenResult;
  person: IPerson;
}
