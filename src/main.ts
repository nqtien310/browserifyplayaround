import User from './user'

User.register('tiennguyen@gmail.com');
User.register('unknownlover@gmail.com');
User.register('new@gmail.com');

let [user1, user2, user3] = User.all;

alert(`${user1.introduce()} ${user2.introduce()} ${user3.introduce()}`)
