import { Injectable, Inject, InternalServerErrorException } from "@nestjs/common";
import { error } from "console";
import { DRIZZLE } from "src/db/database/database.constants";
import { usuariosTable } from "src/db/schemas";
import type { DrizzleDB} from "src/db/types/drizzleDB";

@Injectable()
export class UsuariosRepository {
    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

    async criarUsuario(usuario: any) {
        try {
            await this.db.insert(usuariosTable).values(usuario);

         return usuario;   
    } catch {error} {
        throw new InternalServerErrorException('Erro ao criar Usuario');
    }
  }

  
}