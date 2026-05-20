import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { error } from 'console';
import { DRIZZLE } from 'src/db/database/database.constants';
import { livrosTable } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { criarLivrosDto } from './livros.dto';
import { title } from 'process';

@Injectable()
export class LivrosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarLivros() {
    try {
      const livros = await this.db.select().from(livrosTable);

      return livros;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar livros');
    }
  }
  async criarLivros(bodyRequest: criarLivrosDto) {
    try {
      await this.db.insert(livrosTable).values({
        idAutor: bodyRequest.id_autor,
        titulo: bodyRequest.titulo,
        descricao: bodyRequest.titulo,
      });

      return 'Livro ${bodyRequest.titulo} criado com sucesso';
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar livro');
    }
  }
}
