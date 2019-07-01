const db = require('../config/database');

module.exports = class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  save() {
    return db.execute(
      'INSERT INTO users (name, age) VALUES (?, ?)',
      [this.name, this.age]
    )
  }

  static fetchAll() {
    return db.execute('SELECT * FROM users');
  }

  static findById(id) {
    return db.execute('SELECT * FROM users WHERE users.id = ?', [id]);
  }

  static findCustomUsers(id) {
    return db.execute('SELECT * FROM users WHERE id > ?', [id]);
  }
};