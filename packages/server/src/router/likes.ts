import express from 'express';
import { auth } from '../middlewares/auth';
import { likeController } from '../controllers/like';

export const likes = express.Router();

likes.use(express.json());
likes.use(auth);
likes.post('/create', likeController.createNew); //userId
likes.get('/all/:messageId', likeController.getAllByPostId); //messageId
