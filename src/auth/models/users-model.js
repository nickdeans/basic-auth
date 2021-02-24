'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create a mongoose model
const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

usersSchema.pre('save', async function () {
// this will refer to the instance being made
if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 5)
}
});

usersSchema.statics.example = async function (username, password) {
    const user = await this.findOne({ username: username });
    console.log(username, password, user);
  
    const valid = await bcrypt.compare(password, user.password);
    console.log(user, valid);
    if (valid) {
      return user;
    } else {
      throw new Error('User Validation Error');
    }
}

const Users = mongoose.model('users', usersSchema);

module.exports = Users;

