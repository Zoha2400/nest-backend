import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return `there will be all films`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `a num of one film ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'This function creates a new film';
  }

  @Delete('/:id')
  remove(@Param('id') moveId: string) {
    return `This function removes a film ${moveId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
