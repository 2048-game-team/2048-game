import type { Handler } from 'express';
import prisma from '../db';

class MessageController {
  getAll: Handler = async (_, res, next) => {
    try {
      const messages = await prisma.message.findMany();
      res.status(200).json(messages);
    } catch (err) {
      next(err);
    }
  };

  getById: Handler = async (req, res, next) => {
    try {
      const { id } = req.query;
      const message = await prisma.message.findUnique({ where: { id: Number(id) } });
      res.status(200).json(message);
    } catch (err) {
      next(err);
    }
  };

  createNew: Handler = async (req, res, next) => {
    try {
      const { content, authorId, topicId } = req.body;
      const newMessage = await prisma.message.create({
        data: {
          content,
          authorId: Number(authorId),
          topicId: Number(topicId),
        },
      });
      res.status(200).json(newMessage);
    } catch (err) {
      next(err);
    }
  };

  deleteById: Handler = async (req, res, next) => {
    try {
      const { id } = req.query;
      const deletedPost = await prisma.messages.delete({
        where: {
          id: Number(id),
        },
      });
      res.json(deletedPost);
    } catch (err) {
      next(err);
    }
  }
}

export const messageController = new MessageController();
