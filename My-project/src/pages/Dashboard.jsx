import Header from '../components/Header';
import WalletInfo from '../components/WalletInfo';
import BalanceCards from '../components/BalanceCards';
import QuickActions from '../components/QuickActions';

const Dashboard = ({ walletAddress, ethBalance, qlkBalance, onCopy, copied }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <Header connected />
    <div className="p-6 max-w-2xl mx-auto">
      <WalletInfo address={walletAddress} onCopy={onCopy} copied={copied} />
      <BalanceCards eth={ethBalance} qlk={qlkBalance} />
      <QuickActions />
    </div>
  </div>
);

export default Dashboard;
