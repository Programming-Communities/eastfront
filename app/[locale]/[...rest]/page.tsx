import Link from 'next/link';
import { Home, AlertTriangle, Globe } from 'lucide-react';

// ✅ Async function for server component
export default async function CatchAllPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  // ✅ Await the params promise
  const { locale } = await params;
  
  // ✅ Provide fallback if locale is undefined
  const currentLocale = locale || 'en';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="text-center p-8 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-400">404 - Page Not Found</span>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Page Does Not Exist
        </h1>
        
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <Globe className="w-4 h-4" />
            <span>Current Language: {currentLocale.toUpperCase()}</span>
          </div>
          <p className="text-gray-300">
            The page you requested doesn't exist in the {currentLocale.toUpperCase()} version of our site.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={`/${currentLocale}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Go to {currentLocale.toUpperCase()} Homepage
          </Link>
          
          <Link 
            href="/en"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Switch to English
          </Link>
        </div>
      </div>
    </div>
  );
}