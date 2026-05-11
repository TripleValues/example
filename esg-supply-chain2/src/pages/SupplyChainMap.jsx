import React from 'react';
import { Search } from 'lucide-react';

const SupplyChainMap = () => {
  // 알루미늄 공급망 단계 예시 [cite: 20]
  const tiers = ['3차 (채굴)', '2차 (제련)', '1차 (정련)', '원청사 (가공)'];
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">공급망 맵 (Tree)</h1>
        <div className="relative w-64">
          <input type="text" placeholder="품목 검색..." className="w-full border rounded-lg px-4 py-2" />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="flex justify-around items-start border p-10 bg-white rounded-2xl min-h-[500px]">
        {tiers.map((tier, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-8">
            <div className="bg-gray-200 px-4 py-1 rounded-full text-xs font-bold">{tier}</div>
            {/* 노드 예시 [cite: 4, 13] */}
            <div className="w-32 h-20 border-2 border-red-500 rounded-lg flex flex-col items-center justify-center bg-red-50 cursor-pointer hover:shadow-md">
              <span className="text-sm font-bold">알루기업</span>
              <span className="text-xs text-red-600">고위험</span>
            </div>
            <div className="w-32 h-20 border-2 border-green-500 rounded-lg flex flex-col items-center justify-center bg-green-50 cursor-pointer">
              <span className="text-sm font-bold">협력사 A</span>
              <span className="text-xs text-green-600">저위험</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* 기업 노드 클릭 시 상세 (Popover 형태 가제) */}
      <div className="mt-8 p-4 bg-white border rounded-lg w-full max-w-md shadow-lg">
        <h4 className="font-bold border-b pb-2 mb-2">(주)알루기업 ESG 점수</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span>환경(E): 45점</span>
          <span>사회(S): 55점</span>
          <span>지배구조(G): 70점</span>
          <span className="font-bold text-blue-600">총점: 56점</span>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainMap;