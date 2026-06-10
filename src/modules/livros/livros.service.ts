import {Injectable, NotFoundException } from "@nestjs/common";
import { AutoresService } from "../autores/autores.service"
import { criarLivrosDto } from "./livros.dto"
import { LivrosRepository } from "./livros.repository"


@Injectable()
export class LivrosService {
  constructor(
    private readonly LivrosRepository: LivrosRepository,
    private readonly AutoresService: AutoresService,
   ) {}
  async listarLivros() {
    return await this.LivrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: criarLivrosDto) {
    await this.AutoresService.listarAutor(bodyRequest.id_autor);
    return await this.LivrosRepository.criarLivros(bodyRequest);
  }
  async listarLivro(id: number){  
    const livroEncontrado = await this.LivrosRepository.listarLivro(id)

    if(!livroEncontrado){
      throw new NotFoundException(`Livro de id ${id} não encontrado`)
    }
    return livroEncontrado;
  }
  async listarLivrosComAutor() { 
    return await this.LivrosRepository.listarLivrosComAutor(); 

}

async listarLivroComAutor(id: number) {
  await this.listarLivro(id); 
  
  return await this.LivrosRepository.listarLivroComAutor(id);
}
}