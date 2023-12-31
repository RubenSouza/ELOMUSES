import { useState, useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MyEvent, Student } from "../types";
import { BasicCalendar } from "../components/CalendarComponent";
import { getClasses } from "../utils/classes";
import { getAllStudents } from "../utils/students";

const CalendarPage = () => {
  const [classes, setClasses] = useState<MyEvent[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  const fetchClasses = async () => {
    try {
      const classesData = await getClasses();
      setClasses(classesData);
      const studentsData = await getAllStudents();
      setStudents(studentsData);
    } catch (error) {
      console.error("Erro ao obter as aulas:", error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="text-2x font-black w-full">
      <BasicCalendar
        events={classes}
        fetchClasses={fetchClasses}
        students={students}
      />
    </div>
  );
};

export default CalendarPage;
