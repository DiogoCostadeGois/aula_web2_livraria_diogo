import { Module } from '@nestjs/common';
import { DRIZZLE } from './database.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
import { Global } from '@nestjs/common';
import * as schema from '../schemas';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: () => {
        return drizzle('', { schema });
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
