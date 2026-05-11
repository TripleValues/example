import React, { useState } from 'react';
import { Send, Upload, BrainCircuit, FileText } from 'lucide-react';

const AiInsights = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I am your Fine-tuned ESG Risk Analyst Agent. Upload a supplier report or ask me a question about our supply chain data.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if(!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }, { role: 'ai', content: 'Analyzing ESG factors... Based on recent data streams, Alpha Electronics shows a 12% reduction in water usage compared to Q1.' }]);
    setInput('');
  };

  return (
    <div className="h-full flex space-x-6">
      
      {/* Document Analysis Section */}
      <div className="w-1/3 flex flex-col space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Unstructured Data Analysis</h2>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col items-center justify-center border-dashed border-2 border-gray-300">
          <Upload className="w-10 h-10 text-gray-400 mb-3" />
          <p className="text-sm font-medium text-gray-600 mb-1">Upload Sustainability Report PDF</p>
          <p className="text-xs text-gray-400 mb-4">AI will extract ESG metrics automatically</p>
          <button className="bg-primary-light text-primary-dark px-4 py-2 rounded-lg text-sm font-semibold">Select File</button>
        </div>
        
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 flex items-center space-x-2 mb-3">
            <FileText className="w-4 h-4 text-primary" />
            <span>Recent Extractions</span>
          </h3>
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 rounded-lg text-sm">
              <p className="font-medium">2026_GlobalLogistics_CSR.pdf</p>
              <p className="text-xs text-emerald-600 mt-1">Status: Processed (Score: 82/100)</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg text-sm">
              <p className="font-medium">MineCore_Audit_Report.docx</p>
              <p className="text-xs text-red-600 mt-1">Status: Processed (Child Labor Risk Flagged)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversational UI */}
      <div className="w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center space-x-3">
          <div className="bg-primary p-2 rounded-full text-white">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">ESG AI Agent</h3>
            <p className="text-xs text-gray-500">Powered by Fine-tuned LLM</p>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-bg-base/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] p-3 rounded-xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none shadow-sm'}`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="relative flex items-center">
            <input 
              type="text" 
              className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              placeholder="Ask about supply chain risks, specific suppliers, or data anomalies..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AiInsights;
