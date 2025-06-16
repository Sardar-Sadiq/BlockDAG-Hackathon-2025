import React from 'react';
import { Wallet, Copy, CheckCircle } from 'lucide-react';

const WalletInfo = ({ walletAddress, copied, onCopy }) => {
  console.log("Wallet Address Prop:", walletAddress);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Wallet Address</h2>
        <Wallet className="text-blue-600" size={20} />
      </div>

      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
        <code className="flex-1 text-sm font-mono text-gray-700 truncate">
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "No Wallet Connected"}

        </code>
        <button
          onClick={onCopy}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          {copied ? (
            <CheckCircle className="text-green-600" size={18} />
          ) : (
            <Copy className="text-gray-600" size={18} />
          )}
        </button>
      </div>
    </div>
    
  );
};

export default WalletInfo;
