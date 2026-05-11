import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, CheckCircle, BellRing } from 'lucide-react';

const data = [
  { name: 'Jan', score: 72 },
  { name: 'Feb', score: 75 },
  { name: 'Mar', score: 78 },
  { name: 'Apr', score: 76 },
  { name: 'May', score: 82 },
  { name: 'Jun', score: 85 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
          <p className="text-gray-500">Global ESG performance across the supply chain</p>
        </div>
        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <span>Download Report</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard title="Overall ESG Score" value="85 / 100" trend="+3.2%" icon={<TrendingUp className="text-primary h-6 w-6" />} color="bg-emerald-100" />
        <KpiCard title="Active Suppliers" value="1,248" trend="+12" icon={<CheckCircle className="text-blue-500 h-6 w-6" />} color="bg-blue-100" />
        <KpiCard title="High Risk Flags" value="4" trend="-2" icon={<AlertCircle className="text-red-500 h-6 w-6" />} color="bg-red-100" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Average ESG Score Trend</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="score" stroke="var(--color-esg-primary)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Announcements */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center space-x-2 mb-4">
            <BellRing className="text-accent h-5 w-5" />
            <h3 className="text-lg font-semibold text-gray-800">AI Live Alerts (Kafka Stream)</h3>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2">
            <AlertItem 
              type="warning" 
              title="Carbon Emission Spike Detected" 
              desc="Supplier 'TechCorp V' reported a 15% unexpected increase in Scope 2 emissions." 
              time="10 mins ago" 
            />
            <AlertItem 
              type="success" 
              title="Data Contract Verified" 
              desc="86 suppliers successfully passed the automated data contract schema check." 
              time="1 hour ago" 
            />
            <AlertItem 
              type="info" 
              title="AI Insight Generated" 
              desc="New regulatory risk regarding European Supply Chain Act identified for 3 vendors." 
              time="3 hours ago" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const KpiCard = ({ title, value, trend, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <div className="flex items-baseline space-x-2">
        <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
        <span className="text-xs font-semibold text-primary">{trend}</span>
      </div>
    </div>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
      {icon}
    </div>
  </div>
);

const AlertItem = ({ type, title, desc, time }) => {
  const bg = type === 'warning' ? 'bg-orange-50 border-orange-100' : type === 'success' ? 'bg-emerald-50 border-emerald-100' : 'bg-blue-50 border-blue-100';
  const dot = type === 'warning' ? 'bg-orange-500' : type === 'success' ? 'bg-emerald-500' : 'bg-blue-500';
  return (
    <div className={`p-4 rounded-xl border ${bg}`}>
      <div className="flex items-center space-x-2 mb-1">
        <div className={`w-2 h-2 rounded-full ${dot}`}></div>
        <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
      </div>
      <p className="text-xs text-gray-600 mb-2">{desc}</p>
      <p className="text-[10px] text-gray-400 font-medium">{time}</p>
    </div>
  );
};

export default Dashboard;
