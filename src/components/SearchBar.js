import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = async (term) => {
    const result = await onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} type="text" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
