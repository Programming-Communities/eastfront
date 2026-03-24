export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          {/* Logo skeleton */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gray-800 mb-8 animate-pulse" />
          
          {/* Title skeleton */}
          <div className="h-12 bg-gray-800 rounded-lg max-w-2xl mx-auto mb-6 animate-pulse" />
          
          {/* Subtitle skeleton */}
          <div className="h-6 bg-gray-800 rounded max-w-3xl mx-auto mb-12 animate-pulse" />
          
          {/* Button skeletons */}
          <div className="flex gap-4 justify-center mb-16">
            <div className="h-12 bg-gray-800 rounded-xl w-40 animate-pulse" />
            <div className="h-12 bg-gray-800 rounded-xl w-40 animate-pulse" />
          </div>
          
          {/* Features skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-gray-800/50 rounded-2xl border border-white/5">
                <div className="h-10 w-10 bg-gray-700 rounded-xl mb-6 animate-pulse" />
                <div className="h-6 bg-gray-700 rounded mb-4 animate-pulse" />
                <div className="h-4 bg-gray-700 rounded mb-2 animate-pulse" />
                <div className="h-4 bg-gray-700 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}