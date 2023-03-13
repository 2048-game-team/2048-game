import express from 'express';
import { authMiddleware } from '../middlewares/auth';
import { themeController } from '../controllers/theme';

export const themes = express.Router();

themes.use(express.json());
themes.use(authMiddleware);
themes.post('/set', themeController.setUserTheme);
themes.get('/:userId', themeController.getByUserId);
