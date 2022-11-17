import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../clientes/entities/cliente.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class LibrosService {

  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
    private readonly clienteService: ClientesService
  ){

  }

  async create(createLibroDto: CreateLibroDto) {
    try {
     
      const { idCliente, ...campos } = createLibroDto;
      // console.log({...campos});
      const cliente = this.clienteService.findOne(idCliente);
      const libro = this.libroRepository.create({...campos});
      libro.cliente = await this.clienteService.findOne(idCliente);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.libroRepository.save(libro)
      return libro
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
    }
  }

  findAll() {
    return this.libroRepository.find({})
  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
