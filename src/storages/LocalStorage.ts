// Storage Interface
// save(token:string):void
// get():string
// delete():void

class LocalStorage {
  private key;

  constructor() {
    this.key = 'ACCESS_TOKEN';
  }

  save(token: string) {
    localStorage.setItem(this.key, token);
  }

  get() {
    return localStorage.getItem(this.key);
  }

  delete() {
    localStorage.removeItem(this.key);
  }
}
export default LocalStorage;
