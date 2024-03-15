import { Event } from "react-big-calendar";

export interface MyEvent extends Event {
  title: string;
  aluno: string;
  tipo: string;
  sobre: string;
  assunto: string;
  status: string;
  _id: string;
}

export type Student = {
  _id: string;
  name: string;
  responsible: string;
  phone: string;
  email: string;
  profession: string;
  birthDate: string;
  address: string;
  number: string;
  neighborhood: string;
  state: string;
  isAdmin: boolean;
  city: string;
  createdAt: string;
  contract: number;
  status: string;
  profilePic: string;
};

export type StudentData = {
  docs: Student[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
};

export type SlotEvent = {
  start: Date;
  end: Date;
};

interface BasicCalendarProps {
  events: MyEvent[];
  fetchClasses: () => Promise<void>;
  students: Student[];
}

export type Ticket = {
  _id: string;
  aluno: string;
  quantidade: number;
  valor: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type TicketData = {
  docs: Ticket[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
};
