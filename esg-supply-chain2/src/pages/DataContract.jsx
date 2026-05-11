import React from 'react';

const DataContract = () => {
  const contracts = [
    { id: 'DC-2026-001', company: '글로벌 원자재사', tier: '3차', items: 'Bauxite', status: '활성', compliance: '100%' },
    { id: 'DC-2026-002', company: '압출 테크', tier: '1차', items: '알루미늄 바', status: '위반', compliance: '65%' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Data Contract 관리</h1>
      
      {/* 데이터 컨트랙트 정의 요약 [cite: 10, 12] */}
      <div className="bg-indigo-50 p-4 rounded-lg mb-8 text-sm text-indigo-800">
        <p><strong>💡 Data Contract란?</strong> 기업 간 데이터의 품질, 형식(LCA 방식 등), 갱신 주기를 명확히 정의한 상호 합의서입니다.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border-b">계약 ID</th>
              <th className="p-4 border-b">협력사</th>
              <th className="p-4 border-b">단계</th>
              <th className="p-4 border-b">주요 품목</th>
              <th className="p-4 border-b">상태</th>
              <th className="p-4 border-b">준수율</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-4 border-b font-mono text-sm">{c.id}</td>
                <td className="p-4 border-b font-medium">{c.company}</td>
                <td className="p-4 border-b">{c.tier}</td>
                <td className="p-4 border-b">{c.items}</td>
                <td className="p-4 border-b">
                  <span className={`px-2 py-1 rounded text-xs ${c.status === '활성' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {c.status}
                  </span>
                </td>
                <td className="p-4 border-b font-bold">{c.compliance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataContract;