import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h2 className="text-4xl font-bold text-secondary-dark mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
