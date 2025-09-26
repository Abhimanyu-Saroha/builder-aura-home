import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Globe, Search, User, Menu } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/logbg.jpg')" }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <header className="relative z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto h-16 px-4 md:px-6">
          {/* Left: Brand + Menu */}
          <div className="flex items-center space-x-3">
            <button className="md:hidden text-white/90 hover:text-white" aria-label="Menu">
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="text-white font-rowdies text-2xl md:text-3xl">
              Jharkhand
            </Link>
          </div>

          {/* Navigation (centered) */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-2 text-white/90 hover:text-white text-sm font-medium cursor-pointer">
              <span>AR/VR</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-2 text-white/90 hover:text-white text-sm font-medium cursor-pointer">
              <span>Heritage Haat</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-2 text-white/90 hover:text-white text-sm font-medium cursor-pointer">
              <span>Plan your trip</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3">
            <button className="text-white/90 hover:text-white" aria-label="Language">
              <Globe className="w-6 h-6" />
            </button>
            <button className="text-white/90 hover:text-white" aria-label="Search">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-white/90 hover:text-white" aria-label="Profile">
              <User className="w-7 h-7" />
            </button>
            <button className="hidden md:inline-flex text-white/90 hover:text-white" aria-label="Menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top Section - Join Us for Travel Adventure - Full Width */}
        <div className="w-full bg-black/50 backdrop-blur-sm py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Main Content */}
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Us for Travel Adventure!
                </h1>
                <p className="text-lg text-white/90 mb-6">
                  Discover the world with our curated tours and travel guides.
                </p>
                
                {/* Login/Sign Up Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
                    Login
                  </button>
                  <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Sign Up Now
                  </button>
                </div>
              </div>

              {/* Right Side - Google Sign In */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="space-y-3 w-full max-w-sm">
                  <button className="w-full px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 font-medium">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    Sign in with Google
                  </button>
                  <div className="text-white/70 text-sm text-center">or</div>
                  <button className="w-full px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 font-medium">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Image and Form */}
        <div className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Panel - Image */}
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/over.jpg"
                    alt="Temple"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Right Panel - Registration Form */}
              <div className="order-1 lg:order-2">
                <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Account</h2>
                  
                  <form className="space-y-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Repeat your password"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link 
                        to="/" 
                        className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-center font-medium"
                      >
                        Back to Home
                      </Link>
                      <button 
                        type="submit"
                        className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
