import { Link } from "react-router";
import {
  Award,
  Users,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Heart,
  Globe,
  Lightbulb,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const serviceImg = "https://images.unsplash.com/photo-1764743259058-a27178710a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvJTIwc2VydmljZSUyMGNlbnRlcnxlbnwxfHx8fDE3NzI4MDU4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const ethiopiaImg = "https://images.unsplash.com/photo-1771350386143-20e64673331e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYSUyMEFkZGlzJTIwQWJhYmElMjBtb2Rlcm4lMjBjaXR5fGVufDF8fHx8MTc3MjgwNTg1OHww&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "Transparent pricing, honest diagnostics, and no unnecessary upselling — ever.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We invest continuously in the latest EV tools, training, and technology.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Your satisfaction drives everything we do. We treat every vehicle like it's our own.",
  },
  {
    icon: Globe,
    title: "Local Impact",
    desc: "We're proud to grow Ethiopia's EV ecosystem and support sustainable mobility.",
  },
];

const team = [
  {
    name: "Kebede Alemu",
    role: "Chief Technical Officer",
    expertise: "15+ years in EV systems",
    init: "KA",
  },
  {
    name: "Mekdes Haile",
    role: "Lead Software Engineer",
    expertise: "OEM firmware specialist",
    init: "MH",
  },
  {
    name: "Biruk Tadesse",
    role: "Senior EV Technician",
    expertise: "Battery & drivetrain expert",
    init: "BT",
  },
  {
    name: "Tigist Bekele",
    role: "Hybrid Systems Specialist",
    expertise: "Toyota & Honda hybrid systems",
    init: "TB",
  },
];

const milestones = [
  { year: "2019", event: "Key EV Solutions founded in Addis Ababa" },
  { year: "2020", event: "First OEM-level diagnostic system installed" },
  { year: "2021", event: "Expanded to service BYD and NETA vehicles" },
  { year: "2022", event: "Added hybrid vehicle service division" },
  { year: "2023", event: "Opened second workshop in Bole District" },
  { year: "2024", event: "Reached 500+ satisfied EV customers" },
  { year: "2025", event: "Launched advanced software update services" },
];

export function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0d1b3e] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            <Users className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            Pioneers of EV Care in Ethiopia
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are a passionate team of engineers and technicians dedicated to advancing electric vehicle culture in Ethiopia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-gray-900 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}>
                Born From a Vision for Cleaner Transportation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Key EV Solutions was founded in 2019 in Addis Ababa with a singular mission: to provide Ethiopian EV owners with the same world-class service they'd find in any major global city.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                As electric vehicles began entering Ethiopia's roads in growing numbers — led by brands like BYD, NETA, and the Volkswagen ID Series — we recognized a critical gap in the market. There was no dedicated, technically capable service center equipped to handle the unique demands of EV technology.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, Key EV Solutions stands as Ethiopia's most trusted EV service destination, equipped with OEM-grade diagnostic systems, trained software specialists, and a team passionate about the electric future.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Vehicles Serviced" },
                  { value: "5+", label: "Years of Experience" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "20+", label: "EV Brands Supported" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700">{value}</div>
                    <div className="text-gray-500 text-sm mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-64">
                <ImageWithFallback
                  src={serviceImg}
                  alt="Key EV Solutions service center"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <ImageWithFallback
                  src={ethiopiaImg}
                  alt="Addis Ababa modern city"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
              Our Core Values
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything we do is guided by a commitment to excellence, honesty, and sustainable innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-gray-900 font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
              Meet the Experts
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our certified engineers and technicians bring global expertise to every vehicle we service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, expertise, init }) => (
              <div
                key={name}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-100 transition-all group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">{init}</span>
                </div>
                <h3 className="text-gray-900 font-bold mb-1">{name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{role}</p>
                <p className="text-gray-400 text-xs">{expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0d1b3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-full text-sm mb-4">
              <Award className="w-4 h-4" />
              Our Journey
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-blue-800 sm:-translate-x-px" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, index) => (
                <div
                  key={year}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1.5 sm:-translate-x-1.5 top-1.5 border-2 border-blue-300" />
                  <div className={`pl-10 sm:pl-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:pl-8"}`}>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 hover:bg-blue-500/30 transition-colors">
                      <div className="text-blue-400 font-bold text-sm mb-1">{year}</div>
                      <div className="text-white text-sm">{event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-12 h-12 text-white/60 mx-auto mb-6" />
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700 }}>
            Our Mission
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            "To accelerate Ethiopia's transition to clean mobility by providing world-class electric vehicle services that are accessible, reliable, and built on genuine technical expertise."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Our Services <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
