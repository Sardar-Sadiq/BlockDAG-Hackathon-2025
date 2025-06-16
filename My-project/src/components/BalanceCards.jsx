import React from 'react';

const BalanceCards = ({ ethBalance, qlkBalance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Ethereum</h3>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">Ξ</span>
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900">{ethBalance} ETH</p>
        <p className="text-sm text-gray-600">≈ $3,127.50 USD</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">QuickLock Token</h3>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">Q</span>
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900">{qlkBalance} QLK</p>
        <p className="text-sm text-gray-600">≈ $624.50 USD</p>
      </div>
    </div>
  );
};

export default BalanceCards;
