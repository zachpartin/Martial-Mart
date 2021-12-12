import api from './apiConfig.js'

export const getAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data
}