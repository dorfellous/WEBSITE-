export default function QuantitySelector({ value, onChange }) {
  return (
    <div className="quantity-control" aria-label="Quantity selector">
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity">
        -
      </button>
      <span aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} aria-label="Increase quantity">
        +
      </button>
    </div>
  )
}
