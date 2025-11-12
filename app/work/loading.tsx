export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Navbar Placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 dark:bg-black/80 backdrop-blur-lg animate-pulse" />

      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title Skeleton */}
            <div className="h-16 w-2/3 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-8 animate-pulse" />

            {/* Stats Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="h-9 w-16 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-2 animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mx-auto animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid Skeleton */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Tabs Skeleton */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"
                />
              ))}
            </div>

            {/* Cards Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 animate-pulse" />

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
