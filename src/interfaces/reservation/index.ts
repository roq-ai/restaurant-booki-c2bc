import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  customer_name: string;
  contact_information: string;
  date: any;
  time: any;
  number_of_guests: number;
  table_id: string;
  created_at?: any;
  updated_at?: any;

  table?: TableInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_name?: string;
  contact_information?: string;
  table_id?: string;
}
