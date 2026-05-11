import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Map, Users, BrainCircuit, Leaf } from 'lucide-react';

const Layout = () => {
  return (
    <div className="flex h-screen bg-bg-base overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 flex items-center space-x-3 text-primary-dark border-b border-gray-100">
          <Leaf className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">EcoFlux ESG</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem to="/map" icon={<Map size={20} />} label="Supply Chain Map" />
          <NavItem to="/suppliers" icon={<Users size={20} />} label="Data Contract" />
          <NavItem to="/ai-insights" icon={<BrainCircuit size={20} />} label="AI Risk Insights" />
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="bg-primary-light rounded-xl p-4 text-sm text-primary-dark">
            <p className="font-semibold mb-1">AI Agent Active</p>
            <p className="text-xs opacity-80">Monitoring supply chain streams...</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-gray-800">ESG Supply Chain Control Tower</h1>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
          isActive
            ? 'bg-primary text-white font-medium shadow-md shadow-primary/20'
            : 'text-gray-600 hover:bg-primary-light hover:text-primary-dark'
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default Layout;
