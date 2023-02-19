import express from 'express';
import { auth } from '../middlewares/auth'

export const posts = express.Router();

posts.use(express.json());
posts.use(auth)
posts.get('/', (_, res) => {
  res.json('Howdy from the posts router :)');
});
