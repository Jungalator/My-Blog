export const setItemLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getItemLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeItemLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
