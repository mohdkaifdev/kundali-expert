import react from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../components/blog/BlogHeader";
import BlogBanner from "../components/blog/BlogBanner";
import BlogContent from "../components/blog/BlogContent";
import BlogSidebar from "../components/blog/BlogSidebar";
const BlogDetails = () => {
    return(
        <>
            <Helmet>
            <title>Shravana Month – Devotion to Lord Shiva | Kundali Expert</title>
            <meta name="description" content="Discover the spiritual significance of Shravana Maas – the holiest month dedicated to Lord Shiva. Learn about fasting, rituals, and divine blessings." />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            </Helmet>

            <BlogHeader/>
            <BlogBanner/>

            <section>
                <div class="bd_main_section space_sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <BlogContent/>
                            </div>
                            <div class="col-lg-4">
                                <BlogSidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              
        </>
    );
}
export default BlogDetails;