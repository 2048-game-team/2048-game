import type { ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (err, _, res) => {
  console.log(`Error is occured! ${err}`);
  return res.status(500).json({ err });
};
