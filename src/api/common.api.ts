import { nonTokenRequest } from "helpers";

export default class Common {
  static getCountries = () => {
    return nonTokenRequest.get(`/dictionaries/countries`).then(({ data }) => data);
  };
}
