import { useState, useEffect } from "react";
import {
  Users,
  // ShoppingBag,
  MessageCircle,
  TrendingUp,
  Sparkles,
  Image,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import { useJoinWaitlist } from "./features/waitlist/waitlistApi";
import toast from "react-hot-toast";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const { mutate, isPending } = useJoinWaitlist();

  const isDisabled =
    isPending || form.name.trim() === "" || form.email.trim() === "";

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    mutate(
      { email: form.email },
      {
        onSuccess: () => {
          toast.success("You’ve successfully joined the waitlist! 🎉");
          setSubmitted(true);
          setForm({ name: "", email: "" });
          setTimeout(() => setSubmitted(false), 3000);
        },
        onError: (error) => {
          const errorMessage =
            error.message || "Something went wrong. Please try again later";
          toast.error(errorMessage);
          console.error("Waitlist submission failed:", error);
        },
      }
    );
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          <img
            src="/ajobuy-logo-removebg-preview.png"
            alt="Ajobuy Logo"
            className="h-10 md:h-12 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-orange-600 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="hover:text-orange-600 transition"
            >
              Waitlist
            </button>
            <a href="#" className="hover:text-orange-600 transition">
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-gray-800 font-medium hover:text-orange-600 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="block w-full text-left text-gray-800 font-medium hover:text-orange-600 transition"
            >
              Waitlist
            </button>
            <a
              href="#"
              className="block w-full text-left text-gray-800 font-medium hover:text-orange-600 transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">
                Coming Soon to Nigeria
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shop Together,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
                Save Together
              </span>
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join Africa's first social shopping platform. Buy in groups, chat
              with sellers, and unlock amazing deals through community power.
            </p>

            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-orange-600 text-white font-bold px-10 py-4 rounded-full hover:bg-orange-700 hover:shadow-xl transition-all transform hover:scale-105"
            >
              Join the Waitlist →
            </button>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
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
                  <p className="text-gray-600 text-sm">Add your image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Join <span className="text-orange-600">Ajobuy?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={<Users className="w-10 h-10 text-orange-600" />}
              title="Group Buying Power"
              desc="Join forces with other buyers to unlock bulk discounts and save together."
            />
            <Feature
              icon={<MessageCircle className="w-10 h-10 text-orange-600" />}
              title="Chat & Connect"
              desc="Every product has a group chat. Ask questions, share reviews, and build trust before buying."
            />
            <Feature
              icon={<TrendingUp className="w-10 h-10 text-orange-600" />}
              title="Seller Analytics"
              desc="Sellers get insights on reach, engagement, and sales to grow their business."
            />
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-12 border-2 border-orange-200 shadow-2xl">
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
              Be among the first to experience social shopping when we launch in
              December 2025!
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
            <form className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-orange-50 border-2 border-orange-200 text-gray-900 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-orange-50 border-2 border-orange-200 text-gray-900 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition"
              />
              <button
                disabled={isDisabled}
                onClick={handleSubmit}
                className={`w-full font-bold text-lg py-4 rounded-xl transition-all transform ${
                  isDisabled
                    ? "bg-orange-300 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700 hover:shadow-xl hover:scale-105 text-white"
                }`}
              >
                {isPending ? "Submitting..." : "Secure My Spot"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 border-t border-gray-800 text-gray-400">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <img
            src="/ajobuy-logo-removebg-preview.png"
            alt="Ajobuy Logo"
            className="h-10 mx-auto mb-2"
          />
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-orange-500 transition">
              About Us
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Terms
            </a>
          </div>
          <p className="text-sm">
            © 2025 Ajobuy. Built with ❤️ by TinkerWell Softwares.
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
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
    <h4 className="font-bold text-xl text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default App;
