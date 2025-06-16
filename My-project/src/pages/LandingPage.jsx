
import Hero from '../components/Hero';
import Features from '../components/Features';
import Header from '../components/Header';

const LandingPage = ({ onConnect, onRecover }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
    <Header connected={false} />
    <div className="flex-1 flex items-center justify-center p-6">
      <Hero onConnect={onConnect} onRecover={onRecover} />
    </div>
    <Features />
  </div>
);

export default LandingPage;
