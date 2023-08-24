import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { prestamoProviders } from './prestamo.providers';
import { DatabaseModule } from '../core/database/DB.module';
import { libroProviders } from 'src/libro/libro.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PrestamoController],
  providers: [PrestamoService, ...prestamoProviders, ...libroProviders],
})
export class PrestamoModule {}
