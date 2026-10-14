import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import { sampleProducts } from "./data/sampleProducts";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [products] = useState(sampleProducts);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matches = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.barcode.includes(q)
    );
    setResults(matches);
  }, [query, products]);

  return (
    <div className="app">
      <header className="header">
        <h1>🛒 Grocery Finder</h1>
      </header>

      {selected ? (
        <ProductCard product={selected} onBack={() => setSelected(null)} />
      ) : (
        <>
          <SearchBar query={query} setQuery={setQuery} />

          {query && results.length === 0 && (
            <p className="not-found">
              😕 Not found. Please ask staff at the billing counter.
            </p>
          )}

          {results.length > 0 && (
            <ul className="results">
              {results.map((p) => (
                <li key={p.id} onClick={() => setSelected(p)}>
                  <div>
                    <strong>{p.name}</strong>
                    <span className="sub">
                      {p.section} • Aisle {p.aisle}
                    </span>
                  </div>
                  <span className="arrow">→</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default App;
