import React, { lazy, Suspense } from 'react';

const LazyBlogPost = lazy(() => import('./BlogPost'));

const BlogPost = props => (
  <Suspense fallback={null}>
    <LazyBlogPost {...props} />
  </Suspense>
);

export default BlogPost;
