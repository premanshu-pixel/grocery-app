function SearchBar({ query, setQuery }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="🔍  Search product... (e.g. Colgate, Amul)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
    </div>
  );
}

export default SearchBar;