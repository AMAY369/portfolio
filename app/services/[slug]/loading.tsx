export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Navbar Placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 dark:bg-black/80 backdrop-blur-lg animate-pulse" />

      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button Skeleton */}
            <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-8 animate-pulse" />

            {/* Icon & Badge Skeleton */}
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
              <div className="flex-1">
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded-full mb-3 animate-pulse" />
                <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-3 animate-pulse" />
                <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
            </div>

            {/* Timeline Box Skeleton */}
            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 mb-12">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
              <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-6 animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
