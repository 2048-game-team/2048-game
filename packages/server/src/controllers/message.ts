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
      const { id } = req.params;
      const message = await prisma.message.findUnique({
        where: { id: Number(id) },
        include: {
          likes: true,
          user: true,
        },
      });
      res.status(200).json(message);
    } catch (err) {
      next(err);
    }
  };

  createNew: Handler = async (req, res, next) => {
    try {
      const { content, userId, topicId, ansMessId } = req.body;
      const newMessage = await prisma.message.create({
        data: {
          content,
          userId: Number(userId),
          topicId: Number(topicId),
          ansMessId: Number(ansMessId),
        },
      });
      res.status(200).json(newMessage);
    } catch (err) {
      next(err);
    }
  };

  // updateById: Handler = async (req, res, next) => {
  //   try {
  //     const { id } = req.query;
  //     // const { content, userId, topicId } = req.body;
  //     const updatedMessage = await prisma.message.update({
  //       where: { id: Number(id) },
  //       data: {

  //       }
  //     });
  //     res.json(updatedMessage);
  //   } catch (err) {
  //     next(err);
  //   }
  // };

  deleteById: Handler = async (req, res, next) => {
    try {
      const { id } = req.query;
      const deletedPost = await prisma.message.delete({
        where: {
          id: Number(id),
        },
      });
      res.json(deletedPost);
    } catch (err) {
      next(err);
    }
  };
}

export const messageController = new MessageController();
