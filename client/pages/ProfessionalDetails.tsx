import { Link, useNavigate } from 'react-router-dom';

export default function ProfessionalDetails() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Professional Details & Certifications</h1>
              <p className="text-xs text-gray-500">Provide professional information and upload required certificates</p>
            </div>
          </div>
          <div className="text-sm space-x-4">
            <Link to="/tour-guides" className="text-blue-600 hover:underline">Support</Link>
            <Link to="/tour-guides" className="text-gray-700 hover:underline">Sign in</Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-12 gap-6">
        {/* Left sidebar - progress */}
        <aside className="col-span-12 md:col-span-3">
          <div className="bg-gradient-to-b from-blue-700 to-blue-900 rounded-xl p-4 text-white">
            <h3 className="text-sm font-semibold mb-3">Registration Progress</h3>
            <ul className="space-y-3">
              {[
                'Personal Information',
                'Professional Details',
                'Certifications',
                'Background Check',
                'Review & Submit',
              ].map((label, idx) => (
                <li key={idx} className={`flex items-center justify-between text-xs ${idx===1? 'font-semibold' : 'opacity-80'}`}>
                  <span className="truncate">{label}</span>
                  <span className={`ml-3 w-5 h-5 rounded-full flex items-center justify-center ${idx<=1? 'bg-white text-blue-700' : 'bg-blue-800 text-white'}`}>{idx+1}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 rounded-lg bg-blue-800/60 text-[11px]">
              Need help? Contact support for guidance through the process.
            </div>
          </div>
        </aside>

        {/* Main content */}
        <section className="col-span-12 md:col-span-9">
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-base font-semibold text-gray-900">Professional Information</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Select experience level</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>0 - 1 year</option>
                  <option>1 - 3 years</option>
                  <option>3 - 5 years</option>
                  <option>5+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Specialization</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select specialization</option>
                  <option>Historical tours</option>
                  <option>Adventure tours</option>
                  <option>Cultural tours</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-700 mb-2">Language Spoken</p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                {['English','Hindi','French','German'].map((l) => (
                  <label key={l} className="inline-flex items-center space-x-2">
                    <input type="radio" name="lang" />
                    <span>{l}</span>
                  </label>
                ))}
              </div>
            </div>

            <h3 className="mt-8 text-base font-semibold text-gray-900">Required Certifications</h3>
            <div className="mt-4 space-y-4">
              {[
                'Tour Guide License',
                'First Aid Certification',
                'Liability Insurance',
                'Additional Certifications',
              ].map((label, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">{label}</p>
                    <span className="text-[10px] uppercase tracking-wide text-red-500 font-semibold">Required</span>
                  </div>
                  <div className="mt-3 border-2 border-dashed rounded-lg p-4 text-xs text-gray-500">
                    Drag & drop your files here, or <button className="text-blue-600">browse files</button>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-base font-semibold text-gray-900">Background Verification</h3>
            <div className="mt-3 rounded-lg border p-4 bg-yellow-50 text-yellow-800 text-xs">
              A thorough check ensures a trusted background check. This process usually takes 2-5 business days.
            </div>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <label className="flex items-center space-x-2"><input type="checkbox" /><span>Agree to background check</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" /><span>Authorize verification of credentials</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" /><span>Accept Terms & Conditions</span></label>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button onClick={() => navigate('/tour-guides/apply')} className="px-4 py-2 rounded-lg border text-sm text-gray-700">Previous Step</button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">Continue to Review</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-gray-500">
          <div>TourGuide Pro</div>
          <div className="space-x-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


