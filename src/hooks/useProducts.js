import { useState, useEffect } from 'react'
import api from '../services/api'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get('http://localhost:3001/products')
      setProducts(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const deleteProduct = async (id) => {
    if (!window.confirm('Deseja mesmo excluir este produto?')) return
    try {
      await api.delete(`http://localhost:3001/products/${id}`)
      setProducts(prev => prev.filter(product => product.id !== id))
    } catch (err) {
      setError(err)
      throw err 
    }
  }

  return { products, loading, error, fetchProducts, deleteProduct }
}
