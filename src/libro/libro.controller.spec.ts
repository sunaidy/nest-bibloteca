import { Test, TestingModule } from '@nestjs/testing';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';
import { libroProviders } from './libro.providers';
import { Libro } from './entities/libro.entity';
import { getModelToken } from '@nestjs/sequelize';
import { faker } from '@faker-js/faker';

describe('LibroController', () => {
  let controller: LibroController;
  let service: LibroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibroController],
      providers: [
        LibroService,
        { provide: getModelToken(Libro), useValue: jest.fn() },
        ...libroProviders
      ],
    }).compile();

    controller = module.get<LibroController>(LibroController);
    service = module.get<LibroService>(LibroService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("crear libro", async () => {

    const libro = {
      nombre: faker.company.name(),
      isbn: faker.string.numeric(),
      estado: faker.datatype.boolean(),
    };

    service.create = jest.fn().mockResolvedValue(libro);

    const result = await controller.create(libro);

    expect(result.nombre).toEqual(libro.nombre);
    expect(service.create).toHaveBeenCalledWith(libro);
  });
});
