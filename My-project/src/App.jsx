import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import RecoveryModal from './components/RecoveryModal';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [walletAddress] = useState('0x742d35Cc5F6c7E42C66f...8934A2');
  const [ethBalance] = useState('2.34');
  const [qlkBalance] = useState('1,247.50');
  const [copied, setCopied] = useState(false);

  const handleConnect = () => setTimeout(() => setIsConnected(true), 1000);
  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {isConnected ? (
        <Dashboard
          walletAddress={walletAddress}
          ethBalance={ethBalance}
          qlkBalance={qlkBalance}
          onCopy={handleCopy}
          copied={copied}
        />
      ) : (
        <LandingPage onConnect={handleConnect} onRecover={() => setShowRecoveryModal(true)} />
      )}
      {showRecoveryModal && <RecoveryModal onClose={() => setShowRecoveryModal(false)} />}
    </>
  );
};

export default App;
