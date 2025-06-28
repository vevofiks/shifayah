'use client';

import { useState, useRef, useEffect } from 'react';
import { BookOpen, Headphones, Users, Trophy, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Lessons',
    description: 'Comprehensive Tajweed rules with visual guides and audio examples',
    arabic: 'دروس تفاعلية'
  },
  {
    icon: Headphones,
    title: 'Audio Practice',
    description: 'Perfect your pronunciation with expert-recorded recitations',
    arabic: 'ممارسة صوتية'
  },
  {
    icon: Users,
    title: 'Expert Teachers',
    description: 'Learn from certified Qaris with years of teaching experience',
    arabic: 'معلمون خبراء'
  },
  {
    icon: Trophy,
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and achievements',
    arabic: 'تتبع التقدم'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with 24/7 access to course materials',
    arabic: 'جدول مرن'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Connect with learners worldwide and practice together',
    arabic: 'مجتمع عالمي'
  }
];
export default function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '0px' } // adjusted for mobile
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const float1 = scrollY * 0.03;  // gentler movement
  const float2 = scrollY * -0.05;

  return (
    <section 
      ref={containerRef} 
      className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden"
    >
      {/* Subtle Floating Arabic Calligraphy */}
      <div
        style={{ transform: `translateY(${float1}px)` }}
        className="absolute top-8 right-4 sm:top-20 sm:right-10 text-4xl sm:text-6xl text-emerald-100 font-bold opacity-20 sm:opacity-30 pointer-events-none hidden sm:block"
      >بِسْمِ</div>
      <div
        style={{ transform: `translateY(${float2}px)` }}
        className="absolute bottom-8 left-4 sm:bottom-20 sm:left-10 text-6xl sm:text-8xl text-teal-100 font-bold opacity-10 sm:opacity-20 pointer-events-none hidden sm:block"
      >القُرْآن</div>

      <div className="max-w-4xl sm:max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Why Choose Shifayah?
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the most comprehensive Tajweed learning platform designed for modern students
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${idx * 150}ms`, perspective: 800 }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:shadow-xl">
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      </div>
                    </div>

                    <div className="mb-2 text-right">
                      <span className="text-lg sm:text-xl font-bold text-amber-600">
                        {feature.arabic}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700">
                      {feature.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700">
                      {feature.description}
                    </p>

                    <div className={`mt-4 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500 origin-left ${isInView ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: `${idx * 150 + 300}ms` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 sm:mt-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-200 transform hover:scale-105 active:scale-95">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
