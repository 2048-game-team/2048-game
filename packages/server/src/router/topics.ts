import express from 'express';
import { auth } from '../middlewares/auth';
import { topicController } from '../controllers/topic'

export const topics = express.Router();

topics.use(express.json());
topics.use(auth);
topics.get('/all', topicController.getAll); // return all themes
// topics.get('/:id', topicController.getById); // get theme by ID
topics.post('/create', topicController.createNew); // 
topics.delete('/delete/:id', topicController.deleteById);
