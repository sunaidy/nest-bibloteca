import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LectorService } from './lector.service';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';
import { Lector } from './entities/lector.entity';

@Controller('lector')
export class LectorController {
  constructor(private lectorService: LectorService) {}

  @Post()
  create(@Body() createLectorDto: CreateLectorDto): Promise<Lector> {
    return this.lectorService.create(createLectorDto);
  }

  @Get()
  findAll(): Promise<Lector[]> {
    return this.lectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<Lector> {
    return this.lectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLectorDto: UpdateLectorDto) : Promise<Lector> {
    return this.lectorService.update(+id, updateLectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectorService.remove(+id);
  }
}
