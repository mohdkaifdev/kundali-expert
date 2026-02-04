import { Link } from "react-router-dom";
import { formatReadableDate } from "../../../src/utils/dateFormat";
const BlogHeader = ({ title, dayAndDate }) => {
  return (
    <>
      <section>
        <div className="blog_section bd_top_section space_sec b_space_top">
          <div className="container">
            <div className="bd_flex d-flex justify-content-between">
              <div className="heading_sec mb-4 pb-lg-1">
                <h2 className="mrn_clr mb-2">{title}</h2>
                <p className="date">{formatReadableDate(dayAndDate)}</p>
              </div>
              <div className="ss_icons bd_ss_sec mt-3">
                <p>Share</p>
                <ul className="d-flex align-items-center gap-1">
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogHeader;
