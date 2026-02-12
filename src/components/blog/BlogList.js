import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import BlogFilter from "./BlogFilter";
import { scrollToTop } from "../../utils/dateFormat";
import api from "../../services/api";

const BlogList = () => {
  // 🔹 FILTER & DATA
  const [activeFilter, setActiveFilter] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("check git"); // 🔹 PAGINATION STATES
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  // 🔹 API CALL (SAME STYLE)
  const fetchBlogs = useCallback(
    async (categoryId, pageNo = 0, size = pageSize) => {
      try {
        setLoading(true);

        const params = {
          categoryId: categoryId === 1 ? "" : categoryId,
          page: pageNo,
          size: size,
          searchKeyword: "",
        };

        const response = await api.get("v2/web-blog/get-list", { params });
        const data = response.data?.data;

        setBlogs(data?.blogs || []);
        setTotalPages(data?.pagination?.totalPages || 0);
        setTotalElements(data?.pagination?.totalElements || 0);
      } catch (error) {
        console.error("Blog fetch error:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    },
    [pageSize],
  );

  // 🔹 INITIAL LOAD
  useEffect(() => {
    setPage(0);
    fetchBlogs(activeFilter, 0, pageSize);
  }, [activeFilter, pageSize, fetchBlogs]);

  // 🔹 CATEGORY CHANGE
  const handleFilterChange = (categoryId) => {
    setActiveFilter(categoryId);
    setPage(0);
    fetchBlogs(categoryId, 0, pageSize);
  };

  // 🔹 PAGE SIZE CHANGE
  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    setPage(0);
    fetchBlogs(activeFilter, 0, newSize);
    scrollToTop();
  };

  // 🔹 PAGINATION HANDLERS
  const handleFirst = () => {
    if (page !== 0) {
      setPage(0);
      fetchBlogs(activeFilter, 0, pageSize);
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      const newPage = page - 1;
      setPage(newPage);
      fetchBlogs(activeFilter, newPage, pageSize);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      const newPage = page + 1;
      setPage(newPage);
      fetchBlogs(activeFilter, newPage, pageSize);
      scrollToTop();
    }
  };

  const handleLast = () => {
    const lastPage = totalPages - 1;
    if (page !== lastPage) {
      setPage(lastPage);
      fetchBlogs(activeFilter, lastPage, pageSize);
      scrollToTop();
    }
  };

  return (
    <>
      {/* 🔹 FILTER */}
      <BlogFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* 🔹 BLOG LIST */}
      <section>
        <div className="c_details_section c_list_section space_sec">
          <div className="container">
            <div className="flex_row d-flex flex-wrap">
              {/* {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className={`content grid ${blog.category.join(" ")}`}
                >
                  <div className={`single-content ${blog.category.join(" ")} grid-item`}>
                    <div className="bi_box mb-4">
                      <span>
                        <img src={blog.img} alt="img" className="w-100" />
                      </span>
                      <div className="bi_caption">
                        <p>{blog.date}</p>
                        <h4>
                          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}

              {/* EMPTY */}
              {!loading && blogs.length === 0 && (
                <div className="text-center w-100 mt-5">
                  <p>No blogs found for this category.</p>
                </div>
              )}

              {/* BLOG CARDS */}
              {!loading &&
                blogs.map((blog) => (
                  <div className="content grid" key={blog.id}>
                    <div className="single-content grid-item">
                      <div className="bi_box mb-4">
                        <span>
                          <img
                            src={
                              blog.mainBlogImage
                                ? `https://api.kundaliexpert.com/kmAstroapp/api/v1/${blog.mainBlogImage}`
                                : "/images/bi_img1.png"
                            }
                            alt={blog.title}
                            className="w-100"
                            loading="lazy"
                          />
                        </span>
                        <div className="bi_caption">
                          <p>{blog.createdOn}</p>
                          <h4>
                            <Link to={`/blogs/${blog.urlSlug}`}>
                              {blog.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* 🔹 PAGINATION (DESIGN SAME) */}
            {totalElements > 0 && (
              <div className="align-items-center justify-content-end mt-3 flex-wrap row">
                <div className="d-flex align-items-center flex-wrap gap-3 col-auto">
                  {/* PAGE SIZE */}
                  <div className="d-flex align-items-center">
                    <span className="me-2" style={{ color: "#000" }}>
                      Blogs per page:
                    </span>
                    <div className="position-relative">
                      <select
                        className="custom-dropdown form-select pe-5"
                        style={{ appearance: "none", width: "80px" }}
                        value={pageSize}
                        onChange={handlePageSizeChange}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                  </div>

                  {/* INFO + CONTROLS */}
                  <div className="d-flex align-items-center">
                    <span className="me-3" style={{ color: "#000" }}>
                      {page * pageSize + 1}-
                      {Math.min((page + 1) * pageSize, totalElements)} of{" "}
                      {totalElements}
                    </span>

                    <ul className="mb-0 pagination">
                      <li
                        className={`page-item ${page === 0 ? "disabled" : ""}`}
                      >
                        <button className="page-link" onClick={handleFirst}>
                          «
                        </button>
                      </li>

                      <li
                        className={`page-item ${page === 0 ? "disabled" : ""}`}
                      >
                        <button className="page-link" onClick={handlePrev}>
                          ‹
                        </button>
                      </li>

                      <li
                        className={`page-item ${
                          page === totalPages - 1 ? "disabled" : ""
                        }`}
                      >
                        <button className="page-link" onClick={handleNext}>
                          ›
                        </button>
                      </li>

                      <li
                        className={`page-item ${
                          page === totalPages - 1 ? "disabled" : ""
                        }`}
                      >
                        <button className="page-link" onClick={handleLast}>
                          »
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
