import express from 'express';
import { auth } from '../middlewares/auth';

export const topics = express.Router();

topics.use(express.json());
topics.use(auth);
topics.get('/all', (_, res) => {
  res.json('Howdy from the topic  router :)');
}); // return all themes
topics.get('/:id', (_, res) => {
  res.json('Get by ID :)');
}); // get theme by ID
topics.post('/create', (_, res) => {
  res.json('Post new theme by user:)');
}); //
topics.delete('/delete/:id', (_, res) => {
  res.json('Delet theme by  id:)');
});
