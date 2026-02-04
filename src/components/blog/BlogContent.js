const BlogContent = ({ blog }) => {
  if (!blog) return null;
  const createMarkup = () => {
    return { __html: blog.content || "" };
  };
  return (
    <>
      <div className="bd_content_sec pe-lg-4">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </>
  );
};
export default BlogContent;
