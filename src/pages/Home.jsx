import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Leaf, Award, Users, Package, Snowflake, Settings, ArrowRight, CheckCircle, TrendingUp, Globe, Shield, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1920&q=80',
      title: 'Premium Fresh Fruits',
      subtitle: 'From Farm to Your Table'
    },
    {
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80',
      title: 'Fresh Vegetables',
      subtitle: 'Quality You Can Trust'
    },
    {
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&q=80',
      title: 'Bulk Distribution',
      subtitle: 'Serving Qatar\'s Finest'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'values', 'services', 'shipments', 'market', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     <Navbar/>

      {/* Hero Section with Slideshow */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
                <span className="text-emerald-400 text-sm font-semibold">DELIVERING FRESHNESS SINCE ESTABLISHMENT</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                TAZEJ GLOBAL<br/>
                <span className="text-emerald-400">TRADING</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Leading importer and distributor of premium fresh produce in Qatar. Committed to quality, sustainability, and excellence in every delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide ? 'w-12 bg-emerald-400' : 'w-8 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={<Globe />} number="3" label="Office Locations" />
            <StatCard icon={<TrendingUp />} number="100+" label="Happy Clients" />
            <StatCard icon={<Package />} number="50+" label="Products Range" />
            <StatCard icon={<Award />} number="24/7" label="Customer Support" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
                <span className="text-emerald-700 text-sm font-semibold">ABOUT US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Your Trusted Partner in<br/>
                <span className="text-emerald-600">Fresh Produce</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TAZEJ GLOBAL TRADING W.L.L, based in Doha, Qatar, is a leading importer and distributor specializing in fresh fruits, vegetables, rice, meat, eggs, white flour and other quality items.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We prioritize freshness and quality while maintaining a sustainable sourcing approach. Our robust international supplier network ensures a consistent supply of premium produce to our clients across Qatar.
              </p>
              
              <div className="space-y-4 mb-8">
                <FeatureItem icon={<CheckCircle />} text="Premium Quality Assurance" />
                <FeatureItem icon={<CheckCircle />} text="Sustainable Sourcing Practices" />
                <FeatureItem icon={<CheckCircle />} text="International Supply Network" />
                <FeatureItem icon={<CheckCircle />} text="State-of-the-Art Cold Storage" />
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-105"
              >
                Learn More
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80"
                  alt="Fresh Produce"
                  className="rounded-2xl shadow-2xl object-cover h-64 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&q=80"
                  alt="Vegetables"
                  className="rounded-2xl shadow-2xl object-cover h-64 w-full mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80"
                  alt="Storage"
                  className="rounded-2xl shadow-2xl object-cover h-64 w-full -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
                  alt="Quality"
                  className="rounded-2xl shadow-2xl object-cover h-64 w-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
              <span className="text-emerald-400 text-sm font-semibold">OUR VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on integrity and driven by quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ValueCard
              number="01"
              title="Quality"
              description="At TAZEJ GLOBAL TRADING W.L.L we prioritize premium quality in every product, ensuring our customers receive only the best produce."
              icon={<Award className="w-12 h-12" />}
            />
            <ValueCard
              number="02"
              title="Integrity"
              description="Our commitment to honesty and transparency builds trust with partners, reinforcing our reputation in the fresh produce market."
              icon={<Shield className="w-12 h-12" />}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 text-sm font-semibold">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your fresh produce needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80"
              icon={<Leaf className="w-10 h-10" />}
              title="Fresh Fruits"
              description="Offering a variety of high-quality fresh fruits for clients."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80"
              icon={<Package className="w-10 h-10" />}
              title="Fresh Vegetables"
              description="Providing an extensive range of fresh vegetables direct from KPK Pakistan for distribution."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80"
              icon={<Globe className="w-10 h-10" />}
              title="Import & Wholesale"
              description="Efficient and reliable import and distribution services offered."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80"
              icon={<Settings className="w-10 h-10" />}
              title="Custom Solutions"
              description="Tailored supply solutions for various customer needs."
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&q=80"
              icon={<Package className="w-10 h-10" />}
              title="Dry Items"
              description="Rice, spice, white flour, eggs for diverse tastes."
            />
            <ServiceCard
              image="https://plus.unsplash.com/premium_photo-1663013522393-4c057b7a0b5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
              icon={<Snowflake className="w-10 h-10" />}
              title="Cold Storage"
              description="State-of-the-art cold storage for optimal freshness."
            />
          </div>
        </div>
      </section>

      {/* Bulk Shipments */}
      <section id="shipments" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
              <span className="text-emerald-400 text-sm font-semibold">BULK DISTRIBUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Large-Scale Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive bulk shipment services for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <BulkCard
              image="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80"
              title="Fresh Fruits Bulk Shipments"
              subtitle="Mango, Citrus & More"
              description="Offering a variety of high-quality fresh fruits bulk shipments for clients across the region."
            />
            <BulkCard
              image="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&q=80"
              title="Fresh Vegetables Bulk Shipments"
              subtitle="Premium Quality"
              description="Providing bulk shipments with an extensive range of fresh vegetables for distribution."
            />
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section id="market" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 text-sm font-semibold">WHO WE SERVE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Target Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              TAZEJ GLOBAL TRADING W.L.L proudly serves a diverse clientele across Qatar, including supermarkets, restaurants, hotels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MarketCard
              image="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80"
              icon={<Package />}
              title="Supermarkets"
            />
            <MarketCard
              image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
              icon={<Users />}
              title="Restaurants"
            />
            <MarketCard
              image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80"
              icon={<Globe />}
              title="Hotels"
            />
           
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 text-sm font-semibold">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders guiding TAZEJ GLOBAL TRADING's growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard name="M Ismail Niazi" role="CEO"  image="./ismail.png" />
            <TeamCard name="Irfan Khalid" role="Managing Director" image="./irfan.png" />
            <TeamCard name="Bilal Mustafa" role="Director Procurement" image="./bilalmustafa.png" />
            <TeamCard name="Ahsan Rafi" role="Director Import" image="./ahsanrafiq.png" />
            {/* <TeamCard name="S A Hider Zai" role="Operation and Finance Director" />
            <TeamCard name="Operations Team" role="Supply Chain & Logistics"  /> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
              <span className="text-emerald-400 text-sm font-semibold">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-400">
              Reach out to any of our office locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard
              country="Qatar"
              office="Doha Office"
              address="Al Mirqab Mall, Al Mirqab Al Jadeed Street, Zone:39, Street: 840, Building: 53, Doha, Qatar"
              phone="+974 31245783"
              gradient="from-emerald-600 to-teal-600"
            />
            <ContactCard
              country="Pakistan"
              office="Karachi Office"
              address="E-3, Farzana Building, Office No 1, Ground Floor, Shaheed e Millat Road, Karachi"
              phone="+92 321 8297672"
             gradient="from-emerald-600 to-teal-600"
            />
            <ContactCard
              country="Pakistan"
              office="Islamabad Office"
              address="House #1226, 3rd Road, G-10/4, Islamabad"
              phone="+92 346 5318763"
              gradient="from-emerald-600 to-teal-600"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="TAZEJ GLOBAL TRADING W.L.L" className="h-12 w-auto" />
              <div>
                <span className="text-xl font-bold text-white block">TAZEJ GLOBAL</span>
                <span className="text-xs text-emerald-400 tracking-widest">TRADING W.L.L</span>
              </div>
            </div>
            <p className="text-sm text-center mb-2">© 2024 Tazej Global Trading W.L.L. All rights reserved.</p>
            <p className="text-sm text-center text-emerald-400">Delivering Freshness, Building Trust</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const StatCard = ({ icon, number, label }) => (
  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-emerald-500 transition-all group">
    <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <div className="text-4xl font-bold text-white mb-2">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="text-emerald-600">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const ValueCard = ({ number, title, description, icon }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all group">
    <div className="flex items-start justify-between mb-6">
      <div className="text-emerald-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-5xl font-bold text-slate-700">{number}</span>
    </div>
    <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
  </div>
);

const ServiceCard = ({ image, icon, title, description }) => (
  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        {icon}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const BulkCard = ({ image, title, subtitle, description }) => (
  <div className="relative group rounded-2xl overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
      <p className="text-emerald-400 text-lg mb-3">{subtitle}</p>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const MarketCard = ({ image, icon, title }) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
    <div className="relative h-64">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="text-emerald-400 mb-3">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
  </div>
);

const TeamCard = ({ name, role, image }) => (
  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
    <div className="relative h-80 overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <Users className="w-24 h-24 text-emerald-400 opacity-50" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      {/* Decorative elements */}
      \
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-emerald-400 font-semibold text-lg mb-3">{role}</p>
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="h-px flex-1 bg-white/30"></div>
          <Award className="w-5 h-5 text-emerald-400" />
          <div className="h-px flex-1 bg-white/30"></div>
        </div>
      </div>
    </div>
  </div>
);
const ContactCard = ({ country, office, address, phone, gradient }) => (
  <div className={`bg-gradient-to-br ${gradient} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105`}>
    <div className="mb-6">
      <div className="inline-block px-3 py-1 bg-white/20 rounded-full mb-4">
        <span className="text-white text-sm font-semibold">{country}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{office}</h3>
    </div>
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
        <p className="text-white/90 leading-relaxed">{address}</p>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="w-6 h-6 text-white flex-shrink-0" />
        <p className="text-white/90 font-semibold">{phone}</p>
      </div>
    </div>
  </div>
);

export default Home;