import type { Handler } from 'express';
import { Message } from '../models/message';

class MessageController {
  getAll: Handler = async (_, res, next) => {
    try {
      const messages = await Message.findAll();
      res.status(200).json(messages);
    } catch (err) { 
      next(err)
    } 
  };

  getById: Handler = async (req, res, next) => {
    try {
      const { id } = req.query;
      const message = await Message.findOne({ where: { id } });
      res.status(200).json(message);
    } catch (err) {
      next(err);
    }  
  };

  createNew: Handler = async (req, res, next) => {
    try {
      const { content, created_at, userId } = req.body;
      const newMessage = await Message.create({ content, created_at, userId });
      res.status(200).json(newMessage)
    } catch (err) {
      next(err);
    } 
  };

  // deleteById:Handler = async () => { }
}

export const messageController = new MessageController();
