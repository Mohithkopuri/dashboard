import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { 
  Home, 
  Briefcase, 
  TrendingUp, 
  FileText, 
  Target, 
  BookOpen, 
  Settings,
  Plus,
  ChevronDown,
  Zap,
  Eye
} from 'lucide-react';

const TradingPortfolio = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample performance data
  const performanceData = Array.from({length: 30}, (_, i) => ({
    day: i + 1,
    value: 120000 + Math.sin(i * 0.2) * 10000 + Math.random() * 5000
  }));

  // Sample risk data
  const riskData = Array.from({length: 20}, (_, i) => ({
    time: i,
    risk: 30 + Math.sin(i * 0.3) * 15 + Math.random() * 10
  }));

  const trades = [
    { symbol: 'AAPL', entry: 175.20, exit: 178.45, pnl: '+$325', status: 'Closed' },
    { symbol: 'TSLA', entry: 245.80, exit: 241.20, pnl: '-$460', status: 'Closed' },
    { symbol: 'MSFT', entry: 378.90, exit: null, pnl: '+$124', status: 'Open' },
    { symbol: 'GOOGL', entry: 142.30, exit: null, pnl: '-$89', status: 'Open' },
    { symbol: 'AMZN', entry: 156.70, exit: 159.20, pnl: '+$250', status: 'Closed' }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Briefcase, label: 'Portfolio', active: false },
    { icon: TrendingUp, label: 'Trading', active: false },
    { icon: FileText, label: 'Reports', active: false },
    { icon: Target, label: 'Strategies', active: false },
    { icon: BookOpen, label: 'Learning Hub', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900/80 backdrop-blur-xl border-r border-gray-700/50 p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Eye className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            3RD EYE
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                item.active 
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Good morning, Trader!</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-400">Market Status:</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">OPEN</span>
                <span className="text-gray-400">• {currentTime.toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Portfolio Value */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-400 text-sm">Portfolio Value</div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <TrendingUp size={16} className="text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">$125,847.63</div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-sm font-semibold">
                +12.4%
              </div>
            </div>
          </div>

          {/* Win Rate */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-400 text-sm">Win Rate</div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Target size={16} className="text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">73.8%</div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-sm font-semibold">
                +5.2%
              </div>
            </div>
          </div>

          {/* Daily P&L */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-400 text-sm">Daily P&L</div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">$2,347</div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-sm font-semibold">
                +18.2%
              </div>
            </div>
          </div>

          {/* Active Positions */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-400 text-sm">Active Positions</div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-lg text-sm font-semibold">
                2 new
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Overview */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Performance Overview</h3>
              <div className="relative">
                <button className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-700 px-4 py-2 rounded-lg text-white transition-colors">
                  {selectedPeriod}
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#06B6D4" 
                    strokeWidth={2}
                    fill="url(#performanceGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="text-center text-gray-400">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
                <span>Interactive Performance Chart</span>
              </div>
              <div className="text-sm">Real-time P&L visualization with advanced analytics</div>
            </div>
          </div>

          {/* Risk Analysis */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Risk Analysis</h3>
              <Zap className="text-yellow-400" size={20} />
            </div>
            
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={riskData}>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={false} />
                  <YAxis axisLine={false} tickLine={false} tick={false} />
                  <Line 
                    type="monotone" 
                    dataKey="risk" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="text-center text-gray-400">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Risk Metrics</span>
              </div>
              <div className="text-sm">Sharpe Ratio, Max Drawdown, VaR</div>
            </div>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Trades</h3>
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg">
              <Plus size={16} />
              Add Trade
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 py-3 px-4">Symbol</th>
                  <th className="text-left text-gray-400 py-3 px-4">Entry</th>
                  <th className="text-left text-gray-400 py-3 px-4">Exit</th>
                  <th className="text-left text-gray-400 py-3 px-4">P&L</th>
                  <th className="text-left text-gray-400 py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-4">
                      <span className="text-cyan-400 font-bold">{trade.symbol}</span>
                    </td>
                    <td className="py-4 px-4 text-white font-mono">${trade.entry}</td>
                    <td className="py-4 px-4 text-white font-mono">
                      {trade.exit ? `$${trade.exit}` : '-'}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-bold ${
                        trade.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {trade.pnl}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trade.status === 'Closed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {trade.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPortfolio;