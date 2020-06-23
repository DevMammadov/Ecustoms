import { defaultRequest } from "helpers";

export default class CardsApi {
  static getCards = (type: any) => {
    return defaultRequest.get(`/helper/cards/${type}`).then(({ data }) => data);
  };
}
