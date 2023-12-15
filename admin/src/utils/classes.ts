import axios from "axios";

const user = localStorage.getItem("user");
const jsonUser = user ? JSON.parse(user) : null;
const accessToken = jsonUser?.accessToken.toString();

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

type Class = {
  title: string;
  aluno: string;
  tipo: string;
  sobre: string;
  assunto: string;
  start: Date;
  end: Date;
};

export const getClasses = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/v1/api/classes/schedule",
      config
    );

    const classes = response.data.allClasses.map((classItem: Class) => ({
      ...classItem,
      start: new Date(classItem.start),
      end: new Date(classItem.end),
    }));

    return classes;
  } catch (error) {
    throw new Error("Erro ao obter as aulas");
  }
};

export const createClass = async (classItem: Class) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/v1/api/classes/register",
      classItem,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar a aula");
  }
};

export const getStudents = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/v1/api/users/admin",
      config
    );
    return response.data.docs;
  } catch (error) {
    throw new Error("Erro ao buscar aluno");
  }
};
