import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import BlogHeader from "../components/blog/BlogHeader";
import BlogBanner from "../components/blog/BlogBanner";
import BlogContent from "../components/blog/BlogContent";
//import BlogSidebar from "../components/blog/BlogSidebar";
import api from "../services/api";
const BlogDetails = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    console.log(slug);
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/get?title=${slug}`);
        const data = response.data?.data;
        setBlog(data);
        console.log("BLOG DETAILS RESPONSE 👉", data);
      } catch (error) {
        console.error("Blog fetch error", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p className="text-center mt-5">Loading blog...</p>;
  }

  if (!blog) {
    return <p className="text-center mt-5">Blog not found.</p>;
  }

  const mainImage = blog?.mainBlogImage
    ? `https://api.kundaliexpert.com/kmAstroapp/api/v1/${blog.mainBlogImage}`
    : null;

  const title = blog?.title;
  const dayAndDate = blog?.createdOn;
  const content = blog?.content;

  return (
    <>
      <Helmet>
        <title>{blog.metadataTitle || "Blog Post | Kundali Expert"}</title>
        <meta
          name="description"
          content={
            blog.metaData ||
            blog.metadataTitle ||
            "Read the latest astrology insights"
          }
        />
        {mainImage && <meta property="og:image" content={mainImage} />}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {title && <BlogHeader title={title} dayAndDate={dayAndDate} />}

      {mainImage && (
        <BlogBanner imageSrc={mainImage} alt={blog.title} title={blog.title} />
      )}

      <section>
        <div className="bd_main_section space_sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {loading ? (
                  <div className="loading-container text-center py-5">
                    <div className="spinner"></div>
                    <p className="mt-3 text-gray-600">
                      Loading blogs, please wait...
                    </p>
                  </div>
                ) : (
                  <>
                    {content ? (
                      <BlogContent blog={blog} />
                    ) : (
                      <div className="text-center py-4">
                        <p>No content available</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Uncomment when you want sidebar back 
        <div className="col-lg-4">
          <BlogSidebar />
        </div>
        */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogDetails;
