import React, { useState } from "react";

const SimplePagination = () => {
  const itemsPerPage = 5;

  // Dummy data
  const data = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div style={{ padding: "20px" }}>
      <h3>Simple Pagination</h3>

      {/* DATA LIST */}
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* PAGINATION */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === index + 1 ? "bold" : "normal"
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SimplePagination;
