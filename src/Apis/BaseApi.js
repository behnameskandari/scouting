import { API } from "./API";
export class BaseApi extends API {
  static POST_COLLECTION = "/";

  static async postData(entity = {}) {
    return this.makePost(this.GET_COLLECTION, entity)
      .then(({ data }) => {
        return Promise.resolve({
          response: data,
        });
      })
      .catch((error) => {
        return Promise.resolve({
          error,
        });
      });
  }
}
