import { Wallet } from 'lucide-react';

const Header = ({ connected }) => (
  <nav className="p-6 bg-white/70 backdrop-blur-sm border-b border-gray-200">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
          <Wallet className="text-white" size={24} />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          QuickLock
        </span>
      </div>
      {connected && (
        <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-green-700">Connected</span>
        </div>
      )}
    </div>
  </nav>
);

export default Header;
