import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Zap,
  MessageSquare,
} from "lucide-react";

const brands = [
  "BYD", "NETA", "Tesla", "Volkswagen ID Series", "Toyota", "Honda",
  "Hyundai", "Kia", "BMW", "Mercedes-Benz", "Other",
];

const services = [
  "EV Repair & Maintenance",
  "Battery Testing & Health",
  "Software / Firmware Update",
  "Vehicle Inspection",
  "Part Adaptation & ECU Coding",
  "Hybrid Vehicle Service",
  "Preventive Maintenance",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0d1b3e] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            <MessageSquare className="w-4 h-4" />
            Contact Us
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            Book a Service or Get in Touch
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Our team is ready to assist you with any EV service, inquiry, or appointment request.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info Cards */}
            <div className="space-y-5">
              <h2 className="text-gray-900 mb-6" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Visit or Call Us
              </h2>

              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  lines: ["Bole Road, Near Edna Mall", "Addis Ababa, Ethiopia"],
                },
                {
                  icon: Phone,
                  title: "Phone Numbers",
                  lines: ["+251 911 000 000", "+251 922 000 000"],
                  links: ["tel:+251911000000", "tel:+251922000000"],
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["info@keyevsolutions.et", "support@keyevsolutions.et"],
                  links: ["mailto:info@keyevsolutions.et", "mailto:support@keyevsolutions.et"],
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  lines: ["Mon – Sat: 8:00 AM – 6:00 PM", "Sunday: 10:00 AM – 3:00 PM"],
                },
              ].map(({ icon: Icon, title, lines, links }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1">{title}</h4>
                    {lines.map((line, i) => (
                      links ? (
                        <a
                          key={i}
                          href={links[i]}
                          className="block text-gray-500 text-sm hover:text-blue-600 transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-500 text-sm">{line}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}

              {/* Quick Badges */}
              <div className="bg-blue-600 rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-blue-200" />
                  <span className="font-semibold">Fast Response</span>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We typically respond to all service inquiries within 2 hours during business hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-gray-900 text-xl font-bold mb-2">Booking Request Sent!</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you, <strong>{form.name}</strong>! We've received your service request and will contact you within 2 hours to confirm your appointment.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", brand: "", service: "", message: "" });
                      }}
                      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-gray-900 mb-6" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                      Book a Service Appointment
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Abebe Kebede"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+251 9XX XXX XXX"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="abebe@email.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-300"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1.5">
                            Vehicle Brand <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="brand"
                            value={form.brand}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 bg-white"
                          >
                            <option value="">Select your vehicle brand</option>
                            {brands.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1.5">
                            Service Required <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 bg-white"
                          >
                            <option value="">Select service type</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1.5">
                          Message / Additional Details
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe your issue or any additional information about your vehicle..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-colors shadow-sm hover:shadow-md text-sm"
                      >
                        <Send className="w-4 h-4" />
                        Submit Service Request
                      </button>

                      <p className="text-gray-400 text-xs text-center">
                        By submitting, you agree to be contacted by our team. We respect your privacy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white pb-0">
        <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-gray-800 font-bold text-lg mb-1">Key EV Solutions</h3>
            <p className="text-gray-500 text-sm">Bole Road, Near Edna Mall, Addis Ababa</p>
            <a
              href="https://maps.google.com/?q=Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
