import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then((response) => response.data);
const create = (newObj) => axios.post(baseUrl, newObj).then((response) => response.data);
const del = (id) => axios.delete(`${baseUrl}/${id}`);
// const del = (id) => console.log(`${baseUrl}/${id}`);

export default { getAll, create, del };
