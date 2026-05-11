import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { LayoutDashboard, Network, ShieldCheck, ClipboardCheck, FileSpreadsheet, Menu } from 'lucide-react';

// 이전에 작성된 페이지 컴포넌트들을 import 한다고 가정합니다.
import MainDashboard from './pages/MainDashboard.jsx';
import SupplyChainMap from './pages/SupplyChainMap.jsx';
import DataContract from './pages/DataContract.jsx';
import SelfAssessment from './pages/SelfAssessment.jsx';
import DueDiligenceReport from './pages/DueDiligenceReport.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* 사이드바 네비게이션 */}
        <nav className="sidebar">
          <div className="sidebar-header">
            <h2 className="logo-text">Alu-ESG <span>Platform</span></h2>
          </div>
          
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                <LayoutDashboard size={20} />
                <span>메인 대시보드</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/map" className={({ isActive }) => isActive ? "active" : ""}>
                <Network size={20} />
                <span>공급망 맵 (Tree)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contract" className={({ isActive }) => isActive ? "active" : ""}>
                <ShieldCheck size={20} />
                <span>Data Contract 관리</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/assessment" className={({ isActive }) => isActive ? "active" : ""}>
                <ClipboardCheck size={20} />
                <span>리스크 평가·실사</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/report" className={({ isActive }) => isActive ? "active" : ""}>
                <FileSpreadsheet size={20} />
                <span>실사 보고서 작성</span>
              </NavLink>
            </li>
          </ul>

          <div className="sidebar-footer">
            <p>© 2026 ESG Supply Chain Project</p>
          </div>
        </nav>

        {/* 메인 콘텐츠 영역 */}
        <main className="content-area">
          <header className="top-header">
            <div className="search-bar">
              <input type="text" placeholder="협력사 또는 지표 검색..." />
            </div>
            <div className="user-profile">
              <span className="user-role">ESG 마스터 관리자</span>
              <div className="avatar">AD</div>
            </div>
          </header>

          <div className="page-container">
            <Routes>
              <Route path="/" element={<MainDashboard />} />
              <Route path="/map" element={<SupplyChainMap />} />
              <Route path="/contract" element={<DataContract />} />
              <Route path="/assessment" element={<SelfAssessment />} />
              <Route path="/report" element={<DueDiligenceReport />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;