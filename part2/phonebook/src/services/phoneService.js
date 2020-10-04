import axios from "axios";
const baseUrl = "http://localhost:3004/persons";

const getAll = () => {
  const response = axios.get(baseUrl);
  return response.then((req) => req.data);
};

const create = (newNumber) => {
  const response = axios.post(baseUrl, newNumber);
  return response.then((res) => res.data);
};
const deleteNumber = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`);
  return response.then((res) => res.data);
};

const changeNumber = (id, data) => {
  const response = axios.put(`${baseUrl}/${id}`, data);
  return response.then((res) => res.data);
};

export default {
  getAll,
  create,
  deleteNumber,
  changeNumber,
};
