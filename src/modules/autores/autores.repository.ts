import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTable } from 'src/db/schemas/autores';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarAutores() {
    try {
      return await this.db.select().from(autoresTable);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autores');
    }
  }

  async listarAutor(id: number) {
    try {
      const autorEncontrado = await this.db;
      return await this.db
        .select()
        .from(autoresTable)
        .where(eq(autoresTable.id, id));

      return autorEncontrado[0];
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar um autor');
    }
  }

  async criarAutor(bodyRequest: CriarAutorDto) {
    try {
      return await this.db.insert(autoresTable).values(bodyRequest);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar um autor');
    }
  }
  async atualizarAutor(id: number, bodyRequest: AtualizarAutorDto) {
    try {
      await this.db
        .update(autoresTable)
        .set(bodyRequest)
        .where(eq(autoresTable.id, id));

      return 'Autor atualizado com sucesso';
    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar um autor');
    }
  }
}
