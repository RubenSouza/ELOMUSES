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

export const getAllTickets = async () => {
  try {
    const response = await axios.get(`${URL}/tickets`, config);
    return response.data.docs;
  } catch (error) {
    throw new Error("Erro ao buscar tickets");
  }
};

export const getPendingTickets = async (
  page: string,
  search: string,
  sort: string
) => {
  try {
    const response = await axios.get(
      `${URL}/tickets/pending?page=${page}&search=${search}&sort=${sort}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar tickets pendentes");
  }
};

export const getConfirmedTickets = async (
  page: string,
  search: string,
  sort: string
) => {
  try {
    const response = await axios.get(
      `${URL}/tickets/confirmed?page=${page}&search=${search}&sort=${sort}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar tickets confirmados");
  }
};

export const getCancelledTickets = async (
  page: string,
  search: string,
  sort: string
) => {
  try {
    const response = await axios.get(
      `${URL}/tickets/cancelled?page=${page}&search=${search}&sort=${sort}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar tickets cancelados");
  }
};

export const getTotalCancelledTickets = async (search: string) => {
  try {
    const response = await axios.get(
      `${URL}/tickets/cancelled/total?search=${search}`,
      config
    );
    return response.data.totalTickets;
  } catch (error) {
    throw new Error("Erro ao buscar total de tickets cancelados");
  }
};

export const getTotalConfirmedTickets = async (search: string) => {
  try {
    const response = await axios.get(
      `${URL}/tickets/confirmed/total?search=${search}`,
      config
    );
    return response.data.totalTickets;
  } catch (error) {
    throw new Error("Erro ao buscar total de tickets confirmados");
  }
};

export const getTotalPendingTickets = async (search: string) => {
  try {
    const response = await axios.get(
      `${URL}/tickets/pending/total?search=${search}`,
      config
    );
    return response.data.totalTickets;
  } catch (error) {
    throw new Error("Erro ao buscar total de tickets pendentes");
  }
};

export const updateTicket = async (id: string, status: string) => {
  try {
    const response = await axios.put(
      `${URL}/tickets/${id}`,
      { status },
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualizar ticket");
  }
};

export const deleteTicket = async (id: string) => {
  try {
    const response = await axios.delete(`${URL}/tickets/${id}`, config);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao deletar ticket");
  }
};
