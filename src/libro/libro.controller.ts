import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';

@Controller('libro')
export class LibroController {
  constructor(private libroService: LibroService) {}

  @Post()
  create(@Body() createLibroDto: CreateLibroDto): Promise<Libro> {
    return this.libroService.create(createLibroDto);
  }

  @Get()
  async findAll(): Promise<Libro[]>{
    return this.libroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Libro> {
    return this.libroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto): Promise<Libro> {
    return this.libroService.update(+id, updateLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libroService.remove(+id);
  }
}
