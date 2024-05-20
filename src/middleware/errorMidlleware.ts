import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
 res.status(400).send({
    message: "Some thing went wrong",
  });
  // next(err);
};

export default errorHandler;
