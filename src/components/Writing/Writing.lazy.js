import React, { lazy, Suspense } from 'react';

const LazyWriting = lazy(() => import('./Writing'));

const Writing = props => (
  <Suspense fallback={null}>
    <LazyWriting {...props} />
  </Suspense>
);

export default Writing;
