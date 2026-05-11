import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertCircle, Download, Save, Printer } from 'lucide-react';

const DueDiligenceReport = () => {
  // CSDDD 핵심 의무 사항 기반 상태 관리
  const csdddSteps = [
    { id: 1, title: '실사정책·리스크관리 통합', status: 'completed', mapping: 'CSRD G1' },
    { id: 2, title: '부정적 영향 파악·평가', status: 'in-progress', mapping: 'CSRD S1-S4, E1-E5' },
    { id: 3, title: '예방·완화·종식 조치', status: 'pending', mapping: 'CSRD E1, S1-S4' },
    { id: 4, title: '피해구제 제공', status: 'pending', mapping: 'CSRD S1-S4' },
    { id: 5, title: '이해관계자 의견수렴', status: 'completed', mapping: 'CSRD ESRS 2' },
    { id: 6, title: '불만처리 메커니즘', status: 'completed', mapping: 'CSRD S1-S4' },
    { id: 7, title: '모니터링 및 공시', status: 'in-progress', mapping: 'CSRD ESRS 1, 2' },
    { id: 8, title: '기후전환계획 채택·이행', status: 'pending', mapping: 'CSRD E1' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">ESG 공급망 실사 보고서 (CSDDD/CSRD)</h1>
          <p className="text-sm text-gray-500 mt-1">알루미늄 공급망 규제 대응 지표 기반 자동 생성</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition shadow-sm">
            <Save size={18} /> 임시저장
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
            <Download size={18} /> PDF 내보내기
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 좌측: 실사 프로세스 체크리스트 */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-blue-600" size={20} /> 실사 이행 가이드
            </h3>
            <div className="space-y-3">
              {csdddSteps.map((step) => (
                <div 
                  key={step.id} 
                  className={`p-3 rounded-lg border flex flex-col gap-1 cursor-pointer transition ${
                    step.status === 'completed' ? 'bg-blue-50 border-blue-200' : 
                    step.status === 'in-progress' ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">{step.id}. {step.title}</span>
                    {step.status === 'completed' && <CheckCircle2 size={16} className="text-blue-500" />}
                    {step.status === 'in-progress' && <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />}
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">연계규제: {step.mapping}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 우측: 보고서 상세 작성 영역 */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 min-h-[800px]">
            {/* 보고서 헤더 */}
            <div className="text-center mb-12 border-b pb-8">
              <h2 className="text-3xl font-serif font-bold text-gray-900">2026 Supply Chain ESG Due Diligence Report</h2>
              <p className="text-gray-500 mt-2 italic">Aluminum Foil Manufacturing Chain Focus</p>
            </div>

            {/* 세부 섹션: 부정적 영향 파악 (CSDDD ②) */}
            <section className="mb-10">
              <h4 className="text-lg font-bold text-blue-800 border-l-4 border-blue-800 pl-3 mb-4">
                Section 2. 인권 및 환경 부정적 영향 파악 (CSDDD Art. 6)
              </h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  본 섹션은 알루미늄 공급망 내 **3차 협력사(채굴)** 및 **2차 협력사(제련)** 단계에서 발생 가능한 
                  강제노동(UFLPA 대응) 및 수질 오염 리스크를 지표셋 번호 1~18번 데이터를 기반으로 분석합니다[cite: 4, 30].
                </p>
              </div>
              
              {/* 지표 데이터 요약 테이블 */}
              <table className="w-full text-xs border-collapse border border-gray-200 mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">카테고리</th>
                    <th className="border p-2">핵심 지표 (Indicator)</th>
                    <th className="border p-2">실적값</th>
                    <th className="border p-2">위험도</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">인권·노동</td>
                    <td className="border p-2 text-red-600 font-semibold">신장(위구르) 지역 원산지 여부</td>
                    <td className="border p-2 text-center text-red-600 font-bold">YES (감지)</td>
                    <td className="border p-2 text-center text-red-500 font-bold uppercase">Critical</td>
                  </tr>
                  <tr>
                    <td className="border p-2">에너지·기후</td>
                    <td className="border p-2">Scope 1+2 GHG 배출량 (tCO₂e)</td>
                    <td className="border p-2 text-center">45,200</td>
                    <td className="border p-2 text-center text-yellow-600 font-bold uppercase">Medium</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* AI 기반 자동 요약 의견 */}
            <div className="mt-8 p-5 bg-indigo-50 rounded-xl border border-indigo-100">
              <h5 className="text-indigo-800 font-bold text-sm mb-2 flex items-center gap-2">
                🤖 AI Agent 보고서 가이드라인
              </h5>
              <p className="text-xs text-indigo-700 leading-normal">
                현재 (주)알루기업의 '강제노동 Zero 확인' 지표가 미제출 상태입니다. CSDDD 3조(예방 조치)에 의거하여 
                즉시 보완 요청을 발송해야 하며, 이는 CSRD S2(가치사슬 내 근로자) 공시 항목에도 영향을 미칩니다. 
                다음 실사 단계인 '예방·완화 조치 계획' 작성을 시작하시겠습니까?
              </p>
              <div className="mt-4 flex gap-2">
                <button className="text-[10px] bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">
                  보완 요청 자동 발송
                </button>
                <button className="text-[10px] bg-white border border-indigo-200 text-indigo-600 px-3 py-1 rounded">
                  조치 계획 템플릿 불러오기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueDiligenceReport;