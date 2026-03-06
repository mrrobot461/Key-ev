import { Link } from "react-router";
import {
  Zap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d1b3e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Key EV Solutions</div>
                <div className="text-blue-300 text-xs tracking-widest uppercase">Ethiopia</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ethiopia's premier electric and hybrid vehicle service center. Trusted expertise for the future of mobility.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Our Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Book a Service", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                "EV Repair & Maintenance",
                "Battery Testing & Service",
                "Software Updates",
                "Vehicle Inspection",
                "Part Adaptation",
                "Hybrid Vehicle Service",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Bole Road, Addis Ababa,<br /> Ethiopia
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="tel:+251911000000" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  +251 911 000 000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:info@keyevsolutions.et" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  info@keyevsolutions.et
                </a>
              </li>
            </ul>
            <div className="mt-5 bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
              <p className="text-blue-300 text-xs font-medium">Working Hours</p>
              <p className="text-gray-300 text-xs mt-1">Mon – Sat: 8:00 AM – 6:00 PM</p>
              <p className="text-gray-300 text-xs">Sunday: 10:00 AM – 3:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Key EV Solutions. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Powered by Innovation · Built for Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
