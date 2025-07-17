import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-xl font-bold text-indigo-600">Admin Panel</div>
        <nav className="space-y-2 p-4 text-gray-700">
          <a href="/dashboard" className="block px-4 py-2 rounded hover:bg-indigo-50">📊 Dashboard</a>
          <a href="/orders" className="block px-4 py-2 rounded hover:bg-indigo-50">🛒 Orders</a>
          <a href="/products" className="block px-4 py-2 rounded hover:bg-indigo-50">📦 Products</a>
          <a href="/users" className="block px-4 py-2 rounded hover:bg-indigo-50">👤 Users</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
