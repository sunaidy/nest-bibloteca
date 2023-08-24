import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { libroProviders } from './libro.providers';
import { DatabaseModule } from '../core/database/DB.module';
@Module({
  imports: [DatabaseModule],
  controllers: [LibroController],
  providers: [LibroService, ...libroProviders],
})
export class LibroModule {}
