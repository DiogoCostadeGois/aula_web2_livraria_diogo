import {
    int,
    varchar,
    mssqlTable,
    bit,
    datetime,
  } from 'drizzle-orm/mssql-core';
  
  export const usuariosTable = mssqlTable('usuarios', {
    id: int('id').primaryKey().identity(),
    nome: varchar({ length: 100 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    passwordHashed: varchar('password_hashed', { length: 255 }).notNull(),
    ativo: bit('ativo').notNull().default(true),
    criadoEm: datetime('criado_em').notNull().defaultGetDate(),
  });

  export type usuarios = typeof usuariosTable.$inferSelect;
  export type CriarUsuario = typeof usuariosTable.$inferInsert;
  