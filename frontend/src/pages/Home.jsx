import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewCard } from '../components/ReviewCard';
import { Smartphone, Wrench, RefreshCw, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const services = [
  {
    icon: Smartphone,
    title: 'Prepaid Mobile Plans',
    description: 'Activations & refills for all major carriers',
    image: 'https://images.unsplash.com/photo-1623307019152-1ee797183f1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxwcmVwYWlkJTIwc2ltJTIwY2FyZCUyMGRhdGElMjBwbGFuJTIwbmVvbnxlbnwwfHx8fDE3NzM1MTkxNjR8MA&ixlib=rb-4.1.0&q=85',
    items: ['Sprint', 'Boost Mobile', 'AT&T', 'T-Mobile', 'Verizon', 'Metro PCS'],
    accent: true,
  },
  {
    icon: Wrench,
    title: 'Electronics Repair',
    description: 'Fast, expert repairs with quality parts',
    image: 'https://images.unsplash.com/photo-1636376138153-ff3eac69f862?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxicm9rZW4lMjBpcGhvbmUlMjBzY3JlZW4lMjByZXBhaXIlMjBjbG9zZSUyMHVwJTIwZGFyayUyMG1vZGV8ZW58MHx8fHwxNzczNTE5MTY0fDA&ixlib=rb-4.1.0&q=85',
    items: ['iPhone', 'Samsung', 'Android', 'Tablets', 'Screen Repair', 'Battery Replacement'],
  },
  {
    icon: RefreshCw,
    title: 'Buy & Sell',
    description: 'Trade in your old devices for cash',
    image: 'https://images.unsplash.com/photo-1614330315994-efd5ea8163a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxoYW5kJTIwaG9sZGluZyUyMGNhc2glMjBhbmQlMjBzbWFydHBob25lJTIwZXhjaGFuZ2V8ZW58MHx8fHwxNzczNTE5MTY2fDA&ixlib=rb-4.1.0&q=85',
    items: ['Phones', 'Tablets', 'Laptops', 'Electronics'],
  },
  {
    icon: Package,
    title: 'Other Products',
    description: 'Everything you need under one roof',
    image: 'https://images.unsplash.com/photo-1512659348068-1a36e9d2253e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB2YXBlJTIwc2hvcCUyMGludGVyaW9yJTIwbmVvbiUyMGxpZ2h0cyUyMHNtb2tlfGVufDB8fHx8MTc3MzUxOTE2NXww&ixlib=rb-4.1.0&q=85',
    items: ['Phone Cases', 'Chargers', 'Speakers', 'Tobacco', 'Vapes', 'Apparel'],
  },
];

const reviews = [
  {
    name: 'Princess Allen',
    date: '3 months ago',
    review: 'Sam had my phone finished in 20 minutes or less. My frantic day turned into a Blessed Day when I entered Sam\'s Phone Repair. Thank you for being a blessing!',
  },
  {
    name: 'Kimberly Leija',
    date: '5 months ago',
    review: 'I love Sam!! He\'s affordable and fast. I was in and out on my lunch break. I go straight to him from bill pay to phone repair. Sam is amazing for real!',
  },
  {
    name: 'Logan Henson',
    date: '1 year ago',
    review: 'I\'ve bought about 4 cases from here and I appreciate the owner\'s positive attitude each time. He will pull down every case on the wall. Good pricing and super honest.',
  },
  {
    name: 'Ilianna Ikonomou',
    date: '6 months ago',
    review: 'THANK YOU SAM!! He was very fast, took 15 minutes and fixed my phone screen! 100% recommend I am so grateful!',
  },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#050510]" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-accent text-[#39FF14] text-lg tracking-wide">WHAT WE OFFER</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-[#94A3B8] max-w-2xl">
              From phone repairs to prepaid plans, we've got everything you need. Quality service, fair prices, and a smile.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`animate-fade-in-up ${index === 0 ? 'md:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} link="/products" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button className="bg-transparent border-2 border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white font-bold uppercase tracking-wide px-8 py-6" data-testid="view-all-services-btn">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-[#0A0A18]" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-accent text-[#39FF14] text-lg tracking-wide">INSIDE THE STORE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Take a Look Around
            </h2>
            <p className="text-[#94A3B8] max-w-2xl">
              Step inside Sam's — packed with phones, accessories, and everything you need.
            </p>
          </div>

          {/* Gallery Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://customer-assets.emergentagent.com/job_phones-tobacco-shop/artifacts/8qvql0lk_store_gallery.png"
              alt="Sam's Phones & Tobacco Store Gallery"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A18] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-[#050510]" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-accent text-[#39FF14] text-lg tracking-wide">CUSTOMER LOVE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              What People Say
            </h2>
            <p className="text-[#94A3B8] max-w-2xl">
              Don't just take our word for it — hear from our satisfied customers.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/place/Sam's+Cell+Phones+Accessories+%26+Tbcc/@34.3619,-89.5561,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d34.3619!4d-89.5539"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#007AFF] font-medium hover:text-[#0066CC] transition-colors"
              data-testid="google-reviews-link"
            >
              See all reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
