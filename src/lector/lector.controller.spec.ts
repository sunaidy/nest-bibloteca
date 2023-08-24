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
  
  it("crear lector", async () => {
    const lector = {
      id: faker.number.int(),
      nombre: faker.company.name(),
      createAt: faker.date.anytime(),
      updateAt: faker.date.anytime(),
  };
    jest.spyOn(service, 'create').mockImplementation();
    const response = await controller.create({nombre: faker.company.name()});
    expect(response).toBe(lector);
  });
});
