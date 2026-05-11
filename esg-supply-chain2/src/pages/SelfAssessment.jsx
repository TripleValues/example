import React from 'react';

const SelfAssessment = () => {
  const riskList = [
    { company: '(주)알루기업', type: '환경 위반(탄소 배출 초과)', area: '환경(E)', level: '고위험', status: '진행중' },
    { company: '알루알루', type: '강제노동 실사 미비', area: '사회(S)', level: '중위험', status: '미조치' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">리스크 평가 및 실사 관리</h1>
      
      {/* 리스크 지표 예시 (파일 내용 반영) [cite: 22, 23] */}
      <div className="mb-8 overflow-x-auto bg-white p-4 rounded-xl shadow-sm border border-orange-100">
        <h3 className="font-bold text-orange-700 mb-4 italic">※ 주요 알루미늄 규제 대응 지표 (CSDDD/CSRD)</h3>
        <ul className="text-xs space-y-2 text-gray-600">
          <li>• 아동·강제노동 Zero 확인 (UFLPA 대응) - <strong>Critical</strong></li>
          <li>• Scope 1+2 GHG 배출량 (탄소중립 목표) - <strong>High</strong></li>
          <li>• REACH/RoHS 유해물질 관리 현황 - <strong>High</strong></li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {riskList.map((risk, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-bold text-lg">{risk.company}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] text-white ${risk.level === '고위험' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                  {risk.level}
                </span>
              </div>
              <p className="text-sm text-gray-600">{risk.type} | {risk.area}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold block text-blue-600 mb-2">{risk.status}</span>
              <button className="bg-gray-800 text-white px-4 py-1.5 rounded-lg text-sm">실사 상세 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfAssessment;