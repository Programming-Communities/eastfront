// ✅ SERVER COMPONENT - NO 'use client'
import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8">
        <div className="text-9xl font-bold text-red-600 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          <Home className="w-5 h-5" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}