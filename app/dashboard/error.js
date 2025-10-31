"use client";

export default function Error({ error, reset }) {
  console.error("Dashboard Error:", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Something went wrong 😢</h2>
      <p className="text-gray-400 mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
