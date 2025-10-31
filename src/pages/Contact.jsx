import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe, MessageSquare, User, Building, Package, ArrowRight, Rss } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock Navbar component


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      country: "Qatar",
      office: "Doha Office",
      address: "Al Mirqab Mall, Al Mirqab Al Jadeed Street, Zone:39, Street: 840, Building: 53, Doha, Qatar",
      phone: "+974 31245783",
      email: "ahsan@tazejglobal.com",
      email2: "irfan@tazejglobal.com",
      hours: "Sun - Thu: 8:00 AM - 6:00 PM",
       website : "www.tazejglobal.com",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80"
    },
    {
      country: "Pakistan",
      office: "Karachi Office",
      address: "E-3, Farzana Building, Office No 1, Ground Floor, Shaheed e Millat Road, Karachi",
      phone: "+92 321 8297672",
        email: "ahsan@tazejglobal.com",
      email2: "irfan@tazejglobal.com",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
      website : "www.tazejglobal.com",
      image: "https://images.unsplash.com/photo-1606511490662-b2c5be7d95a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2025"
    },
    {
      country: "Pakistan",
      office: "Islamabad Office",
      address: "House #1226, 3rd Road, G-10/4, Islamabad",
      phone: "+92 346 5318763",
       email: "ahsan@tazejglobal.com",
      email2: "irfan@tazejglobal.com",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
      website : "www.tazejglobal.com",
      image: "https://images.unsplash.com/photo-1608020932658-d0e19a69580b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    }
  ];

  const contactReasons = [
    {
      icon: <Package />,
      title: "Bulk Orders",
      description: "Large-scale distribution inquiries"
    },
    {
      icon: <Building />,
      title: "Partnership",
      description: "Business collaboration opportunities"
    },
    {
      icon: <Globe />,
      title: "International",
      description: "Global sourcing inquiries"
    },
    {
      icon: <MessageSquare />,
      title: "Support",
      description: "General questions and support"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
    <Navbar/>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
            <span className="text-emerald-400 text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to help. Reach out to us through any of our office locations or send us a message
          </p>
        </div>
      </section>

      {/* Quick Contact Reasons */}
      {/* <section className="relative -mt-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactReasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-emerald-500 group">
                <div className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform">
                  {React.cloneElement(reason.icon, { size: 32 })}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Contact Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
          
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
                <span className="text-emerald-700 text-sm font-semibold">SEND MESSAGE</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll respond shortly.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                          placeholder="+974 1234 5678"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="bulk-order">Bulk Order Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="product">Product Information</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              )}
            </div>

            
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
                <span className="text-emerald-700 text-sm font-semibold">CONTACT INFO</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? We're here to help. Contact us through any of these channels.
              </p>

              <div className="space-y-6">
                <ContactInfoCard
                  icon={<Phone />}
                  title="Call Us"
                  info="+974 31245783"
                  subInfo="Mon - Fri, 8:00 AM - 6:00 PM"
                />
                <ContactInfoCard
                  icon={<Mail />}
                  title="Email Us"
                  info="info@tazejglobal.com"
                  subInfo="We'll respond within 24 hours"
                />
                <ContactInfoCard
                  icon={<MapPin />}
                  title="Visit Us"
                  info="Al Mirqab Mall, Doha, Qatar"
                  subInfo="Sunday - Thursday"
                />
                <ContactInfoCard
                  icon={<Clock />}
                  title="Business Hours"
                  info="Sun - Thu: 8:00 AM - 6:00 PM"
                  subInfo="Friday & Saturday: Closed"
                />
              </div>

             
            </div>
          </div>
        </div>
      </section> */}

      {/* Office Locations */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 text-sm font-semibold">OUR LOCATIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Visit Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're strategically located to serve you better across multiple regions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <OfficeCard key={index} {...office} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Order?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can fulfill your fresh produce needs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
              Call Now
              <Phone className="ml-2 group-hover:scale-110 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-all flex items-center justify-center">
              Send Email
              <Mail className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, info, subInfo }) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-emerald-500 group">
    <div className="text-emerald-600 bg-emerald-50 p-3 rounded-lg group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-gray-900 font-semibold">{info}</p>
      <p className="text-sm text-gray-600">{subInfo}</p>
    </div>
  </div>
);

const FeaturePoint = ({ text }) => (
  <div className="flex items-center space-x-3">
    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
    <span className="text-white">{text}</span>
  </div>
);

const OfficeCard = ({ country, office, address, phone, email, email2, hours, gradient, image  ,website}) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
    <div className="relative h-64">
      <img
        src={image}
        alt={office}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-80`}></div>
      <div className="absolute top-4 left-4">
        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
          <span className="text-white text-sm font-semibold">{country}</span>
        </div>
      </div>
    </div>
    <div className="bg-white p-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{office}</h3>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
          <p className="text-gray-600 text-sm">{address}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-emerald-600 flex-shrink-0" size={18} />
          <p className="text-gray-900 font-semibold text-sm">{phone}</p>
        </div>


          <div className="flex items-center space-x-3">
           
          <Rss className="text-emerald-600 flex-shrink-0" size={18} />
          <p className="text-gray-900 font-semibold text-sm">{website}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="text-emerald-600 flex-shrink-0" size={18} />
          <p className="text-gray-900 text-sm">{email}</p>
        </div>
         <div className="flex items-center space-x-3">
          <Mail className="text-emerald-600 flex-shrink-0" size={18} />
          <p className="text-gray-900 text-sm">{email2}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="text-emerald-600 flex-shrink-0" size={18} />
          <p className="text-gray-600 text-sm">{hours}</p>
        </div>
      </div>
      <button className="mt-6 w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center group">
        Get Directions
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
      </button>
    </div>
  </div>
);

export default ContactUs;