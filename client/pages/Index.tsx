import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Search } from 'lucide-react';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('flights');

  const heroImages = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ce25020521328c39c82b42f86c9b26d76faa3c55?width=2880",
      alt: "Lodh Waterfalls"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/8a0cc1947515fd91fa3731cda07aeb6f153c554d?width=2878",
      alt: "Suga Bandh Waterfall"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4d3554d9018bd824afe2779bd7b97358f34674ed?width=2888",
      alt: "Patratu Valley"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/c7cd463654dd4b9dfa9eecd68b7332bcbb3d3ace?width=2872",
      alt: "Netarhat Dam"
    }
  ];

  const destinations = [
    {
      name: "Deori Temple",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0050f5df632ed87bec32ea104a653a0e5333e8e3?width=616"
    },
    {
      name: "Bhuvaneshwari Temple",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2cc6e660f39aeccb954f316808cb3f6fbfd8df00?width=616"
    },
    {
      name: "Netarhat Dam",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3cbae483834f81d8ae6ed2cf11dc812c3d6cf417?width=616"
    },
    {
      name: "Dassam Falls",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1d6451a05d5aeb271fef751efd2f4a32815e5627?width=616"
    },
    {
      name: "Hazaribagh National Park",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d68b7463841843a1aa2546838e20e85b2044e994?width=616"
    },
    {
      name: "Birsa Zoological Park",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/36e38e3bd275b1aa5bf7cf10587998c10812b694?width=616"
    }
  ];

  // Horizontal carousel state
  const destinationsCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = destinationsCarouselRef.current;
    if (!el) return;
    el.scrollLeft = 0;
  }, []);

  const scrollByOneCard = (direction: 'left' | 'right') => {
    const el = destinationsCarouselRef.current;
    if (!el) return;
    const firstChild = el.querySelector<HTMLDivElement>('[data-destination-card]');
    const gap = 24; // matches gap-6
    const cardWidth = firstChild ? firstChild.getBoundingClientRect().width + gap : 300;
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen -mt-16 overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-gradient"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full">
              {/* Text Content */}
              <div className="text-white space-y-6 flex-1 flex items-center justify-center lg:justify-start">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1eaf47af0d4b77b6179775b66eca331f654de9d6?width=1466"
                  alt="Jharkhand Text"
                  className="w-full max-w-lg"
                />
              </div>

              {/* Navigation Arrows - moved to bottom-right */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>

        {/* Bottom-right arrows */}
        <div className="absolute bottom-6 right-6 z-10 flex space-x-3">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 relative">
        {/* Background image with 60% opacity */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "url('/jharmap.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'right 60%'
          }}
        ></div>
        {/* Bottom white gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-rowdies text-black mb-4">
              FEATURED DESTINATIONS
            </h2>
            <p className="text-xl text-gray-700 font-readex">
              Uncover Jharkhand's must-visit gems, from waterfalls to wildlife.
            </p>
          </div>

          {/* Destinations Carousel */}
          <div
            ref={destinationsCarouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 pr-6"
          >
            {destinations.map((destination, index) => (
              <div
                key={index}
                data-destination-card
                className="cursor-pointer snap-start flex-shrink-0 min-w-[80%] sm:min-w-[60%] md:min-w-[calc((100%-48px)/3)] lg:min-w-[calc((100%-72px)/4)]"
              >
                <div className="relative rounded-[100px] overflow-hidden h-[420px] md:h-[460px]">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover rounded-[100px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                    <h3 className="text-white font-rowdies text-sm md:text-base text-center leading-tight">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll controls */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => scrollByOneCard('left')}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/80"
            >
              <span className="sr-only">Left</span>
              ‹
            </button>
            <button
              onClick={() => scrollByOneCard('right')}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/80"
            >
              <span className="sr-only">Right</span>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Map & Booking Section */}
      <section className="py-16 bg-gradient-to-b from-white via-orange-100 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Interactive Map */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-rowdies text-black mb-4">
                INTERACTIVE MAP
              </h2>
              <p className="text-xl text-gray-700 font-readex max-w-2xl mx-auto">
                Step into Jharkhand's journeys with smart maps that guide you personally.
              </p>
            </div>
            
            <div className="relative rounded-5xl overflow-hidden border-8 border-black bg-gradient-to-r from-gray-300 to-black h-96">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e199b9745cb19972ff22bbe9aa7d0705e1ef337d?width=2636"
                alt="Interactive Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-rowdies mb-2">Explore Interactive Map</h3>
                  <p className="text-white/90">Click to start your journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started / Booking */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-8xl font-rowdies text-black mb-4">
              GET STARTED
            </h2>
            <p className="text-xl text-gray-700 font-readex">
              Pack your bags, Jharkhand is just a click away
            </p>
          </div>

          {/* Booking Tabs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-black">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'flights', label: 'Flights', icon: '✈️' },
                { id: 'trains', label: 'Trains', icon: '🚂' },
                { id: 'buses', label: 'Buses', icon: '🚌' },
                { id: 'cabs', label: 'Cabs', icon: '🚕' },
                { id: 'hotels', label: 'Hotels', icon: '🏨' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-colors ${
                    activeTab === tab.id
                      ? 'bg-black text-white border-black'
                      : 'border-black text-black hover:bg-black/5'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Booking Form */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="border-2 border-black rounded-2xl p-4 bg-white">
                <label className="block text-gray-700 font-medium mb-2 text-center">From Origin</label>
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Select origin"
                    className="w-full outline-none text-center"
                  />
                </div>
              </div>

              <div className="border-2 border-black rounded-2xl p-4 bg-white">
                <label className="block text-gray-700 font-medium mb-2 text-center">To Destination</label>
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Select destination"
                    className="w-full outline-none text-center"
                  />
                </div>
              </div>

              <div className="border-2 border-black rounded-2xl p-4 bg-white">
                <label className="block text-gray-700 font-medium mb-2 text-center">Depart</label>
                <div className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="date"
                    className="w-full outline-none text-center"
                  />
                </div>
              </div>

              <div className="border-2 border-black rounded-2xl p-4 bg-white">
                <label className="block text-gray-700 font-medium mb-2 text-center">Return</label>
                <div className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="date"
                    className="w-full outline-none text-center"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center">
              <button className="bg-black text-white px-12 py-3 rounded-full font-semibold text-lg shadow-[0_3px_0_0_#000] active:translate-y-[1px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="bg-jharkhand-blue rounded-5xl p-8 text-white">
              <h2 className="text-4xl font-rowdies font-bold mb-4">TOUR GUIDES</h2>
              <p className="text-lg mb-8 opacity-90">
                Connect with certified local guides — verified for safety, authenticity, and trusted travel experiences.
              </p>
            {/* Horizontal scroll list */}
            <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
                {[
                  {
                    name: "Kavyansh",
                    specialty: "Nature Expert",
                    age: 25,
                    experience: "4yrs",
                    languages: ["English", "Hindi", "Local"]
                  },
                  {
                    name: "Parth",
                    specialty: "Heritage Guide",
                    age: 38,
                    experience: "11yrs",
                    languages: ["English", "Hindi", "Local"]
                  },
                  {
                    name: "Aashi Jain",
                    specialty: "Experience Curator",
                    age: 25,
                    experience: "4yrs",
                    languages: ["English", "Hindi", "Local"]
                },
                {
                  name: "Ritika",
                  specialty: "Wildlife Specialist",
                  age: 30,
                  experience: "6yrs",
                  languages: ["English", "Hindi"]
                  }
                ].map((guide, index) => (
                <div key={index} className="min-w-[250px] snap-start bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-3xl mb-4"></div>
                    <h3 className="font-semibold text-lg mb-2">{guide.name}</h3>
                    <p className="text-sm opacity-75 mb-3">{guide.specialty}</p>
                    <p className="text-xs opacity-75 mb-4 text-center">
                      Age: {guide.age}<br />
                      Experience: {guide.experience}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {guide.languages.map((lang, i) => (
                        <span key={i} className="bg-jharkhand-blue/50 px-2 py-1 rounded text-xs">
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="bg-eco-green text-black px-3 py-1 rounded-full text-xs font-medium">
                        Certified
                      </div>
                      <button className="bg-white text-jharkhand-blue px-4 py-2 rounded-full text-sm font-medium w-full hover:bg-gray-100 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* AI Itinerary Planner + AR/VR side by side */}
      <section className="py-16 bg-gradient-to-b from-jharkhand-blue to-jharkhand-blue-light">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* AI Planner (left) */}
            <div className="bg-white/5 rounded-5xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-rowdies font-bold mb-2">AI ITINERARY PLANNER</h2>
                <p className="text-lg opacity-75">Smart AI, smarter journeys.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-2 border-white/20 rounded-2xl p-4">
                  <label className="block text-center mb-2">Depart Origin</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none placeholder-white/50 text-center" placeholder="Enter departure" />
                </div>
                <div className="border-2 border-white/20 rounded-2xl p-4">
                  <label className="block text-center mb-2">Arrive Destination</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none placeholder-white/50 text-center" placeholder="Enter destination" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-2 border-white/20 rounded-2xl p-4">
                  <label className="block text-center mb-2">Budget:</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none placeholder-white/50 text-center" placeholder="Enter budget" />
                </div>
                <div className="border-2 border-white/20 rounded-2xl p-4">
                  <label className="block text-center mb-2">Travelers:</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none placeholder-white/50 text-center" placeholder="Number of travelers" />
                </div>
              </div>
              <div className="border-2 border-white/20 rounded-2xl p-4 mb-6">
                <label className="block text-center mb-2">Interests (heritage, adventure, markets, wildlife, etc.):</label>
                <textarea className="w-full bg-transparent border-none outline-none placeholder-white/50 h-20 resize-none text-center" placeholder="Describe your interests"></textarea>
              </div>
              <div className="text-center">
                <button className="bg-eco-green text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-eco-green-dark transition-colors">
                  Get your itinerary planned
                </button>
              </div>
            </div>
            {/* AR/VR (right) */}
            <div className="bg-white/5 rounded-5xl p-8 flex flex-col items-center justify-center">
              <h2 className="text-4xl font-rowdies font-bold mb-4 text-center">AR/VR</h2>
              <p className="text-lg mb-8 opacity-90 text-center max-w-md">
                Experience Jharkhand in AR/VR — explore monuments, forests, temples, and waterfalls with 360° views for smarter, immersive travel.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6d13b355e1028de1e35b48d1642e3c2d7c01b1c2?width=956"
                  alt="VR Experience"
                  className="w-64 h-80 object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Tokens Preview */}
      <section className="py-16 bg-heritage-gradient">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left lg:flex-1 mb-8 lg:mb-0">
              <h2 className="text-4xl font-rowdies font-bold mb-4">ECO TOKENS</h2>
              <p className="text-xl mb-4">
                Earn Eco Tokens for every green choice — redeemable for discounts and local products.
              </p>
              <a href="/eco-tokens" className="underline hover:no-underline text-lg">
                learn more.....
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-end lg:flex-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/36538c0a288354e30ce868c8203e2ba741a2c894?width=404"
                alt="Eco Token"
                className="w-48 h-44 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
