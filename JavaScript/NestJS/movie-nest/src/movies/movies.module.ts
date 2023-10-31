import { Module } from '@nestjs/common';
import { MovieController } from './movies.controller';
import { MovieService } from './movies.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
})
export class MoviesModule {}
