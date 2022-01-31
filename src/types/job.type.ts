export type Job = {
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
};

export type SearchInput = {
  page?: string | undefined;
  description?: string | undefined;
  location?: string | undefined;
  full_time?: string | undefined;
};
