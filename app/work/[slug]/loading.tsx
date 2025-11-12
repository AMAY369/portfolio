export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Navbar Placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 dark:bg-black/80 backdrop-blur-lg animate-pulse" />

      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Back Button Skeleton */}
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-8 animate-pulse" />

            {/* Badges Skeleton */}
            <div className="flex gap-3 mb-6">
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
              <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
            </div>

            {/* Title Skeleton */}
            <div className="h-16 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-6 animate-pulse" />

            {/* Meta Info Skeleton */}
            <div className="flex gap-6 mb-8">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>

            {/* Metrics Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800"
                >
                  <div className="h-6 w-6 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
                  <div className="h-8 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-1 animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-6 animate-pulse" />
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
