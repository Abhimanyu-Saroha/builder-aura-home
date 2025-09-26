import { Link, useNavigate } from 'react-router-dom';

export default function TourGuideApplication() {
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
              <h1 className="text-lg font-semibold text-gray-900">Tour Guide Registration</h1>
              <p className="text-xs text-gray-500">Complete all steps to become a certified tour guide</p>
            </div>
          </div>
          <Link to="/tour-guides" className="text-sm text-blue-600 hover:underline">Back to guides</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-12 gap-6">
        {/* Left sidebar - progress */}
        <aside className="col-span-12 md:col-span-3">
          <div className="bg-gradient-to-b from-blue-700 to-blue-900 rounded-xl border p-4 text-white">
            <h3 className="text-sm font-semibold mb-3">Registration Progress</h3>
            <ul className="space-y-3">
              {[
                'Personal Information',
                'Professional Details',
                'Certifications',
                'Background Check',
                'Review & Submit',
              ].map((label, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold ${idx === 0 ? 'bg-white text-blue-600' : 'bg-blue-800 text-white'}`}> {idx + 1} </div>
                  <div>
                    <p className={`text-sm ${idx === 0 ? 'text-white font-semibold' : 'text-blue-100'}`}>{label}</p>
                    {idx === 0 && (
                      <p className="text-xs text-blue-200">Currently filling this section</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 rounded-lg bg-blue-800/60 text-xs text-blue-100">
              Need help? Contact support for guidance through the process.
            </div>
          </div>
        </aside>

        {/* Main form */}
        <section className="col-span-12 md:col-span-9">
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">First Name</label>
                <input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your first name" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Last Name</label>
                <input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your last name" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Email Address</label>
                <input type="email" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="name@example.com" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Phone Number</label>
                <input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+1 (000) 000-0000" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-gray-600 mb-1">Address</label>
                <input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Street address" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">City</label>
                <input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="City" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">State</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select State</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">ZIP Code</label>
                <input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="12345" />
              </div>
            </div>

            <h3 className="mt-8 text-base font-semibold text-gray-900">Identity Verification</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Government ID (Front)',
                'Government ID (Back)',
                'Professional Photo',
                'Work/License Certificate',
              ].map((label, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">{label}</p>
                  <button className="px-3 py-2 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Upload</button>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-2">Language Spoken</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  {['English','Spanish','French','German'].map((l) => (
                    <label key={l} className="inline-flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>{l}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2">Years of Experience</p>
                <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select experience level</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button className="px-4 py-2 rounded-lg border text-sm text-gray-700">Save as Draft</button>
              <button onClick={() => navigate('/tour-guides/apply/professional')} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">Submit Application</button>
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


