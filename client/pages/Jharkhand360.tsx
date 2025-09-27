import React from "react";

export default function Jharkhand360() {
  const sites = [
    {
      id: "bhuvaneshwari",
      title: "Bhuvaneshwari Temple",
      description: "Open immersive AR/VR experience",
      active: true,
      href: "https://www.spatial.io/s/lololoookla69s-Digital-Area-68d7ccd331014a2e50a11517",
    },
    {
      id: "deori-temple",
      title: "Deori Temple",
      description: "VR experience coming soon",
      active: false,
    },
    {
      id: "netarhat-dam",
      title: "Netarhat Dam",
      description: "VR experience coming soon",
      active: false,
    },
    {
      id: "dassam-falls",
      title: "Dassam Falls",
      description: "VR experience coming soon",
      active: false,
    },
    {
      id: "hazaribagh-park",
      title: "Hazaribagh National Park",
      description: "VR experience coming soon",
      active: false,
    },
    {
      id: "birsa-zoo",
      title: "Birsa Zoological Park",
      description: "VR experience coming soon",
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page header content; global nav already includes 'Jharkhand360' linking to this route */}
      <section className="bg-gradient-to-b from-white via-orange-100 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-rowdies text-black mb-2">Jharkhand360</h1>
            <p className="text-base md:text-lg text-gray-700 font-readex">
              Explore immersive AR/VR experiences across Jharkhand
            </p>
          </div>

          {/* Responsive cards grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Tourist site AR/VR cards"
          >
            {sites.map((site) => (
              <article
                key={site.id}
                className="bg-white rounded-2xl shadow-sm border border-black/10 hover:shadow-md transition-colors"
                role="region"
                aria-labelledby={`${site.id}-title`}
              >
                <div className="p-6">
                  <h3
                    id={`${site.id}-title`}
                    className="text-xl font-rowdies text-black mb-2"
                  >
                    {site.title}
                  </h3>
                  <p className="text-gray-700 font-readex mb-4">
                    {site.description}
                  </p>

                  {/* Action button */}
                  {site.active ? (
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open AR/VR for ${site.title} (opens in a new tab)`}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white font-medium shadow-[0_3px_0_#000] hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Open AR/VR
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      title="VR experience coming soon"
                      aria-label={`VR experience coming soon for ${site.title}`}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-gray-300 text-gray-600 font-medium cursor-not-allowed opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    >
                      Open AR/VR
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}