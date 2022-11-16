import React from "react";
import { Label, TextInput } from "flowbite-react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <>
      <div className="bg-[url('./assets/nude.png')] bg-cover">
        <div className="searchbar">
          <label
            htmlFor="search"
            className="text-8xl text-center font-bold tracking-tight text-gray-900 pb-6"
          >
            Search Resources:
          </label>
          <input
            className="opacity-50"
            type="text"
            id="search"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
