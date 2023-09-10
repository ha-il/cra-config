// NOTE: Services 폴더
// Services 폴더는 컴포넌트에 제공할 함수를 모아두는 폴더.
// 나의 경우 utils로 분류했는데, Serivces라는 네이밍도 많이 쓰는 것 같다.

import HttpClient from 'httpClient/httpClient';
import LocalStorage from 'storages/LocalStorage';

// NOTE:
// Service 폴더 안에 만들었다고 해서 모듈 이름을 Auth라고 이름을 지어버리면,
// 해당 모듈을 불러오는 쪽에서는 Auth라고만 써있게 된다.
// AuthService라고 이름을 지어줘야 제대로 의미를 전달할 수 있다.

// NOTE: 인터페이스와 구현의 네이밍 컨벤션
// 인터페이스를 본체로 보기 때문에, 인터페이스 이름을 AuthServiece로 짓고,
// 인터페이스로 구현하는 클래스를 AuthServieceImplement로 짓는 컨벤션이 있다.
// 다양한 컨벤션이 있기 때문에 반드시 따를 필요는 없다.

// NOTE: 함수 및 메서드 작성 요령
// 무작정 코딩하지 말고, 해당 함수가 해야할 일을 주석으로 적어보자.

// 1. AuthServiece의 인터페이스를 작성해준다
//
//  AuthServiece {
//    signin(email:string, password:string):Promise<void>
//    signup(email:string, password:string):Promise<void>
//    logout():void
//  }

// 2. 인터페이스를 보고 AuthServiceImplement를 구현한다.
class AuthServiceImplement {
  private httpClient;

  private storage;

  constructor(httpClient: HttpClient, storage: LocalStorage) {
    this.httpClient = httpClient;
    this.storage = storage;
  }

  async signin(email: string, password: string) {
    // 1. signin API를 호출한다.
    const response = await this.httpClient.fetch('auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // 2. 응답에서 토큰을 추출한다.
    const { access_token: accessToken } = await response.json();

    // 3. 추출한 토큰을 스토리지에 저장한다.
    this.storage.save(accessToken);
  }

  async signup(email: string, password: string) {
    this.httpClient.fetch('auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  logout() {
    this.storage.delete();
  }
}

export default AuthServiceImplement;
