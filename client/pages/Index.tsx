import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Plane, TrainFront, Bus, Car, Hotel, ArrowLeftRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState<'oneWay' | 'roundTrip'>('roundTrip');
  const [selectedFare, setSelectedFare] = useState<string>('Regular Fares');

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
              <div className="text-white space-y-6 flex-1 flex items-center justify-center lg:justify-start translate-y-8 md:translate-y-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1eaf47af0d4b77b6179775b66eca331f654de9d6?width=1466"
                  alt="Jharkhand Text"
                  className="w-full max-w-md"
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
          className="absolute inset-0 bg-left bg-cover opacity-60"
          style={{ backgroundImage: "url('/jharmap.png')" }}
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
      <section className="py-16 bg-gradient-to-b from-white via-orange-100 to-cyan-100 relative">
        {/* Aero background for Get Started area */}
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/aero.png')",
            backgroundSize: '120% auto',
            backgroundPosition: 'center 100%'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Interactive Map */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-rowdies text-black mb-3">
                INTERACTIVE MAP
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-readex max-w-2xl mx-auto">
                Step into Jharkhand's journeys with smart maps that guide you personally.
              </p>
            </div>
            
            <div className="relative rounded-5xl overflow-hidden ring-8 ring-white shadow-xl bg-gradient-to-r from-gray-300 to-black h-96">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e199b9745cb19972ff22bbe9aa7d0705e1ef337d?width=2636"
                alt="Interactive Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl md:text-2xl font-rowdies mb-1">Explore Interactive Map</h3>
                  <p className="text-white/90 text-sm md:text-base">Click to start your journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started / Booking */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-rowdies text-black mb-3 uppercase">Get Started</h2>
            <p className="text-base md:text-lg text-gray-700 font-readex">
              Pack your bags, Jharkhand is just a click away
            </p>
          </div>

          {/* Booking Tabs */}
          <div className="bg-transparent rounded-3xl p-8 max-w-5xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              {[
                { id: 'flights', label: 'Flights', Icon: Plane },
                { id: 'trains', label: 'Trains', Icon: TrainFront },
                { id: 'buses', label: 'Buses', Icon: Bus },
                { id: 'cabs', label: 'Cabs', Icon: Car },
                { id: 'hotels', label: 'Hotels', Icon: Hotel }
                
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={
                    'flex items-center space-x-2 px-7 py-3 rounded-[18px] border-2 shadow-[0_2px_0_#000] bg-transparent text-black border-black hover:bg-black/5'
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{label}</span>
                </button>
              ))}
            </div>

            {/* Trip type */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-8 text-black">
                <button
                  onClick={() => setTripType('oneWay')}
                  className={`${tripType === 'oneWay' ? 'underline underline-offset-4' : 'opacity-70 hover:opacity-100'}`}
                >
                  One Way
                </button>
                <button
                  onClick={() => setTripType('roundTrip')}
                  className={`${tripType === 'roundTrip' ? 'font-semibold' : 'opacity-70 hover:opacity-100'}`}
                >
                  Round Trip
                </button>
              </div>
            </div>

            {/* Booking Form */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="rounded-[16px] p-4 bg-transparent border-2 border-black shadow-sm">
                <label className="block text-gray-700 font-medium mb-2 text-center">From Origin</label>
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Select origin"
                    className="w-full outline-none text-center bg-transparent placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="rounded-[16px] p-4 bg-transparent border-2 border-black shadow-sm">
                <label className="block text-gray-700 font-medium mb-2 text-center">To Destination</label>
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Select destination"
                    className="w-full outline-none text-center bg-transparent placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="rounded-[16px] p-4 bg-transparent border-2 border-black shadow-sm">
                <label className="block text-gray-700 font-medium mb-2 text-center">Depart</label>
                <div className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="date"
                    className="w-full outline-none text-center bg-transparent"
                  />
                </div>
              </div>

              <div className="rounded-[16px] p-4 bg-transparent border-2 border-black shadow-sm">
                <label className="block text-gray-700 font-medium mb-2 text-center">Return</label>
                <div className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="date"
                    className="w-full outline-none text-center bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Fare types */}
            <div className="text-center mb-3">
              <span className="text-sm font-semibold text-black">Select a Fare Type :</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Regular Fares","Armed Forces Fares","Student Fares","Senior Citizen Fares","Doctors & Nurses Fares"].map((fare) => (
                <button
                  key={fare}
                  onClick={() => setSelectedFare(fare)}
                  className={`px-6 py-3 rounded-[18px] border-2 shadow-[0_2px_0_#000] ${
                    selectedFare === fare ? 'bg-black text-white border-black' : 'bg-transparent text-black border-black hover:bg-black/5'
                  }`}
                >
                  {fare}
                </button>
              ))}
            </div>

            {/* Search Button */}
            <div className="flex justify-center">
              <button className="bg-black text-white px-12 py-3 rounded-full font-semibold text-lg shadow-[0_3px_0_#000] active:translate-y-[1px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-jharkhand-blue rounded-5xl p-8 pb-14 text-white relative">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-4xl font-rowdies font-bold mb-2">TOUR GUIDES</h2>
                <p className="text-lg mb-6 opacity-90 max-w-2xl">
                  Connect with certified local guides — verified for safety, authenticity, and trusted travel experiences.
                </p>
              </div>
            </div>
            {/* Single bottom View More link (centered on desktop) */}
            <Link to="/tour-guides" className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-6 text-white/90 hover:text-white underline">View More...</Link>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              ].slice(0,3).map((guide, index) => (
                <div key={index} className="rounded-3xl p-5 bg-white/20 backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-28 h-36 bg-white/70 rounded-2xl"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg leading-tight">{guide.name}</h3>
                      </div>
                      <p className="text-[11px] opacity-90 mb-2">{guide.specialty}</p>
                      <div className="text-[11px] opacity-90 mb-3">
                        <div>Age: {guide.age}</div>
                        <div>Experience: {guide.experience}</div>
                      </div>
                      <div className="w-full bg-white/15 border border-white/25 rounded-md overflow-hidden mb-3 h-8">
                        <div className="grid grid-cols-3 divide-x divide-white/25 text-center text-[11px] h-full">
                          {guide.languages.slice(0,3).map((lang, i) => (
                            <span key={i} className="flex items-center justify-center text-white/90">{lang}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="bg-eco-green text-black px-3 py-0.5 rounded-full text-[11px] font-semibold">Certified</span>
                        <button className="bg-white rounded-md py-2 px-4 text-center text-[11px] text-jharkhand-blue font-medium">
                          <Link to="/tour-guides">View Profile</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/tour-guides" className="md:hidden text-white/90 hover:text-white underline">View More...</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Itinerary Planner + AR/VR side by side */}
      <section className="pt-12 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* AI Planner (left) */}
            <div className="rounded-5xl p-6 bg-gradient-to-b from-jharkhand-blue to-jharkhand-blue-light text-white ring-8 ring-white/10 shadow-xl">
              <div className="mb-6">
                <h2 className="text-4xl font-rowdies font-bold leading-none">AI ITINERARY PLANNER</h2>
                <p className="text-sm opacity-75 mt-2">Smart AI, smarter journeys.</p>
              </div>

              {/* Origin / Destination row with swap icon */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-center">
                <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3">
                  <div className="text-xs opacity-80 mb-1">Origin:</div>
                  <input id="ai-origin" aria-label="Origin" placeholder="Enter origin" className="bg-transparent w-full text-white placeholder-white/70 outline-none" />
                </div>
                <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3">
                  <div className="text-xs opacity-80 mb-1">Destination:</div>
                  <input id="ai-destination" aria-label="Destination" placeholder="Enter destination" className="bg-transparent w-full text-white placeholder-white/70 outline-none" />
                </div>
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center bg-white/20 ring-2 ring-white/30">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>

              {/* Budget / Travelers */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3">
                  <div className="text-xs opacity-80 mb-1 text-center">Budget:</div>
                  <input id="ai-budget" aria-label="Budget" className="w-full bg-transparent border-none outline-none placeholder-white/60 text-center" placeholder="e.g. ₹20,000" />
                </div>
                <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3">
                  <div className="text-xs opacity-80 mb-1 text-center">Travelers:</div>
                  <input id="ai-travelers" aria-label="Travelers" className="w-full bg-transparent border-none outline-none placeholder-white/60 text-center" placeholder="e.g. 2" />
                </div>
              </div>

              {/* Interests */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3">
                  <div className="text-xs opacity-80 mb-1 text-center">Accommodation preference:</div>
                  <select id="ai-accommodation" className="w-full bg-transparent border-none outline-none text-center">
                    <option className="bg-jharkhand-blue">Any</option>
                    <option className="bg-jharkhand-blue">Budget Stay</option>
                    <option className="bg-jharkhand-blue">Mid-range Hotel</option>
                    <option className="bg-jharkhand-blue">Luxury Resort</option>
                    <option className="bg-jharkhand-blue">Homestay</option>
                    <option className="bg-jharkhand-blue">Eco-lodge</option>
                  </select>
                </div>
                <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3">
                  <textarea id="ai-interests" className="w-full bg-transparent border-none outline-none placeholder-white/60 h-24 resize-none text-center" placeholder="Interests (heritage, adventure, markets, wildlife, etc.)"></textarea>
                </div>
              </div>

              {/* Accommodation + CTA row */}
              <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
                <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3">
                  <div className="text-sm">Accommodation preference :</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      const origin = (document.getElementById('ai-origin') as HTMLInputElement)?.value || '';
                      const destination = (document.getElementById('ai-destination') as HTMLInputElement)?.value || '';
                      const budget = (document.getElementById('ai-budget') as HTMLInputElement)?.value || '';
                      const travelers = (document.getElementById('ai-travelers') as HTMLInputElement)?.value || '';
                      const interests = (document.getElementById('ai-interests') as HTMLTextAreaElement)?.value || '';
                      const accommodation = (document.getElementById('ai-accommodation') as HTMLSelectElement)?.value || '';
                      const params = new URLSearchParams({ origin, destination, budget, travelers, interests, accommodation });
                      window.location.href = `/itinerary?${params.toString()}`;
                    }}
                    className="inline-flex items-center px-6 py-2 rounded-full bg-white/20 text-white border border-white/40 backdrop-blur-md shadow-sm active:translate-y-[1px]"
                  >
                    get your itenary planned
                  </button>
                </div>
              </div>
            </div>
            {/* AR/VR (right) */}
            <div className="rounded-5xl px-6 pt-6 pb-0 bg-gradient-to-b from-jharkhand-blue to-jharkhand-blue-light text-white ring-8 ring-white/10 shadow-xl flex flex-col">
              <h2 className="text-4xl font-rowdies font-bold mb-2">AR/VR</h2>
              <p className="text-sm leading-snug opacity-90 text-left mb-2">
                Experience Jharkhand in AR/VR — explore monuments, forests, temples, and waterfalls,
                with 360° views for smarter, immersive travel.
              </p>
              <div className="flex-1 flex items-end justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6d13b355e1028de1e35b48d1642e3c2d7c01b1c2?width=956"
                  alt="VR Experience"
                  className="h-80 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Tokens Preview */}
      <section className="pt-4 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-heritage-gradient text-white shadow-xl p-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left lg:flex-1 mb-8 lg:mb-0">
              <h2 className="text-4xl font-rowdies font-bold mb-4">ECO TOKENS</h2>
              <p className="text-base mb-4">
                Earn Eco Tokens for every green choice — redeemable for discounts and local products.
              </p>
              <a href="/eco-tokens" className="underline hover:no-underline font-medium">
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

      {/* Heritage Haat */}
      <section className="relative py-16">
        {/* Mint dotted background only over top ~35% of card height */}
        <div
          className="absolute top-0 left-0 right-0 h-[280px] md:h-[420px]"
          style={{
            backgroundColor: '#c9f0e0',
            backgroundImage:
              'radial-gradient(#ffffff 1.2px, rgba(255,255,255,0) 1.2px)',
            backgroundSize: '18px 18px'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 pt-4">
            <h2 className="text-5xl md:text-7xl font-rowdies text-white tracking-wide">
              HERITAGE HAAT
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-[230px] md:w-[320px] lg:w-[360px] rounded-full bg-white/90"></div>
            <p className="text-xl md:text-2xl font-readex text-white/90 mt-3">Shop. Support. Sustain.</p>
            {/* thin white line under title */}
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 - Local Markets */}
            <div className="rounded-[28px] overflow-hidden shadow-xl">
              <div className="relative h-[520px]">
                <img
                  src="/market.avif"
                  alt="Local Markets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/80" />
                <div className="absolute top-8 left-8 right-8">
                  <h3 className="text-white text-3xl md:text-4xl font-rowdies leading-tight text-center">LOCAL
                    <br />MARKETS</h3>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-base md:text-lg text-center leading-relaxed">
                    Colorful & vibrant bazaars offering folk art, authentic taste and local flavors.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Handicrafts */}
            <div className="rounded-[28px] overflow-hidden shadow-xl">
              <div className="relative h-[520px]">
                <img
                  src="/handicrafts.avif"
                  alt="Handicrafts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/80" />
                <div className="absolute top-8 left-8 right-8">
                  <h3 className="text-white text-3xl md:text-4xl font-rowdies leading-tight text-center">HANDICRAFTS</h3>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-base md:text-lg text-center leading-relaxed">
                    Jharkhand’s exquisite handlooms, tribal and dokra art, and jewelry — crafted with tradition and skill.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Authentic Taste */}
            <div className="rounded-[28px] overflow-hidden shadow-xl">
              <div className="relative h-[520px]">
                <img
                  src="/taste.jpeg"
                  alt="Authentic Taste"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/80" />
                <div className="absolute top-8 left-8 right-8">
                  <h3 className="text-white text-3xl md:text-4xl font-rowdies leading-tight text-center">AUTHENTIC
                    <br />TASTE</h3>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-base md:text-lg text-center leading-relaxed">
                    From tribal delicacies to regional cuisines, taste the true essence of Jharkhand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* What Travellers Say - placed just below Heritage Haat */}
            <section className="relative py-14">
         {/* White base with pattern image from public */}
         <div
           className="absolute inset-0 bg-white"
           style={{
             backgroundImage: "url('/PATTERN.png')",
             backgroundRepeat: 'repeat',
             backgroundSize: 'auto'
           }}
         />

        <div className="relative max-w-7xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-rowdies text-black tracking-wide mb-6 text-center">
            WHAT TRAVELLERS SAY
          </h2>

          {/* Horizontal scroll list - edge-to-edge */}
          <div className="relative -mx-4 sm:-mx-6 md:-mx-8">
            <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 px-4 sm:px-6 md:px-8 justify-start">
              {/* left spacer to avoid clipping */}
              <div className="flex-shrink-0 w-4" />
              {[
              {
                name: 'Abhimanyu',
                text:
                  'The eco-tourism package was beautifully planned. Trekking in Netarhat with local guides felt safe and enriching. Truly a great escape!'
              },
              {
                name: 'Yashvika',
                text:
                  "Jharkhand surprised me! The waterfalls, forests, and heritage sites are stunning. The interactive map and AR tour made planning super easy."
              },
              { name: 'Goraang', text: 'Real-time transport info saved us so much time. We could plan our day better and visit more places stress-free.' },
              { name: 'Saumya', text: 'Booking homestays and eco-tourism packages here was super easy. Loved the local food recommendations — authentic and unforgettable!' },
              { name: 'Rishabh', text: 'The multilingual chatbot helped my parents navigate easily. Inclusive and thoughtful experience throughout our trip.' },
              { name: 'Ananya', text: 'Loved the curation of tribal markets and handicrafts — authentic products and fair prices.' },
              { name: 'Pooja', text: 'Heritage Haat was amazing. We discovered unique crafts and tasted incredible local food in one place.' },
              { name: 'Vikram', text: 'Super smooth planning with the app. Accurate timings and helpful tips made the journey hassle-free.' }
            ].map((item, idx) => (
              <div key={idx} className="snap-start w-[300px] md:w-[360px] flex-shrink-0">
                <div className="rounded-[28px] bg-[#1b1b1b] text-white p-6 shadow-xl min-h-[180px] md:min-h-[190px] flex flex-col justify-start">
                  <div className="font-semibold text-lg mb-2">{item.name}</div>
                  <p className="text-sm leading-snug opacity-95">{item.text}</p>
                </div>
              </div>
              ))}
              {/* right spacer to avoid clipping */}
              <div className="flex-shrink-0 w-4" />
            </div>
          </div>

           <div className="mt-4 text-center">
             <a className="underline text-black text-xl" href="#">See more...</a>
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-[20px] md:rounded-[28px] p-6 md:p-10" style={{
            background: 'linear-gradient(90deg, rgba(29, 121, 131, 0.9) 0%, rgba(121, 214, 202, 0.9) 100%)'
          }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left copy */}
              <div className="text-white max-w-3xl">
                <h3 className="text-2xl md:text-4xl font-rowdies leading-tight mb-4 max-w-[620px]">
                  Experience JHARKHAND TOURISM App on Android
                  <br />
                  and iOS DEVICES
                </h3>
                <p className="opacity-95 text-white text-base md:text-lg mb-6 max-w-[620px]">
                  Explore Jharkhand’s heritage, culture, and nature, plan your trips, book stays and experiences, and enjoy every journey with one smart app effortlessly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-block">
                    <img src="/appstore.webp" alt="Download on the App Store" className="h-12 md:h-14" />
                  </a>
                  <a href="#" className="inline-block">
                    <img src="/playstore.webp" alt="Get it on Google Play" className="h-12 md:h-14" />
                  </a>
                </div>
              </div>

              {/* Right column left empty; phone image is placed absolutely */}
              <div className="hidden md:block"></div>
            </div>

            {/* Phone image positioned bottom-right without frame */}
            <img
              src="/phone.png"
              alt="App preview"
              className="absolute bottom-0 right-2 w-40 sm:w-44 md:w-56 lg:w-64 h-auto object-contain drop-shadow-2xl transform origin-bottom-right scale-[3]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
