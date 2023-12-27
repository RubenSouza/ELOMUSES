import axios from "axios";
const user = localStorage.getItem("user");
const jsonUser = user ? JSON.parse(user) : null;
const accessToken = jsonUser?.accessToken.toString();

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getAllStudents = async () => {
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

export const getPaginatedStudents = async (page: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/v1/api/users/admin?page=${page}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar aluno");
  }
};

export const getSearchedStudents = async (search: string, page: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/v1/api/users/admin/search?search=${search.toString()}&page=${page}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar aluno");
  }
};
