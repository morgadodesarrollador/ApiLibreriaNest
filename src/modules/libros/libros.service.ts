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
      //prepara la consulta
      console.log(createLibroDto);
      const id = +createLibroDto.idCliente;
      const cliente = this.clienteService.findOne(id);
      
      //const libro = this.libroRepository.create(createLibroDto)

      //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      //await this.libroRepository.save(libro)
      //return libro;
      return cliente
      
    } catch (error) {
        return new InternalServerErrorException('Error en BD∫')
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
