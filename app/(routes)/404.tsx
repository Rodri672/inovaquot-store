import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Your custom 404 page component
const Custom404 = () => {
  // Wrap the usage of useSearchParams in a Suspense boundary
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Your 404 page content */}
      {/* For example: */}
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for does not exist.</p>
      </div>
    </Suspense>
  );
};

export default Custom404;