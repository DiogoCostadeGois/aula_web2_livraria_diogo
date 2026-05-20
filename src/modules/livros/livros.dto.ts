import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class criarLivrosDto {
  @IsString({ message: 'O titulo deve ser uma String' })
  @IsNotEmpty({ message: 'O titulo é obrigatorio' })
  @MinLength(3, { message: 'O titulo deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O titulo deve ter no máximo 100 Caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  titulo: string;

  @IsString({ message: 'O titulo deve ser uma String' })
  @IsNotEmpty({ message: 'O titulo é obrigatorio' })
  @MinLength(3, { message: 'O titulo deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O titulo deve ter no máximo 100 Caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  descricao: string;
  @IsNotEmpty({ message: 'O idAutor é obrigatorio' })
  @Type(() => Number)
  id_autor: number;
}
