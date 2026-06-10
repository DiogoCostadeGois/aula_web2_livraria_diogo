import {
  Injectable,
  Inject,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';  
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTable, livrosTable } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { criarLivrosDto } from './livros.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class LivrosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) { }

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

  async listarLivro(id: number) {
    try {
    const livroEncontrado = await this.db.select().from(livrosTable).where(eq(livrosTable.id, id))

      return livroEncontrado[0];

    } catch (error) {
      throw new NotFoundException('erro ao encontra o livro')
    }

  }
 async listarLivrosComAutor() {
  try{
    const livrosComAutor = await this.db 
    .select()
    .from(livrosTable)
    .innerJoin(autoresTable, eq(livrosTable.idAutor, autoresTable.id));

    return livrosComAutor;
  } catch (error) {
    throw new InternalServerErrorException('Erro ao listar livros com autor');
    }
  }
}





