import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoController } from './prestamo.controller';
import { PrestamoService } from './prestamo.service';
import { getModelToken } from '@nestjs/sequelize';
import { Prestamo } from './entities/prestamo.entity';
import { prestamoProviders } from './prestamo.providers';
import { faker } from '@faker-js/faker';
import { libroProviders } from '../libro/libro.providers';

describe('PrestamoController', () => {
  let controller: PrestamoController;
  let service: PrestamoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestamoController],
      providers: [
        PrestamoService,
        { provide: getModelToken(Prestamo), useValue: jest.fn() },
        ...prestamoProviders,
        ...libroProviders
      ],
    }).compile();

    controller = module.get<PrestamoController>(PrestamoController);
    service = module.get<PrestamoService>(PrestamoService);
  });

  it('se encuentra definido', () => {
    expect(controller).toBeDefined();
  });

  it("crear préstamo", async () => {

    const prestamo = {
      libroId: 1,
      lectorId: 1,
    };

    service.create = jest.fn().mockResolvedValue(prestamo);

    const result = await controller.create(prestamo);

    expect(result).toEqual(prestamo);
    expect(service.create).toHaveBeenCalledWith(prestamo);
  });

});
