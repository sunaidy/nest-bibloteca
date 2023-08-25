import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';

@Controller('prestamo')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}

  @Post()
  create(@Body() createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
    return this.prestamoService.create(createPrestamoDto);
  }

  @Get()
  findAll(): Promise<any> {
    return this.prestamoService.findAll();
  }

}
