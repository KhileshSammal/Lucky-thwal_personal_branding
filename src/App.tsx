/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Mail, 
  ChevronRight, 
  Camera, 
  Sparkles, 
  Mic, 
  Plane, 
  Quote,
  Twitter,
  Facebook,
  Share2,
  CheckCircle,
  Trophy,
  Award,
  Star,
  BookOpen,
  MessageSquare,
  FileText
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const posts = [
    { category: "Interview", title: "Mastering the 'Tell Me About Yourself' Question", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" },
    { category: "Mindset", title: "5 Lessons the Sky Taught Me About Resilience", img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1000" },
    { category: "Growth", title: "The Art of Discipline in a Jet-Lagged World", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600" },
    { category: "Confidence", title: "Confidence Beyond the Uniform", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600" },
    { category: "Interview", title: "Grooming Standards: First Impressions Matter", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600" },
  ];

  const achievements = [
    { icon: Award, title: "Excellence in Service", year: "2024", desc: "Recognized for outstanding passenger care and safety leadership." },
    { icon: Star, title: "Senior Cabin Crew", year: "2023", desc: "Promoted to senior role, managing cabin operations and team excellence." },
    { icon: Trophy, title: "Safety First Award", year: "2022", desc: "Commended for swift action during an in-flight medical emergency." },
    { icon: CheckCircle, title: "1000+ Flight Hours", year: "2024", desc: "Reached a major milestone in international long-haul operations." },
  ];

  const testimonials = [
    { name: "Anjali R.", title: "Aspiring Cabin Crew", quote: "The interview preparation was a game-changer. I felt confident and prepared for every question.", initial: "AR" },
    { name: "Rohan M.", title: "Senior Crew", quote: "Lucky's mentorship provided the clarity I needed to transition into international operations.", initial: "RM" },
    { name: "Sarah K.", title: "Aviation Professional", quote: "A truly professional approach to career coaching. Highly recommended for anyone serious about aviation.", initial: "SK" },
  ];

  const filteredPosts = activeFilter === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (platform: string, title: string) => {
    const url = window.location.href;
    const text = encodeURIComponent(`Check out this post by Lucky Thwal: ${title}`);
    const encodedUrl = encodeURIComponent(url);

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Simulate API call
    setIsSubscribed(true);
    setEmail('');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Insights', href: '#insights' },
    { name: 'Community', href: '#newsletter' },
  ];

  return (
    <div className="min-h-screen bg-bg-light selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed w-full z-50 transition-all duration-500 py-6",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className={cn(
            "text-2xl md:text-3xl font-display tracking-tighter font-black transition-colors",
            isScrolled ? "text-brand-primary" : "text-brand-primary"
          )}>
            Lucky Thwal
          </div>
          
          {/* Desktop Nav */}
          <div className={cn(
            "hidden md:flex space-x-12 items-center text-[11px] tracking-[0.2em] font-black uppercase",
            isScrolled ? "text-slate-600" : "text-slate-900"
          )}>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="hover:text-brand-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#newsletter" 
              className="bg-brand-primary text-white px-8 py-3 rounded-full hover:bg-brand-slate transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/20 font-black"
            >
              Get Mentored
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 -mr-2 outline-none text-brand-primary" 
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[60] bg-brand-slate flex flex-col items-center justify-center space-y-10 text-2xl font-display font-black uppercase tracking-widest"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-4 p-2 text-white"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-brand-gold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#newsletter" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-black px-10 py-4 rounded-full text-base font-black"
            >
              Work With Me
            </a>
            
            <div className="flex space-x-6 pt-8 text-white/60">
              <a href="https://www.instagram.com/lucky_thwal__/?hl=en" target="_blank" rel="noreferrer"><Instagram size={24} /></a>
              <a href="https://www.linkedin.com/in/luckythwal" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-bg-light">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D0103A_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Aviation Mentorship</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.8] tracking-tighter text-slate-900">
              The Sky <br />
              <span className="text-brand-primary">Is Not</span> <br />
              The Limit.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 max-w-lg leading-relaxed font-bold">
              Elevate your mindset and career with professional guidance from a decade of aviation excellence.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-8">
              <a 
                href="#newsletter" 
                className="bg-brand-primary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-base hover:bg-brand-slate transition-all shadow-2xl shadow-brand-primary/30 flex items-center gap-4 group"
              >
                Apply for Mentorship <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all shadow-sm"
              >
                My Journey
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* The Vista Window Frame Motif */}
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[5rem] overflow-hidden shadow-[0_80px_150px_-30px_rgba(84,29,78,0.4)] border-[16px] border-white">
              <img 
                src="/lucky.jpg" 
                alt="Lucky Thwal" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/40 to-transparent"></div>
            </div>
            
            {/* Decorative Vista Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent rounded-full blur-[80px] opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary rounded-full blur-[80px] opacity-30 animate-pulse delay-1000"></div>
            
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white py-24 md:py-32 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-vista opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              {[
                { label: "Flight Hours", value: "1,000+" },
                { label: "Aspirants Mentored", value: "200+" },
                { label: "Success Rate", value: "95%" },
                { label: "Years Experience", value: "2+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left group">
                  <p className="text-5xl md:text-7xl font-display font-black text-brand-primary mb-3 group-hover:text-brand-accent transition-colors tracking-tighter">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.3em] font-black text-slate-400">{stat.label}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="section-padding bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(208,16,58,0.2)] border-[16px] border-white relative z-10">
                <img 
                  src="/lucky.jpg" 
                  alt="Lucky Thwal - Mentor" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-brand-slate p-12 rounded-[2.5rem] text-white shadow-2xl hidden lg:block max-w-sm z-20 border-4 border-white">
                <Quote size={48} className="mb-8 text-brand-accent" />
                <p className="text-3xl font-display font-black leading-tight italic">
                  "Mentorship is the compass that turns aspiration into arrival."
                </p>
              </div>
              {/* Decorative Vista Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-accent/20 rounded-full pointer-events-none"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <span className="text-brand-primary uppercase tracking-[0.4em] text-[11px] font-black block">The Mentor</span>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter text-slate-900">A Decade of <br /> Perspective.</h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-black">
                  My journey through the skies has been more than just travel—it's been a masterclass in human connection, crisis management, and professional poise.
                </p>
                
                <p className="text-slate-500 leading-relaxed text-lg md:text-xl">
                  As a Senior Cabin Crew member with over 1,000 flight hours, I've seen firsthand what separates the good from the exceptional. I joined Air India Express at the age of 18, and now I dedicate my expertise to mentoring the next generation of aviation professionals.
                </p>
              </div>
              
              <div className="pt-8">
                <a 
                  href="https://www.linkedin.com/in/luckythwal" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 bg-brand-primary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-base hover:bg-brand-slate transition-all shadow-2xl shadow-brand-primary/30"
                >
                  Connect on LinkedIn <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-[11px] font-black block">Mentorship Programs</span>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-slate-900">How I Can Help You.</h2>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-bold">
              Structured guidance designed to give you a competitive edge in the global aviation industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: BookOpen, 
                title: "Interview Mastery", 
                desc: "Learn the psychology behind airline interviews. We cover grooming, body language, and the 'STAR' method for behavioral questions.",
                color: "bg-brand-primary"
              },
              { 
                icon: MessageSquare, 
                title: "1-on-1 Coaching", 
                desc: "Personalized mock interviews and feedback sessions tailored to your specific strengths and areas for improvement.",
                color: "bg-brand-accent"
              },
              { 
                icon: FileText, 
                title: "CV & Portfolio", 
                desc: "Transform your resume into a professional portfolio that resonates with recruitment teams at top international airlines.",
                color: "bg-brand-slate"
              },
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group p-12 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className={cn("w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-white mb-10 relative z-10 shadow-lg", item.color)}>
                  <item.icon size={36} />
                </div>
                <h3 className="text-4xl font-display font-black mb-6 relative z-10 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 relative z-10 font-medium">{item.desc}</p>
                <a href="#newsletter" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-brand-primary hover:text-brand-slate transition-colors relative z-10">
                  Join Program <ArrowRight size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-brand-slate text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-accent uppercase tracking-[0.3em] text-[11px] font-black mb-6 block">The Track Record</span>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">Professional <br /> Milestones</h2>
              <p className="text-white/70 text-xl leading-relaxed mb-12 max-w-xl">
                A decade of service is measured not just in hours, but in the lives touched and the standards maintained at 35,000 feet.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {achievements.map((achievement, idx) => (
                  <motion.div 
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-brand-accent group-hover:scale-110 transition-transform">
                        <achievement.icon size={28} />
                      </div>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{achievement.year}</span>
                    </div>
                    <h3 className="text-2xl font-display font-black mb-3">{achievement.title}</h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Lucky Thwal - Professional Excellence" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 hidden lg:block">
                <div className="bg-brand-accent p-12 rounded-full aspect-square flex flex-col items-center justify-center text-brand-primary shadow-2xl transform hover:rotate-12 transition-transform">
                  <p className="text-5xl font-display font-black">2+y</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            <div className="lg:w-1/3 space-y-4">
              <span className="text-brand-primary uppercase tracking-[0.3em] text-[11px] font-black block">Testimonials</span>
              <h2 className="text-5xl md:text-7xl font-display font-black">Real Impact.</h2>
              <p className="text-slate-500 text-lg">What the community is saying about the journey.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-white border border-slate-100 rounded-[2rem] relative shadow-sm"
              >
                <Quote className="absolute top-6 right-8 text-brand-accent opacity-20" size={48} />
                <p className="text-slate-600 italic mb-8 text-lg font-bold leading-relaxed">"Lucky's perspective on discipline changed how I approach my morning routine. Authentic and grounded."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-xs">PP</div>
                  <p className="font-bold text-xs uppercase tracking-widest text-slate-400">— Professional Pilot & Mentee</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 bg-white border border-slate-100 rounded-[2rem] relative shadow-sm md:mt-12"
              >
                <Quote className="absolute top-6 right-8 text-brand-accent opacity-20" size={48} />
                <p className="text-slate-600 italic mb-8 text-lg font-bold leading-relaxed">"The perfect blend of aesthetic and substance. Finally, a creator who talks about the 'why' behind the grind."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-xs">GL</div>
                  <p className="font-bold text-xs uppercase tracking-widest text-slate-400">— Global Lifestyle Brand</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-[11px] font-black block">Success Stories</span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-slate-900">Voices of Success.</h2>
            <p className="text-xl text-slate-500 font-bold">Hear from the professionals who have elevated their careers through dedicated mentorship.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 bg-bg-light border border-slate-100 rounded-[2.5rem] relative shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <Quote className="absolute top-6 right-8 text-brand-accent opacity-10 group-hover:opacity-30 transition-opacity" size={48} />
                <p className="text-slate-600 italic mb-10 text-lg font-bold leading-relaxed relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-sm shadow-inner">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Spotlight */}
      <section className="section-padding bg-brand-slate text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-8"
          >
            <span className="text-brand-accent uppercase tracking-[0.3em] text-[11px] font-black block">Professional Credibility</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight">Career Insights & Aviation Mindset</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Beyond the lifestyle, I am deeply committed to the professional excellence required in aviation. I share career insights, networking strategies, and leadership lessons on LinkedIn for the modern professional.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.linkedin.com/in/luckythwal" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-brand-accent hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b-2 border-brand-accent pb-2"
              >
                Connect on LinkedIn <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Cabin Crew Identity" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Insights */}
      <section id="insights" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-brand-accent uppercase tracking-[0.3em] text-[11px] font-black mb-4 block">Knowledge Hub</span>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-4">Editorial Insights</h2>
              <p className="text-slate-500 text-lg">Strategic advice for the modern aviation professional.</p>
            </div>
            <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest border border-slate-200 px-8 py-4 rounded-xl hover:bg-brand-primary hover:text-white transition-all">
              Explore All <ArrowRight size={18} />
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {['All', 'Interview', 'Mindset', 'Growth', 'Confidence'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all border",
                  activeFilter === filter 
                    ? "bg-brand-primary text-white border-brand-primary" 
                    : "bg-white text-slate-500 border-slate-200 hover:border-brand-primary hover:text-brand-primary"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <motion.div 
                  key={post.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative shadow-sm">
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[10px] uppercase tracking-widest font-black text-brand-primary rounded-lg">{post.category}</div>
                    <img 
                      src={post.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-black group-hover:text-brand-accent transition-colors mb-4 leading-tight">{post.title}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-brand-primary transition-colors">
                      Read Article <ArrowRight size={14} />
                    </div>
                    
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-400">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleShare('linkedin', post.title); }}
                        className="hover:text-brand-accent transition-colors"
                      >
                        <Linkedin size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleShare('twitter', post.title); }}
                        className="hover:text-brand-accent transition-colors"
                      >
                        <Twitter size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Mentorship Enquiry Section */}
      <section id="newsletter" className="section-padding bg-brand-slate text-white relative overflow-hidden">
        {/* Decorative Vistara Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px]"></div>
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden grid lg:grid-cols-2 items-center shadow-2xl backdrop-blur-sm">
            <div className="p-12 md:p-20 space-y-12">
              <div className="space-y-6">
                <span className="text-brand-accent uppercase tracking-[0.4em] text-[11px] font-black block">Mentorship Enquiry</span>
                <h2 className="text-7xl md:text-8xl lg:text-9xl font-display font-black leading-[0.8] tracking-tighter">Ready to <br /> Take Off?</h2>
              </div>
              <p className="text-white/70 leading-relaxed text-xl md:text-2xl font-bold">
                Helping aspirants since 2024 to achieve their dreams. Join the inner circle of aviation professionals. Get direct access to mentorship opportunities and industry insights.
              </p>
              {isSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 border border-white/20 p-10 rounded-3xl flex items-center gap-6"
                >
                  <CheckCircle className="text-brand-accent shrink-0" size={40} />
                  <div>
                    <p className="font-black text-2xl uppercase tracking-tight">Enquiry Received!</p>
                    <p className="text-white/60">Lucky Thwal will be in touch shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubscribe}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name" 
                        className="w-full px-8 py-6 rounded-2xl bg-white/10 border border-white/10 transition-all text-lg focus:outline-none focus:border-brand-accent focus:bg-white/20 placeholder:text-white/30"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <input 
                        type="number" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Your Age" 
                        className="w-full px-8 py-6 rounded-2xl bg-white/10 border border-white/10 transition-all text-lg focus:outline-none focus:border-brand-accent focus:bg-white/20 placeholder:text-white/30"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your professional email" 
                      className={cn(
                        "w-full px-8 py-6 rounded-2xl bg-white/10 border border-white/10 transition-all text-lg focus:outline-none focus:border-brand-accent focus:bg-white/20 placeholder:text-white/30",
                        emailError && "border-red-400"
                      )}
                    />
                    {emailError && (
                      <p className="text-xs text-red-400 font-black uppercase tracking-[0.2em] pl-4">
                        {emailError}
                      </p>
                    )}
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-accent text-brand-slate px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-base hover:bg-white transition-all flex items-center justify-center gap-4 shadow-2xl shadow-brand-accent/20 group"
                  >
                    Apply for Mentorship <Plane size={20} className="rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            <div className="hidden lg:block h-full relative">
              <img 
                src="/lucky.jpg" 
                alt="Lucky Thwal" 
                className="h-full w-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-slate/40 mix-blend-multiply"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-display font-black text-2xl tracking-tighter">Lucky Thwal</p>
                <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em]">Aviation Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-3xl font-display font-black text-brand-primary tracking-tighter">Lucky Thwal</h2>
              <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
                Elevating the next generation of aviation professionals through structured mentorship and a decade of excellence.
              </p>
              <div className="flex gap-6">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/luckythwal" },
                  { icon: Instagram, href: "https://www.instagram.com/lucky_thwal__/?hl=en" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-600 hover:text-brand-primary transition-colors font-black text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:luckythwal@example.com" className="text-slate-600 hover:text-brand-primary transition-colors font-black text-sm flex items-center gap-3">
                    <Mail size={16} /> Email Me
                  </a>
                </li>
                <li>
                  <a href="#newsletter" className="text-slate-600 hover:text-brand-primary transition-colors font-bold text-sm flex items-center gap-3">
                    <MessageSquare size={16} /> Mentorship Enquiry
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest">
              © {new Date().getFullYear()} Lucky Thwal. All Rights Reserved.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-slate-400 hover:text-brand-primary transition-colors text-xs font-black uppercase tracking-widest"
            >
              Back to top <ArrowRight size={16} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </footer>

      {/* Sticky Primary CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col gap-3">
        <a 
          href="#newsletter" 
          className="bg-brand-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
}
