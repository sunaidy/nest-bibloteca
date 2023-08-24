import { Module } from '@nestjs/common';
import { LectorService } from './lector.service';
import { LectorController } from './lector.controller';
import { DatabaseModule } from '../core/database/DB.module';
import { lectorProviders } from './lector.provaiders';

@Module({
  imports: [DatabaseModule],
  controllers: [LectorController],
  providers: [LectorService, ...lectorProviders],
})
export class LectorModule {}
