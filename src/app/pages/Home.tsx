import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Settings,
  Battery,
  Code2,
  Search,
  ChevronRight,
  Star,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImg = "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMG1vZGVybnxlbnwxfHx8fDE3NzI3MTQzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const batteryImg = "https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBiYXR0ZXJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI3ODEyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const diagnosticImg = "https://images.unsplash.com/photo-1746079074494-822fb0f83364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMGRpYWdub3N0aWMlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NzI4MDU4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const serviceImg = "https://images.unsplash.com/photo-1764743259058-a27178710a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvJTIwc2VydmljZSUyMGNlbnRlcnxlbnwxfHx8fDE3NzI4MDU4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  {
    icon: Settings,
    title: "EV Repair & Maintenance",
    desc: "Comprehensive repair and routine maintenance for all electric vehicle makes and models.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Battery,
    title: "Battery Life Testing",
    desc: "Advanced diagnostics to assess battery health, capacity, and performance optimization.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Code2,
    title: "Software Updates",
    desc: "OEM-grade firmware and software updates to keep your vehicle's systems current.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Search,
    title: "Vehicle Inspection",
    desc: "Thorough multi-point EV inspections for safety, compliance, and pre-purchase checks.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Zap,
    title: "Part Adaptation",
    desc: "Expert ECU coding and component adaptation for seamless part replacement and upgrades.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: Shield,
    title: "Hybrid Vehicle Service",
    desc: "Full-spectrum servicing for hybrid vehicles — both combustion and electric systems.",
    color: "bg-indigo-50 text-indigo-700",
  },
];

const brands = [
  { name: "BYD", abbr: "BYD" },
  { name: "NETA", abbr: "NETA" },
  { name: "Tesla", abbr: "TESLA" },
  { name: "VW ID", abbr: "VW ID" },
  { name: "Toyota", abbr: "TOYOTA" },
  { name: "Honda", abbr: "HONDA" },
  { name: "Hyundai", abbr: "HYUNDAI" },
  { name: "Kia", abbr: "KIA" },
  { name: "BMW", abbr: "BMW" },
  { name: "Mercedes", abbr: "MERCEDES" },
];

const stats = [
  { icon: Users, value: "500+", label: "Vehicles Serviced" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Star, value: "98%", label: "Customer Satisfaction" },
];

const testimonials = [
  {
    name: "Yohannes Tesfaye",
    role: "BYD Han Owner",
    review:
      "Key EV Solutions fixed my BYD's battery issue and updated the software. Incredible service — fast, professional, and affordable!",
    rating: 5,
  },
  {
    name: "Selamawit Bekele",
    role: "Tesla Model 3 Owner",
    review:
      "Finally a center in Addis that truly understands EVs. They handled my Tesla's software update perfectly.",
    rating: 5,
  },
  {
    name: "Dawit Alemu",
    role: "Toyota Prius Owner",
    review:
      "Great hybrid service! They diagnosed the issue other garages couldn't find. Highly recommended for hybrid owners.",
    rating: 5,
  },
];

export function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImg}
            alt="Electric vehicle charging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/90 via-[#0d1b3e]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Ethiopia's #1 EV Service Center
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, lineHeight: 1.15 }}>
              Expert Care for Your{" "}
              <span className="text-blue-400">Electric Vehicle</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Based in Addis Ababa, Key EV Solutions delivers world-class servicing, diagnostics, and software expertise for electric and hybrid vehicles across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30 group"
              >
                Book a Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all"
              >
                View Services
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick Features */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              {["Certified Technicians", "OEM-Level Diagnostics", "All EV Brands"].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-blue-200 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-blue-100 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              What We Offer
            </div>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Comprehensive EV Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From routine maintenance to advanced software diagnostics, we provide everything your electric vehicle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-50 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2" style={{ fontSize: "1.1rem" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-4 hover:gap-2 transition-all"
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Explore All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Mission Banner */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={serviceImg}
                  alt="Key EV Solutions service center"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100 text-sm mt-1">Happy EV Owners</div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                About Key EV Solutions
              </div>
              <h2 className="text-gray-900 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}>
                Driving the Electric Revolution in Ethiopia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Key EV Solutions is Addis Ababa's leading electric vehicle service center, established to meet the rapidly growing demand for professional EV maintenance and repair in Ethiopia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of certified technicians combines global EV expertise with a deep understanding of local conditions, offering services that range from basic inspections to advanced software diagnostics.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Certified EV master technicians",
                  "Latest OEM diagnostic tools",
                  "Multi-brand EV expertise",
                  "Transparent pricing & warranty",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Brands */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              Vehicle Brands We Service
            </div>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              All Major EV Brands
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From Chinese EVs to European and American brands — we service them all.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brands.map(({ name, abbr }) => (
              <div
                key={name}
                className="group flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-600 border border-gray-100 hover:border-blue-600 rounded-2xl p-6 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-3 transition-colors shadow-sm">
                  <span className="text-blue-700 group-hover:text-white font-bold text-xs tracking-wider transition-colors">
                    {abbr.slice(0, 4)}
                  </span>
                </div>
                <span className="text-gray-700 group-hover:text-white text-sm font-medium transition-colors">{name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            + Many more electric and hybrid vehicle brands
          </p>
        </div>
      </section>

      {/* Software Expertise Section */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                Software Expertise
              </div>
              <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}>
                Cutting-Edge Software & Diagnostic Solutions
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our technicians are trained in the latest EV software platforms, OBD protocols, and manufacturer-specific diagnostic systems — giving your vehicle the best possible care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Firmware Updates", desc: "Latest OEM software deployed safely" },
                  { title: "Battery Diagnostics", desc: "Cell-level health monitoring & testing" },
                  { title: "ECU Coding", desc: "Part adaptation & module programming" },
                  { title: "Remote Diagnostics", desc: "Real-time fault code analysis" },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={diagnosticImg}
                  alt="EV software diagnostics"
                  className="w-full h-96 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/60 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">OEM-Certified Diagnostics</div>
                    <div className="text-gray-300 text-xs">Compatible with 50+ EV platforms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Customer Reviews
            </div>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Trusted by EV Owners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, review, rating }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-700 text-sm">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{name}</div>
                    <div className="text-gray-400 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Ready to Service Your EV?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience Ethiopia's most trusted electric vehicle service center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
            >
              Book a Service <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
