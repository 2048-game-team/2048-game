import type { Handler } from 'express';

export const auth: Handler = (_, __, next) => {
  try {
    console.log('User is not autorized!');
    next();
  } catch (err) {
    next(err);
  }
};
