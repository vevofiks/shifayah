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
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingOffset1 = scrollY * 0.1;
  const floatingOffset2 = scrollY * -0.15;

  return (
    <section 
      ref={containerRef} 
      className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div
        style={{ transform: `translateY(${floatingOffset1}px)` }}
        className="absolute top-20 right-10 text-6xl text-emerald-100 font-bold opacity-30 pointer-events-none transition-transform duration-100"
      >
        بِسْمِ
      </div>
      <div
        style={{ transform: `translateY(${floatingOffset2}px)` }}
        className="absolute bottom-20 left-10 text-8xl text-teal-100 font-bold opacity-20 pointer-events-none transition-transform duration-100"
      >
        القُرْآن
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-800 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-6">
            Why Choose Shifayah?
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-800 delay-300 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Experience the most comprehensive Tajweed learning platform designed for modern students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group transition-all duration-600 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  perspective: '1000px'
                }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden transform hover:scale-105 hover:-rotate-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-200 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div
                      className={`text-right mb-2 transition-all duration-500 ${
                        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    >
                      <span className="text-2xl font-bold text-amber-600">{feature.arabic}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {feature.description}
                    </p>

                    <div
                      className={`mt-6 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-800 origin-left ${
                        isInView ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ transitionDelay: `${index * 200 + 800}ms` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`text-center mt-20 transition-all duration-800 delay-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-block transform hover:scale-105 active:scale-95 transition-transform duration-200">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}