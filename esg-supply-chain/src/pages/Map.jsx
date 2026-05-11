import React from 'react';
import { Search, Filter, Cpu, Truck, Factory } from 'lucide-react';

const Map = () => {
  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold text-gray-800">Supply Chain Map</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search product (e.g., EV Battery)" 
              className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Product A (EV Battery)"
            />
          </div>
        </div>
        <button className="flex items-center space-x-2 text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter Tiers</span>
        </button>
      </div>

      {/* Map Content Mockup */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        
        {/* Placeholder for Node Graph */}
        <div className="flex flex-col items-center space-y-12">
          
          {/* Tier 0 (OEM) */}
          <Node icon={<Factory />} name="Your Company" role="OEM" risk="low" />

          {/* Tier 1 */}
          <div className="flex space-x-24 relative">
            <Node icon={<Cpu />} name="Alpha Electronics" role="Tier 1 Supplier" risk="medium" />
            <Node icon={<Truck />} name="Global Logistics" role="Tier 1 Logistics" risk="low" />
            {/* connecting lines mock */}
            <svg className="absolute -top-12 left-0 w-full h-12 pointer-events-none stroke-gray-300 stroke-2" fill="none">
              <path d="M 50,48 L 150,0 M 150,0 L 250,48" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Tier 2 */}
          <div className="flex space-x-12 relative">
            <Node icon={<Factory />} name="MineCore Co." role="Tier 2 (Metals)" risk="high" />
            <Node icon={<Factory />} name="Syntho Plastics" role="Tier 2 (Parts)" risk="low" />
            <svg className="absolute -top-12 left-0 w-full h-12 pointer-events-none stroke-gray-300 stroke-2" fill="none">
              <path d="M 50,48 L 50,0 M 180,48 L 50,0" strokeDasharray="4 4" />
            </svg>
          </div>

        </div>

        {/* Legend */}
        <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col space-y-2 text-sm">
          <h4 className="font-semibold text-gray-800 mb-1">ESG Risk Legend</h4>
          <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div><span>Low Risk</span></div>
          <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-yellow-500"></div><span>Medium Risk</span></div>
          <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><span className="font-medium text-red-600">High Risk (AI Flagged)</span></div>
        </div>

      </div>
    </div>
  );
};

const Node = ({ icon, name, role, risk }) => {
  const borderColor = risk === 'high' ? 'border-red-500' : risk === 'medium' ? 'border-yellow-500' : 'border-emerald-500';
  const shadowColor = risk === 'high' ? 'shadow-red-200' : risk === 'medium' ? 'shadow-yellow-200' : 'shadow-emerald-200';
  
  return (
    <div className={`bg-white w-48 p-4 rounded-xl border-2 ${borderColor} shadow-lg ${shadowColor} flex flex-col items-center text-center transform transition-transform hover:scale-105 cursor-pointer z-10`}>
      <div className={`p-2 rounded-full mb-2 ${risk === 'high' ? 'bg-red-100 text-red-600' : risk === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-emerald-100 text-emerald-600'}`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 text-sm whitespace-nowrap">{name}</h3>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  );
};

export default Map;
