import React from "react";

export default function PlaceSearchResults({ results, onSelect }) {
  return (
    <div className="mt-3" style={{ maxHeight: "300px", overflowY: "auto" }}>
      {results.map((place) => (
        <button
          key={place.id}
          type="button"
          className="d-block w-100 text-start py-3 px-4 border-bottom hover:bg-gray-100 transition"
          onClick={() => onSelect(place)}
        >
          {place.name}
        </button>
      ))}
    </div>
  );
}