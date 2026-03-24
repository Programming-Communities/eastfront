'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error caught:', error);
  }, [error]);

  return (
    <html lang="en" className="bg-white dark:bg-black">
      <body className="bg-white dark:bg-black transition-colors duration-200">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            {/* Error Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
              <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" aria-hidden="true" />
            </div>
            
            {/* Error Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Critical Error
            </h1>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Something went wrong!
            </h2>
            
            {/* Error Message */}
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {error.message || 'An unexpected error occurred. Please try again.'}
            </p>
            
            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && error.digest && (
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-6 font-mono break-all">
                Error ID: {error.digest}
              </p>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded-xl font-medium transition-colors"
                aria-label="Try again"
              >
                <RefreshCw className="w-5 h-5" aria-hidden="true" />
                Try again
              </button>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-medium transition-colors"
                aria-label="Go to homepage"
              >
                <Home className="w-5 h-5" aria-hidden="true" />
                Go to Homepage
              </Link>
            </div>
            
            {/* Help Text */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Need immediate assistance? Contact us at{' '}
                <a 
                  href="mailto:info@eastfront.pk" 
                  className="text-red-600 dark:text-red-400 hover:underline"
                >
                  info@eastfront.pk
                </a>
                {' '}or call{' '}
                <a 
                  href="tel:+923412786433" 
                  className="text-red-600 dark:text-red-400 hover:underline"
                >
                  +92 341 2786433
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}