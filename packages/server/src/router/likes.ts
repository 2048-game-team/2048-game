import express from 'express';
import { authMiddleware } from '../middlewares/auth';
import { likeController } from '../controllers/like';

export const likes = express.Router();

likes.use(express.json());
likes.use(authMiddleware);
likes.post('/create', likeController.createNew); //userId
likes.get('/all/:messageId', likeController.getAllByPostId); //messageId
