import { Job } from '../types/job.type';
import { IJobDB } from '../models/job.model';

const transform = (job: IJobDB): Job => {
  return {
    id: job._id.toString(),
    type: job.type,
    url: job.url,
    created_at: job.created_at,
    company: job.company,
    company_url: job.company_url,
    location: job.location,
    title: job.title,
    description: job.description,
    how_to_apply: job.how_to_apply,
    company_logo: job.company_logo,
  };
};

export default transform;
