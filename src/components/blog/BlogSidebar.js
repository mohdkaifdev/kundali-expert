import react from "react";
import { Link } from "react-router-dom";
import bigImage from "../../assets/images/bi_img1.png";
const BlogSidebar = () => {
     const related = [
    {
      id: 1,
      title:
        "Nag Panchami Explained: Protection, Fertility, and Ancestral Harmony",
      date: "MAR 21 - APR 19",
      image: bigImage,
    },
    {
      id: 2,
      title:
        "The Spiritual Meaning of Ekadashi and Its Fasting Benefits",
      date: "MAY 10 - MAY 15",
      image: bigImage,
    },
    {
      id: 3,
      title: "The Science Behind Rudraksha Beads and Their Energy",
      date: "JUN 12 - JUN 18",
      image: bigImage,
    },
  ];
    return(
        <>
            <div className="bd_sidebar">
                <div className="heading_sec mb-4 pb-lg-2">
                    <h4 className="black_clr">Related blogs</h4>
                </div>
                <div className="related_blogs">
                {related.map((blog)=>(
                        <div className="bi_box mb-4" key={blog.id}>
                        <span><img src={blog.image} alt={blog.title} className="w-100"/></span>
                        <div className="bi_caption">
                            <p>{blog.date}</p>
                            <h4><Link to="#">{blog.title}</Link></h4>
                        </div>
                    </div>
                ))}
                    
                    
                </div>
            </div>
        </>
    );
}
export default BlogSidebar;