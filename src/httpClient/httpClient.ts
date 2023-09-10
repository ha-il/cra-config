// httpClient {
//   fetch(endPoint, options):Promise<Response>
// }

import LocalStorage from 'storages/LocalStorage';

type Options = {
  headers?: {
    [key: string]: string;
  };
  method?: string;
  body?: string;
};

class HttpClient {
  private baseURL;

  private storage;

  constructor(baseURL: string, storage: LocalStorage) {
    this.baseURL = baseURL;
    this.storage = storage;
  }

  async fetch(endPoint: string, options: Options) {
    const response = await window.fetch(this.baseURL + endPoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storage.get()}`,
        ...options.headers,
      },
    });

    return response;
  }
}
export default HttpClient;
