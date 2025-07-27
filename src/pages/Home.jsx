import { useProducts } from '../hooks/useProducts'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import { toast } from 'react-toastify'

function Home() {
  const { products, loading, error, deleteProduct } = useProducts()

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id)
      toast.success('Produto excluído com sucesso!')
    } catch {
      toast.error('Erro ao excluir produto')
    }
  }

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className=" p-6 rounded-xl mb-8 shadow text-center">
        <Header title="Lista de Produtos" />
        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
        >
          + Adicionar Produto
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
