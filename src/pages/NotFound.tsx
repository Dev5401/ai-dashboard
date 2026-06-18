import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        404
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Page not found</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Back to dashboard
      </Link>
    </div>
  );
}
