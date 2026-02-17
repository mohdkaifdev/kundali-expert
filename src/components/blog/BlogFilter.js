import React, { useEffect, useState } from "react";
import api from "../../services/api";

const BlogFilter = ({ activeFilter, onFilterChange }) => {
  const [filters, setFilters] = useState([]);

  const fetchBlogCategories = async () => {
    try {
      const response = await api.get("/v2/blog-category/get-count");
      //console.log("FULL RESPONSE 👉", response.data);
      const formattedFilters = response.data.data.map((item) => ({
        name: `${item.categoryName} (${item.blogCount})`,
        value: item.categoryId,
      }));

      setFilters(formattedFilters);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    fetchBlogCategories();
  }, []);

  return (
    <section>
      <div className="blog_section space_sec b_space_top">
        <div className="container">
          <div className="heading_sec mb-4 pb-lg-1">
            <h3 className="mrn_clr mb-0">Blog and insights</h3>
          </div>

          <div className="filters filter-button-group">
            <ul>
              {filters.map((filter) => (
                <li
                  key={filter.value}
                  className={activeFilter === filter.value ? "active" : ""}
                  onClick={() => onFilterChange(filter.value)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilter;
