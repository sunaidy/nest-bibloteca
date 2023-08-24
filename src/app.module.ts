import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroModule } from './libro/libro.module';
import { DatabaseModule } from './core/database/DB.module';
import { LectorModule } from './lector/lector.module';
import { ConfigModule } from '@nestjs/config';
import { PrestamoModule } from './prestamo/prestamo.module';

@Module({
  imports: [
    LibroModule,
    DatabaseModule,
    LectorModule,
    ConfigModule.forRoot(),
    PrestamoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
