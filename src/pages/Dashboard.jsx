const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Orders</h2>
          <p className="text-gray-500 mt-2">Manage customer orders.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Users</h2>
          <p className="text-gray-500 mt-2">View and manage registered users.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Products</h2>
          <p className="text-gray-500 mt-2">Edit product listings.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
