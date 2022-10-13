export const getItemLocal = (key) => {
  const retorno = JSON.parse(localStorage.getItem(key));
  return retorno;
};

export const setItemLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return getItemLocal(key);
};

export const removeItemLocal = (key) => {
  localStorage.removeItem(key);
};

export const setSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
  return getItemLocal(key);
};

export const getSession = (key) => {
  const retorno = JSON.parse(sessionStorage.getItem(key));
  return retorno;
};

export const removeItemSession = (key) => {
  sessionStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const getTokenAuthetication = () => {
  const userLogged = getSession("token");
  if (!userLogged) return undefined;
  const token = userLogged;
  return token;
};

export const storage = {
  getItemLocal,
  setItemLocal,
  removeItemLocal,
  setSession,
  getSession,
  removeItemSession,
  clear,
  getTokenAuthetication,
};
