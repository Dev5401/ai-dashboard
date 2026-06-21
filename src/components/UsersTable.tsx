import type { UserData } from '../data/types';
import { useTableSort } from '../hooks/useTableSort';

interface UsersTableProps {
  users: UserData[];
}

export default function UsersTable({ users }: UsersTableProps) {
  const {
    data: paginatedUsers,
    sortKey,
    sortDirection,
    currentPage,
    totalPages,
    handleSort,
    goToPage,
  } = useTableSort<UserData>(users, 'name');

  // Render sort indicator
  const renderSortIndicator = (key: keyof UserData) => {
    if (sortKey !== key) return null;
    return sortDirection === 'asc' ? ' ↑' : ' ↓';
  };

  // Status badge styling
  const getStatusColor = (status: 'active' | 'inactive') => {
    return status === 'active'
      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Users
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Click column headers to sort
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th
                onClick={() => handleSort('name')}
                className="px-6 py-3 text-left text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
              >
                Name{renderSortIndicator('name')}
              </th>
              <th
                onClick={() => handleSort('email')}
                className="px-6 py-3 text-left text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
              >
                Email{renderSortIndicator('email')}
              </th>
              <th
                onClick={() => handleSort('joinDate')}
                className="px-6 py-3 text-left text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
              >
                Join Date{renderSortIndicator('joinDate')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Status
              </th>
              <th
                onClick={() => handleSort('totalSpent')}
                className="px-6 py-3 text-right text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
              >
                Total Spent{renderSortIndicator('totalSpent')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {new Date(user.joinDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white text-right">
                  ${user.totalSpent.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {(currentPage - 1) * 5 + 1} to{' '}
          {Math.min(
            currentPage * 5,
            paginatedUsers.length + (currentPage - 1) * 5
          )}{' '}
          of {users.length} users
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
