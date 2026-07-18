import { Navigate, useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { categories, getProductsByCategory } from '../data/products.js'

export default function CategoryPage() {
  const { category } = useParams()

  if (!categories[category]) {
    return <Navigate to="/" replace />
  }

  return <ProductGrid title={categories[category]} products={getProductsByCategory(category)} />
}
