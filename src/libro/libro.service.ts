import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';
import { LIBRO_REPOSITORY } from '../core/constants';

@Injectable()
export class LibroService {
  constructor(
    @Inject(LIBRO_REPOSITORY) private readonly libroRepository: typeof Libro,
) { }

  async create(libroDto: CreateLibroDto): Promise<Libro> {
    try{
      return await this.libroRepository.create({...libroDto})
    } catch(error){
      throw new HttpException('Error al crear un libro '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async findAll(): Promise<Libro[]> {
  try{  
    return await this.libroRepository.findAll<Libro>();
  } catch(error){
    throw new HttpException('Error al obtener las lista de libros '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

 async findOne(id: number){
    try{
      return await this.libroRepository.findByPk<Libro>(id);
    } catch(error){
      throw new HttpException('Error al obtener un libro '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async update(id: number, updateLibroDto: UpdateLibroDto): Promise<Libro>{
    try {
       await this.libroRepository.update(
            updateLibroDto,
           {where: { id: id }}
          );
       return this.findOne(id)
    } catch (error){
      throw new HttpException('Error al editar un libro '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  remove(id: number) {   
    try{
      return this.libroRepository.destroy( {where: {id}})  
    } catch(error){
      throw new HttpException('Error al eliminar un libro '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }     
  }
}
