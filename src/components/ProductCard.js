function ProductCard({ product, onBack }) {
  return (
    <div className="product-card">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <h2>{product.name}</h2>
      <p className="brand">{product.brand}</p>

      <div className="location-grid">
        <div className="loc-item"><span>📍 Section</span><strong>{product.section}</strong></div>
        <div className="loc-item"><span>🧭 Aisle</span><strong>{product.aisle}</strong></div>
        <div className="loc-item"><span>🗄️ Type</span><strong>{product.locationType}</strong></div>
        <div className="loc-item"><span>📚 Shelf No.</span><strong>{product.shelfNo}</strong></div>
        <div className="loc-item"><span>⬆️ Row</span><strong>{product.row}</strong></div>
        <div className="loc-item"><span>📦 Slot</span><strong>{product.slot}</strong></div>
      </div>

      <div className="hint">
        💡 Look for <strong>Aisle {product.aisle}</strong>, go to <strong>Shelf {product.shelfNo}</strong>, check the <strong>{product.row}</strong> row.
      </div>
    </div>
  );
}

export default ProductCard;