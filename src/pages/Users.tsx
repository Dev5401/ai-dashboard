import { useDashboardData } from '../hooks/useDashboardData';
import UsersTable from '../components/UsersTable';

export default function Users() {
  const { users, loading } = useDashboardData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Users
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage and view all your users. Click column headers to sort.
        </p>
      </div>

      {/* Table */}
      <UsersTable users={users} />
    </div>
  );
}
