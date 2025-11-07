import React from "react";

const BlogFilter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { name: "All Blogs (1297)", value: "*" },
    { name: "Daily Horoscope (9)", value: "Horoscope" },
    { name: "Astronomy (1)", value: "Astronomy" },
    { name: "Astrology (21)", value: "Astrology" },
    { name: "Fast & Festival (39)", value: "Festival" },
    { name: "Political (0)", value: "Political" },
    { name: "Youtube Blogs (0)", value: "Youtube" },
    { name: "Medical (0)", value: "Medical" },
    { name: "Numerology (0)", value: "Numerology" },
    { name: "Political1 (0)", value: "Political1" },
    { name: "Youtube Blogs1 (0)", value: "Youtube1" },
    { name: "Medical1 (0)", value: "Medical1" },
    { name: "Numerology1 (0)", value: "Numerology1" },
  ];

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
                  data-filter={`.${filter.value}`}
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
