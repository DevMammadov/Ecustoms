import { defaultRequest, nonTokenRequest } from "helpers";

export default class CardsApi {
  static getCards = (type: number) => {
    return nonTokenRequest.get(`/helper/cards/${type}`).then(({ data }) => data);
  };

  static getFavoriteCards = () => {
    return defaultRequest.get(`/user/favorite`).then(({ data }) => data);
  };

  static setFavoriteCard = ({ cardId, status, parentCardType }: any) => {
    return defaultRequest
      .post(`/user/favorite`, { cardId: cardId, status: status })
      .then(({ data }) => ({ parentCardType: parentCardType, data: data }));
  };
}
