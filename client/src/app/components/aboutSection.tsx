'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, Award, Heart, Globe, Star } from 'lucide-react';
import Image from 'next/image';

const stats = [
    { icon: Users, number: '50,000+', label: 'Students Worldwide', arabic: 'طالب عالمياً' },
    { icon: BookOpen, number: '1,000+', label: 'Hours of Content', arabic: 'ساعة محتوى' },
    { icon: Award, number: '95%', label: 'Success Rate', arabic: 'معدل النجاح' },
    { icon: Star, number: '4.9/5', label: 'Average Rating', arabic: 'التقييم المتوسط' }
];

const imageUrl = 'https://cdn.create.vista.com/api/media/small/335699812/stock-photo-holy-quran-written-arabic-calligraphy-meaning-quran-tasbih-rosary-beads'

const values = [
    {
        icon: Heart,
        title: 'Authentic Teaching',
        description: 'We follow traditional methods passed down through generations of scholars',
        arabic: 'التعليم الأصيل'
    },
    {
        icon: Globe,
        title: 'Global Accessibility',
        description: 'Learn from anywhere in the world with our online platform',
        arabic: 'إمكانية الوصول العالمية'
    },
    {
        icon: Users,
        title: 'Community Focus',
        description: 'Build connections with fellow learners and experienced teachers',
        arabic: 'التركيز على المجتمع'
    }
];

export default function AboutSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px']);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    return (
        <section id="about" ref={containerRef} className="py-24 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute top-20 right-20 text-8xl text-emerald-100 font-bold"
                >
                    العِلْم
                </motion.div>
                <motion.div
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], ['-30px', '80px']),
                        opacity
                    }}
                    className="absolute bottom-20 left-20 text-6xl text-teal-100 font-bold"
                >
                    الحِكْمة
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
                        className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
                        animate={isInView ? {
                            backgroundImage: [
                                'linear-gradient(45deg, #059669, #0891b2)',
                                'linear-gradient(45deg, #0891b2, #059669)',
                                'linear-gradient(45deg, #059669, #0891b2)'
                            ]
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        About Shifayah
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 w-32 mx-auto mb-8"
                    />
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Side - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="space-y-6">
                            <motion.h3
                                className="text-3xl font-bold text-slate-800 mb-6"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Our Mission
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-right mb-4"
                            >
                                <span className="text-2xl font-bold text-amber-600">رسالتنا</span>
                            </motion.div>

                            <motion.p
                                className="text-lg text-slate-600 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.9 }}
                            >
                                At Shifayah, we believe that learning the Quran should be accessible to everyone,
                                regardless of their location or background. Our platform combines traditional Islamic
                                teaching methods with modern technology to create an immersive learning experience.
                            </motion.p>

                            <motion.p
                                className="text-lg text-slate-600 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                Founded by a team of certified Qaris and Islamic scholars, we are committed to
                                preserving the authentic pronunciation and recitation of the Holy Quran while
                                making it accessible through innovative digital solutions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 1.5 }}
                                className="flex flex-wrap gap-4 pt-6"
                            >
                                {['Authentic', 'Innovative', 'Accessible'].map((tag) => (
                                    <motion.span
                                        key={tag}
                                        whileHover={{ scale: 1.1, rotate: 2 }}
                                        className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full font-semibold text-sm"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl transform rotate-3"></div>
                            <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                                <Image
                                    src={imageUrl}
                                    alt="Quran learning"
                                    width={800}    // intrinsic width in pixels
                                    height={600}
                                    className="w-full h-64 object-cover rounded-xl"
                                />
                                <div className="mt-6 text-center">
                                    <motion.h4
                                        className="text-xl font-bold text-slate-800 mb-2"
                                        animate={{
                                            color: ['#1e293b', '#059669', '#1e293b']
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        Traditional Meets Modern
                                    </motion.h4>
                                    <p className="text-slate-600">
                                        Blending centuries-old wisdom with cutting-edge technology
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 1.3 + index * 0.2,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="text-center"
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        <stat.icon className="h-8 w-8 md:h-12 md:w-12 text-white mx-auto mb-3" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 1.5 + index * 0.2 }}
                                        className="text-right mb-1"
                                    >
                                        <span className="text-sm text-amber-200 font-semibold">{stat.arabic}</span>
                                    </motion.div>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                                    <div className="text-emerald-100 text-sm md:text-base">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                className="text-center group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                    className="mb-6"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:shadow-xl group-hover:shadow-emerald-200 transition-all duration-300">
                                        <value.icon className="h-10 w-10 text-white" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 2 + index * 0.2 }}
                                    className="text-right mb-2"
                                >
                                    <span className="text-lg font-bold text-amber-600">{value.arabic}</span>
                                </motion.div>

                                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">
                                    {value.title}
                                </h4>

                                <p className="text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}