import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../app/context/ProductContext'
import type { Product } from '../data/products'
import { Plus, Edit, Trash2, LogOut } from 'lucide-react'

export function AdminProductsPage() {
  const { products, deleteProduct } = useProducts()
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const isAuth = localStorage.getItem('admin-auth')
    if (!isAuth) {
      navigate('/admin/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('admin-auth')
    navigate('/admin/login')
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id)
    }
  }

  const openEditModal = (product: Product) => {
    setEditingProduct(product)
    setIsAdding(false)
  }

  const openAddModal = () => {
    setIsAdding(true)
    setEditingProduct(null)
  }

  const closeModal = () => {
    setEditingProduct(null)
    setIsAdding(false)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#111111]">Admin - Products</h1>
          <div className="flex gap-4">
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 rounded-md bg-[#111111] px-4 py-2 text-white hover:bg-[#D4AF37] hover:text-[#111111]"
            >
              <Plus size={20} />
              Add Product
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-[#111111] hover:bg-gray-50"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg bg-white p-4 shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 h-48 w-full rounded object-cover"
              />
              <h3 className="mb-2 text-lg font-semibold text-[#111111]">
                {product.name}
              </h3>
              <p className="mb-2 text-[#D4AF37] font-bold">
                KES {product.price.toLocaleString()}
              </p>
              <p className="mb-2 text-sm text-gray-600 capitalize">
                {product.category}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => openEditModal(product)}
                  className="flex items-center gap-1 rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
                >
                  <Edit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex items-center gap-1 rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {(editingProduct || isAdding) && (
          <ProductModal
            product={editingProduct}
            isOpen={true}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  )
}

function ProductModal({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}) {
  const { addProduct, updateProduct } = useProducts()
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'bags' as Product['category'],
    image: '',
    description: '',
    details: [''],
    isNew: false,
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price.toString(),
        category: product.category,
        image: product.image,
        description: product.description,
        details: product.details,
        isNew: product.isNew || false,
      })
    } else {
      setFormData({
        name: '',
        price: '',
        category: 'bags',
        image: '',
        description: '',
        details: [''],
        isNew: false,
      })
    }
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const productData = {
      name: formData.name,
      price: parseInt(formData.price),
      category: formData.category,
      image: formData.image,
      description: formData.description,
      details: formData.details.filter(d => d.trim()),
      isNew: formData.isNew,
    }

    if (product) {
      updateProduct(product.id, productData)
    } else {
      addProduct(productData)
    }
    onClose()
  }

  const addDetail = () => {
    setFormData(prev => ({
      ...prev,
      details: [...prev.details, ''],
    }))
  }

  const updateDetail = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      details: prev.details.map((d, i) => (i === index ? value : d)),
    }))
  }

  const removeDetail = (index: number) => {
    setFormData(prev => ({
      ...prev,
      details: prev.details.filter((_, i) => i !== index),
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
        <h2 className="mb-4 text-2xl font-bold text-[#111111]">
          {product ? 'Edit Product' : 'Add Product'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#111111]">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, name: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111111]">
              Price
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, price: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111111]">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData(prev => ({
                  ...prev,
                  category: e.target.value as Product['category'],
                }))
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="bags">Bags</option>
              <option value="perfumes">Perfumes</option>
              <option value="gift-sets">Gift Sets</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111111]">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, image: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111111]">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, description: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111111]">
              Details
            </label>
            {formData.details.map((detail, index) => (
              <div key={index} className="mb-2 flex gap-2">
                <input
                  type="text"
                  value={detail}
                  onChange={(e) => updateDetail(index, e.target.value)}
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Detail"
                />
                <button
                  type="button"
                  onClick={() => removeDetail(index)}
                  className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addDetail}
              className="rounded bg-green-500 px-3 py-2 text-white hover:bg-green-600"
            >
              Add Detail
            </button>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isNew}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, isNew: e.target.checked }))
                }
                className="mr-2"
              />
              Mark as New
            </label>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-md bg-[#111111] px-4 py-2 text-white hover:bg-[#D4AF37] hover:text-[#111111]"
            >
              {product ? 'Update' : 'Add'} Product
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 text-[#111111] hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}