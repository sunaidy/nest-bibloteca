import { Test, TestingModule } from '@nestjs/testing';
import { LectorService } from './lector.service';
import { lectorProviders } from './lector.provaiders';
import { LectorController } from './lector.controller';
import { faker } from '@faker-js/faker';
import { DataTypes, Sequelize } from 'sequelize';

describe('LectorService', () => {
  let service: LectorService;
  let sequelize: Sequelize;
  let lectorMock
  beforeEach(async () => {
     sequelize = new Sequelize('bibloteca', 'desarrollo', 'desarrollo*2023', {
     host: 'localhost',
     dialect: 'mysql', 
    });

   const Lector = sequelize.define('Lector', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
    lectorMock=Lector
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectorController],
      providers: [
        LectorService,
        {
          provide: 'LECTOR_REPOSITORY',
          useValue: Lector,
        },
        {
          provide: Lector, 
          useValue: lectorMock, 
        },
        {
          provide: Sequelize, 
          useValue: sequelize, 
        }
      ],
    }).compile();

    service = module.get<LectorService>(LectorService);
  });

  it('Se encuentra definido', () => {
    expect(service).toBeDefined();
  });

  it('Retortar lector dado id', async () => {
    lectorMock.findOne = jest.fn().mockResolvedValue({ id: 1, nombre: 'Angel', createdAt:'2023-08-24 20:39:20',updatedAt:'2023-08-24 20:39:20'  });

    const libro = await service.findOne(1);

    expect(libro).toEqual({ id: 1, nombre: 'Angel', createdAt:'2023-08-24 20:39:20',updatedAt:'2023-08-24 20:39:20'  });
    expect(lectorMock.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
  });
});


