import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle, X, Send } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Jharkhand Tourism assistant. How can I help you plan your trip?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatMessage,
        isBot: false,
        timestamp: new Date()
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: chatMessages.length + 2,
          text: "Thank you for your message! I'm here to help you discover the best of Jharkhand. What specific information do you need?",
          isBot: true,
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const navigationItems = [
    { name: 'Jharkhand360', href: '/jharkhand360' },
    { name: 'Plan your trip', href: '/plan-trip' },
    { name: 'Heritage Haat', href: '/heritage-haat' },
    { name: 'Eco Tokens', href: '/eco-tokens' },
  ];

  const quickLinks = [
    { title: 'Essential Info', links: [
      'Safety & Emergency contacts',
      'Travel Tips: Do\'s & Dont\'s',
      'Local Language Phrasebook',
      'Best Time to Visit'
    ]},
    { title: 'About & Help', links: [
      'About Jharkhand Tourism',
      'Help / Contact Us',
      'Enquiry',
      'Feedback / Report an Issue',
      'FAQs',
      'Privacy Policy & Terms of use'
    ]},
    { title: 'Social & Connect', links: [
      'Follow Us:',
      'https://cm.jharkhand.gov.in/jharkhand-glance',
      'Newsletter:',
      'Subscribe for Updates'
    ]}
  ];

  // Don't show header on login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-white">
      {/* Header - only show if not on login page */}
      {!isLoginPage && (
        <header className="fixed top-0 left-0 right-0 z-40">
          <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
            <div className="flex items-center justify-between max-w-7xl mx-auto h-16 px-4 md:px-6">
              {/* Left: Brand + Menu */}
              <div className="flex items-center space-x-3">
                <button className="md:hidden text-white/90 hover:text-white" aria-label="Menu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
                </button>
                <Link to="/" className="text-white font-rowdies text-2xl md:text-3xl">
                  Jharkhand
                </Link>
              </div>

              {/* Navigation (centered) */}
              <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className={`text-white/90 hover:text-white text-sm font-medium ${
                      location.pathname === item.href ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Right: Actions */}
              <div className="flex items-center space-x-3">
                {/* Center nav now includes Plan link; keep right side icons only */}
                {/* Globe / Language */}
                <button className="text-white/90 hover:text-white" aria-label="Language">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm7.19 9a7.501 7.501 0 00-14.38 0h14.38zm-14.38 1.5a7.501 7.501 0 0014.38 0H4.81z" clipRule="evenodd"/></svg>
                </button>
                <button className="text-white/90 hover:text-white" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.243 11.964l3.771 3.772a.75.75 0 101.06-1.06l-3.772-3.772A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd"/></svg>
                </button>
                <button 
                  className="text-white/90 hover:text-white" 
                  aria-label="Profile"
                  onClick={() => navigate('/login')}
                >
                  <svg className="w-7 h-7" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                </button>
                {/* Desktop menu icon for quick actions */}
                <button className="hidden md:inline-flex text-white/90 hover:text-white" aria-label="Menu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={isLoginPage ? "" : "pt-16"}>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 text-eco-green">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.75 4.50011C9.06563 4.50011 5.94844 6.91417 4.88906 10.2423C6.46406 9.44542 8.24063 9.00011 10.125 9.00011H14.25C14.6625 9.00011 15 9.33761 15 9.75011C15 10.1626 14.6625 10.5001 14.25 10.5001H13.5H10.125C9.34688 10.5001 8.59219 10.5892 7.86563 10.7532C6.65156 11.0298 5.52187 11.522 4.51875 12.1923C1.79531 14.0064 0 17.1048 0 20.6251V21.3751C0 21.9985 0.501562 22.5001 1.125 22.5001C1.74844 22.5001 2.25 21.9985 2.25 21.3751V20.6251C2.25 18.3423 3.22031 16.2892 4.77188 14.8501C5.7 18.3892 8.92031 21.0001 12.75 21.0001H12.7969C18.9891 20.9673 24 14.8642 24 7.34074C24 5.34386 23.6484 3.44542 23.0109 1.73449C22.8891 1.41105 22.4156 1.42511 22.2516 1.7298C21.3703 3.3798 19.6266 4.50011 17.625 4.50011H12.75Z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sustainable tourism for a better Jharkhand. Earn rewards while protecting our environment.
              </p>
            </div>

            {/* Quick Links */}
            {quickLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-white font-semibold text-lg">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 EcoJharkhand. All rights reserved. Promoting sustainable tourism in Jharkhand.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Chatbot Icon - Only show on non-login pages */}
      {!isLoginPage && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Chat Popup */}
          {isChatOpen && (
            <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
              {/* Chat Header */}
              <div className="bg-jharkhand-blue text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Tourism Assistant</h3>
                    <p className="text-xs text-white/80">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-jharkhand-blue text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jharkhand-blue focus:border-transparent text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-jharkhand-blue text-white p-2 rounded-lg hover:bg-jharkhand-blue/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Chatbot Button */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-jharkhand-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
