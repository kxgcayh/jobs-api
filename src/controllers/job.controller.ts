import { NextFunction, Request, Response } from 'express';
import { getAllJobs, getJob } from '../services/job.service';
import { Job } from '../types/job.type';

export const getJobHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const job: Job | null = await getJob(req.params.id);
    if (job) {
      return res.status(200).send({
        code: 200,
        message: 'Fetch Data Success!',
        data: job,
      });
    }

    return res.status(404).send({
      code: 500,
      message: 'Fetch Data Failed',
      data: [],
    });
  } catch (error) {
    next(error);
  }
};

export const getAllJobsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const jobs: Job[] | null = await getAllJobs({ ...req.body });
    return res.status(201).send({
      code: 200,
      message: 'Fetch Data Success!',
      data: jobs,
    });
  } catch (error) {
    next(error);
  }
};
