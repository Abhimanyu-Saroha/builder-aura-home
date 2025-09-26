interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-green to-eco-green-dark flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-rowdies text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 font-readex">
            {description}
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Coming Soon!
          </h2>
          <p className="text-white/80 mb-6">
            We're working hard to bring you this amazing feature. Stay tuned for updates!
          </p>
          <button className="bg-white text-eco-green font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
            Notify Me When Ready
          </button>
        </div>
        
        <div className="mt-8">
          <p className="text-white/70 text-sm">
            Continue exploring Jharkhand's sustainable tourism opportunities while we build this feature.
          </p>
        </div>
      </div>
    </div>
  );
}
