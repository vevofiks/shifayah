'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const reviews = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    arabicName: 'أحمد الراشد',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    rating: 5,
    review: 'Shifayah has completely transformed my understanding of Tajweed. The interactive lessons and expert guidance made learning enjoyable and effective.',
    arabicReview: 'شفايه غيرت فهمي للتجويد بالكامل. الدروس التفاعلية والإرشاد الخبير جعل التعلم ممتعاً وفعالاً.',
    course: 'Tajweed Fundamentals',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 2,
    name: 'Fatima Zahra',
    arabicName: 'فاطمة الزهراء',
    country: 'Morocco',
    flag: '🇲🇦',
    rating: 5,
    review: 'The memorization techniques course helped me memorize 5 Surahs in just 2 months. The teachers are incredibly patient and knowledgeable.',
    arabicReview: 'ساعدني كورس تقنيات الحفظ في حفظ 5 سور في شهرين فقط. المعلمون صبورون ومتمكنون بشكل لا يصدق.',
    course: 'Memorization Techniques',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 3,
    name: 'Omar Hassan',
    arabicName: 'عمر حسن',
    country: 'Egypt',
    flag: '🇪🇬',
    rating: 5,
    review: 'I\'ve been teaching Quran for 10 years, but the Advanced Qira\'at course opened new horizons for me. Highly recommended for serious students.',
    arabicReview: 'أدرّس القرآن منذ 10 سنوات، لكن كورس القراءات المتقدمة فتح لي آفاقاً جديدة. أنصح به بشدة للطلاب الجديين.',  
    course: 'Advanced Qira\'at',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 4,
    name: 'Aisha Khan',
    arabicName: 'عائشة خان',
    country: 'Pakistan',
    flag: '🇵🇰',
    rating: 5,
    review: 'The pronunciation course corrected years of incorrect habits. My recitation has improved dramatically thanks to the detailed feedback system.',
    arabicReview: 'كورس النطق صحح سنوات من العادات الخاطئة. تحسنت تلاوتي بشكل كبير بفضل نظام التغذية الراجعة المفصل.',
    course: 'Makharij Al-Huruf',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 5,
    name: 'Ibrahim Yusuf',
    arabicName: 'إبراهيم يوسف',
    country: 'Turkey',
    flag: '🇹🇷',
    rating: 5,
    review: 'The community aspect of Shifayah is amazing. Learning alongside students from around the world created a truly enriching experience.',
    arabicReview: 'الجانب المجتمعي في شفايه رائع. التعلم مع الطلاب من حول العالم خلق تجربة مثرية حقاً.',
    course: 'Melodious Recitation',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 6,
    name: 'Khadija Al-Zahra',
    arabicName: 'خديجة الزهراء',
    country: 'Indonesia',
    flag: '🇮🇩',
    rating: 5,
    review: 'Completed the Ijazah program and now I\'m certified to teach. The comprehensive curriculum exceeded all my expectations.',
    arabicReview: 'أكملت برنامج الإجازة والآن أنا معتمدة للتدريس. المنهج الشامل فاق كل توقعاتي.',
    course: 'Complete Ijazah Program',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function ReviewsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0px', '-100px']);

  return (
    <section id="reviews" ref={containerRef} className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x }}
          className="absolute top-20 right-10 text-9xl text-white/5 font-bold"
        >
          آراء
        </motion.div>
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], ['100px', '-50px']) }}
          className="absolute bottom-20 left-10 text-7xl text-white/5 font-bold"
        >
          تقييمات
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
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
            Student Reviews
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-amber-400 to-yellow-500 w-32 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Hear from our students around the world about their transformative learning journey
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-slate-100 relative overflow-hidden h-full">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
                    className="absolute top-4 right-4"
                  >
                    <Quote className="h-8 w-8 text-emerald-200" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="flex items-center gap-1 mb-4"
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.6 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Review Text */}
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.8 }}
                    className="text-slate-700 mb-6 italic leading-relaxed flex-grow"
                  >
                    &quot;{review.review}&quot;
                  </motion.blockquote>

                  {/* Arabic Review */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 1 }}
                    className="text-right mb-6 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border-r-4 border-amber-400"
                  >
                    <p className="text-slate-600 text-sm leading-relaxed">
                      &quot;{review.arabicReview}&quot;
                    </p>
                  </motion.div>

                  {/* Student Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 1.2 }}
                    className="flex items-center gap-4 mt-auto"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={review.image} alt={review.name} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-slate-800">{review.name}</h4>
                        <span className="text-lg">{review.flag}</span>
                      </div>
                      <div className="text-right mb-1">
                        <span className="text-sm text-amber-600 font-semibold">{review.arabicName}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>{review.country}</span>
                      </div>
                      <div className="text-xs text-emerald-600 font-medium mt-1">
                        {review.course}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-emerald-100">Average Rating</div>
                <div className="text-sm text-amber-200 mt-1">التقييم المتوسط</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-emerald-100">Happy Students</div>
                <div className="text-sm text-amber-200 mt-1">طلاب سعداء</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-emerald-100">Completion Rate</div>
                <div className="text-sm text-amber-200 mt-1">معدل الإنجاز</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}