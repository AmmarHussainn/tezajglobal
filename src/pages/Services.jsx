import React from 'react';
import Navbar from '../components/Navbar';

import { Truck, Package, Snowflake, Globe, Clock, Shield, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Services = () => {
  const mainServices = [
    {
      icon: <Globe />,
      title: 'Import & Distribution',
      description: 'Comprehensive import services with seamless distribution across Qatar',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80',
      features: [
        'Global supplier network',
        'Customs clearance handling',
        'Direct delivery to your location',
        'Real-time tracking'
      ]
    },
    {
      icon: <Snowflake />,
      title: 'Cold Storage Solutions',
      description: 'State-of-the-art temperature-controlled storage facilities',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80',
      features: [
        'Multi-temperature zones',
        '24/7 monitoring systems',
        'Humidity control',
        'Food safety certified'
      ]
    },
    {
      icon: <Package />,
      title: 'Bulk Supply',
      description: 'Large-scale distribution for commercial clients',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
      features: [
        'Volume discounts available',
        'Flexible delivery schedules',
        'Customized packaging',
        'Contract pricing options'
      ]
    },
    {
      icon: <Truck />,
      title: 'Logistics & Delivery',
      description: 'Reliable and timely delivery services across Qatar',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&q=80',
      features: [
        'Same-day delivery available',
        'Temperature-controlled vehicles',
        'GPS-tracked fleet',
        'Scheduled deliveries'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Shield />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage to ensure you receive only the best products'
    },
    {
      icon: <Clock />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service to address your needs anytime, anywhere'
    },
    {
      icon: <Users />,
      title: 'Custom Solutions',
      description: 'Tailored supply solutions designed specifically for your business requirements'
    },
    {
      icon: <TrendingUp />,
      title: 'Market Insights',
      description: 'Regular updates on market trends and pricing to help you make informed decisions'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 flex items-center ">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1920&q=80"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90">Comprehensive solutions for all your fresh produce needs</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 text-sm font-semibold">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions for businesses of all sizes
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <ServiceSection key={index} {...service} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Value-Added Services</h2>
            <p className="text-xl text-gray-600">Going beyond the basics to serve you better</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <AdditionalServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our streamlined process ensures quality and efficiency</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Sourcing"
              description="We source the finest produce from our trusted global network of suppliers"
            />
            <ProcessStep
              number="02"
              title="Quality Check"
              description="Every item undergoes rigorous quality inspection before acceptance"
            />
            <ProcessStep
              number="03"
              title="Storage"
              description="Products are stored in optimal conditions to maintain peak freshness"
            />
            <ProcessStep
              number="04"
              title="Delivery"
              description="Temperature-controlled delivery ensures products arrive in perfect condition"
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400">Trusted by Qatar's leading businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              image="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80"
              title="Supermarkets"
              description="Consistent supply of fresh produce for retail chains"
            />
            <IndustryCard
              image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
              title="Restaurants"
              description="Quality ingredients for culinary excellence"
            />
            <IndustryCard
              image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80"
              title="Hotels"
              description="Premium produce for hospitality industry leaders"
            />
           
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can meet your fresh produce needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="tel:+97431245783"
              className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-all"
            >
              Call: +974 31245783
            </a>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
};

const ServiceSection = ({ icon, title, description, image, features, reverse }) => (
  <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className={reverse ? 'lg:order-2' : ''}>
      <div className="text-emerald-600 mb-4">
        {React.cloneElement(icon, { size: 48 })}
      </div>
      <h3 className="text-3xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-lg text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className={reverse ? 'lg:order-1' : ''}>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>
    </div>
  </div>
);

const AdditionalServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-2 border-transparent hover:border-emerald-500">
    <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 40 })}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="relative">
    <div className="bg-emerald-100 rounded-2xl p-8 hover:bg-emerald-200 transition-all">
      <div className="text-5xl font-bold text-emerald-600 mb-4">{number}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const IndustryCard = ({ image, title, description }) => (
  <div className="relative group rounded-2xl overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default Services;