import type { Handler } from 'express';

export const auth: Handler = (_, __, next) => {
  try {
    console.log('Check if user is autorized!');
    next();
  } catch (err) {
    next(err);
  }
};
