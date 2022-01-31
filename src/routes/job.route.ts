import { Router } from 'express';
import {
  getAllJobsHandler,
  getJobHandler,
} from '../controllers/job.controller';
import { validate } from '../middlewares';
import { filterJobSchema, findJobSchema } from '../schemas/job.schema';

const jobRouter = Router();

jobRouter.get('/:id', validate(findJobSchema), getJobHandler);
jobRouter.get('/', validate(filterJobSchema), getAllJobsHandler);

export default jobRouter;
