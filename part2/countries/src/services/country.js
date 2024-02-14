import axios from "axios";
const urlBase = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => axios.get(urlBase).then((res) => res.data);

export default { getAll };
