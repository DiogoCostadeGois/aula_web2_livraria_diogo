import {
  int,
  mssqlTable,
  varchar,
  text,
  datetime,
} from 'drizzle-orm/mssql-core';
import { autoresTable } from './autores';
export const livrosTable = mssqlTable('livros', {
  id: int('id').primaryKey().identity(),
  idAutor: int('id_autor')
    .notNull()
    .references(() => autoresTable.id),
  titulo: varchar('titulo', { length: 100 }).notNull(),
  descricao: text('descricao').notNull(),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});
