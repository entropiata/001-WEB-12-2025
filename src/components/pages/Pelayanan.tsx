import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {
  Stethoscope,
  Baby,
  Smile,
  Users,
  Heart,
  FlaskConical,
  Syringe,
  Clipboard,
  CreditCard,
  UserCheck,
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

  const pelayananPoli = [
    {
      id: "poli-umum",
      icon: Stethoscope,
      title: "Poli Umum",
      description:
        "Pelayanan pemeriksaan dan pengobatan untuk penyakit umum seperti demam, batuk, pilek, dan keluhan kesehatan lainnya.",
      jadwal: "Senin - Sabtu, 08.00 - 14.00 WIB",
    },
    {
      id: "poli-kia",
      icon: Baby,
      title: "Poli KIA & KB",
      description:
        "Pelayanan kesehatan ibu hamil, ibu menyusui, bayi, balita, serta konseling dan layanan Keluarga Berencana (KB).",
      jadwal: "Senin - Sabtu, 08.00 - 14.00 WIB",
    },
    {
      id: "poli-gigi",
      icon: Smile,
      title: "Poli Gigi",
      description:
        "Pelayanan kesehatan gigi dan mulut termasuk penambalan, pencabutan, pembersihan karang gigi, dan konsultasi.",
      jadwal: "Senin - Jumat, 08.00 - 13.00 WIB",
    },
    {
      id: "poli-lansia",
      icon: Users,
      title: "Poli Lansia",
      description:
        "Pelayanan kesehatan khusus untuk lansia termasuk pemeriksaan rutin, pengelolaan penyakit degeneratif, dan senam lansia.",
      jadwal: "Rabu & Jumat, 08.00 - 12.00 WIB",
    },
    {
      id: "poli-remaja",
      icon: Heart,
      title: "Poli Remaja",
      description:
        "Pelayanan kesehatan remaja termasuk konseling kesehatan reproduksi, gizi remaja, dan pemeriksaan kesehatan.",
      jadwal: "Selasa & Kamis, 13.00 - 15.00 WIB",
    },
  ];

  const pelayananUmum = [
    {
      id: "pendaftaran",
      icon: UserCheck,
      title: "Pendaftaran Pasien",
      description:
        "Layanan pendaftaran pasien baru dan lama dengan sistem antrean terorganisir untuk kenyamanan Anda.",
    },
    {
      id: "bpjs",
      icon: CreditCard,
      title: "Pelayanan BPJS",
      description:
        "Melayani pasien peserta BPJS Kesehatan untuk berbagai jenis pemeriksaan dan pengobatan sesuai ketentuan.",
    },
    {
      id: "rawat-jalan",
      icon: Clipboard,
      title: "Rawat Jalan",
      description:
        "Pelayanan rawat jalan untuk pasien yang tidak memerlukan perawatan inap dengan fasilitas lengkap.",
    },
    {
      id: "laboratorium",
      icon: FlaskConical,
      title: "Laboratorium",
      description:
        "Pemeriksaan laboratorium lengkap meliputi hematologi, kimia klinik, urinalisis, dan pemeriksaan lainnya.",
    },
    {
      id: "imunisasi",
      icon: Syringe,
      title: "Imunisasi",
      description:
        "Program imunisasi lengkap untuk bayi, balita, anak sekolah, dan dewasa sesuai jadwal imunisasi nasional.",
    },
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
            Pelayanan Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-emerald-50"
          >
            Berbagai layanan kesehatan terpadu untuk keluarga
            Indonesia
          </motion.p>
        </div>
      </section>

      {/* Pelayanan Poli */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl text-emerald-700 mb-3">
              Pelayanan Poli
            </h2>
            <p className="text-gray-600">
              Layanan poliklinik dengan tenaga medis profesional
              dan berpengalaman
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pelayananPoli.map((layanan, index) => {
              const Icon = layanan.icon;
              return (
                <motion.div
                  key={index}
                  {...cardScrollAnimation}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/pelayanan/${layanan.id}`}>
                    <motion.div {...hoverLift}>
                      <Card
                        id={layanan.id}
                        className="hover:shadow-lg transition-all border-emerald-100 scroll-mt-20 h-full cursor-pointer"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <motion.div
                              className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="w-7 h-7 text-emerald-600" />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-gray-900">
                                  {layanan.title}
                                </h3>
                                <ArrowRight className="w-5 h-5 text-emerald-600" />
                              </div>
                              <p className="text-gray-600 text-sm mb-3">
                                {layanan.description}
                              </p>
                              <div className="flex items-center gap-2 text-emerald-600 text-sm">
                                <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full"></span>
                                <span>{layanan.jadwal}</span>
                              </div>
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

      {/* Pelayanan Umum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl text-emerald-700 mb-3">
              Pelayanan Umum
            </h2>
            <p className="text-gray-600">
              Layanan penunjang kesehatan untuk mendukung
              pemeriksaan dan pengobatan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pelayananUmum.map((layanan, index) => {
              const Icon = layanan.icon;
              const isClickable =
                layanan.id === "laboratorium" ||
                layanan.id === "imunisasi";
              const content = (
                <Card
                  key={index}
                  id={layanan.id}
                  className={`hover:shadow-lg transition-all border-emerald-100 scroll-mt-20 h-full ${isClickable ? "hover:scale-[1.02] cursor-pointer" : ""}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="text-gray-900">
                        {layanan.title}
                      </h3>
                      {isClickable && (
                        <ArrowRight className="w-5 h-5 text-emerald-600" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {layanan.description}
                    </p>
                  </CardContent>
                </Card>
              );

              if (isClickable) {
                return (
                  <Link
                    key={index}
                    to={`/pelayanan/${layanan.id}`}
                  >
                    {content}
                  </Link>
                );
              }
              return content;
            })}
          </div>
        </div>
      </section>

      {/* Informasi Tambahan */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-emerald-200">
            <CardContent className="p-8">
              <h3 className="text-2xl text-emerald-700 mb-6">
                Informasi Penting
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gray-900 mb-3">
                    Persyaratan Umum
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">
                        •
                      </span>
                      <span>
                        Membawa kartu identitas (KTP/KK)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">
                        •
                      </span>
                      <span>
                        Kartu BPJS (untuk peserta BPJS)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">
                        •
                      </span>
                      <span>Surat rujukan (jika ada)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">
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
                      <span className="text-emerald-600 mt-1">
                        •
                      </span>
                      <span>Ruang tunggu yang nyaman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">
                        •
                      </span>
                      <span>Apotek lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">
                        •
                      </span>
                      <span>Parkir luas dan aman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">
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