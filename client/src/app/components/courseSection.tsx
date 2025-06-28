'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Star, BookOpen, PlayCircle, Award } from 'lucide-react';
import { Button } from './ui/buttons';
import { Badge } from './ui/badge';

const courses = [
    {
      id: 1,
      title: 'Tajweed Fundamentals',
      arabicTitle: 'أساسيات التجويد',
      description: 'Master the basic rules of Tajweed with step-by-step guidance',
      image: 'https://i.etsystatic.com/24941577/c/1242/987/31/217/il/97d794/3692743187/il_340x270.3692743187_3v5g.jpg',
      duration: '6 weeks',
      lessons: 24,
      students: 2847,
      rating: 4.9,
      price: 89,
      level: 'Beginner',
      features: ['Interactive lessons', 'Audio practice', 'Progress tracking']
    },
    {
      id: 2,
      title: "Advanced Qira'at",
      arabicTitle: 'القراءات المتقدمة',
      description: 'Learn different styles of Quranic recitation from expert teachers',
      image: 'https://i.etsystatic.com/24941577/c/1242/987/31/217/il/97d794/3692743187/il_340x270.3692743187_3v5g.jpg',
      duration: '12 weeks',
      lessons: 48,
      students: 1234,
      rating: 4.8,
      price: 159,
      level: 'Advanced',
      features: ['7 Qira\'at styles', 'One-on-one sessions', 'Certificate']
    },
    {
      id: 3,
      title: 'Memorization Techniques',
      arabicTitle: 'تقنيات الحفظ',
      description: 'Effective methods for memorizing the Holy Quran',
      image: 'https://i.etsystatic.com/24941577/c/1242/987/31/217/il/97d794/3692743187/il_340x270.3692743187_3v5g.jpg',
      duration: '8 weeks',
      lessons: 32,
      students: 1876,
      rating: 4.9,
      price: 119,
      level: 'Intermediate',
      features: ['Memory techniques', 'Review schedules', 'Group support']
    },
    {
      id: 4,
      title: 'Makharij Al-Huruf',
      arabicTitle: 'مخارج الحروف',
      description: 'Perfect pronunciation of Arabic letters and sounds',
      image: 'https://i.etsystatic.com/24941577/c/1242/987/31/217/il/97d794/3692743187/il_340x270.3692743187_3v5g.jpg',
      duration: '4 weeks',
      lessons: 16,
      students: 3421,
      rating: 4.9,
      price: 69,
      level: 'Beginner',
      features: ['Phonetic training', 'Tongue positioning', 'Audio feedback']
    },
    {
      id: 5,
      title: 'Melodious Recitation',
      arabicTitle: 'التلاوة المجودة',
      description: 'Learn the art of beautiful Quranic recitation',
      image: 'https://i.etsystatic.com/24941577/c/1242/987/31/217/il/97d794/3692743187/il_340x270.3692743187_3v5g.jpg',
      duration: '10 weeks',
      lessons: 40,
      students: 987,
      rating: 4.8,
      price: 139,
      level: 'Intermediate',
      features: ['Maqam styles', 'Rhythm training', 'Performance tips']
    },
    {
      id: 6,
      title: 'Complete Ijazah Program',
      arabicTitle: 'برنامج الإجازة الكاملة',
      description: 'Comprehensive certification program for teaching Quran',
      image: 'https://i.etsystatic.com/24941577/c/1242/987/31/217/il/97d794/3692743187/il_340x270.3692743187_3v5g.jpg',
      duration: '24 weeks',
      lessons: 96,
      students: 234,
      rating: 5.0,
      price: 499,
      level: 'Expert',
      features: ['Full certification', 'Teaching methodology', 'Lifetime support']
    }
  ];
  

export default function CoursesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  return (
    <section id="courses" ref={containerRef} className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x }}
          className="absolute top-20 -right-20 text-9xl text-white/5 font-bold pointer-events-none"
        >
          تعلم
        </motion.div>
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], ['-150px', '100px']) }}
          className="absolute bottom-20 -left-20 text-8xl text-white/5 font-bold pointer-events-none"
        >
          اقرأ
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            animate={isInView ? {
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.8)",
                "0 0 20px rgba(251, 191, 36, 0.5)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Courses
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-amber-400 to-yellow-500 w-32 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Choose from our comprehensive range of Tajweed and Quranic studies courses
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-slate-200">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Level Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    {course.level}
                  </Badge>
                  
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <PlayCircle className="h-12 w-12 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Arabic Title */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-right mb-2"
                  >
                    <span className="text-lg font-bold text-amber-600">{course.arabicTitle}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{course.rating}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.7 + featureIndex * 0.1 }}
                        className="flex items-center gap-2 mb-2"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-emerald-600">${course.price}</span>
                      <span className="text-slate-500 ml-1">USD</span>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
                        Enroll Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 font-semibold px-12 py-4 rounded-full text-lg"
            >
              <Award className="mr-2 h-5 w-5" />
              View All Courses
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}