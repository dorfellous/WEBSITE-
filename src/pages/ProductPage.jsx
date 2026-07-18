import { Link, Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import QuantitySelector from '../components/QuantitySelector.jsx'
import { categories, getProductBySlug } from '../data/products.js'

export default function ProductPage() {
  const { slug } = useParams()
  const [quantity, setQuantity] = useState(1)
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/" replace />
  }

  const isSoldOut = product.availability.toLowerCase().includes('sold')

  return (
    <article className="product-page">
      <Link className="back-link" to={`/${product.category}`}>
        BACK TO {categories[product.category]}
      </Link>

      <div className="product-gallery" aria-label={`${product.name} image gallery`}>
        {product.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${product.name} gallery image ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <section className="product-detail" aria-labelledby="product-title">
        <p className="category-label">{categories[product.category]}</p>
        <h1 id="product-title">{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="detail-block">
          <h2>MATERIAL / DETAILS</h2>
          <ul>
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block">
          <h2>AVAILABILITY</h2>
          <p>{product.availability}</p>
        </div>

        <QuantitySelector value={quantity} onChange={setQuantity} />

        <button className="add-to-cart" type="button" disabled={isSoldOut}>
          {isSoldOut ? 'SOLD OUT' : 'ADD TO CART'}
        </button>
      </section>
    </article>
  )
}
