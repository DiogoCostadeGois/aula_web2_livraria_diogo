import { Module } from '@nestjs/common';
import { AutoresModule } from './modules/autores/autores.module';
import { DatabaseModule } from './db/database/database.module';
import { LivrosModule } from './modules/livros/livros.module';
import { UsuariosModule } from './modules/Usuarios/usuarios.module';

@Module({
  imports: [AutoresModule, DatabaseModule, LivrosModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
