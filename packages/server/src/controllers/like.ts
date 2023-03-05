import type { Handler } from 'express';
import { userService } from '../service/users';
import prisma from '../db';

class LikeController {
  createNew: Handler = async (req, res, next) => {
    try {
      const { userId, messageId, userAvatar, userName } = req.body;
      const user = await userService.update(
        Number(userId),
        userName,
        userAvatar
      );

      const like = await prisma.like.create({
        data: {
          messageId: Number(messageId),
          userId: Number(userId),
        },
      });
      res.status(200).json({ like, user });
    } catch (err) {
      next(err);
    }
  };

  getAllByPostId: Handler = async (req, res, next) => {
    try {
      const { messageId } = req.params;
      const likes = await prisma.like.findMany({
        where: { messageId: Number(messageId) },
      });
      res.status(200).json(likes);
    } catch (err) {
      next(err);
    }
  };
}

export const likeController = new LikeController();
