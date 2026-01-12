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

  const strukturOrganisasi = {
    kepala: 'Kepala Puskesmas',
    clusters: [
      {
        name: 'Klaster 1 - Manajemen',
        units: [
          'Manajemen Inti',
          'Manajemen Arsip',
          'Manajemen Sumber Daya Manusia',
          'Manajemen Sarana dan Prasarana',
          'Manajemen Mutu',
          'Manajemen Keuangan dan Aset',
          'Manajemen SIMPUS Digital',
          'Manajemen Jejaring',
          'Manajemen Promosi Kesehatan'
        ]
      },
      {
        name: 'Klaster 2 - Ibu dan Anak',
        units: [
          'Ibu Hamil, Bersalin, dan Nifas',
          'Anak Balita dan APRAS',
          'Anak Usia Sekolah dan Remaja'
        ]
      },
      {
        name: 'Klaster 3 - Usia Dewasa dan Lansia',
        units: [
          'Pelayanan Usia Dewasa',
          'Pelayanan Lanjut Usia'
        ]
      },
      {
        name: 'Klaster 4 - Pencegahan dan Pengendalian Penyakit Menular (P2M)',
        units: [
          'Surveilans Penyakit (SKDR)',
          'Kesehatan Lingkungan (KESLING)'
        ]
      }
    ],
    lintasKlaster: [
      'Kegawatdaruratan',
      'Rawat Inap',
      'Kefarmasian',
      'Laboratorium'
    ]
  };

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
            <Card style={{ borderColor: '#A7F3D0' }}>
              <CardContent className="p-8">
                <h2 className="text-3xl text-emerald-700 mb-6">Profil Puskesmas</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                      <strong>Puskesmas Pasongsongan</strong> merupakan Unit Pelaksana Teknis Dinas Kesehatan Kabupaten Sumenep yang menjadi <strong>satu-satunya Puskesmas induk di Kecamatan Pasongsongan</strong>, berlokasi di Desa Panaongan. Puskesmas ini melayani wilayah kerja seluas 119,01 km² yang mencakup 10 desa di kawasan pedesaan, dengan batas wilayah Laut Jawa di sebelah utara serta berbatasan dengan beberapa kecamatan dan Kabupaten Pamekasan.
                    </p>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Berstatus sebagai Puskesmas Rawat Inap dan PONED, <strong>Puskesmas Pasongsongan</strong> menyelenggarakan pelayanan kesehatan primer secara komprehensif melalui sistem klaster terintegrasi. Didukung jejaring Pustu, Poskesdes, dan Posyandu, Puskesmas ini menyediakan layanan gawat darurat 24 jam, rawat inap tingkat pertama, rujukan, laboratorium, dan kefarmasian, serta telah meraih <strong>akreditasi Paripurna pada tahun 2023</strong> sebagai komitmen terhadap mutu pelayanan kesehatan masyarakat.
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
          <Card style={{ borderColor: '#A7F3D0' }}>
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
                  <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                    Assalamu'alaikum Warahmatullahi Wabarakatuh,
                  </p>
                  <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                    Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya. Kami mengucapkan selamat datang di <strong>website resmi Puskesmas Pasongsongan</strong>. Kehadiran media digital ini kami harapkan dapat menjadi sarana informasi yang transparan, akurat, dan mudah diakses oleh masyarakat dalam mengenal layanan serta program kesehatan yang kami selenggarakan.
                  </p>
                  <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                    Puskesmas Pasongsongan berkomitmen untuk memberikan pelayanan kesehatan yang profesional, berkualitas, dan berorientasi pada kebutuhan masyarakat. Komitmen tersebut kami wujudkan melalui penerapan motto <strong>Ber-IMAN</strong>, yaitu <strong>Bersih</strong> dalam pelayanan, <strong>Inovatif</strong> dalam pengembangan program, <strong>Manusiawi</strong> dalam melayani, <strong>Amanah</strong> dalam menjalankan tugas, serta <strong>Nyaman</strong> bagi seluruh pengguna layanan. Kami meyakini bahwa kesehatan merupakan hak dasar setiap individu dan menjadi fondasi utama dalam mewujudkan masyarakat yang sehat dan produktif.
                  </p>
                  <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                    Kami mengajak seluruh masyarakat untuk berperan aktif dan berpartisipasi dalam setiap program kesehatan yang kami laksanakan. Dengan kerja sama dan sinergi yang baik antara Puskesmas dan masyarakat, mari kita wujudkan lingkungan yang sehat demi generasi Pasongsongan yang lebih baik di masa depan.
                  </p>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh.
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
            <Card style={{ borderColor: '#A7F3D0' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Visi</h2>
                </div>
                <p className="text-gray-700 italic text-left text-2xl font-semibold">
                  Sumenep Unggul Mandiri dan Sejahtera
                </p>
              </CardContent>
            </Card>

            <Card style={{ borderColor: '#A7F3D0' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Misi</h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 font-semibold">1.</span>
                    <span>Menggerakkan pembangunan berwawasan Kesehatan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 font-semibold">2.</span>
                    <span>Meningkatkan derajat kesehatan Masyarakat melalui pemberdayaan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 font-semibold">3.</span>
                    <span>Melindungi Kesehatan Masyarakat melalui pelayanan Paripurna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 font-semibold">4.</span>
                    <span>Meningkatkan dan mendayagunakan sumber daya kesehatan</span>
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
                    <Card className="hover:shadow-xl transition-all h-full bg-white" style={{ borderColor: '#A7F3D0' }}>
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
          <Card style={{ borderColor: '#A7F3D0' }}>
            <CardContent className="p-8">
              <h2 className="text-3xl text-emerald-700 mb-12 text-center">Struktur Organisasi</h2>

              {/* Organizational Chart */}
              <div className="space-y-8">

                {/* Kepala Puskesmas */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white px-12 py-6 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-bold text-center">{strukturOrganisasi.kepala}</h3>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent"></div>
                </div>

                {/* All Clusters */}
                <div className="space-y-6">
                  {strukturOrganisasi.clusters.map((cluster, clusterIndex) => (
                    <div key={clusterIndex} className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border-2 border-emerald-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      {/* Cluster Header */}
                      <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
                        <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-xl shadow-md flex-shrink-0">
                          <span className="text-white font-bold text-lg">{clusterIndex + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-emerald-700">{cluster.name}</h3>
                          <p className="text-xs text-gray-500">{cluster.units.length} Unit</p>
                        </div>
                      </div>

                      {/* Units */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {cluster.units.map((unit, unitIndex) => (
                          <div
                            key={unitIndex}
                            className="group bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-400 hover:shadow-md transition-all cursor-default"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <p className="text-sm text-gray-700 leading-relaxed">{unit}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Lintas Klaster */}
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-white/20">
                      <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                        <span className="text-white font-bold text-xl">+</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">Lintas Klaster</h3>
                        <p className="text-xs text-emerald-100">{strukturOrganisasi.lintasKlaster.length} Unit Pendukung</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {strukturOrganisasi.lintasKlaster.map((unit, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-default"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                            <p className="text-sm text-white font-medium">{unit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Penghargaan */}
      <section id="penghargaan" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card style={{ borderColor: '#A7F3D0' }}>
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
                      className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#A7F3D0' }}
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
      </section >
    </div >
  );
}