import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import Header from '../components/Header'
import ProductForm from '../components/ProductForm'

function EditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    api.get(`http://localhost:3001/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => alert('Produto não encontrado'))
  }, [id])

  const handleUpdate = async (updatedProduct) => {
    try {
      await api.put(`http://localhost:3001/products/${id}`, updatedProduct)
      navigate('/')
    } catch (err) {
      alert('Erro ao editar produto')
      console.error(err)
    }
  }

  if (!product) return <p>Carregando...</p>

  return (
    
    <div className='p-6 max-w-7xl mx-auto'>
     <div className='p-6 rounded-xl mb-8 shadow text-center'> <Header title="Editar Produto" />
      </div>
      <ProductForm
        initialData={product}
        onSubmit={handleUpdate}
        submitText="Salvar Alterações"
      />
      
    </div>
  )
}

export default EditProduct
