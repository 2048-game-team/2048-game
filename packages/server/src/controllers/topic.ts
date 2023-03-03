import type { Handler } from 'express';
import prisma from '../db';
import { userService } from '../service/users';

class TopicController {
  getAll: Handler = async (_, res, next) => {
    try {
      const topics = await prisma.topic.findMany({
        include: {
          messages: true,
          user: true,
        },
      });
      res.status(200).json(topics);
    } catch (err) { 
      next(err);
    } 
  };

  // getById: Handler = async () => {};

  createNew: Handler = async (req, res, next) => {
    try {
      const { title, content, userId, userName, userAvatar } = req.body;
      
      const user = await userService.update(
        Number(userId),
        userName,
        userAvatar,
      );

      const newTopic = await prisma.topic.create({
        data: {
          title,
          content,
          userId: Number(userId),
        },
      });
      res.status(201).json({ newTopic, user });
    } catch (err) { 
      next(err);
    }
  };

  deleteById: Handler = async (req, res, next) => {
    try {
      const { id } = req.query;
      const deletedPost = await prisma.topic.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(deletedPost);
    } catch (err) { 
      next(err)
    }
  };
}

export const topicController = new TopicController();
