import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // 👈 Add custom styling

const NotFound = () => {
  return (
   <section>
        <div class="banner_space">
            <div class="container">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </div>
     </div>
    </section>
  );
};

export default NotFound;
