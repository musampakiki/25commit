import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class CommitsService {
  private commits: AxiosInstance;

  constructor() {
    this.commits = axios.create({
      baseURL: 'https://api.github.com/repos/nodejs/node/commits',
    });
  }

  async getAll() {
    const response = await this.commits.get(
      'https://api.github.com/repos/nodejs/node/commits?per_page=25',
    );
    return response.data;
  }
}
