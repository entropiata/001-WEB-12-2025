import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Award, Users, Target, Sparkles, Lightbulb, Heart, Shield, Home as HomeIcon } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { fadeInUp, cardScrollAnimation, hoverLift } from '../../utils/animations';


export function Profil() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const strukturOrganisasi = [
    { jabatan: 'Kepala Puskesmas', nama: 'dr. Ahmad Hidayat, M.Kes' },
    { jabatan: 'Kepala Tata Usaha', nama: 'Siti Aminah, S.Sos' },
    { jabatan: 'Penanggung Jawab UKM', nama: 'dr. Nur Azizah' },
    { jabatan: 'Penanggung Jawab UKP', nama: 'dr. Budi Santoso' },
    { jabatan: 'Koordinator Pelayanan KIA', nama: 'Bidan Dewi Sartika, AMd.Keb' },
    { jabatan: 'Koordinator Laboratorium', nama: 'Andi Prasetyo, AMd.AK' },
  ];

  const penghargaan = [
    { tahun: '2024', nama: 'Puskesmas Berprestasi Tingkat Kabupaten' },
    { tahun: '2023', nama: 'Juara 1 Lomba Inovasi Pelayanan Kesehatan' },
    { tahun: '2023', nama: 'Akreditasi Puskesmas - Madya' },
    { tahun: '2022', nama: 'Puskesmas Percontohan Program Stunting' },
  ];

  const mottoList = [
    {
      icon: Sparkles,
      title: 'BERSIH',
      description: 'Kami selalu berupaya memberikan pelayanan yang terbaik dengan meningkatkan Kebersihan untuk menciptakan kenyamanan Pengunjung yang berobat di Puskesmas Pasongsongan.'
    },
    {
      icon: Lightbulb,
      title: 'INOVATIF',
      description: 'Kami selalu berupaya memberikan pelayanan yang terbaik melalui kerja Tim untuk selalu meningkatkan kreatifitas dalam mencari Teknik pendekatan yang lebih baik untuk mencapai tujuan dan indikator Puskesmas.'
    },
    {
      icon: Heart,
      title: 'MANUSIAWI',
      description: 'Kami senantiasa memperlakukan Klien, Pasien dan seluruh Karyawan secara manusiawi, menghormati dan menghargai hak azasi, martabat dan kewajiban.'
    },
    {
      icon: Shield,
      title: 'AMANAH',
      description: 'Kami sebagai pemberi Layanan selalu bersikap Amanah yang dapat dipercaya baik dalam menjalankan tugas dengan selalu mengutamakan kepercayaan siap memberikan pelayanan dan menginformasikan, informasi yang akurat disesuaikan dengan kebutuhan masyarakat.'
    },
    {
      icon: HomeIcon,
      title: 'NYAMAN',
      description: 'Kami senantiasa memberikan kenyamanan mendengar, merespon dengan cepat dan mengharapkan keterlibatan masyarakat dalam meningkatkan pelayanan dengan tujuan semua pelayanan memuaskan.'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl mb-4"
          >
            Profil Puskesmas Pasongsongan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-emerald-50"
          >
            Mengenal lebih dekat Puskesmas Pasongsongan
          </motion.p>
        </div>
      </section>

      {/* Profil Puskesmas */}
      <section id="profil" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...cardScrollAnimation}>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl text-emerald-700 mb-6">Profil Puskesmas</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Puskesmas Pasongsongan merupakan pusat pelayanan kesehatan masyarakat yang berlokasi di Kecamatan Pasongsongan, Kabupaten Sumenep, Jawa Timur. Didirikan pada tahun 1985, puskesmas kami telah melayani masyarakat selama lebih dari 35 tahun.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Dengan komitmen untuk memberikan pelayanan kesehatan yang berkualitas, terjangkau, dan mudah diakses, kami terus berinovasi dalam meningkatkan kualitas layanan kesehatan masyarakat.
                    </p>
                    <p className="text-gray-700">
                      Puskesmas Pasongsongan melayani wilayah kerja yang mencakup 8 desa dengan jumlah penduduk sekitar 25.000 jiwa. Kami menyediakan berbagai layanan kesehatan mulai dari pelayanan promotif, preventif, kuratif, hingga rehabilitatif.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758575514487-0390fcacc339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2VydmljZSUyMGhvc3BpdGFsfGVufDF8fHx8MTc2NzE5MjIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Gedung Puskesmas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Sambutan Kepala Puskesmas */}
      <section id="sambutan" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl text-emerald-700 mb-8">Sambutan Kepala Puskesmas</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="rounded-lg overflow-hidden mb-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1691341114517-e61d8e2e2298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjBjbGluaWN8ZW58MXx8fHwxNzY3MDk5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Kepala Puskesmas"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-gray-900 mb-1">dr. Ahmad Hidayat, M.Kes</h3>
                    <p className="text-gray-600">Kepala Puskesmas Pasongsongan</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 mb-4">
                    Assalamu'alaikum Warahmatullahi Wabarakatuh,
                  </p>
                  <p className="text-gray-700 mb-4">
                    Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya. Selamat datang di website resmi Puskesmas Pasongsongan. Melalui platform digital ini, kami berharap dapat memberikan informasi yang transparan dan akses yang lebih mudah bagi masyarakat untuk mengetahui layanan kesehatan yang kami sediakan.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Puskesmas Pasongsongan berkomitmen untuk terus meningkatkan kualitas pelayanan kesehatan yang profesional, humanis, dan terjangkau bagi seluruh lapisan masyarakat. Kami percaya bahwa kesehatan adalah hak dasar setiap individu, dan melalui pelayanan prima yang kami berikan, kami berupaya mewujudkan masyarakat Pasongsongan yang sehat dan produktif.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Kami mengajak seluruh masyarakat untuk berpartisipasi aktif dalam program-program kesehatan yang kami selenggarakan. Mari bersama-sama kita ciptakan lingkungan yang sehat untuk generasi masa depan yang lebih baik.
                  </p>
                  <p className="text-gray-700">
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visi & Misi */}
      <section id="visi-misi" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-emerald-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Visi</h2>
                </div>
                <p className="text-gray-700 italic">
                  "Terwujudnya Masyarakat Pasongsongan yang Sehat, Mandiri, dan Sejahtera melalui Pelayanan Kesehatan yang Berkualitas dan Berkeadilan"
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Misi</h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Meningkatkan akses dan mutu pelayanan kesehatan yang merata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Mengembangkan sistem pelayanan kesehatan yang inovatif dan responsif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Meningkatkan pemberdayaan masyarakat dalam bidang kesehatan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Mengembangkan sumber daya manusia yang profesional dan berkompeten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Meningkatkan kemitraan dengan berbagai pihak dalam pembangunan kesehatan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section id="motto" className="py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl text-emerald-700 mb-8"
            >
              Motto Pelayanan Kami
            </motion.h2>

            {/* Underline Accent Ber-Iman */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              className="relative inline-block mb-6"
            >
              {/* Text */}
              <h2 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-2">
                "Ber-Iman"
              </h2>

              {/* Animated Underline */}
              <motion.div
                className="relative h-1.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                {/* Glowing dot that moves along the underline */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"
                  animate={{
                    left: ["0%", "100%", "0%"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Animated acronym breakdown */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 font-semibold mb-3 max-w-4xl mx-auto"
            >
              <motion.span
                whileHover={{ scale: 1.1, color: "#059669" }}
                className="inline-block text-emerald-700 transition-colors cursor-default"
              >Ber</motion.span>sih, {" "}
              <motion.span
                whileHover={{ scale: 1.1, color: "#059669" }}
                className="inline-block text-emerald-700 transition-colors cursor-default"
              >I</motion.span>novatif, {" "}
              <motion.span
                whileHover={{ scale: 1.1, color: "#059669" }}
                className="inline-block text-emerald-700 transition-colors cursor-default"
              >M</motion.span>anusiawi, {" "}
              <motion.span
                whileHover={{ scale: 1.1, color: "#059669" }}
                className="inline-block text-emerald-700 transition-colors cursor-default"
              >A</motion.span>manah dan {" "}
              <motion.span
                whileHover={{ scale: 1.1, color: "#059669" }}
                className="inline-block text-emerald-700 transition-colors cursor-default"
              >N</motion.span>yaman
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 max-w-3xl mx-auto italic"
            >
              Kebijakan manajemen penyelenggaraan pelayanan kesehatan di Puskesmas Pasongsongan
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mottoList.map((motto, index) => {
              const Icon = motto.icon;
              return (
                <motion.div
                  key={index}
                  {...cardScrollAnimation}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div {...hoverLift}>
                    <Card className="hover:shadow-xl transition-all border-emerald-200 h-full bg-white">
                      <CardContent className="p-6">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-emerald-700 mb-3">{motto.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{motto.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section id="struktur" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl text-emerald-700 mb-8">Struktur Organisasi</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {strukturOrganisasi.map((item, index) => (
                  <motion.div
                    key={index}
                    {...cardScrollAnimation}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      {...hoverLift}
                      className="p-4 border border-emerald-200 rounded-lg hover:shadow-md transition-shadow h-full"
                    >
                      <h4 className="text-emerald-700 mb-2">{item.jabatan}</h4>
                      <p className="text-gray-700">{item.nama}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Penghargaan */}
      <section id="penghargaan" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-emerald-600" />
                <h2 className="text-3xl text-emerald-700">Penghargaan</h2>
              </div>
              <div className="space-y-4">
                {penghargaan.map((item, index) => (
                  <motion.div
                    key={index}
                    {...cardScrollAnimation}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      {...hoverLift}
                      className="flex items-start gap-4 p-4 border border-emerald-100 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-emerald-600 mb-1">{item.tahun}</p>
                        <h4 className="text-gray-900">{item.nama}</h4>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}