 export interface Repo {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
}


export interface DataResponse {
  total_count: number;
  incomplete_results: boolean,
  items: Repo[]
}