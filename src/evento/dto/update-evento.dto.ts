import { PartialType } from '@nestjs/mapped-types';
//import { PartialType } from 'node_modules/@nestjs/swagger';
import { CreateEventoDto } from './create-evento.dto';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {}
