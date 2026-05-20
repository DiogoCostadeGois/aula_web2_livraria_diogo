import { Injectable } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { criarLivrosDto } from './livros.dto';

@Injectable()
export class LivrosService {
  constructor(private readonly LivrosRepository: LivrosRepository) {}

  async listarLivros() {
    return await this.LivrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: criarLivrosDto) {
    return await this.LivrosRepository.criarLivros(bodyRequest);
  }
}
