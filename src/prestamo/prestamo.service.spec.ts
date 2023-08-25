import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoService } from './prestamo.service';
import { getModelToken } from '@nestjs/sequelize';
import { Prestamo } from './entities/prestamo.entity';
import { prestamoProviders } from './prestamo.providers';
import { libroProviders } from '../libro/libro.providers';

describe('PrestamoService', () => {
  let service: PrestamoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrestamoService,
        { provide: getModelToken(Prestamo), useValue: jest.fn() },
        ...prestamoProviders,
        ...libroProviders
      ],
    }).compile();

    service = module.get<PrestamoService>(PrestamoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
