import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import Header from '../components/Header'
import ProductForm from '../components/ProductForm'

function CreateProduct() {
  const navigate = useNavigate()

  const handleCreate = async (product) => {
    console.log('Criando produto:', product) 
    try {
      await api.post('http://localhost:3001/products', product)
      
      navigate('/')
    } catch (err) {
      alert('Erro ao cadastrar produto')
      console.error(err)
    }
  }

  return (
    <div className='p-6 max-w-7xl mx-auto '>
      <div className='p-6 rounded-xl mb-8 shadow text-center'>
      <Header title="Criar Novo Produto" />
      </div>
      <ProductForm onSubmit={handleCreate} submitText="Cadastrar" />
    </div>
  )
}

export default CreateProduct
