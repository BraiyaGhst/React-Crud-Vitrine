import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from '../components/ProductCard'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'


vi.mock('../services/api', () => ({
  default: {
    delete: vi.fn()
  }
}))

import api from '../services/api'  

describe('ProductCard', () => {
  const mockOnDelete = vi.fn()

  const product = {
    id: 1,
    name: 'Mouse Gamer',
    price: 150,
    image: 'http://imagem.com/mouse.jpg'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renderiza informações do produto', () => {
    render(
      <MemoryRouter>
        <ProductCard {...product} onDelete={mockOnDelete} />
      </MemoryRouter>
    )

    expect(screen.getByText('Mouse Gamer')).toBeInTheDocument()
    expect(screen.getByText('R$ 150')).toBeInTheDocument()
    expect(screen.getByAltText('Mouse Gamer')).toHaveAttribute('src', product.image)
  })

  test('chama onDelete ao clicar no botão excluir', async () => {
    api.delete.mockResolvedValueOnce({})

    render(
      <MemoryRouter>
        <ProductCard {...product} onDelete={mockOnDelete} />
      </MemoryRouter>
    )

    const button = screen.getByRole('button', { name: /excluir produto mouse gamer/i })
    await userEvent.click(button)

    expect(api.delete).toHaveBeenCalledWith(`/products/${product.id}`)
    expect(mockOnDelete).toHaveBeenCalledWith(product.id)
  })
})
