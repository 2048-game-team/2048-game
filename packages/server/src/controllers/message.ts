import type { Handler } from 'express';
import { userService } from '../service/users';
import prisma from '../db';

class MessageController {
  getAll: Handler = async (_, res, next) => {
    try {
      const messages = await prisma.message.findMany({
        include: {
          user: true,
          likes: true,
        },
      });
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
      const { topicId, content, userId, userName, userAvatar, exMessageId } =
        req.body;
      const user = await userService.update(
        Number(userId),
        userName,
        userAvatar
      );

      const message = await prisma.message.create({
        data: {
          content,
          userId: Number(userId),
          topicId: Number(topicId),
          exMessageId: exMessageId ? Number(exMessageId) : null,
        },
      });

      res.status(201).json({ message, user });
    } catch (err) {
      next(err);
    }
  };

  updateById: Handler = async (req, res, next) => { 
    try {
      const { content, userId, userName, userAvatar } =
        req.body;
      const { id } = req.params;
      const user = await userService.update(
        Number(userId),
        userName,
        userAvatar
      );

      const message = await prisma.message.update({
        where: {
          id: Number(id)
        },
        data: {
          content,
        },
      });

      res.status(201).json({ message, user });
    } catch (err) { 
      next(err)
    }
  }

  deleteById: Handler = async (req, res, next) => {
    try {
      const { id } = req.query;
      const deletedPost = await prisma.message.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(deletedPost);
    } catch (err) {
      next(err);
    }
  };
}

export const messageController = new MessageController();
