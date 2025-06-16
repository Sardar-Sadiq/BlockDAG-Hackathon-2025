import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./pages/MainRouter";
import { useState } from "react";
// plus your states and connect/copy logic...

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);
  const [qlkBalance, setQlkBalance] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setWalletAddress(address);
        setIsConnected(true);
        // You can fetch balances here...
      } catch (err) {
        console.error("Connection failed:", err);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const handleCopy = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Router>
      <MainRouter
        isConnected={isConnected}
        walletAddress={walletAddress}
        ethBalance={ethBalance}
        qlkBalance={qlkBalance}
        copied={copied}
        handleConnect={handleConnect}
        handleCopy={handleCopy}
      />
    </Router>
  );
}

export default App;
