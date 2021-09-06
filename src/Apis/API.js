import { axios } from "../config/axios";

export class API {
  static async makePost(url, data, params = {}, config = {}) {
    return axios.post(url, data, {
      ...config,
      params,
    });
  }
}
