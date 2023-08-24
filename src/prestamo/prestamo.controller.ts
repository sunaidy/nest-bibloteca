import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

@Controller('prestamo')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}

  @Post()
  create(@Body() createPrestamoDto: CreatePrestamoDto) {
    return this.prestamoService.create(createPrestamoDto);
  }

  @Get()
  findAll(): Promise<any> {
    return this.prestamoService.findAll();
  }

}
