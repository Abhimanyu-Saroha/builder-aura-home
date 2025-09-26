import { Leaf, Coins, Gift, Bike, Home, Utensils, Recycle, Trees, Palette, Heart, TrendingUp } from 'lucide-react';

export default function EcoTokens() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-eco-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-inter font-bold mb-4">Earn Eco Tokens</h1>
            <p className="text-eco-green-50/90 text-lg md:text-xl">
              Make sustainable choices while exploring Jharkhand and earn tokens to redeem for local products, experiences, and exclusive discounts.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold">1,250</div>
                <div className="text-eco-green-50">Current Balance</div>
              </div>
              <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold">₹2,500</div>
                <div className="text-eco-green-50">Total Savings</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0d5e83d01d76d3230bbec6940988d147f482ad26?width=640"
              alt="Eco Illustration"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Wallet + Quick Actions */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Eco Wallet</h2>
              <Leaf className="w-5 h-5 text-eco-green" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">1,250</div>
                <div className="text-gray-500">Available Tokens</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">850</div>
                <div className="text-gray-500">Tokens Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">400</div>
                <div className="text-gray-500">Tokens Redeemed</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-3 bg-eco-green rounded-full w-[75%]"></div>
              </div>
              <div className="text-right text-sm text-gray-500 mt-1">750/1000 tokens</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <button className="w-full bg-eco-green text-black rounded-xl py-3 font-semibold flex items-center justify-center gap-2">
              <Gift className="w-5 h-5" /> Redeem Tokens
            </button>
            <button className="w-full border border-gray-200 rounded-xl py-3 font-semibold flex items-center justify-center gap-2">
              <Coins className="w-5 h-5 text-eco-green" /> Transaction History
            </button>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm">
              <strong>Bonus Weekend!</strong> Earn 2x tokens on all eco-friendly activities this weekend.
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Earn */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Ways to Earn Eco Tokens</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Bike className="w-6 h-6 text-eco-green" />, title: 'Eco Transport', desc: 'Use bicycles, EVs, or public transport for sightseeing.', tokens: '+50 tokens', cta: 'Learn More' },
            { icon: <Home className="w-6 h-6 text-eco-green" />, title: 'Eco Stays', desc: 'Book certified eco-friendly accommodations.', tokens: '+100 tokens', cta: 'Book Now' },
            { icon: <Utensils className="w-6 h-6 text-eco-green" />, title: 'Local Dining', desc: 'Dine at local, organic, sustainable spots.', tokens: '+30 tokens', cta: 'Find Places' },
            { icon: <Recycle className="w-6 h-6 text-eco-green" />, title: 'Waste Management', desc: 'Segregate waste and join recycling programs.', tokens: '+25 tokens', cta: 'Join Program' },
            { icon: <Trees className="w-6 h-6 text-eco-green" />, title: 'Conservation Activities', desc: 'Tree planting and clean-up drives.', tokens: '+75 tokens', cta: 'Volunteer' },
            { icon: <Palette className="w-6 h-6 text-eco-green" />, title: 'Support Local Culture', desc: 'Buy from local artisans and cultural events.', tokens: '+40 tokens', cta: 'Explore' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <div className="w-12 h-12 bg-eco-green-bg rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-eco-green font-semibold">{item.tokens}</span>
                <button className="text-eco-green font-medium hover:underline">{item.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redeem */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Redeem Your Tokens</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Use your earned tokens to get discounts on local products, experiences, and services across Jharkhand.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Handicrafts', img: 'https://api.builder.io/api/v1/image/assets/TEMP/ba48eb44b7436b0387e7491f2e2fc4b7a9fb7386?width=484', tokens: '200 tokens', off: '20% off' },
              { title: 'Local Food', img: 'https://api.builder.io/api/v1/image/assets/TEMP/53d7806e59defd9e156b76d015776b457c79b62f?width=484', tokens: '150 tokens', off: '15% off' },
              { title: 'Experiences', img: 'https://api.builder.io/api/v1/image/assets/TEMP/7c6e95034287ad0a95e438b641440f8baeaa4fa4?width=484', tokens: '300 tokens', off: '25% off' },
              { title: 'Transport', img: 'https://api.builder.io/api/v1/image/assets/TEMP/ef5b09bd2ab29f9b8db6d52cfbf2eb272ee3e59c?width=484', tokens: '250 tokens', off: '30% off' },
            ].map((card, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4">
                <img src={card.img} alt={card.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="font-semibold">{card.title}</h3>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-amber-500 font-semibold">{card.tokens}</span>
                  <span className="text-gray-500">{card.off}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="inline-block bg-eco-green text-black px-6 py-3 rounded-lg font-medium">View All Rewards</a>
          </div>
        </div>
      </section>

      {/* Recent Activity + Impact Summary */}
      <section className="bg-activity-gradient text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { title: 'Eco Transport', desc: 'Used bicycle for city tour', value: '+50', positive: true },
                { title: 'Eco Stay', desc: 'Booked eco-friendly homestay', value: '+100', positive: true },
                { title: 'Redeemed', desc: 'Local handicraft discount', value: '-200', positive: false },
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{row.title}</div>
                    <div className="text-sm text-gray-500">{row.desc}</div>
                  </div>
                  <div className={`font-semibold ${row.positive ? 'text-eco-green' : 'text-red-500'}`}>{row.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Impact Summary</h3>
            <div className="bg-white rounded-xl p-6 grid grid-cols-2 gap-6">
              {[
                { big: '15kg', small: 'CO2 Saved' },
                { big: '8', small: 'Local Businesses Supported' },
                { big: '3', small: 'Conservation Activities' },
                { big: '12', small: 'Eco-Friendly Choices' },
              ].map((card, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-eco-green">{card.big}</div>
                  <div className="text-sm text-gray-500">{card.small}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="text-eco-green font-medium flex items-center gap-2 mx-auto">
                <TrendingUp className="w-4 h-4"/> View Detailed Impact Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold">Eco Warriors Leaderboard</h3>
            <p className="text-gray-600">Top contributors to sustainable tourism in Jharkhand</p>
          </div>
          <div className="bg-white rounded-2xl shadow divide-y">
            {[
              { rank: 1, name: 'Rahul Sharma', role: 'Eco Champion', tokens: '2,450 tokens', delta: '+180 this week' },
              { rank: 2, name: 'Priya Singh', role: 'Green Explorer', tokens: '2,120 tokens', delta: '+165 this week' },
              { rank: 3, name: 'Amit Kumar', role: 'Nature Lover', tokens: '1,890 tokens', delta: '+142 this week' },
            ].map((row) => (
              <div key={row.rank} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${row.rank === 1 ? 'bg-yellow-400' : row.rank === 2 ? 'bg-gray-400' : 'bg-orange-400'}`}>
                    <span className="text-white font-bold text-sm">{row.rank}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{row.name}</div>
                    <div className="text-sm text-gray-500">{row.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-eco-green font-semibold">{row.tokens}</div>
                  <div className="text-sm text-gray-500">{row.delta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
