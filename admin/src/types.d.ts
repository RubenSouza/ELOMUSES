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
