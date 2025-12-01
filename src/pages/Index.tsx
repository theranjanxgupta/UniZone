import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, X } from 'lucide-react';
import LoginModal from '@/components/LoginModal';
import StudentPortal from '@/components/StudentPortal';
import ComingSoon from '@/components/ComingSoon';
import TeamCard from '@/components/TeamCard';
import { getCurrentUser, setCurrentUser } from '@/lib/storage';

export default function Index() {
  const [showLogin, setShowLogin] = useState(false);
  const [showStudentPortal, setShowStudentPortal] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [currentUser, setCurrentUserState] = useState(getCurrentUser());
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentUserState(null);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  

  const teamMembers = [
    {
      name: 'Ranjan Sah',
      role: 'Founder & CEO',
      description: 'Vision-driven leader focused on building an innovative, student-centric ecosystem.',
      phone: '7061526593',
      email: 'theranjanxgupta@icloud.com',
      instagram: 'https://www.instagram.com/theranjangupta03?igsh=dXEzYjg3aXZpYXEz&utm_source=qr',
      image: '/assets/ranjan-sah.jpeg'
    },
    {
      name: 'Abhibhav Thakur',
      role: 'Co-Founder',
      description: 'Strategic thinker dedicated to simplifying campus experiences through modern digital solutions.',
      phone: '+91 97984 99441',
      whatsapp: '+91 97984 99441',
      image: '/assets/abhibhav-thakur.jpeg'
    },
    {
      name: 'Hrishi Vishwakarma',
      role: 'Team Member',
      description: 'Contributes to UI/UX and product enhancement with creative ideas and technical execution.',
      phone: '+91 7856-000966',
      image: '/assets/team/HRISHI.jpeg'
    },
    {
      name: 'Ankit Kumar',
      role: 'Team Member',
      description: 'Works on development, optimization and improving user interactions across the platform.',
      phone: '+91 7481-988334',
      image: '/assets/team/ANKIT.jpeg'
    },
    {
      name: 'Suraj Kumar',
      role: 'Team Member',
      description: 'Assists with backend logic, configuration and smooth functioning of core features.',
      phone: '74887 53145',
      image: '/assets/team/SURAJ.jpeg'
    },
    {
      name: 'Pankaj Kumar',
      role: 'Team Member',
      description: 'Contributes to taking surveys and validating our idea UniZone.',
      phone: '9931449095',
      image: '/assets/pankaj.jpeg'
    }
  ];

  if (showStudentPortal) {
    return <StudentPortal onClose={() => setShowStudentPortal(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* New Clay-morphism Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10"
        >
          {/* Navigation Header */}
          <nav className="flex items-center justify-between mb-8 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold text-black tracking-tight"
            >
              UNIZONE
            </motion.div>
            
            <div className="flex items-center gap-3 md:gap-8 flex-wrap justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="text-sm md:text-base font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
              >
                About
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('team')}
                className="text-sm md:text-base font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
              >
                Contact
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLearnMore(true)}
                className="text-sm md:text-base font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogin(true)}
                className="text-sm md:text-base font-medium text-white bg-black px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Log In
              </motion.button>
            </div>
          </nav>

          {/* Main Hero Content - Two Column Layout (stack on small screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-4">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <Star className="w-5 h-5 fill-black text-black" />
                <span className="text-sm font-medium text-gray-600">Available only in BIT MESRA</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
              >
                Campus life,<br />simplified.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed max-w-lg pt-2"
              >
                Digitizing India's education system.<br />
                Manage grades, attendance, and campus events in one unified zone.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 md:gap-4 pt-4 flex-wrap"
              >
                <Button
                  onClick={() => scrollToSection('features')}
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 md:px-8 md:py-6 text-base font-semibold shadow-lg"
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => setShowLearnMore(true)}
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-gray-50 rounded-full px-6 py-3 md:px-8 md:py-6 text-base font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            {/* Right Column - 3D Character & UI Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative w-full min-h-[260px] sm:min-h-[360px] md:min-h-[480px] flex items-center justify-center"
            >
              {/* 3D Character Illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Main Character */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 sm:w-56 md:w-72 lg:w-96">
                    {/* Character Body - Yellow Sweater */}
                    <ellipse cx="200" cy="380" rx="80" ry="100" fill="#FDB813" />
                    <rect x="140" y="320" width="120" height="140" rx="20" fill="#FDB813" />
                    
                    {/* Arms */}
                    <ellipse cx="130" cy="360" rx="25" ry="60" fill="#FDB813" transform="rotate(-20 130 360)" />
                    <ellipse cx="270" cy="340" rx="25" ry="70" fill="#FDB813" transform="rotate(30 270 340)" />
                    
                    {/* Hands */}
                    <circle cx="120" cy="410" r="18" fill="#F4A460" />
                    <circle cx="290" cy="290" r="18" fill="#F4A460" />
                    
                    {/* Pants - Dark */}
                    <rect x="160" y="440" width="35" height="60" rx="15" fill="#2C2C2C" />
                    <rect x="205" y="440" width="35" height="60" rx="15" fill="#2C2C2C" />
                    
                    {/* Head */}
                    <circle cx="200" cy="200" r="70" fill="#F4A460" />
                    
                    {/* Hair - Curly Brown */}
                    <ellipse cx="200" cy="150" rx="75" ry="50" fill="#6B4423" />
                    <circle cx="160" cy="160" r="20" fill="#6B4423" />
                    <circle cx="180" cy="145" r="18" fill="#6B4423" />
                    <circle cx="220" cy="145" r="18" fill="#6B4423" />
                    <circle cx="240" cy="160" r="20" fill="#6B4423" />
                    
                    {/* Glasses */}
                    <circle cx="180" cy="200" r="20" fill="none" stroke="#2C2C2C" strokeWidth="4" />
                    <circle cx="220" cy="200" r="20" fill="none" stroke="#2C2C2C" strokeWidth="4" />
                    <line x1="200" y1="200" x2="200" y2="200" stroke="#2C2C2C" strokeWidth="4" />
                    <line x1="160" y1="200" x2="140" y2="195" stroke="#2C2C2C" strokeWidth="3" />
                    <line x1="240" y1="200" x2="260" y2="195" stroke="#2C2C2C" strokeWidth="3" />
                    
                    {/* Eyes */}
                    <circle cx="180" cy="200" r="6" fill="#2C2C2C" />
                    <circle cx="220" cy="200" r="6" fill="#2C2C2C" />
                    
                    {/* Smile */}
                    <path d="M 180 220 Q 200 230 220 220" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </motion.div>

                {/* Floating UI Cards - hidden on small screens to avoid clutter */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden md:block absolute top-20 right-8 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-4 md:p-6 w-28 md:w-32"
                >
                  <div className="text-4xl md:text-5xl font-bold text-green-600">A+</div>
                  <div className="text-xs text-gray-500 mt-2">Grade</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [2, -2, 2] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="hidden md:block absolute top-56 right-6 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-3 md:p-4 w-32 md:w-36"
                >
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="text-xs text-gray-500 mt-2">Student ID</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="hidden md:block absolute bottom-12 right-12 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-3 md:p-4 w-28 md:w-32"
                >
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="35" fill="#E8F4F8" />
                    <path d="M 40 40 L 40 5 A 35 35 0 0 1 65 60 Z" fill="#667eea" />
                    <path d="M 40 40 L 65 60 A 35 35 0 0 1 15 60 Z" fill="#764ba2" />
                  </svg>
                  <div className="text-xs text-gray-500 mt-1">Analytics</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Page 2: Everything You Need (Features) */}
      <section id="features" className="min-h-screen py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-[#0f0f0f] mb-6 tracking-tight">Everything You Need</h2>
            <p className="text-3xl text-[#0f0f0f]/70 font-medium">All In One Place</p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {[
              {
                icon: '🍔',
                title: 'Food Zone',
                description: 'Order Delicious Meals From Campus / Outside Campuses',
                action: () => setShowComingSoon(true)
              },
              {
                icon: '📚',
                title: 'Student Portal',
                description: 'Your Academic Companion, Powered By Innovation',
                action: () => setShowStudentPortal(true)
              },
              {
                icon: '👕',
                title: 'Laundry',
                description: 'Track Your Laundry Status & Schedule Pickups',
                action: () => setShowComingSoon(true)
              },
              {
                icon: '🛒',
                title: 'Marketplace',
                description: 'Buy, Sell & Exchange Items Within Campus',
                action: () => setShowComingSoon(true)
              }
            ].map((feature, index) => (
              <motion.button
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={feature.action}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all text-left group"
              >
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">{feature.title}</h3>
                <p className="text-[#0f0f0f]/70 leading-relaxed font-medium">{feature.description}</p>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
          >
            <h3 className="text-4xl font-bold text-[#0f0f0f] mb-6">Vision & Mission</h3>
            <p className="text-2xl text-[#0f0f0f]/70 mb-10 font-medium">Driven By Purpose, Guided By Innovation</p>
            
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <h4 className="text-2xl font-bold text-[#0f0f0f] mb-4">Our Vision</h4>
                <p className="text-[#0f0f0f]/70 leading-relaxed font-medium">
                  To revolutionise campus life by creating the most comprehensive, user-friendly digital ecosystem that empowers growth and experiences. We envision a future where every student has seamless access to all campus services through a single beautifully designed platform.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <h4 className="text-2xl font-bold text-[#0f0f0f] mb-4">Our Mission</h4>
                <p className="text-[#0f0f0f]/70 leading-relaxed font-medium">
                  To simplify and enhance every aspect of student life by integrating essential campus services into one powerful platform. We are committed to delivering innovative solutions that save time, reduce friction, and create meaningful connections within the campus community.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Page 3: About Section */}
      <section id="about" className="min-h-screen py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-[#0f0f0f] mb-6 tracking-tight">About UniZone</h2>
            <p className="text-3xl text-[#0f0f0f]/70 font-medium">Transforming Campus Life, One Innovation At A Time</p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            {[
              { icon: '🎯', title: 'Vision', text: 'To create a unified digital platform that simplifies and enhances every aspect of campus life for students.' },
              { icon: '🚀', title: 'Mission', text: 'To be the leading campus management ecosystem, empowering students to focus on what truly matters — their education and growth.' },
              { icon: '💎', title: 'Values', text: 'Innovation, accessibility, and a student-first approach drive everything we do at UniZone.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-3xl font-bold text-[#0f0f0f] mb-5">{item.title}</h3>
                <p className="text-[#0f0f0f]/70 leading-relaxed text-lg font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <Star className="h-10 w-10 text-[#667eea]" />
                <h3 className="text-4xl font-bold text-[#0f0f0f]">Our Story</h3>
              </div>
              <p className="text-xl text-[#0f0f0f]/80 leading-relaxed font-medium">
                UniZone was born from the vision of making campus life seamless and connected. Students juggle multiple platforms for different needs — from accessing notes to ordering food, from tracking laundry to staying updated with events. UniZone brings everything together in one beautiful, intuitive space built by students for students. UniZone understands the unique challenges of campus life and provides innovative solutions that actually work.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <Star className="h-10 w-10 text-[#764ba2]" />
                <h3 className="text-4xl font-bold text-[#0f0f0f]">Movement</h3>
              </div>
              <p className="text-xl text-[#0f0f0f]/80 leading-relaxed font-medium">
                We are not just building a platform — we are creating a movement to revolutionize how students experience campus life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Page 4: Team Section */}
      <section id="team" className="min-h-screen py-24 px-6 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-[#0f0f0f] mb-6 tracking-tight">Meet Our Brilliant Team</h2>
            <p className="text-3xl text-[#0f0f0f]/70 font-medium">The Minds Behind UniZone</p>
          </motion.div>

          <div className="grid grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Download Button */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900 to-black py-16 px-6 text-center text-white"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Download removed per request */}

          {/* MGX promotion removed */}

          {/* Copyright */}
          <div className="pt-6 border-t border-white/20">
            <p className="text-lg font-medium">© 2025 UniZone. All rights reserved.</p>
            <p className="text-sm mt-3 opacity-70">Built with ❤️ for students, by students</p>
          </div>
        </div>
      </motion.footer>

      {/* Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => setCurrentUserState(getCurrentUser())}
        />
      )}
      
      {showComingSoon && <ComingSoon onClose={() => setShowComingSoon(false)} />}

      {/* Learn More Modal */}
      <AnimatePresence>
        {showLearnMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowLearnMore(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-12 relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white shadow-lg"
                onClick={() => setShowLearnMore(false)}
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <h2 className="text-5xl font-bold text-[#0f0f0f] mb-4 tracking-tight">About UniZone</h2>
              <p className="text-2xl text-[#0f0f0f]/70 mb-12 font-medium">Transforming Campus Life, One Innovation At A Time</p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { title: 'Vision', text: 'To create a unified digital platform that simplifies and enhances every aspect of campus life for students.' },
                  { title: 'Mission', text: 'To be the leading campus management ecosystem, empowering students to focus on what truly matters — their education and growth.' },
                  { title: 'Values', text: 'Innovation, accessibility, and a student-first approach drive everything we do at UniZone.' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">{item.title}</h3>
                    <p className="text-[#0f0f0f]/70 leading-relaxed font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-[#0f0f0f] mb-4">Our Story</h3>
                  <p className="text-[#0f0f0f]/70 leading-relaxed text-lg font-medium">
                    UniZone was born from the vision of making campus life seamless and connected. Students juggle multiple platforms for different needs — from accessing notes to ordering food, from tracking laundry to staying updated with events. UniZone brings everything together in one beautiful, intuitive space built by students for students. UniZone understands the unique challenges of campus life and provides innovative solutions that actually work.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-[#0f0f0f] mb-4">Movement</h3>
                  <p className="text-[#0f0f0f]/70 leading-relaxed text-lg font-medium">
                    We are not just building a platform — we are creating a movement to revolutionize how students experience campus life.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}