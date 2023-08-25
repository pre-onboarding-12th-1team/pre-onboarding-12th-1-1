const TOKEN_KEY = 'access_token';

export const setToken = (value: string) => localStorage.setItem(TOKEN_KEY, value);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);
