import react from "react";
import blogImage from "../../assets/images/about_banner.png";
import Blog from "../../pages/Blog";

const BlogBanner = () => {
    return(
        <>
            <section>
                <div className="bd_banner_section">
                    <div className="container">
                        <img src={blogImage} alt="img" className="w-100"/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BlogBanner;