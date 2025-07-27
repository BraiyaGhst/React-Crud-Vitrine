import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductForm({ initialData = { name: '', price: '', image: '' }, onSubmit, submitText }) {
  const [name, setName] = useState(initialData.name || '')
  const [price, setPrice] = useState(initialData.price || '')
  const [image, setImage] = useState(initialData.image || '')
  const navigate = useNavigate()

  const initialDataRef = useRef(initialData)

  useEffect(() => {
    if (
      initialData.name !== initialDataRef.current.name ||
      initialData.price !== initialDataRef.current.price ||
      initialData.image !== initialDataRef.current.image
    ) {
      setName(initialData.name || '')
      setPrice(initialData.price || '')
      setImage(initialData.image || '')
      initialDataRef.current = initialData
    }
  }, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !price) {
      alert('Preencha nome e preço!')
      return
    }
    onSubmit({ name, price: parseFloat(price), image })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-6">
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Preço:
        <input
          type="number"
          step="0.01"
          placeholder='Ex 120,99'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        URL da Imagem:
        <input
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          placeholder="Cole a URL da imagem aqui"
          className="border rounded p-2 w-full"
        />
      </label>

      {image && (
        <div className="w-32 h-32 overflow-hidden rounded">
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover border rounded p-2"
          />
        </div>
      )}

      <div className="flex justify-between gap-4 mt-4">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="bg-gray-300 cursor-pointer text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}

export default ProductForm
