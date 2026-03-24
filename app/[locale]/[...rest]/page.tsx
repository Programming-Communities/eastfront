import Link from 'next/link';
import { Home, AlertTriangle, Globe, ArrowLeft, HelpCircle, Search, RefreshCw } from 'lucide-react';
import { headers } from 'next/headers';

// ✅ Async function for server component with full SEO
export default async function CatchAllPage({ 
  params 
}: { 
  params: Promise<{ locale: string; rest: string[] }> 
}) {
  // ✅ Await the params promise
  const { locale, rest = [] } = await params;
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  
  // ✅ Provide fallback if locale is undefined
  const currentLocale = locale || 'en';
  const requestedPath = rest.join('/') || 'unknown-page';
  const fullPath = `/${currentLocale}/${requestedPath}`;

  // ✅ Generate helpful suggestions based on path
  const suggestions = [
    { name: 'Home', path: `/${currentLocale}`, icon: Home },
    { name: 'About Us', path: `/${currentLocale}/about`, icon: HelpCircle },
    { name: 'Books Library', path: `/${currentLocale}/books`, icon: Search },
    { name: 'WhatsApp Groups', path: `/${currentLocale}/whatsapp`, icon: RefreshCw },
    { name: 'News & Updates', path: `/${currentLocale}/news`, icon: Globe },
    { name: 'Contact Us', path: `/${currentLocale}/contact`, icon: ArrowLeft },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black to-gray-900 text-white">
      <div className="text-center p-8 max-w-2xl">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-400">404 - Page Not Found</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Page Does Not Exist
          </span>
        </h1>
        
        {/* Description */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-mono">
              {fullPath}
            </span>
          </div>
          <p className="text-gray-300 text-lg">
            The page you requested doesn't exist in the {currentLocale.toUpperCase()} version of our site.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Please check the URL or navigate to one of the pages below.
          </p>
        </div>

        {/* Suggestions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {suggestions.map((suggestion) => (
            <Link
              key={suggestion.name}
              href={suggestion.path}
              className="group flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-300 text-sm font-medium text-gray-300 hover:text-white"
            >
              <suggestion.icon className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
              <span>{suggestion.name}</span>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={`/${currentLocale}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-xl hover:from-red-700 hover:to-orange-700 transition-all font-medium shadow-lg shadow-red-500/20"
          >
            <Home className="w-5 h-5" />
            Go to {currentLocale.toUpperCase()} Homepage
          </Link>
          
          <Link 
            href="/en"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:bg-gray-800 hover:text-white transition-all font-medium"
          >
            <Globe className="w-5 h-5" />
            Switch to English
          </Link>
        </div>

        {/* Help Text */}
        <p className="text-xs text-gray-500 mt-8">
          Need help? Contact us at info@eastfront.pk or +92 341 2786433
        </p>
      </div>
    </div>
  );
}