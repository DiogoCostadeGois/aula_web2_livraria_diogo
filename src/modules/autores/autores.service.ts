import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return await this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);

    if (!autorEncontrado) {
      throw new NotFoundException(`Autor com id ${id} não encontrado!`);
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }
  async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    await this.listarAutor(idAutor);

    return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  }

  //  deletarAutor (idAutor:number) {
  //   this.listarAutor(idAutor);
  //   autores = autores.filter((autor)=>autor.id !== idAutor);

  //   return autores;
  //  }
}
