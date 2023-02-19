import express from 'express';
import { auth } from '../middlewares/auth';
// import { Topic } from 'models/topic ';
import { messageController } from '../controllers/message';

export const messages = express.Router();

messages.use(express.json());
messages.use(auth);
messages.get('/all', messageController.getAll); // return all themes
// messages.get('/all/:id', messageController.getById); // get theme by ID
// messages.post('/create', messageController.createNew); //
// payload  {
// content: string,
// date: string,   // new Date().toISOString()
// author: string
// } return new Post
// messages.delete('/delete/:id', messageController.deleteById);
