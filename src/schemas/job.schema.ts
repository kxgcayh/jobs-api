import Joi from 'joi';
import { RequestValidateSchema } from '../types/request-validate-schema.type';

export const findJobSchema: RequestValidateSchema = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export const filterJobSchema: RequestValidateSchema = {
  params: Joi.object().keys({
    page: Joi?.string(),
    description: Joi?.string(),
    location: Joi?.string(),
    full_time: Joi?.string(),
  }),
};
