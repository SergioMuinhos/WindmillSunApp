import { Factura } from '../facturas/models/factura';
import { Region } from './region'
export class Cliente {
  id: number;
  nombre: string;
  apellidos: string;
  createAt: string;
  email: string;
  foto: string;
  region: Region;
  facturas: Array<Factura>=[];
}
