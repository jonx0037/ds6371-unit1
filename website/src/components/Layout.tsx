import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-800">
                  DS 6371 - Unit 1
                </Link>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link
                  to="/creativity-study"
                  className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-800"
                >
                  Creativity Study
                </Link>
                <Link
                  to="/literary-digest"
                  className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-800"
                >
                  Literary Digest
                </Link>
                <Link
                  to="/permutation-tests"
                  className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-800"
                >
                  Permutation Tests
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
