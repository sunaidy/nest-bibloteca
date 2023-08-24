import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroModule } from './libro/libro.module';
import { DatabaseModule } from './core/database/DB.module';
import { LectorModule } from './lector/lector.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LibroModule,
    DatabaseModule,
    LectorModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
