import { ConflictException, Injectable } from "@nestjs/common";
import * as bcrypyt from 'bcrypt'; 
import { UsuariosRepository } from "./usuarios.repository"; 
import { CriarUsuarioDto } from "./usuarios.dto";

@Injectable()
export class UsuariosService {
    constructor(private readonly usuariosRepository: UsuariosRepository) {}

    async buscarUsuarioPorEmail(email: string) {
        return await this.usuariosRepository.buscarUsuarioPoremail(email);
    }

    async criarUsuario(usuario: CriarUsuarioDto) {
        const  usuarioEncontrado = await this.buscarUsuarioPorEmail(usuario.email);

        if (usuarioEncontrado) { 
            throw new ConflictException('Usuário já cadastrado com este email');
        }
        const passwordHashed = await bcrypyt.hash(usuario.password,10);

        return await this.usuariosRepository.criarUsuario({
            nome: usuario.nome,
            email: usuario.email,
            password:passwordHashed,
        
        });
    }
}