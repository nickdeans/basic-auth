'use strict';

// Create a mongoose model
const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  });
  const Users = mongoose.model('users', usersSchema);
  
usersSchema.pre('save', async function () {
  });

usersSchema.statics.example = async function () { 
}

const Usermodel = mongoose.model('api_user', usersSchema);

module.exports = UserModel;

