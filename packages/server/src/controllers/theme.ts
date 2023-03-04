import type { Handler } from 'express';
import prisma from '../db';

class ThemeController {
  setUserTheme: Handler = async (req, res, next) => {
    try {
      const { userId, theme } = req.body;
      const userTheme = await prisma.theme.findUnique({
        where: {
          userId: Number(userId),
        },
      });

      if (userTheme) {
        const updatedTheme = await prisma.theme.update({
          where: {
            userId: Number(userId),
          },
          data: {
            theme,
          },
        });
        res.status(200).json(updatedTheme);
      }

      const newTheme = await prisma.theme.create({
        data: {
          theme,
          userId: Number(userId),
        },
      });

      res.status(200).json(newTheme);
    } catch (err) {
      next(err);
    }
  };

  getByUserId: Handler = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userTheme = await prisma.theme.findUnique({
        where: {
          userId: Number(userId),
        },
      });

      if (!userTheme) {
        res.status(404).json({ message: 'Theme not set.' });
      }
      res.status(201).json(userTheme);
    } catch (err) {
      next(err);
    }
  };
}

export const themeController = new ThemeController();
