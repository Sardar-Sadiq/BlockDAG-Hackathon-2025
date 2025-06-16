import { Wallet, Shield, Send } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Secure', desc: 'Bank-grade security' },
  { icon: Send, title: 'Gasless', desc: 'Zero transaction fees' },
  { icon: Wallet, title: 'Simple', desc: 'Easy to use interface' },
];

const Features = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
          <f.icon className="text-blue-600 mb-2" size={24} />
          <h3 className="font-semibold text-gray-900">{f.title}</h3>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
