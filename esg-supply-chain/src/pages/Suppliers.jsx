import React from 'react';
import { Database, CheckCircle, XCircle, AlertTriangle, Sparkles } from 'lucide-react';

const suppliers = [
  { id: 1, name: 'Alpha Electronics', type: 'Tier 1', status: 'Valid', lastSync: '10 mins ago', aiCorrection: false },
  { id: 2, name: 'MineCore Co.', type: 'Tier 2', status: 'Invalid', lastSync: '1 hour ago', aiCorrection: true },
  { id: 3, name: 'Syntho Plastics', type: 'Tier 2', status: 'Valid', lastSync: '3 hours ago', aiCorrection: false },
  { id: 4, name: 'Global Logistics', type: 'Tier 1', status: 'Warning', lastSync: '5 hours ago', aiCorrection: true },
];

const Suppliers = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Data Contract validation</h2>
          <p className="text-gray-500">Real-time Kafka stream monitoring and schema validation</p>
        </div>
        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 shadow-sm font-medium">
          <Database className="w-4 h-4" />
          <span>Manage Schema</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm">
              <th className="p-4 font-semibold">Supplier Name</th>
              <th className="p-4 font-semibold">Tier</th>
              <th className="p-4 font-semibold">Contract Status</th>
              <th className="p-4 font-semibold">AI Correction</th>
              <th className="p-4 font-semibold">Last Sync (Kafka)</th>
              <th className="p-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {suppliers.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-800">{s.name}</td>
                <td className="p-4 text-gray-600">{s.type}</td>
                <td className="p-4">
                  <div className="flex items-center space-x-1">
                    {s.status === 'Valid' ? (
                      <><CheckCircle className="w-4 h-4 text-emerald-500" /><span className="text-emerald-700 font-medium">Valid</span></>
                    ) : s.status === 'Invalid' ? (
                      <><XCircle className="w-4 h-4 text-red-500" /><span className="text-red-700 font-medium">Schema Error</span></>
                    ) : (
                      <><AlertTriangle className="w-4 h-4 text-yellow-500" /><span className="text-yellow-700 font-medium">Missing Data</span></>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  {s.aiCorrection ? (
                    <span className="inline-flex items-center space-x-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-md border border-purple-100 text-xs font-semibold">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Sugested Fix</span>
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
                <td className="p-4 text-gray-500">{s.lastSync}</td>
                <td className="p-4 text-right">
                  <button className="text-primary hover:text-primary-dark font-medium">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-primary-light/50 border border-primary-light rounded-2xl p-6 flex items-start space-x-4">
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary-dark mb-2">AI Agent Data Quality Assist</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>MineCore Co.</strong> submitted "Carbon Emission" data using 'kg' instead of the contracted 'tonnes'. 
            The AI Agent intercepted the stream, converted the values, and flagged it for your review rather than dropping the payload.
          </p>
          <div className="mt-3 flex space-x-3">
            <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm hover:shadow">Approve All AI Fixes</button>
            <button className="bg-white text-gray-700 border border-gray-200 px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50">View Diff</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
