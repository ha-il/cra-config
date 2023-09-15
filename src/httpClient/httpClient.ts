// httpClient {
//   fetch(endPoint, options):Promise<Response>
// }

import LocalStorage from 'storages/LocalStorage';

class HttpClient {
  private baseURL;

  private storage;

  constructor(baseURL: string, storage: LocalStorage) {
    this.baseURL = baseURL;
    this.storage = storage;
  }

  async fetch(endPoint: string) {
    const response = await window.fetch(this.baseURL + endPoint);
    return response;
  }
}
export default HttpClient;
