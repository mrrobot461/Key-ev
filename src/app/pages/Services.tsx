import { Link } from "react-router";
import {
  Battery,
  Code2,
  Search,
  Zap,
  Shield,
  Settings,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Cpu,
  Wrench,
  GitMerge,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const batteryImg = "https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBiYXR0ZXJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI3ODEyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const diagnosticImg = "https://images.unsplash.com/photo-1746079074494-822fb0f83364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMGRpYWdub3N0aWMlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NzI4MDU4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const mainServices = [
  {
    icon: Settings,
    title: "EV Repair & Maintenance",
    shortDesc: "Comprehensive care for your electric vehicle",
    longDesc:
      "Our certified technicians provide complete maintenance and repair services for all electric vehicle models. From routine servicing to complex electrical repairs, we handle everything your EV needs to stay in peak condition.",
    features: [
      "Motor and drivetrain repair",
      "Charging system diagnostics",
      "Brake system (regen & friction)",
      "Thermal management service",
      "Electrical system repair",
      "Suspension & steering",
    ],
    image: diagnosticImg,
    tag: "Most Popular",
  },
  {
    icon: Battery,
    title: "Battery Testing & Health",
    shortDesc: "Advanced battery diagnostics & optimization",
    longDesc:
      "Our battery health service uses cell-level diagnostics to evaluate your EV battery pack's condition, capacity, and longevity. We identify degradation, cell imbalances, and cooling issues before they become major problems.",
    features: [
      "State of Health (SoH) assessment",
      "Cell-by-cell voltage testing",
      "Capacity measurement",
      "Thermal imaging of battery pack",
      "BMS diagnostics & reset",
      "Charge cycle analysis",
    ],
    image: batteryImg,
    tag: "Advanced",
  },
];

const additionalServices = [
  {
    icon: Code2,
    title: "Software & Firmware Updates",
    desc: "Keep your vehicle's software current with the latest OEM releases. We perform safe, verified firmware updates for all major EV brands including BYD, Tesla, Neta, and Volkswagen ID Series.",
    points: ["OTA update management", "Version history review", "Feature unlocking", "Bug fix deployment"],
  },
  {
    icon: Search,
    title: "Vehicle Inspection",
    desc: "Our comprehensive multi-point EV inspection covers every critical system in your vehicle — from battery and motor to charging port and software. Perfect for pre-purchase checks and annual safety reviews.",
    points: ["120-point inspection checklist", "Safety system verification", "Pre-purchase inspection", "Insurance compliance"],
  },
  {
    icon: Cpu,
    title: "Part Adaptation & ECU Coding",
    desc: "When replacing components in modern EVs, parts often need to be electronically coded and adapted to the vehicle's ECU. Our technicians use manufacturer-level tools for accurate adaptation.",
    points: ["Module replacement coding", "VIN programming", "Sensor calibration", "Retrofit adaptation"],
  },
  {
    icon: GitMerge,
    title: "Hybrid Vehicle Services",
    desc: "Hybrid vehicles present unique challenges that require expertise in both combustion and electric systems. Our team is trained to handle all hybrid powertrains including series, parallel, and plug-in hybrids.",
    points: ["HV battery service", "Generator diagnostics", "Hybrid mode calibration", "Toyota/Honda hybrid systems"],
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    desc: "Proactive maintenance packages designed to maximize the lifespan and efficiency of your EV. Our scheduled service plans are tailored to your specific vehicle model and usage patterns.",
    points: ["Cabin air filter replacement", "Brake fluid service", "Coolant system check", "Tire rotation & alignment"],
  },
  {
    icon: Shield,
    title: "Warranty & Post-Sale Support",
    desc: "We stand behind our work. All repairs and services come with a service warranty. Our team remains available for post-service questions and any follow-up diagnostics.",
    points: ["Service warranty included", "Follow-up diagnostics", "Remote support available", "Detailed service reports"],
  },
];

const packages = [
  {
    name: "Basic EV Check",
    price: "From 1,500 ETB",
    features: [
      "30-point inspection",
      "Battery state check",
      "Fault code scan",
      "Service report",
    ],
    highlight: false,
  },
  {
    name: "Comprehensive Service",
    price: "From 4,500 ETB",
    features: [
      "120-point inspection",
      "Battery health report",
      "Software diagnostics",
      "Fluid top-up",
      "Brake inspection",
      "Priority booking",
    ],
    highlight: true,
  },
  {
    name: "Software Package",
    price: "From 2,800 ETB",
    features: [
      "Full software scan",
      "Firmware update",
      "ECU calibration",
      "Performance report",
      "Remote support",
    ],
    highlight: false,
  },
];

export function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0d1b3e] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4" />
            Our Services
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            Full-Spectrum EV Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From basic maintenance to complex diagnostics, Key EV Solutions offers a complete range of services for electric and hybrid vehicles.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map(({ icon: Icon, title, shortDesc, longDesc, features, image, tag }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {tag && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-lg">{title}</h3>
                      <p className="text-blue-600 text-sm">{shortDesc}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{longDesc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-5 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Book This Service <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
              Additional Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Specialized solutions designed to keep your electric vehicle performing at its best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map(({ icon: Icon, title, desc, points }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-gray-900 font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
              Service Packages
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transparent pricing designed to suit every EV owner's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map(({ name, price, features, highlight }) => (
              <div
                key={name}
                className={`rounded-2xl p-6 border transition-all ${
                  highlight
                    ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 scale-105"
                    : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-md"
                }`}
              >
                {highlight && (
                  <div className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-bold text-lg mb-1 ${highlight ? "text-white" : "text-gray-900"}`}>{name}</h3>
                <p className={`text-xl font-bold mb-5 ${highlight ? "text-blue-100" : "text-blue-600"}`}>{price}</p>
                <ul className="space-y-2.5 mb-6">
                  {features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${highlight ? "text-blue-100" : "text-gray-600"}`}>
                      <CheckCircle className={`w-4 h-4 shrink-0 ${highlight ? "text-white" : "text-blue-500"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Prices may vary based on vehicle model. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700 }}>
            Not sure which service you need?
          </h2>
          <p className="text-blue-100 mb-8">
            Contact us and our team will help diagnose your vehicle and recommend the best service plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            Contact Our Experts <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
