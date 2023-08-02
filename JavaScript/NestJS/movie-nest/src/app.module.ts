import { Module } from '@nestjs/common';
import { MovieController } from './movies/movies.controller';
import { MovieService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieService],
})
export class AppModule {}
