import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { ClientesModule } from '../clientes/clientes.module';
import { ClientesService } from '../clientes/clientes.service';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports: [
    ClientesModule,
    TypeOrmModule.forFeature([Libro])
  ]
})
export class LibrosModule {}
