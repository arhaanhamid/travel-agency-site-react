const Skeleton = () => {
  return (
    <div className="px-4 text-gray-400 max-w-full mx-auto">
      <div className="h-3 bg-gray-700 animate-pulse rounded mb-4"></div>
      <div className="h-5 bg-gray-700 animate-pulse rounded mb-2"></div>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-gray-700 animate-pulse rounded-full"></div>
        <div className="flex flex-col space-y-1">
          <div className="h-3 bg-gray-700 animate-pulse rounded"></div>
          <div className="h-2 bg-gray-700 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-3 bg-gray-700 animate-pulse rounded mb-2"></div>
        <div className="h-2 bg-gray-700 animate-pulse rounded"></div>
      </div>
      <div className="text-center mt-4">
        <div className="h-2 bg-gray-700 animate-pulse rounded inline-block"></div>
      </div>
    </div>
  );
};

export default Skeleton;
