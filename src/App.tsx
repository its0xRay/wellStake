import React from 'react';
import { Target, Heart, Trophy } from 'lucide-react';
import { Feature } from './components/Feature';
import { XLogo } from './components/XLogo';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold">wellStake</h1>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Bet on Your Health, Win Big
        </h2>
        
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Set health goals, bet on yourself, and win rewards. Or bet on others and
          share in their success. All verified by wearable tech.
        </p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <Feature icon={Target} title="Set Health Goal" />
          <Feature icon={Heart} title="Track Health Metrics" />
          <Feature icon={Trophy} title="Win Rewards" />
        </div>

        {/* X (Twitter) CTA */}
        <div className="mt-12">
          <a
            href="https://x.com/wellStake_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
          >
            <XLogo className="w-5 h-5" />
            <span>DM us at @wellStake_ for early access</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} wellStake. All rights reserved.
      </footer>
    </div>
  );
}

export default App;