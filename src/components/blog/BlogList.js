import React, { useState } from "react";
import BlogFilter from "./BlogFilter";
import { Link } from "react-router-dom";

import biImg1 from "../../assets/images/bi_img1.png";
import biImg2 from "../../assets/images/bi_img2.png";
import biImg3 from "../../assets/images/bi_img3.png";

const BlogList = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const blogs = [
    { id: 1, img: biImg1, category: ["Horoscope", "Astronomy"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 2, img: biImg2, category: ["Astrology"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 3, img: biImg3, category: ["Horoscope", "Festival"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 4, img: biImg1, category: ["Horoscope", "Festival"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 5, img: biImg2, category: ["Horoscope", "Festival"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 6, img: biImg3, category: ["Horoscope", "Festival"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 7, img: biImg1, category: ["Political"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 8, img: biImg2, category: ["Youtube"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 9, img: biImg3, category: ["Medical"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 10, img: biImg1, category: ["Numerology"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 11, img: biImg2, category: ["Political1"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 12, img: biImg3, category: ["Youtube1"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 13, img: biImg1, category: ["Medical1"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
    { id: 14, img: biImg2, category: ["Numerology1"], date: "MAR 21 - APR 19", title: "Journey into Vedic Astrology with KM Sinha Today" },
  ];

  const filteredBlogs =
    activeFilter === "*" ? blogs : blogs.filter((b) => b.category.includes(activeFilter));

  return (
    <>
      <BlogFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <section>
        <div className="c_details_section c_list_section space_sec">
          <div className="container">
            <div className="flex_row d-flex flex-wrap">
              {filteredBlogs.map((blog) => (
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
              ))}

              {filteredBlogs.length === 0 && (
                <div className="text-center w-100 mt-4">
                  <p>No blogs found for this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
