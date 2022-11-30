import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './modules/clientes/clientes.module';
import { LibrosModule } from './modules/libros/libros.module';
import { ProfileModule } from './modules/profile/profile.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { AutoresModule } from './modules/autores/autores.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [ 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:true
    }),
    ClientesModule,
    LibrosModule,
    ProfileModule,
    CategoriasModule,
    AutoresModule,
    AuthModule
  
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
