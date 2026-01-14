import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {
  Stethoscope,
  Baby,
  Users,
  Heart,
  Clipboard,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { cardScrollAnimation, hoverLift } from "../../utils/animations";

export function Pelayanan() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", ""),
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const clusterServices = [
    {
      id: "klaster-1",
      name: "Klaster 1 – Manajemen",
      icon: Clipboard,
      description: "Manajemen dan administrasi Puskesmas",
      services: [
        "Manajemen inti Puskesmas",
        "Manajemen arsip",
        "Manajemen SDM",
        "Manajemen sarana, prasarana, dan perbekalan kesehatan",
        "Manajemen mutu pelayanan",
        "Manajemen keuangan dan aset/BMD",
        "Manajemen sistem informasi digital",
        "Manajemen jejaring",
        "Manajemen pemberdayaan masyarakat"
      ],
      document: "SK Struktur Organisasi"
    },
    {
      id: "klaster-2",
      name: "Klaster 2 - Ibu dan Anak / VK Bersalin",
      icon: Baby,
      description: "Pelayanan kesehatan ibu hamil, bersalin, nifas, dan anak",
      services: [
        "Pelayanan kesehatan ibu hamil, bersalin, nifas",
        "Pelayanan neonatal dan balita",
        "Pelayanan anak prasekolah, usia sekolah, dan remaja",
        "ANC, persalinan normal, nifas",
        "Neonatal esensial",
        "Imunisasi",
        "SDIDTK",
        "MTBS",
        "Pelayanan gizi ibu dan anak",
        "Skrining penyakit dan kesehatan jiwa",
        "Kesehatan gigi dan mulut",
        "Pengobatan umum",
        "Gawat Darurat Maternal Neonatal",
        "Perkesmas",
        "Skrining kekerasan terhadap perempuan dan anak"
      ],
      document: "SK Struktur Organisasi"
    },
    {
      id: "klaster-3",
      name: "Klaster 3 – Usia Dewasa dan Lansia",
      icon: Users,
      description: "Pelayanan kesehatan usia dewasa dan lanjut usia",
      services: [
        "Pelayanan kesehatan usia dewasa",
        "Pelayanan kesehatan lanjut usia",
        "Skrining PTM dan penyakit menular",
        "Skrining kesehatan jiwa",
        "Skrining kebugaran jasmani",
        "Skrining layak hamil dan geriatri",
        "Kesehatan reproduksi (catin)",
        "KB",
        "Pelayanan gizi dewasa dan lansia",
        "Pengobatan umum",
        "Kesehatan gigi dan mulut",
        "Kesehatan kerja",
        "Perkesmas",
        "Skrining kekerasan terhadap perempuan dan anak"
      ],
      document: "SK Struktur Organisasi"
    },
    {
      id: "klaster-4",
      name: "Klaster 4 – Penanggulangan Penyakit Menular",
      icon: Heart,
      description: "Pencegahan dan pengendalian penyakit menular",
      services: [
        "Pencegahan, kewaspadaan dini, dan respon",
        "Surveilans penyakit",
        "Penemuan kasus",
        "Penyelidikan epidemiologi",
        "Pengendalian vektor",
        "ORI (Outbreak Response Immunization)",
        "Pelayanan kesehatan lingkungan",
        "Pengawasan kualitas lingkungan",
        "Komunikasi Antar Pribadi (KAP)"
      ],
      document: "SK Struktur Organisasi"
    },
    {
      id: "lintas-klaster",
      name: "Lintas Klaster",
      icon: Stethoscope,
      description: "Pelayanan pendukung lintas klaster",
      services: [
        "Pelayanan gawat darurat",
        "Pelayanan kefarmasian",
        "Pelayanan laboratorium (manusia, vektor, reservoir, dan lingkungan)"
      ],
      document: "SK Struktur Organisasi"
    }
  ];

  const informasiTambahan = [
    {
      icon: CreditCard,
      title: "Pembayaran",
      description:
        "Kami menerima pembayaran tunai, BPJS Kesehatan, dan asuransi kesehatan lainnya.",
    },
    {
      icon: Clipboard,
      title: "Persyaratan",
      description:
        "Membawa kartu identitas (KTP/KK) dan kartu BPJS (jika ada). Untuk pasien baru, silakan melakukan pendaftaran terlebih dahulu.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-maroon-700 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl mb-4 font-bold"
          >
            Pelayanan Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-maroon-50"
          >
            Berbagai layanan kesehatan terpadu untuk keluarga
            Indonesia
          </motion.p>
        </div>
      </section>

      {/* Cluster Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl text-maroon-700 mb-3">
              Pelayanan Berbasis Klaster
            </h2>
            <p className="text-gray-600">
              Sistem pelayanan terintegrasi berdasarkan klaster untuk memberikan layanan kesehatan yang komprehensif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusterServices.map((cluster, index) => {
              const Icon = cluster.icon;
              return (
                <motion.div
                  key={index}
                  {...cardScrollAnimation}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/pelayanan/${cluster.id}`}>
                    <motion.div {...hoverLift}>
                      <Card
                        id={cluster.id}
                        className="hover:shadow-lg transition-all scroll-mt-20 h-full cursor-pointer"
                        style={{ borderColor: '#f9d5d5' }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div
                              className="w-14 h-14 bg-maroon-100 rounded-lg flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="w-7 h-7 text-maroon-600" />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold text-gray-900">
                                  {cluster.name}
                                </h3>
                                <ArrowRight className="w-5 h-5 text-maroon-600" />
                              </div>
                              <p className="text-gray-600 text-sm">
                                {cluster.description}
                              </p>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-maroon-100">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">{cluster.services.length} Jenis Pelayanan</span>
                              <span className="text-maroon-600 font-medium">Lihat Detail →</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informasi Tambahan */}
      <section className="py-16 bg-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card style={{ borderColor: '#f9d5d5' }}>
            <CardContent className="p-8">
              <h3 className="text-xl sm:text-2xl text-maroon-700 mb-6">
                Informasi Penting
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gray-900 mb-3">
                    Persyaratan Umum
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>
                        Membawa kartu identitas (KTP/KK)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>
                        Kartu BPJS (untuk peserta BPJS)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>Surat rujukan (jika ada)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>
                        Datang 30 menit sebelum pelayanan
                        dimulai
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-3">
                    Fasilitas
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>Ruang tunggu yang nyaman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>Apotek lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>Parkir luas dan aman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maroon-600 mt-1">
                        •
                      </span>
                      <span>Akses ramah disabilitas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}