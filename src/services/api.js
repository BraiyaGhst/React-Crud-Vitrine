import axios from 'axios'

const api = axios.create({
  baseURL: ('https://my-json-server.typicode.com/BraiyaGhst/fake-api-crud')
})
export async function getProducts() {
  const response = await api.get('/products');
  return response.data;
}
export default api
