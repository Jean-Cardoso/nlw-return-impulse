import axios from 'axios';

// Preferir colocar o endereço IP da máquina pois localhost em dispositivos móveis não vai encontrar
export const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://192.168.1.10:3333',
});
