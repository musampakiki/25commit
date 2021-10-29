import { Controller, Get, Render } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  @Render('commits/index')
  async root() {
    const response = await this.commitsService
      .getAll()
      .then((result) => (result ? { commits: result } : { commits: [] }));

    return response;
  }
}
