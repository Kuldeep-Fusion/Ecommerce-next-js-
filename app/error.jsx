"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="text-red-500 text-5xl mb-4">⚠️</div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          We couldn't load the data. Please try again.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}