import React, { lazy, Suspense } from 'react';

const LazyEssayLink = lazy(() => import('./EssayLink'));

const EssayLink = props => (
  <Suspense fallback={null}>
    <LazyEssayLink {...props} />
  </Suspense>
);

export default EssayLink;
