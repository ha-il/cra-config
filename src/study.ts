/*
타입스크립트 공부 목적으로 작성한 파일입니다.
참고자료: 쉽게 시작하는 타입스크립트 (지은이: 장기효, 출판: 길벗, 초판 발행: 2023년 6월 18일)
*/

// 기본 타입
const myName: string = '하일';
const score: number = 100;
const isNice: boolean = true;

const myTeam: Array<string> = ['류은규', '장정민', '이대훈'];
const myParty: string[] = ['디스트로이어', '스트라이커', '블레이드'];

const profile: [string, number] = [myName, score];

const empty: null = null;
let nothingAssigned: undefined;

function printName(name: string): string {
  return name;
}

// 옵셔널 파라미터
function printProfile(name: string, score?: number) {
  return `${name}: ${score || '??'}`;
}

console.log(printProfile(myName)); // "하일: ??"

// 인터페이스로 객체 타입 정의
interface Player {
  name: string;
  class: string;
  level: number;
}
const warrior: Player = { name: '하일', class: '전사', level: 100 };

// 인터페이스로 함수 파라미터 타입 정의
function logPlayerLevel(player: Player) {
  console.log('레벨: ' + player.level);
}
logPlayerLevel(warrior); // "레벨: 100"

// 인터페이스로 함수 반환 타입 정의
function createCharacter(name: string, characterClass: string): Player {
  return { name, class: characterClass, level: 1 };
}
const wizard = createCharacter('안토니다스', '마법사'); // wizard는 Player 타입으로 추론됨
console.log(wizard); // { "name": "안토니다스", "class": "마법사", "level": 1 }

// 인터페이스의 옵션 속성
interface User {
  name: string;
  birthDay?: string;
}

// 인터페이스 상속
const newUser: User = { name: '뉴비' }; // birthDay 입력하지 않아도 에러가 발생하지 않음

interface GameUser extends User {
  class: string;
  level: number;
}

const knight: GameUser = { name: '김기사', class: '기사', level: 50 };

// 인터페이스로 인덱싱 타입 정의

const obj = { one: '하나', two: '둘', three: '셋' };
const arr = ['하나', '둘', '셋'];

// A[i] 이런 형태로 요소에 접근하는 방식을 인덱싱이라 함.
console.log(obj['one']); // '하나'
console.log(arr[1]); // '둘'

interface LevelMap {
  // 속성 이름이 문자열 타입이고 속성 값이 숫자 타입인 모든 이름/속성 값 쌍을 허용한다는 의미
  // 정확한 속성 이름을 명시하지 않고 속성 이름의 타입과 속성 값의 타입을 정의하는 문법을 인덱스 시그니처라 함.
  worrior: number; // 무조건 들어가는 속성과 섞어서 정의할 수 있음.
  [player: string]: number; // 인덱스 시그니처
}

const partyMember: LevelMap = {
  worrior: 100,
  wizard: 1,
  knight: 50,
};

const worriorLevel = partyMember.worrior; // worriorLevel은 number로 타입 추론 됨

/* 인덱스 시그니처는 언제 씀?
속성 이름은 모르지만 속성 이름의 타입과 값의 타입을 아는 경우에 사용할 수 있음.
*/
