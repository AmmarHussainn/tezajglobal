import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { Award, Globe, TrendingUp, Users, CheckCircle, Leaf, Target, Eye, Shield, Zap, Heart, ArrowRight, Package, Truck, Clock, Star } from 'lucide-react';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center     overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        </div>
        
        <div className="relative    max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
              <span className="text-emerald-400 text-sm font-semibold">ABOUT TAZEJ GLOBAL</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Delivering Excellence in<br/>
              <span className="text-emerald-400">Fresh Produce</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your trusted partner in premium quality fruits, vegetables, and food supplies across Qatar.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="text-emerald-400" size={20} />
                <span className="text-white font-semibold">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="text-emerald-400" size={20} />
                <span className="text-white font-semibold">Global Network</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="text-emerald-400" size={20} />
                <span className="text-white font-semibold">Trusted Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
                <span className="text-emerald-700 text-sm font-semibold">OUR STORY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Leading Qatar's Fresh Produce Industry
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">TAZEJ GLOBAL TRADING W.L.L</strong>, headquartered in Doha, Qatar, 
                  stands as a premier importer and distributor specializing in fresh fruits, vegetables, rice, meat, 
                  eggs, white flour, and other quality food products.
                </p>
                <p>
                  Our journey began with a simple yet powerful vision: to bring the world's finest fresh produce to 
                  Qatar's tables. Today, we've grown into one of the most trusted names in the industry, serving 
                  supermarkets, restaurants, hotels across the nation.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to quality, sustainability, and customer satisfaction. 
                  We've built a robust international supplier network that ensures consistent availability of premium 
                  products throughout the year.
                </p>
                <p>
                  From farm to table, every step of our process is carefully monitored to maintain the highest standards 
                  of freshness and quality. Our state-of-the-art cold storage facilities and temperature-controlled 
                  logistics ensure that products retain their natural goodness from the moment they arrive until they 
                  reach your doorstep.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <Package className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-slate-900 text-2xl mb-1">50+</h3>
                  <p className="text-sm text-gray-600">Products Range</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <Users className="w-10 h-10 text-emerald-600  mb-3" />
                  <h3 className="font-bold text-slate-900 text-2xl mb-1">100+</h3>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80"
                    alt="Fresh Produce"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80"
                    alt="Fruits"
                    className="rounded-2xl shadow-xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80"
                    alt="Vegetables"
                    className="rounded-2xl shadow-xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80"
                    alt="Storage"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
              <span className="text-emerald-400 text-sm font-semibold">OUR DIRECTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mission & Vision</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Guided by purpose, driven by excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-10 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <Target className="w-16 h-16 text-white mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/95 text-lg leading-relaxed">
                  To be Qatar's most reliable partner in fresh produce distribution by consistently delivering 
                  premium quality products while maintaining sustainable practices. We aim to build lasting 
                  relationships with our clients and suppliers through integrity, transparency, and exceptional service.
                </p>
                <div className="mt-6 flex items-center space-x-2">
                  <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                  <Zap className="text-white" size={20} />
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-10 rounded-3xl shadow-2xl border-2 border-emerald-500/30 transform group-hover:scale-105 transition-all duration-300">
                <Eye className="w-16 h-16 text-emerald-400 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/95 text-lg leading-relaxed">
                  To become the leading fresh produce distributor in the Middle East, recognized for innovation, 
                  quality, and sustainability. We envision a future where fresh, healthy food is accessible to all, 
                  and where our sustainable sourcing practices set new industry standards.
                </p>
                <div className="mt-6 flex items-center space-x-2">
                  <div className="h-1 w-12 bg-emerald-400/30 rounded-full"></div>
                  <Star className="text-emerald-400" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 text-sm font-semibold">WHAT DRIVES US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Award className="w-12 h-12" />}
              title="Quality Excellence"
              description="We never compromise on quality. Every product meets our rigorous standards before reaching our customers."
              color="emerald"
            />
            <ValueCard
              icon={<Shield className="w-12 h-12" />}
              title="Integrity"
              description="Honesty and transparency in all dealings. Building trust through ethical business practices."
              color="green"
            />
            <ValueCard
              icon={<Leaf className="w-12 h-12" />}
              title="Sustainability"
              description="Environmentally responsible sourcing and operations. Protecting our planet for future generations."
              color="green"
            />
            <ValueCard
              icon={<Heart className="w-12 h-12" />}
              title="Customer First"
              description="Your satisfaction is our priority. We go above and beyond to exceed expectations."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
                <span className="text-emerald-700 text-sm font-semibold">WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just another distributor. We're your partner in success, committed to 
                providing unmatched quality and service.
              </p>

              <div className="space-y-4">
                <FeaturePoint
                  icon={<CheckCircle className="w-6 h-6" />}
                  title="Premium Quality Assurance"
                  description="Rigorous quality checks at every stage ensure only the best products reach you"
                />
                <FeaturePoint
                  icon={<CheckCircle className="w-6 h-6" />}
                  title="Global Supplier Network"
                  description="Direct partnerships with trusted farms and suppliers worldwide"
                />
                <FeaturePoint
                  icon={<CheckCircle className="w-6 h-6" />}
                  title="Advanced Cold Storage"
                  description="State-of-the-art facilities maintain optimal freshness and quality"
                />
                <FeaturePoint
                  icon={<CheckCircle className="w-6 h-6" />}
                  title="Reliable Logistics"
                  description="Temperature-controlled transportation and on-time delivery guaranteed"
                />
                <FeaturePoint
                  icon={<CheckCircle className="w-6 h-6" />}
                  title="Competitive Pricing"
                  description="Best value without compromising on quality or service"
                />
                <FeaturePoint
                  icon={<CheckCircle className="w-6 h-6" />}
                  title="24/7 Customer Support"
                  description="Dedicated team ready to assist you anytime, anywhere"
                />
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Quality Assurance"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">100%</p>
                    <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied clients across Qatar who trust us for their fresh produce needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
          </div>
        </div>
      </section>

    
          {/* Footer */}
          <Footer/>
         
    </div>
  );
};

const ValueCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    emerald: 'from-emerald-500 to-teal-500 group-hover:from-emerald-600 group-hover:to-teal-600',
    blue: 'from-blue-500 to-indigo-500 group-hover:from-blue-600 group-hover:to-indigo-600',
    green: 'from-green-500 to-emerald-500 group-hover:from-green-600 group-hover:to-emerald-600',
    red: 'from-rose-500 to-pink-500 group-hover:from-rose-600 group-hover:to-pink-600'
  };

  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
      <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-2 border-gray-100 group-hover:border-transparent">
        <div className={`text-transparent bg-clip-text bg-gradient-to-br ${colorClasses[color]} mb-4 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FeaturePoint = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white transition-all">
    <div className="text-emerald-600 flex-shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default AboutUs;