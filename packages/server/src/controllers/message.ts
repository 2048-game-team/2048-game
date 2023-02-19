import type { Handler } from 'express';
import { Message } from '../models/message';

class MessageController { 
  getAll: Handler = async (_, res) => {
    const topics = await Message.findAll()
    return res.status(200).json(topics)
  }
  
  // getById:Handler = async () => { }

  // createNew:Handler = async () => { }

  // deleteById:Handler = async () => { }
}

export const messageController = new MessageController();
