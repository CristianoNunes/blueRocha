import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const authentication = (username, password) =>
  api.post("Security/login", { username, password });

const getProcess = (qid) => api.post("Integration/Query", { qid });

export const apiEPM = {
  authentication,
  getProcess,
};
