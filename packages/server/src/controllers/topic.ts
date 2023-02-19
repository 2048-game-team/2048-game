import type { Handler } from 'express';
import { Topic } from '../models/topic';

class TopicController {
  getAll: Handler = async (_, res) => {
    const topics = await Topic.findAll();
    return res.status(200).json(topics);
  };

  // getById: Handler = async () => {};

  // createNew: Handler = async () => {};

  // deleteById: Handler = async () => {};
}

export const topicController = new TopicController();
