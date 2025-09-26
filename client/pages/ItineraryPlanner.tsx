import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Category = {
  id: string;
  title: string;
  options: { id: string; label: string }[];
};

const CATEGORIES: Category[] = [
  {
    id: 'arts',
    title: 'Arts',
    options: [
      { id: 'all-arts', label: 'All Arts' },
      { id: 'dance', label: 'Dance' },
      { id: 'music', label: 'Music' },
      { id: 'painting', label: 'Painting' },
      { id: 'literature', label: 'Literature' },
      { id: 'theatre', label: 'Theatre' },
      { id: 'textiles', label: 'Textiles' },
    ],
  },
  {
    id: 'rural',
    title: 'Rural',
    options: [
      { id: 'all-rural', label: 'All Rural' },
      { id: 'agro', label: 'Agro-Tourism' },
      { id: 'crafts', label: 'Crafts-Tourism' },
      { id: 'tribal', label: 'Tribal-Tourism' },
      { id: 'eco', label: 'Eco-Tourism' },
      { id: 'wildlife-tourism', label: 'Wildlife-Tourism' },
      { id: 'live-like-local', label: 'Live Like a Local' },
    ],
  },
  {
    id: 'nature',
    title: 'Nature',
    options: [
      { id: 'all-nature', label: 'All Nature' },
      { id: 'deserts', label: 'Deserts' },
      { id: 'sustainable', label: 'Sustainable Tourism' },
      { id: 'beaches', label: 'Beaches & Cruises' },
      { id: 'hills', label: 'Hills & Mountains' },
      { id: 'forests', label: 'Forests & Gardens' },
      { id: 'rivers', label: 'Rivers & Lakes' },
    ],
  },
  {
    id: 'recreation',
    title: 'Recreation',
    options: [
      { id: 'all-recreation', label: 'All Recreation' },
      { id: 'cinema', label: 'Cinema' },
      { id: 'nightlife', label: 'Night Life' },
      { id: 'sports', label: 'Sports' },
      { id: 'theme-parks', label: 'Amusement & Theme Parks' },
    ],
  },
  {
    id: 'wildlife',
    title: 'Wildlife',
    options: [
      { id: 'all-wildlife', label: 'All Wildlife' },
      { id: 'sanctuaries', label: 'Wildlife Sanctuaries' },
      { id: 'zoo', label: 'Zoological Parks' },
      { id: 'bird', label: 'Bird Watching' },
      { id: 'marine', label: 'Marine Life' },
      { id: 'national-parks', label: 'National Parks' },
    ],
  },
  {
    id: 'heritage',
    title: 'Heritage',
    options: [
      { id: 'all-heritage', label: 'All Heritage' },
      { id: 'monuments', label: 'Monuments' },
      { id: 'museums', label: 'Museums' },
      { id: 'historical-buildings', label: 'Historical Buildings' },
      { id: 'unesco', label: 'UNESCO World Heritage Sites' },
      { id: 'archeology', label: 'Archeological Sites' },
      { id: 'historical-sites', label: 'Historical Sites' },
      { id: 'palaces', label: 'Palaces & Forts' },
    ],
  },
  {
    id: 'spiritual',
    title: 'Spiritual',
    options: [
      { id: 'all-spiritual', label: 'All Spiritual' },
      { id: 'hinduism', label: 'Hinduism' },
      { id: 'islam', label: 'Islam' },
      { id: 'buddhism', label: 'Buddhism' },
      { id: 'sikhism', label: 'Sikhism' },
      { id: 'jainism', label: 'Jainism' },
      { id: 'christianity', label: 'Christianity' },
      { id: 'jewish', label: 'Jewish' },
    ],
  },
  {
    id: 'adventure',
    title: 'Adventure',
    options: [
      { id: 'all-adventure', label: 'All Adventure' },
      { id: 'rafting', label: 'Rafting' },
      { id: 'paragliding', label: 'Paragliding' },
      { id: 'parasailing', label: 'Parasailing' },
      { id: 'skiing', label: 'Skiing' },
      { id: 'skydiving', label: 'Sky Diving' },
      { id: 'bungee', label: 'Bungee Jumping' },
    ],
  },
  {
    id: 'gastronomy',
    title: 'Gastronomy',
    options: [
      { id: 'all-gastronomy', label: 'All Gastronomy' },
      { id: 'street-food', label: 'Street Food' },
      { id: 'local', label: 'Authentically Local' },
      { id: 'beverages', label: 'Beverages' },
      { id: 'farm-to-table', label: 'Farm to Table' },
      { id: 'spices', label: 'Spices' },
    ],
  },
  {
    id: 'weddings',
    title: 'Weddings',
    options: [
      { id: 'all-weddings', label: 'All Weddings' },
      { id: 'palace', label: 'Palace Weddings' },
      { id: 'beach', label: 'Beach Weddings' },
      { id: 'mountain', label: 'Mountain Wedding' },
      { id: 'island', label: 'Island Wedding' },
      { id: 'vineyard', label: 'Vineyard Wedding' },
      { id: 'sustainable-wedding', label: 'Sustainable Weddings' },
      { id: 'cruise', label: 'Cruise Weddings' },
      { id: 'adventure-wedding', label: 'Adventure Weddings' },
    ],
  },
  {
    id: 'wellness',
    title: 'Wellness',
    options: [
      { id: 'all-wellness', label: 'All Wellness' },
      { id: 'yoga', label: 'Yoga' },
      { id: 'ayurveda', label: 'Ayurveda' },
      { id: 'meditation', label: 'Meditation' },
      { id: 'naturopathy', label: 'Naturopathy' },
    ],
  },
];

