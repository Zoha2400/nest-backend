import { Controller, Get, Param } from '@nestjs/common';

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
}
