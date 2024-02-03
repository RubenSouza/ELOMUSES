import axios from "axios";
import moment from "moment-timezone";
const user = localStorage.getItem("user");
const jsonUser = user ? JSON.parse(user) : null;
const accessToken = jsonUser?.accessToken.toString();
const URL = import.meta.env.VITE_API_URL;

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
  start: string;
  end: string;
};

export const getClasses = async () => {
  try {
    const response = await axios.get(`${URL}/classes/schedule`, config);

    const classes = response.data.allClasses.map((classItem: Class) => {
      const start = moment(classItem.start).toDate();
      const end = moment(classItem.end).toDate();

      return {
        ...classItem,
        start: start,
        end: end,
      };
    });

    return classes;
  } catch (error) {
    throw new Error("Erro ao obter as aulas");
  }
};

export const createClass = async (classItem: Class) => {
  try {
    const response = await axios.post(
      `${URL}/classes/register`,
      classItem,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar a aula");
  }
};

export const updateClass = async (classItem: Class, id: string) => {
  try {
    const response = await axios.put(`${URL}/classes/${id}`, classItem, config);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualizar a aula");
  }
};

export const deleteClass = async (id: string) => {
  try {
    const response = await axios.delete(`${URL}/classes/${id}`, config);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao deletar a aula");
  }
};
