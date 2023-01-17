import React, { lazy, Suspense } from 'react';

const LazyTravel = lazy(() => import('./Travel'));

const Travel = props => (
  <Suspense fallback={null}>
    <LazyTravel {...props} />
  </Suspense>
);

export default Travel;
