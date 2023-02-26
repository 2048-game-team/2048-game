import type { Handler } from 'express';
import prisma from '../db';

class TopicController {
  getAll: Handler = async (_, res, next) => {
    try {
      const topics = await prisma.topic.findMany({
        include: {
          messages: true,
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
      const { title, content, authorId } = req.body;
      const newTopic = await prisma.topic.create({
        data: {
          title,
          content,
          authorId: Number(authorId),
        },
      });
      res.json(newTopic);
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
      res.json(deletedPost);
    } catch (err) { 
      next(err)
    }
  };
}

export const topicController = new TopicController();
