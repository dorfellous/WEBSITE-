import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const isSoldOut = product.availability.toLowerCase().includes('sold')
  const secondaryImage = product.images[1]

  return (
    <article className="product-card">
      <Link to={`/${product.category}/${product.slug}`} className="product-link">
        <span className="product-image-frame">
          <img
            className="product-image primary"
            src={product.images[0]}
            alt={`${product.name} primary product placeholder`}
            loading="lazy"
          />
          {secondaryImage && (
            <img
              className="product-image secondary"
              src={secondaryImage}
              alt={`${product.name} secondary product placeholder`}
              loading="lazy"
            />
          )}
          {isSoldOut && <span className="sold-out">SOLD OUT</span>}
        </span>
        <span className="product-meta">
          <span>{product.name}</span>
          <span>{product.price}</span>
        </span>
      </Link>
    </article>
  )
}
