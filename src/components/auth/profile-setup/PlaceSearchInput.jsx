import React, { useEffect } from "react";
import api from "../../../services/api";

export default function PlaceSearchInput({
  searchTerm,
  setSearchTerm,
  setSearchResults,
  setShowManual,
}) {
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm.length < 3) {
        setSearchResults([]);
        return;
      }

      api
        .get(`/place/searchPlace?initialLetters=${searchTerm}`)
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((err) => {
          console.error("Search error:", err);
          setSearchResults([]);
        });
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, setSearchResults]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Jab user type kar raha ho, manual form hide kar do (better UX)
    if (value.length >= 3) {
      setShowManual(false);
    }
  };

  return (
    <input
      type="text"
      className="form-control city_input"
      placeholder="Enter city name"
      name="name"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}