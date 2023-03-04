import express from 'express';
import { auth } from '../middlewares/auth';
import { themeController } from '../controllers/theme';

export const themes = express.Router();

themes.use(express.json());
themes.use(auth);
themes.post('/set', themeController.setUserTheme);
themes.get('/:userId', themeController.getByUserId);
