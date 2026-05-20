import { Body, Controller, Get, Post } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { criarLivrosDto } from './livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get('listar-livros')
  async listarLivros() {
    return await this.livrosService.listarLivros();
  }
  @Post('Criar-livro')
  async criarLivro(@Body() bodyRequest: criarLivrosDto) {
    return await this.livrosService.criarLivro(bodyRequest);
  }
}
