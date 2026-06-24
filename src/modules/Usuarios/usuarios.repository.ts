import { Injectable, Inject, InternalServerErrorException } from "@nestjs/common";
import { error } from "console";
import { eq } from "drizzle-orm";
import { DRIZZLE } from "src/db/database/database.constants";
import { usuariosTable } from "src/db/schemas";
import type { DrizzleDB} from "src/db/types/drizzleDB";
import { CriarUsuarioDto } from "./usuarios.dto";



@Injectable()
export class UsuariosRepository {
    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

    async criarUsuario(usuario: CriarUsuarioDto) {
        try {
            await this.db.insert(usuariosTable).values({ 
                nome: usuario.nome,
                email: usuario.email,
                passwordHashed: usuario.password, 

            });

         return usuario;   
    } catch {error} {
        throw new InternalServerErrorException('Erro ao criar Usuario');
    }
  }
   async buscarUsuarioPoremail(email: string) {
    try{
        const usuarioEncontrado = await this.db 
        .select()
        .from(usuariosTable)
        .where(eq(usuariosTable.email, email));

        return usuarioEncontrado[0] ?? null;

    }catch (error) {
        throw new InternalServerErrorException(
            'Erro ao buscar usuário por email',

        );
    }
   }
  
}