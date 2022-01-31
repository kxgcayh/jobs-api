import axios from 'axios';
import { IJobDB } from '../models/job.model';
import { Job, SearchInput } from '../types/job.type';

export const getJob = async (id: string): Promise<Job | null> => {
  const response = await axios.get(
    `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
  );
  const job: IJobDB | null = JSON.parse(JSON.stringify(response.data));
  if (!job) return null;
  return job;
};

export const getAllJobs = async (
  search: SearchInput | null
): Promise<Job[] | null> => {
  let baseURL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
  if (search?.page != undefined) baseURL += `?page=${search?.page}`;
  if (search?.location != undefined) baseURL += `?location=${search?.location}`;
  if (search?.full_time != undefined) {
    baseURL += `?full_time=${search?.full_time}`;
  }
  if (search?.description != undefined) {
    baseURL += `?description=${search?.description}`;
  }
  const response = await axios.get(baseURL);
  const jobs: IJobDB[] = JSON.parse(JSON.stringify(response.data));
  return jobs;
};
