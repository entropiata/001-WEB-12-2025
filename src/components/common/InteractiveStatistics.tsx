import { motion } from 'framer-motion';
import {
    Award,
    MapPin,
    Users,
    Activity,
    UserCheck,
    HeartPulse,
    Baby as BabyIcon,
    Bed,
    Heart
} from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { cardScrollAnimation } from '../../utils/animations';

export function InteractiveStatistics() {
    return (
        <>
            {/* Top Row - General Statistics */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Award className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={35} suffix="+" duration={2.5} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Tahun</p>
                    </div>
                    <p className="text-white font-medium">Pengalaman Melayani</p>
                </motion.div>

                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center stat-card-top transition-transform duration-200 ease-out"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={8} duration={2} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Desa</p>
                    </div>
                    <p className="text-white font-medium">Wilayah Kerja</p>
                </motion.div>

                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center stat-card-top transition-transform duration-200 ease-out"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Users className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={25000} suffix="+" duration={2.5} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Jiwa</p>
                    </div>
                    <p className="text-white font-medium">Populasi Terlayani</p>
                </motion.div>

                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center stat-card-top transition-transform duration-200 ease-out"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Activity className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={100} suffix="+" duration={2} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Pasien</p>
                    </div>
                    <p className="text-white font-medium">Kunjungan Harian</p>
                </motion.div>
            </div>

            {/* Decorative Divider */}
            <div className="relative flex items-center justify-center my-12">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-white/30"></div>
                </div>
                <div className="relative flex justify-center">
                    <motion.div
                        className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(255,255,255,0.3)',
                                '0 0 40px rgba(255,255,255,0.5)',
                                '0 0 20px rgba(255,255,255,0.3)',
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Heart className="w-6 h-6 text-white" />
                    </motion.div>
                </div>
            </div>

            {/* Bottom Row - Healthcare Staff Statistics */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">

                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <UserCheck className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={7} duration={2} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Orang</p>
                    </div>
                    <p className="text-white font-medium">Dokter</p>
                </motion.div>

                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center relative z-10"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <HeartPulse className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={35} duration={2} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Orang</p>
                    </div>
                    <p className="text-white font-medium">Perawat</p>
                </motion.div>

                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center relative z-10"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BabyIcon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={39} duration={2} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Orang</p>
                    </div>
                    <p className="text-white font-medium">Bidan</p>
                </motion.div>

                <motion.div
                    {...cardScrollAnimation}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center relative z-10"
                >
                    <motion.div
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Bed className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mb-3">
                        <div className="text-5xl md:text-6xl font-bold mb-2">
                            <AnimatedCounter value={10} duration={2} />
                        </div>
                        <p className="text-maroon-100 text-sm uppercase tracking-wide">Kamar</p>
                    </div>
                    <p className="text-white font-medium">Kamar Rawat Inap</p>
                </motion.div>
            </div>
        </>
    );
}
