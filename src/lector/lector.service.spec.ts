import { Test, TestingModule } from '@nestjs/testing';
import { LectorService } from './lector.service';
import { lectorProviders } from './lector.provaiders';
import { LectorController } from './lector.controller';
import { faker } from '@faker-js/faker';

describe('LectorService', () => {
  let service: LectorService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectorController],
      providers: [
        LectorService,
        ...lectorProviders
      ],
    }).compile();

    service = module.get<LectorService>(LectorService);
  });

  it('Se encuentra definido', () => {
    expect(service).toBeDefined();
  });

});


