import { model, Schema, Document } from 'mongoose';

// Interface for job database object
export interface IJobDB extends Document {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string | null | undefined;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string | null | undefined;
}

// Job database schema
const JobSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    company_url: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    how_to_apply: {
      type: String,
      required: true,
    },
    company_logo: {
      type: String,
      required: false,
    },
  },
  { timestamps: false, versionKey: false }
);

const JobModel = model<IJobDB>('job', JobSchema);

export default JobModel;
