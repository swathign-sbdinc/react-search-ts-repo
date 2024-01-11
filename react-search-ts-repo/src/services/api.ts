import { DataResponse } from "../model";

const GITHUB_API_URL = 'https://api.github.com';

export const fetchRepositories = async (page: number, perPage: number): Promise<DataResponse> => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/search/repositories?sort=stars&q=javascript&per_page=${perPage}&page=${page}`, {
      headers: {
        'User-Agent': 'ReactSearchTsRepo/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
