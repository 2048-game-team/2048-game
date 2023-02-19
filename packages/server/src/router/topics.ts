import express from 'express';
import { auth } from '../middlewares/auth';
// import { Topic } from 'models/topic ';
import { topicController } from '../controllers/topic'

export const topics = express.Router();

topics.use(express.json());
topics.use(auth);
topics.get('/all', topicController.getAll); // return all themes
// topics.get('/:id', topicController.getById); // get theme by ID
// topics.post('/create', topicController.createNew); // 
// payload  {
// title: string,
// content: string,
// date: string,   // new Date().toISOString()
// author: string
// } return new Post
// topics.delete('/delete/:id', topicController.deleteById);
