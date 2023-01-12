import React from 'react'
import Blog from '../Component/Blog/Blog';
import Breadcrumb from '../Component/Breadcrums';

const BlogPage = () => {
    const pageDescription=`Odio et unde deleniti. Deserunt numquam exercitationem. 
    Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum 
    debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.`;
  return (
    <div>
      <Breadcrumb title="Blog" description={pageDescription}/>
      <Blog/>
    </div>
  )
}

export default BlogPage
