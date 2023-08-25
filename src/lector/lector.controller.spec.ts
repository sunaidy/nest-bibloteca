import { Test, TestingModule } from '@nestjs/testing';
import { LectorController } from './lector.controller';
import { LectorService } from './lector.service';
import { getModelToken } from '@nestjs/sequelize';
import { Lector } from './entities/lector.entity';
import { faker } from '@faker-js/faker';
import { lectorProviders } from './lector.provaiders';

describe('LectorController', () => {
  let controller: LectorController;
  let service: LectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectorController],
      providers: [
        LectorService,
        { provide: getModelToken(Lector), useValue: jest.fn() },
        ...lectorProviders
      ],
    }).compile();

    controller = module.get<LectorController>(LectorController);
    service = module.get<LectorService>(LectorService);
  });

  it('Se encuentra definido', () => {
    expect(controller).toBeDefined();
  });
  
  it("crear lector", async () => {

    const lector = {
      nombre: faker.company.name(),
    };

    service.create = jest.fn().mockResolvedValue(lector);

    const result = await controller.create(lector);

    expect(result.nombre).toEqual(lector.nombre);
    expect(service.create).toHaveBeenCalledWith(lector);
  });
});
