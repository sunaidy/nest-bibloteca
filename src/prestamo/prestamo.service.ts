import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { LIBRO_REPOSITORY, PRESTAMO_REPOSITORY } from '../core/constants';
import { Prestamo } from './entities/prestamo.entity';
import { Libro } from 'src/libro/entities/libro.entity';
import { Lector } from 'src/lector/entities/lector.entity';

@Injectable()
export class PrestamoService {
  constructor(
    @Inject(PRESTAMO_REPOSITORY) private readonly prestamoRepository: typeof Prestamo,
    @Inject(LIBRO_REPOSITORY) private libroRepository: typeof Libro,
) { }

  async create(prestamoDto: CreatePrestamoDto) {
    try{
      const libro = await this.libroRepository.findOne({
        where: {
          id: prestamoDto.libroId,
          estado: 0,
        }
      });  

      if (libro) {
        throw new Error('El libro se encuentra prestado');
      }

      await this.prestamoRepository.create({...prestamoDto})
      await this.libroRepository.update({
        estado: 0,
      }, {
        where: {
          id: prestamoDto.libroId,
        }
      });
      
    } catch(error){
      throw new HttpException('Error al crear un préstamo '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async findAll(): Promise<any>{
  try{
     {
      return await this.prestamoRepository.findAll({
          include: [
              {
                  model: Libro
              },
              {
                model: Lector
            },
          ]
      });
  }
  } catch(error){
      throw new HttpException('Error al obtener la lista de préstamos '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
