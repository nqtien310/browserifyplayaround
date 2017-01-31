export default class User {
  static all = [];
  email: string;

  constructor(email:string){
    this.email = email;
  }

  static register(email:string) {
    let user = new User(email);
    User.all.push(user);
    return user;
  }

  introduce() {
    return `
      Hi,
      My name is ${this.email},
      My created index is ${this.createdIndex()}
    `
  }

  createdIndex() {
    return User.all.indexOf(this);
  }
}
