import bcrypt from 'bcryptjs';
import { join, resolve } from 'path';
import dotenv from 'dotenv';
import database from '../database.js';

dotenv.config({
  path: join(resolve(), './src/config/.env'),
});

const userSchema = new database.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  role: {
    type: String,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(process.env.ROUNDS));

  next();
});

const User = database.model('User', userSchema);

export default User;
