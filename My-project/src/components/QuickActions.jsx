import React from 'react';
import { Send, ArrowRight, CheckCircle } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>

      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3">
        <Send size={24} />
        Send Token (Gasless)
        <ArrowRight size={20} />
      </button>

      <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" size={16} />
          <span className="text-sm font-medium text-blue-800">Gasless Transactions Enabled</span>
        </div>
        <p className="text-xs text-blue-600">
          Send tokens without paying gas fees using our meta-transaction technology
        </p>
      </div>
    </div>
  );
};

export default QuickActions;
