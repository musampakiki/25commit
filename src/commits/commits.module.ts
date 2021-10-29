import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';

@Module({
  providers: [CommitsService],
  controllers: [CommitsController],
})
export class CommitsModule {}
