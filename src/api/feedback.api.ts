import { nonTokenRequest } from "helpers";

export default class FeedbackApi {
  static getCategories = (id?: any) => {
    const params = typeof id === "number" ? { params: { id: id } } : undefined;
    return nonTokenRequest.get(`/feedback/categories`, params).then(({ data }) => ({ data, id }));
  };

  static submitFeedback = (data: any) => {
    return nonTokenRequest.post(`/feedback`, data).then(({ data }) => data);
  };
}
