import HttpClient from 'httpClient/httpClient';
import LocalStorage from 'storages/LocalStorage';
// 1. CatService의 인터페이스를 작성해준다.
/*
  CatService {
    getNewCat():Promise<string>
  }
*/

// 2. 인터페이스를 보고 CatServiceImplement를 구현한다.
/* 
class CatServiceImplement {
  private baseUrl;

  constructor() {
    this.baseUrl = 'https://cataas.com/';
  }

  async getNewCat() {
    const response = await fetch(`${this.baseUrl}cat?json=true`);
    const { _id: catId } = await response.json();
    localStorage.setItem('CAT_ID', catId);
  }
}

export default CatServiceImplement;
 */

// 3. http 요청과 storage 저장은 getNewCat의 관심사가 아니므로 분리한다.
/* 
class CatServiceImplement {
  private httpClient;

  private storage;

  private baseUrl;

  constructor() {
    this.baseUrl = 'https://cataas.com/';
    this.storage = new LocalStorage();
    this.httpClient = new HttpClient(this.baseUrl, this.storage);
  }

  async getNewCat() {
    const response = await this.httpClient.fetch(`cat?json=true`);
    const { _id: catId } = await response.json();
    this.storage.save(catId);
  }
}

export default CatServiceImplement;
 */
// 4. CatServiceImplement를 유지보수에 더 유연하게 사용하기 위해 storage와 httpClient를 주입하는 형태로 수정한다.

class CatServiceImplement {
  private httpClient;

  private storage;

  // 의존성인 httpClient와 storage를 주입받는 형태로 수정
  constructor(httpClient: HttpClient, storage: LocalStorage) {
    this.storage = storage;
    this.httpClient = httpClient;
  }

  async getNewCat() {
    const response = await this.httpClient.fetch(`cat?json=true`);
    const { _id: catId } = await response.json();
    this.storage.save(catId);
    return catId;
  }
}

export default CatServiceImplement;
