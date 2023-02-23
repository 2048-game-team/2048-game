import type { Handler } from 'express';
import { Topic } from '../models/topic';

class TopicController {
  getAll: Handler = async (_, res, next) => {
    try {
      const topics = await Topic.findAll();
      res.status(200).json(topics);
    } catch (err) { 
      next(err);
    } 
  };

  // getById: Handler = async () => {};

  createNew: Handler = async (req, _, next) => {
    try {
      const { titile, content, created_at, userId } = req.body;
      console.log(titile, content, created_at, userId);
    } catch (err) { 
      next(err);
    }
  };

  // deleteById: Handler = async () => {};
}

export const topicController = new TopicController();
