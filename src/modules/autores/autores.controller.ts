import { Controller, Get, Param } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { ParseIntPipe } from '@nestjs/common';
@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  listarAutores() {
    return this.autoresService.listarAutores();
  }
  @Get('/listar-autor/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }
}
