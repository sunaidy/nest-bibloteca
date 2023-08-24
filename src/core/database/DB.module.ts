import { Module } from '@nestjs/common';
import { databaseProviders } from './DB.provider';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }