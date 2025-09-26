import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Star, UserPlus, Check } from 'lucide-react';

export default function TourGuide() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('All Local...');
  const [selectedSort, setSelectedSort] = useState('Sort by Rating');
  const [currentPage, setCurrentPage] = useState(1);

  const guides = [
    {
      id: 1,
      name: 'Abhishek Kumar',
      rating: 5,
      reviews: 127,
      specialization: 'Specialized in historical tours and local cuisine experiences',
      price: '550 Rs./hour',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Anishka Duti',
      rating: 5,
      reviews: 89,
      specialization: 'Adventure tours and outdoor activities specialist',
      price: '870 Rs./hour',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Yetharth Soni',
      rating: 5,
      reviews: 203,
      specialization: 'Cultural heritage and museum tours expert',
      price: '400 Rs./hour',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Akshita Singh',
      rating: 5,
      reviews: 156,
      specialization: 'Art galleries and architecture walking tours',
      price: '600 Rs./hour',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#212121] px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ChevronLeft onClick={() => navigate('/')} className="w-6 h-6 text-white cursor-pointer" />
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-white text-xl font-bold">TourGuide</h1>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">
            Sign in
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Guides */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#212121] mb-2">Explore Our Tour Guides</h2>
              <p className="text-gray-600 mb-6">Discover amazing local guides who will make your journey unforgettable.</p>
              
              {/* Filter/Sort Bar */}
              <div className="flex justify-end space-x-4 mb-6">
                <div className="relative">
                  <select 
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>All Local...</option>
                    <option>Historical Tours</option>
                    <option>Adventure Tours</option>
                    <option>Cultural Tours</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                <div className="relative">
                  <select 
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Sort by Rating</option>
                    <option>Sort by Price</option>
                    <option>Sort by Reviews</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Available Tour Guides */}
            <h3 className="text-xl font-bold text-[#212121] mb-6">Available Tour Guides</h3>
            
            {/* Guide Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {guides.map((guide) => (
                <div key={guide.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={guide.image} 
                      alt={guide.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#212121] text-lg mb-1">{guide.name}</h4>
                      <div className="flex items-center space-x-1 mb-2">
                        {renderStars(guide.rating)}
                        <span className="text-gray-600 text-sm">({guide.reviews} reviews)</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{guide.specialization}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-500 font-bold">{guide.price}</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentPage === 1 ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'
              }`}>
                1
              </button>
              <button className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentPage === 2 ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'
              }`}>
                2
              </button>
              <button className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentPage === 3 ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'
              }`}>
                3
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <ChevronLeft className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Become a Tour Guide */}
            <div className="bg-blue-500 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <UserPlus className="w-6 h-6 text-white" />
                <h3 className="text-white text-xl font-bold">Become a Tour Guide</h3>
              </div>
              <p className="text-white text-sm mb-4">Share your passion for your city and earn money doing what you love.</p>
              
              {/* Benefits */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Flexible schedule</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Earn up to 5000 Rs./day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Meet people from around the world</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Free training and support</span>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-lg border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded-lg border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <div className="relative">
                  <select className="w-full px-4 py-2 rounded-lg border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                    <option>Select your city</option>
                    <option>Ranchi</option>
                    <option>Jamshedpur</option>
                    <option>Dhanbad</option>
                    <option>Bokaro</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                <textarea 
                  placeholder="Tell us about your experience and interests..."
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border-0 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />
              </div>

              <button onClick={() => navigate('/tour-guides/apply')} className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-2">
                Apply Now
              </button>
              <p className="text-white text-xs text-center opacity-80">
                By applying, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

            {/* Guide Statistics */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-[#212121] text-lg font-bold mb-4">Guide Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Guides:</span>
                  <span className="font-semibold text-[#212121]">124</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Rating:</span>
                  <span className="font-semibold text-[#212121]">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tours Completed:</span>
                  <span className="font-semibold text-[#212121]">8,437</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cities Covered:</span>
                  <span className="font-semibold text-[#212121]">87</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#212121] px-4 py-12 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* TourGuide Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-white text-lg font-bold">TourGuide</h4>
              </div>
              <p className="text-gray-400 text-sm">Connecting travelers with amazing local guides worldwide.</p>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Careers</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Press</a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-white font-semibold mb-4">Support</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Safety</a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h5 className="text-white font-semibold mb-4">Legal</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm text-center">© 2024 TourGuide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