export default function ItineraryPlanner() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [depart, setDepart] = useState('');
  const [ret, setRet] = useState('');
  const [budget, setBudget] = useState('');
  const [travelers, setTravelers] = useState('');
  const [interests, setInterests] = useState('');
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [accommodation, setAccommodation] = useState('');
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const location = useLocation();

  // Prefill from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setOrigin(params.get('origin') || '');
    setDestination(params.get('destination') || '');
    setBudget(params.get('budget') || '');
    setTravelers(params.get('travelers') || '');
    setInterests(params.get('interests') || '');
    setAccommodation(params.get('accommodation') || '');
    const departParam = params.get('depart');
    const returnParam = params.get('return');
    if (departParam) setDepart(departParam);
    if (returnParam) setRet(returnParam);
  }, [location.search]);

  const toggle = (id: string) => setSelected((s) => ({ ...s, [id]: !s[id] }));

  const selectedTags = useMemo(() =>
    Object.entries(selected)
      .filter(([, v]) => v)
      .map(([k]) =>
        CATEGORIES.flatMap((c) => c.options).find((o) => o.id === k)?.label || k
      ),
    [selected]
  );

  const planSummary = useMemo(() => {
    const parts: string[] = [];
    if (origin) parts.push(`Start from ${origin}`);
    if (destination) parts.push(`head to ${destination}`);
    if (depart) parts.push(`depart on ${new Date(depart).toLocaleDateString()}`);
    if (ret) parts.push(`return on ${new Date(ret).toLocaleDateString()}`);
    if (budget) parts.push(`budget around ${budget}`);
    if (travelers) parts.push(`for ${travelers} traveler(s)`);
    if (selectedTags.length) parts.push(`focus on ${selectedTags.slice(0, 6).join(', ')}`);
    if (accommodation) parts.push(`stay preference: ${accommodation}`);
    if (interests) parts.push(`interests: ${interests}`);
    return parts.length ? parts.join('; ') + '.' : 'Fill the form and select interests to generate your itinerary.';
  }, [origin, destination, depart, ret, budget, travelers, selectedTags, interests, accommodation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="bg-[#212121] px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-white/90 hover:text-white">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-semibold">Itinerary Planner</span>
          </div>
          <Link to="/tour-guides" className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">Find Guides</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-12 gap-6">
        {/* Filters & Inputs */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Trip Basics</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Origin" className="border rounded-lg px-3 py-2 text-sm" />
              <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" className="border rounded-lg px-3 py-2 text-sm" />
              <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Budget" className="border rounded-lg px-3 py-2 text-sm" />
              <input value={travelers} onChange={(e) => setTravelers(e.target.value)} placeholder="Travelers" className="border rounded-lg px-3 py-2 text-sm" />
              <input type="date" value={depart} onChange={(e) => setDepart(e.target.value)} className="border rounded-lg px-3 py-2 text-sm" />
              <input type="date" value={ret} onChange={(e) => setRet(e.target.value)} className="border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Accommodation preference</label>
                <select value={accommodation} onChange={(e) => setAccommodation(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm bg-white">
                  <option value="">Any</option>
                  <option>Budget Stay</option>
                  <option>Mid-range Hotel</option>
                  <option>Luxury Resort</option>
                  <option>Homestay</option>
                  <option>Eco-lodge</option>
                </select>
              </div>
            </div>
            <textarea value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="Additional interests or constraints" className="mt-4 w-full border rounded-lg px-3 py-2 text-sm h-20" />
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-2">
            <h2 className="text-lg font-semibold px-4 pt-4 pb-2">Interests & Themes</h2>
            <div className="divide-y">
              {CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <button onClick={() => setOpen((o) => ({ ...o, [cat.id]: !o[cat.id] }))} className="w-full text-left px-4 py-3 hover:bg-slate-50">
                    <span className="text-base font-semibold text-red-600">{cat.title}</span>
                  </button>
                  {open[cat.id] && (
                    <div className="px-4 pb-4 grid sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
                      {cat.options.map((opt) => (
                        <label key={opt.id} className="inline-flex items-center gap-2 text-sm text-gray-800">
                          <input type="checkbox" checked={!!selected[opt.id]} onChange={() => toggle(opt.id)} />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Live Plan */}
        <section className="lg:col-span-7">
          <div className="sticky top-4 bg-white rounded-2xl shadow-xl border p-6 ring-1 ring-black/5">
            <h2 className="text-lg font-semibold mb-3">Your AI Plan Preview</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{planSummary}</p>

            {selectedTags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedTags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200">{t}</span>
                ))}
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm shadow-[0_2px_0_#1e3a8a]">Generate Detailed Plan</button>
              <button className="px-4 py-2 rounded-lg border text-sm">Save as Draft</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


