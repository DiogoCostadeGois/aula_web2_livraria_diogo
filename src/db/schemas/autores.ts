import { int, varchar, mssqlTable } from 'drizzle-orm/mssql-core';

export const autoresTable = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
export type Autor = typeof autoresTable.$inferSelect;
export type CriarAutor = typeof autoresTable.$inferInsert;
