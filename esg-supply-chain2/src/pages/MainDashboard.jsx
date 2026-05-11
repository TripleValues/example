import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertTriangle, Users, BarChart3, ShieldCheck } from 'lucide-react';

const MainDashboard = () => {
  const kpiData = [
    { label: '등록 협력사 수', value: '124', icon: <Users />, color: 'bg-blue-500' },
    { label: '고위험 협력사 수', value: '12', icon: <AlertTriangle />, color: 'bg-red-500' },
    { label: '평균 ESG 점수', value: '74.5', icon: <BarChart3 />, color: 'bg-green-500' },
    { label: 'Data Contract 준수율', value: '88%', icon: <ShieldCheck />, color: 'bg-indigo-500' },
  ];

  const esgTrendData = [
    { name: '환경(E)', score: 68 },
    { name: '사회(S)', score: 72 },
    { name: '지배구조(G)', score: 85 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">공급망 서비스 메인 대시보드</h1>
      
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm flex items-center">
            <div className={`${kpi.color} p-3 rounded-lg text-white mr-4`}>{kpi.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{kpi.label}</p>
              <p className="text-xl font-bold">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ESG 영역별 점수 차트 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">ESG 영역별 점수 차트</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={esgTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Agent 최근 리스크 알림 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4 flex items-center">
            <span className="mr-2">🤖</span> 최근 리스크 알림 (AI Agent)
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 p-3 bg-red-50">
              <p className="text-sm font-bold">(주)알루기업 - 환경 위반 보고</p>
              <p className="text-xs text-gray-600">오늘 09:22 | 등급: 고위험</p>
            </div>
            <div className="border-l-4 border-yellow-500 p-3 bg-yellow-50">
              <p className="text-sm font-bold">알루알루 - 노동권 이슈 감지</p>
              <p className="text-xs text-gray-600">2일 전 11:10 | 등급: 중위험</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;