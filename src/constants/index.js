const base_url = 'http://www.omdbapi.com/';
const api_key = 'd7fabd6e';

export const getApiUrl = nombre => `${base_url}?apikey=${api_key}&t=${nombre}`;
export const cleanText = texto => !texto || texto === "N/A" ? "Sin informacion" : texto;