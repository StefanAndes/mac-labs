import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-brand-teal animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-b-brand-teal animate-spin animate-reverse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 