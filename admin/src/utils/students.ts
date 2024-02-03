import axios from "axios";
const user = localStorage.getItem("user");
const jsonUser = user ? JSON.parse(user) : null;
const accessToken = jsonUser?.accessToken.toString();
const URL = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getAllStudents = async () => {
  try {
    const response = await axios.get(`${URL}/users/admin`, config);
    return response.data.docs;
  } catch (error) {
    throw new Error("Erro ao buscar aluno");
  }
};

export const createStudent = async (data: any) => {
  try {
    const response = await axios.post(
      `${URL}/users/admin/register`,
      data,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao criar aluno");
  }
};

export const getPaginatedStudents = async (page: string) => {
  try {
    const response = await axios.get(`${URL}/users/admin?page=${page}`, config);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar aluno");
  }
};

export const getSearchedStudents = async (search: string, page: string) => {
  try {
    const response = await axios.get(
      `${URL}/users/admin/search?search=${search.toString()}&page=${page}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar aluno");
  }
};
