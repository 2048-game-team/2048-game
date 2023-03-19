import express from 'express';
import { authMiddleware } from '../middlewares/auth';
import { messageController } from '../controllers/message';

export const messages = express.Router();

messages.use(express.json());
messages.use(authMiddleware);
messages.get('/all', messageController.getAll); // return all themes
messages.get('/:id', messageController.getById); // get theme by ID
messages.post('/create', messageController.createNew); //
messages.patch('/update/:id', messageController.updateById);
messages.delete('/delete/:id', messageController.deleteById);
