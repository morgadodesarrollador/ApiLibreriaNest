import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {

    constructor (
        @InjectRepository (User)
        private readonly userRepository: Repository<User>,
        configService: ConfigService 
    ){
        //llamamos al constructor del padre
        super({
            secretOrKey: configService.get('JWT_SECRET'),            
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //el token lo mandamos como un parametro 'token' del la seccion 'auth' de la request
            // y  de tipo 'Bearer Token' 
        })
    }

    async validate ( payload: JwtPayload ): Promise<User>{
        const { email } = payload;
        const user = await this.userRepository.findOneBy({ email });

        if (!user )
            throw new UnauthorizedException('Token no valido');
        
        if (!user.isActive ) //existe pero no activo
            throw new UnauthorizedException('usuario no activo');
        
        //si pasa validate --> el user se añade a la REQUEST 
        //y el usuario estára disponible en todos los lados del proceso de esta petición
        //usaremos DECORADORES personalizados para extraer el usuario REGISTRADO de la REQUEST
        return user;
    }

}