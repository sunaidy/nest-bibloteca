import { HttpException, HttpStatus, Inject, Injectable, Provider } from '@nestjs/common';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';
import { LECTOR_REPOSITORY } from '../core/constants';
import { Lector } from './entities/lector.entity';

@Injectable()
export class LectorService {
  constructor(
    @Inject(LECTOR_REPOSITORY) private readonly lectorRepository: typeof Lector,
) { }

 async create(lectorDto: CreateLectorDto):Promise<Lector> {
    try{
      return await this.lectorRepository.create({...lectorDto})
    } catch(error){
      throw new HttpException('Error al crear un lector '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async findAll(): Promise<Lector[]> {
    try{  
      return await this.lectorRepository.findAll<Lector>();
    } catch(error){
      throw new HttpException('Error al obtener las lista de lectores '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try{
      return await this.lectorRepository.findByPk<Lector>(id);
    } catch(error){
      throw new HttpException('Error al obtener un lector '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async update(id: number, updateLectorDto: UpdateLectorDto): Promise<Lector> {
    try {
      await this.lectorRepository.update(
        updateLectorDto,
          {where: { id: id }}
         );
      return this.findOne(id)
   } catch (error){
     throw new HttpException('Error al editar un lector '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
   }
  }

  remove(id: number) {
    try{
      return this.lectorRepository.destroy( {where: {id}})  
    } catch(error){
      throw new HttpException('Error al eliminar un lector '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }   
  }
}
