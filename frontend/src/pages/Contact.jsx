import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Button } from '../components/ui/button';

export default function Contact() {
  return (
    <div className="pt-20 bg-[#050510] min-h-screen" data-testid="contact-page">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="font-accent text-[#39FF14] text-lg tracking-wide">GET IN TOUCH</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            Contact Us
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            Have a question or need service? Reach out to us! We're always happy to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info & Map */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a href="tel:662-513-0004" className="block" data-testid="contact-phone-card">
                  <div className="bg-[#0A0A18] border border-white/5 rounded-xl p-6 hover:border-[#007AFF]/50 transition-colors h-full">
                    <div className="w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                    <p className="text-[#007AFF] font-medium">662-513-0004</p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1418+W+Jackson+Ave+Oxford+MS+38655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-testid="contact-address-card"
                >
                  <div className="bg-[#0A0A18] border border-white/5 rounded-xl p-6 hover:border-[#39FF14]/50 transition-colors h-full">
                    <div className="w-12 h-12 bg-[#39FF14] rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                    <p className="text-[#94A3B8] text-sm">
                      1418 W. Jackson Ave.<br />
                      Oxford, MS 38655
                    </p>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="bg-[#0A0A18] border border-white/5 rounded-xl p-6" data-testid="contact-hours">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#007AFF]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#007AFF]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Store Hours</h3>
                </div>
                <p className="text-[#94A3B8]">
                  Open daily for your convenience. Call for current hours.
                </p>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden border border-white/5" data-testid="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.5!2d-89.557!3d34.362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1418%20W%20Jackson%20Ave%2C%20Oxford%2C%20MS%2038655!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sam's Phones & Tobacco Location"
                  className="grayscale-[50%] contrast-125"
                />
              </div>

              {/* Directions Button */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1418+W+Jackson+Ave+Oxford+MS+38655"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-transparent border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black font-bold uppercase tracking-wide py-6" data-testid="get-directions-btn">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-[#94A3B8]">
                  Have a question or feedback? Fill out the form below and we'll get back to you.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
