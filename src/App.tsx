import { useState } from "react";
import {
  Users,
  ShoppingBag,
  MessageCircle,
  TrendingUp,
  Sparkles,
  Image,
} from "lucide-react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Waitlist Entry:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Logo */}
          <div className="text-center mb-12">
            <img
              src="/src/assets/ajobuy-logo-removebg-preview.png"
              alt="Ajobuy Logo"
              className="h-16 md:h-20 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">
                  Coming Soon to Nigeria
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Shop Together,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
                  Save Together
                </span>
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join Africa's first social shopping platform. Buy in groups,
                chat with sellers, and unlock amazing deals through community
                power.
              </p>

              <a
                href="#waitlist"
                className="inline-block bg-orange-600 text-white font-bold px-10 py-4 rounded-full hover:bg-orange-700 hover:shadow-xl transition-all transform hover:scale-105"
              >
                Join the Waitlist →
              </a>
            </div>

            {/* Right side - App Screenshot Placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-orange-200/20 blur-3xl"></div>

                {/* 
                  ==========================================
                  📱 APP SCREENSHOT PLACEHOLDER 
                  ==========================================
                  
                  TO ADD YOUR IMAGE:
                  Replace this entire div with:
                  
                  <img 
                    src="/src/assets/your-app-screenshot.png" 
                    alt="Ajobuy App Preview" 
                    className="relative w-64 md:w-80 h-auto rounded-3xl shadow-2xl border-4 border-white"
                  />
                  
                  ==========================================
                */}
                <div className="relative w-64 md:w-80 bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl h-96 flex flex-col items-center justify-center space-y-4">
                    <Image
                      className="w-20 h-20 text-orange-400"
                      strokeWidth={1.5}
                    />
                    <div className="text-center">
                      <p className="text-orange-700 font-semibold text-lg mb-1">
                        App Screenshot
                      </p>
                      <p className="text-gray-600 text-sm">
                        Add your image here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Card Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <div className="text-5xl mb-6">✨</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Community-Powered Shopping Reimagined
            </h3>
            <p className="text-white/95 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect with other buyers to unlock better prices. Access group
              deals, real-time chat with sellers, and exclusive discounts — all
              in one social shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Join <span className="text-orange-600">Ajobuy?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={<Users className="w-10 h-10 text-orange-600" />}
              title="Group Buying Power"
              desc="Join forces with other buyers to unlock bulk discounts and save on every purchase together."
            />
            <Feature
              icon={<MessageCircle className="w-10 h-10 text-orange-600" />}
              title="Chat & Connect"
              desc="Every product has a group chat. Ask questions, share reviews, and build trust before buying."
            />
            <Feature
              icon={<TrendingUp className="w-10 h-10 text-orange-600" />}
              title="Seller Analytics"
              desc="Sellers get powerful insights on reach, engagement, and sales to grow their business."
            />
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-orange-200 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">
                  Limited Early Access
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Join the <span className="text-orange-600">Waitlist</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Be among the first to experience social shopping when we launch
                in December 2025!
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <p className="text-green-700 font-bold text-xl mb-2">
                  Welcome to Ajobuy!
                </p>
                <p className="text-gray-700">
                  You're on the list. We'll notify you when we launch!
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-orange-50 border-2 border-orange-200 text-gray-900 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-orange-50 border-2 border-orange-200 text-gray-900 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-700 hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Secure My Spot
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By joining, you'll get exclusive early access and special
                  launch offers
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="text-xl font-bold text-orange-600">Ajobuy</div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm space-y-2">
            <p>© 2025 Ajobuy — Built with ❤️ by TinkerWell Softwares</p>
            <p>
              Say hello at{" "}
              <a
                href="mailto:hello@ajobuy.com"
                className="text-orange-600 hover:underline"
              >
                hello@ajobuy.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="text-center p-6 bg-white rounded-2xl border-2 border-orange-200 hover:border-orange-600 transition-all hover:transform hover:scale-105 shadow-lg">
    <div className="flex justify-center mb-4">{icon}</div>
    <div>
      <h4 className="font-bold text-xl text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default App;
