import { Test, TestingModule } from '@nestjs/testing';
import { LibroService } from './libro.service';
import { libroProviders } from './libro.providers';
import { getModelToken } from '@nestjs/sequelize';
import { Libro } from './entities/libro.entity';

describe('LibroService', () => {
  let service: LibroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LibroService,
        ...libroProviders
      ]
    }).compile();

    service = module.get<LibroService>(LibroService);
  });

  it('se encuentra definida', () => {
    expect(service).toBeDefined();
  });
});
