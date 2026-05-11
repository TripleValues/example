import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import Suppliers from './pages/Suppliers';
import AiInsights from './pages/AiInsights';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="map" element={<Map />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="ai-insights" element={<AiInsights />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
