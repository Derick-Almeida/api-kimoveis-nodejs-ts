import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validatedSchema =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data);

      if (!validatedData) {
        console.log("deu ruim");
      }

      req.body = validatedData;

      next();
    } catch (err: any) {
      return res.status(400).json({
        message: err.errors?.join(", "),
      });
    }
  };

export default validatedSchema;
