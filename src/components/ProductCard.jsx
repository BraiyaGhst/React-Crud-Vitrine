import { Link } from 'react-router-dom';
import api from '../services/api'

function ProductCard({ id, name, price, image, onDelete }) {
  const handleDelete = async () => {
    try {
      await api.delete(`/products/${id}`)
      onDelete(id); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition duration-300">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-56 h-56 object-contain mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>
      <p className="text-gray-600 text-center mb-3">R$ {Number(price).toFixed(2)}</p>
      <div className="flex gap-6 mt-auto">
        <Link
          to={`/edit/${id}`}
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
        >
          Editar
        </Link>
        <button
          onClick={handleDelete}
          className="cursor-pointer bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
          aria-label={`Excluir produto ${name}`}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
