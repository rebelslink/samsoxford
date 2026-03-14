import { AlertTriangle, Clock, FileText, ShieldCheck, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

const policies = [
  {
    icon: AlertTriangle,
    title: 'No Refunds or Returns',
    description: 'All sales are final. We do not offer refunds or accept returns on any products or services.',
    highlight: true,
  },
  {
    icon: Clock,
    title: '30-Day Pickup Rule',
    description: 'Repaired devices must be picked up within 30 days of completion. Devices not picked up after 30 days will be considered abandoned and may be disposed of or resold.',
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: 'Repair Warranty',
    description: 'We stand behind our repair work. If you experience any issues related to a repair we performed, please bring your device back and we\'ll make it right.',
    highlight: false,
  },
  {
    icon: FileText,
    title: 'Device Inspection',
    description: 'All devices are inspected at time of purchase and sale. Please inspect your device before leaving the store to ensure satisfaction.',
    highlight: false,
  },
];

export default function Policies() {
  return (
    <div className="pt-20 bg-[#050510] min-h-screen" data-testid="policies-page">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="font-accent text-[#39FF14] text-lg tracking-wide">KNOW BEFORE YOU GO</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            Store Policies
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            Please review our store policies below. We're committed to providing great service while maintaining fair and transparent business practices.
          </p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className={`rounded-xl p-8 border ${
                  policy.highlight
                    ? 'bg-[#FF3B30]/5 border-[#FF3B30]/30'
                    : 'bg-[#0A0A18] border-white/5'
                }`}
                data-testid={`policy-${policy.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      policy.highlight ? 'bg-[#FF3B30]/20' : 'bg-[#007AFF]/20'
                    }`}
                  >
                    <policy.icon
                      className={`w-6 h-6 ${
                        policy.highlight ? 'text-[#FF3B30]' : 'text-[#007AFF]'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{policy.title}</h3>
                    <p className="text-[#94A3B8] leading-relaxed">{policy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 md:py-20 bg-[#0A0A18]" data-testid="important-notice">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="w-16 h-16 bg-[#007AFF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-[#007AFF]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Questions About Our Policies?
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            We're happy to explain any of our policies in detail. Just give us a call or stop by the store.
          </p>
          <a href="tel:662-513-0004">
            <Button className="bg-[#007AFF] hover:bg-[#0066CC] text-white font-bold uppercase tracking-wide py-6 px-8 shadow-[0_0_15px_rgba(0,122,255,0.3)]" data-testid="policies-call-btn">
              <Phone className="w-5 h-5 mr-2" />
              Call 662-513-0004
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
