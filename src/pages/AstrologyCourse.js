import React from 'react';
import { Helmet } from 'react-helmet';
import AstrologyCourse from '../components/course/AstrologyCourse';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Kundali Expert</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        {/* Add all other links from original head */}
      </Helmet>
      <AstrologyCourse />
     
      
    </>
  );
};

export default Blog;