import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";

const createPropertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required().max(8),
    number: yup.string().notRequired(),
    city: yup.string().required(),
    state: yup.string().required().max(2),
  }),
  categoryId: yup.string().required(),
});

export { createPropertySchema };
