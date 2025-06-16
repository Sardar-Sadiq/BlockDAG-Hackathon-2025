import { Wallet, Shield } from 'lucide-react';

const Hero = ({ onConnect, onRecover }) => (
  <div className="text-center max-w-lg">
    <div className="bg-white/70 backdrop-blur-sm p-3 rounded-2xl inline-block mb-6 shadow-lg">
      <Wallet className="text-blue-600" size={48} />
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      QuickLock <span className="text-blue-600">Wallet</span>
    </h1>
    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
      Secure, fast, and user-friendly Web3 wallet with gasless transactions and seamless DeFi integration.
    </p>
    <div className="space-y-4">
      <button onClick={onConnect} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3">
        <Wallet size={24} />
        Connect Wallet
      </button>
      <button onClick={onRecover} className="w-full bg-white/80 backdrop-blur-sm text-gray-700 py-4 px-8 rounded-xl font-semibold text-lg border border-gray-200 hover:bg-white hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
        <Shield size={24} />
        Recover Wallet
      </button>
    </div>
  </div>
);

export default Hero;
