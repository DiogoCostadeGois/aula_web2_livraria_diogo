import {
  int,
  varchar,
  mssqlTable,
  bit,
  datetime,
} from 'drizzle-orm/mssql-core';

export const autoresTable = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  ativo: bit('ativo').notNull().default(true),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});
export type Autor = typeof autoresTable.$inferSelect;
export type CriarAutor = typeof autoresTable.$inferInsert;
