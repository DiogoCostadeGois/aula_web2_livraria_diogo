import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { ParseIntPipe } from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores/')
  listarAutores() {
    return this.autoresService.listarAutores();
  }

  @Get('/listar-autor/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }
  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: CriarAutorDto) {
    return this.autoresService.criarAutor(bodyRequest);
  }
  @Put('atualizar-autor/:id')
  atualizarAutor(
    @Param('id', ParseIntPipe) idAutor: number,
    @Body() bodyRequest: AtualizarAutorDto,
  ) {
    return this.autoresService.atualizarAutor(idAutor, bodyRequest);
  }
  @Delete('deletar-autor/:id')
  deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    //  return this.autoresService.deletarAutor(idAutor);
  }
}
