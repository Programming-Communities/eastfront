'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('ErrorBoundary caught an error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}