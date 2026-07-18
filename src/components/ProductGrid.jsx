import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ title, products }) {
  return (
    <section className="category-page" aria-labelledby="category-title">
      <header className="category-header">
        <h1 id="category-title">{title}</h1>
        <p>{products.length} PIECES</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
