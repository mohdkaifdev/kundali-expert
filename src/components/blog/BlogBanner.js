const BlogBanner = ({ imageSrc, alt = "Blog banner", title = "" }) => {
  // Fallback image if no src provided (optional but recommended)
  const fallbackImage = "/images/about_banner.png"; // or any default path

  return (
    <section>
      <div className="bd_banner_section">
        <div className="container">
          <img
            src={imageSrc || fallbackImage}
            alt={alt}
            className="w-100"
            loading="lazy" // good for performance
          />
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
