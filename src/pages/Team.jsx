import React from 'react';
import {
  Award,
  Users,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Shield,
  Heart,
  Package,
  Mail,
  Phone,
  Linkedin,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock Navbar component

const Teams = () => {
  const leadership = [
    {
      name: 'M Ismail Niazi',
      role: 'CEO',
      image: './ismail.png',
      bio: 'Leading Tazej Global with a vision for excellence and sustainable growth in the fresh produce industry.',
      expertise: [
        'Strategic Leadership',
        'Business Development',
        'Market Expansion',
      ],
    },
    {
      name: 'Irfan Khalid',
      role: 'Managing Director',
      image: './irfan.png',
      bio: 'Driving operational excellence and ensuring quality standards across all business verticals.',
      expertise: [
        'Operations Management',
        'Quality Assurance',
        'Team Leadership',
      ],
    },
    {
      name: 'Bilal Mustafa',
      role: 'Director Procurement',
      image: './bilalmustafa.png',
      bio: 'Managing global supplier relationships and ensuring consistent supply of premium quality produce.',
      expertise: ['Procurement Strategy', 'Supplier Relations', 'Negotiation'],
    },
    {
      name: 'Ahsan Rafi',
      role: 'Director Import',
      image: './ahsanrafiq.png',
      bio: 'Overseeing import operations and logistics to ensure seamless delivery of products.',
      expertise: ['Import Operations', 'Logistics Management', 'Compliance'],
    },
  ];

  const departments = [
    {
      icon: <Briefcase />,
      title: 'Operations',
      description:
        'Managing day-to-day operations, warehouse management, and quality control',
      teamSize: '15+ Members',
      color: 'emerald',
    },
    {
      icon: <Globe />,
      title: 'Supply Chain',
      description:
        'Coordinating international suppliers and ensuring timely deliveries',
      teamSize: '10+ Members',
      color: 'teal',
    },
    {
      icon: <Users />,
      title: 'Sales & Marketing',
      description:
        'Building relationships with clients and expanding market presence',
      teamSize: '8+ Members',
      color: 'green',
    },
    {
      icon: <Shield />,
      title: 'Quality Assurance',
      description:
        'Ensuring product quality and food safety standards compliance',
      teamSize: '6+ Members',
      color: 'emerald',
    },
  ];

  const values = [
    {
      icon: <Target />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do',
    },
    {
      icon: <Heart />,
      title: 'Integrity',
      description: 'Honesty and transparency guide our actions',
    },
    {
      icon: <Users />,
      title: 'Teamwork',
      description: 'Collaboration drives our success',
    },
    {
      icon: <TrendingUp />,
      title: 'Innovation',
      description: 'Constantly improving and adapting',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />

      {/* Hero Section */}
      <section className='relative h-screen  overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'
            alt='Our Team'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50'></div>
        </div>
        <div className='relative z-10 h-full flex items-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div className='max-w-3xl'>
              <div className='inline-block mb-6 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full'>
                <span className='text-emerald-400 text-sm font-semibold'>
                  MEET OUR TEAM
                </span>
              </div>
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
                The People Behind
                <br />
                <span className='text-emerald-400'>Our Success</span>
              </h1>
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                A dedicated team of professionals committed to delivering
                excellence in fresh produce distribution across Qatar and
                beyond.
              </p>
              <div className='flex flex-wrap gap-4'>
                <div className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
                  <Users className='text-emerald-400' size={20} />
                  <span className='text-white font-semibold'>
                    50+ Team Members
                  </span>
                </div>
                <div className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
                  <Award className='text-emerald-400' size={20} />
                  <span className='text-white font-semibold'>
                    Industry Experts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/50 rounded-full mt-2'></div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full'>
              <span className='text-emerald-700 text-sm font-semibold'>
                LEADERSHIP
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              Our Leadership Team
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Experienced leaders driving innovation and growth in the fresh
              produce industry
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {leadership.map((member, index) => (
              <LeadershipCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className='py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full'>
              <span className='text-emerald-400 text-sm font-semibold'>
                OUR VALUES
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              What Drives Us
            </h2>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              The core principles that guide our team every day
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className='py-24 bg-gradient-to-br from-gray-50 to-emerald-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full'>
              <span className='text-emerald-700 text-sm font-semibold'>
                OUR DEPARTMENTS
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              Working Together
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Specialized teams collaborating to deliver exceptional service
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {departments.map((dept, index) => (
              <DepartmentCard key={index} {...dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <div className='inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full'>
                <span className='text-emerald-700 text-sm font-semibold'>
                  TEAM CULTURE
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>
                Why Join Our Team?
              </h2>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                At Tazej Global Trading, we believe in creating an environment
                where our team members can thrive, grow, and achieve their full
                potential.
              </p>

              <div className='space-y-4'>
                <BenefitPoint
                  icon={<Award />}
                  title='Professional Growth'
                  description='Continuous learning and development opportunities'
                />
                <BenefitPoint
                  icon={<Heart />}
                  title='Work-Life Balance'
                  description='Flexible schedules and supportive environment'
                />
                <BenefitPoint
                  icon={<TrendingUp />}
                  title='Career Advancement'
                  description='Clear pathways for career progression'
                />
                <BenefitPoint
                  icon={<Users />}
                  title='Collaborative Culture'
                  description='Work with talented professionals across departments'
                />
              </div>
            </div>

            <div className='relative'>
              <div className='grid grid-cols-2 gap-4'>
                <img
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
                  alt='Team Collaboration'
                  className='rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500'
                />
                <img
                  src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80'
                  alt='Team Meeting'
                  className='rounded-2xl shadow-xl w-full h-64 object-cover mt-8 transform hover:scale-105 transition-transform duration-500'
                />
                <img
                  src='https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
                  alt='Office Environment'
                  className='rounded-2xl shadow-xl w-full h-64 object-cover -mt-8 transform hover:scale-105 transition-transform duration-500'
                />
                <img
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
                  alt='Team Success'
                  className='rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-500 rounded-full opacity-10 blur-3xl'></div>
              <div className='absolute -top-8 -right-8 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl'></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const LeadershipCard = ({
  name,
  role,
  image,
  bio,
  expertise,
  email,
  phone,
}) => (
  <div className='group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden'>
    <div className='relative h-96 overflow-hidden'>
      {image ? (
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
        />
      ) : (
        <div className='w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center'>
          <Users className='w-24 h-24 text-emerald-400 opacity-50' />
        </div>
      )}
      <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity'></div>

      <div className='absolute bottom-0 left-0 right-0 p-8'>
        <h3 className='text-3xl font-bold text-white mb-2'>{name}</h3>
        <p className='text-emerald-400 font-semibold text-xl mb-4'>{role}</p>
        <div className='flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity'>
          <div className='h-px flex-1 bg-white/30'></div>
          <Award className='w-5 h-5 text-emerald-400' />
          <div className='h-px flex-1 bg-white/30'></div>
        </div>
      </div>
    </div>

    <div className='p-8 bg-gradient-to-br from-white to-gray-50'>
      <p className='text-gray-700 mb-6 leading-relaxed'>{bio}</p>

      <div className='mb-6'>
        <h4 className='text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide'>
          Areas of Expertise
        </h4>
        <div className='flex flex-wrap gap-2'>
          {expertise.map((skill, idx) => (
            <span
              key={idx}
              className='px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className='group relative'>
    <div className='absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity'></div>
    <div className='relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all'>
      <div className='text-emerald-400 mb-4 group-hover:scale-110 transition-transform'>
        {React.cloneElement(icon, { size: 40 })}
      </div>
      <h3 className='text-2xl font-bold text-white mb-3'>{title}</h3>
      <p className='text-gray-400 leading-relaxed'>{description}</p>
    </div>
  </div>
);

const DepartmentCard = ({ icon, title, description, teamSize, color }) => {
  const colorClasses = {
    emerald: 'from-emerald-500 to-teal-500',
    teal: 'from-teal-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
  };

  return (
    <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-emerald-500'>
      <div className='flex items-start justify-between mb-6'>
        <div
          className={`text-white bg-gradient-to-br ${colorClasses[color]} p-4 rounded-xl group-hover:scale-110 transition-transform`}
        >
          {React.cloneElement(icon, { size: 32 })}
        </div>
        <div className='text-right'>
          <div className='text-sm text-gray-500 mb-1'>Team Size</div>
          <div className='text-xl font-bold text-slate-900'>{teamSize}</div>
        </div>
      </div>
      <h3 className='text-2xl font-bold text-slate-900 mb-3'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{description}</p>
    </div>
  );
};

const BenefitPoint = ({ icon, title, description }) => (
  <div className='flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all'>
    <div className='text-emerald-600 bg-emerald-50 p-3 rounded-lg flex-shrink-0'>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className='font-bold text-slate-900 mb-1'>{title}</h4>
      <p className='text-gray-600 text-sm'>{description}</p>
    </div>
  </div>
);

export default Teams;
