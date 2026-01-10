import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
  ArrowLeft,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Phone,
  Calendar
} from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function PelayananDetail() {
  const { slug } = useParams<{ slug: string }>();

  const pelayananData: Record<string, any> = {
    'poli-umum': {
      title: 'Poli Umum',
      subtitle: 'Pelayanan Kesehatan Umum',
      description:
        'Poli Umum melayani pemeriksaan dan pengobatan untuk berbagai macam penyakit umum dan keluhan kesehatan. Ditangani oleh dokter umum yang berpengalaman dan profesional.',
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=800',
      jadwal: {
        weekday: 'Senin - Jumat: 08.00 - 14.00 WIB',
        saturday: 'Sabtu: 08.00 - 12.00 WIB',
        sunday: 'Minggu: Tutup'
      },
      layananTersedia: [
        'Pemeriksaan dan konsultasi kesehatan umum',
        'Pengobatan penyakit akut dan kronis',
        'Pemeriksaan tekanan darah dan gula darah',
        'Penanganan demam, batuk, pilek, dan flu',
        'Penanganan masalah pencernaan',
        'Perawatan luka ringan',
        'Resep dan pemberian obat',
        'Rujukan ke spesialis jika diperlukan'
      ],
      persyaratan: [
        'Kartu identitas (KTP/KK)',
        'Kartu BPJS (untuk peserta BPJS)',
        'Surat rujukan (jika dari faskes lain)',
        'Datang 30 menit sebelum pelayanan dimulai'
      ],
      tips: [
        'Sebaiknya datang di pagi hari untuk menghindari antrean panjang',
        'Puasa minimal 8 jam jika akan melakukan pemeriksaan laboratorium',
        'Bawa obat-obatan yang sedang dikonsumsi untuk informasi dokter',
        'Catat keluhan dan gejala yang dialami untuk memudahkan diagnosis'
      ]
    },
    'poli-kia': {
      title: 'Poli KIA & KB',
      subtitle: 'Kesehatan Ibu dan Anak serta Keluarga Berencana',
      description:
        'Poli KIA & KB memberikan pelayanan kesehatan khusus untuk ibu hamil, ibu menyusui, bayi, dan balita. Tersedia juga layanan konseling dan pelayanan Keluarga Berencana (KB) untuk membantu merencanakan keluarga yang sehat.',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800',
      jadwal: {
        weekday: 'Senin - Sabtu: 08.00 - 14.00 WIB',
        sunday: 'Minggu: Tutup'
      },
      layananTersedia: [
        'Pemeriksaan kehamilan (ANC - Antenatal Care)',
        'Pemeriksaan kesehatan ibu nifas',
        'Pemeriksaan tumbuh kembang bayi dan balita',
        'Imunisasi bayi dan balita',
        'Konseling ASI eksklusif',
        'Pelayanan KB (suntik, pil, IUD, implan)',
        'Konseling KB dan kesehatan reproduksi',
        'Pemeriksaan gizi ibu hamil dan balita',
        'Kelas ibu hamil'
      ],
      persyaratan: [
        'Kartu identitas (KTP/KK)',
        'Kartu BPJS atau kartu berobat',
        'Buku KIA (Kesehatan Ibu dan Anak)',
        'Buku catatan imunisasi (untuk balita)'
      ],
      tips: [
        'Rutin melakukan pemeriksaan kehamilan minimal 6 kali',
        'Bawa buku KIA setiap kunjungan',
        'Konsultasikan keluhan sekecil apapun kepada bidan',
        'Ikuti kelas ibu hamil untuk persiapan persalinan'
      ]
    },
    'poli-gigi': {
      title: 'Poli Gigi',
      subtitle: 'Pelayanan Kesehatan Gigi dan Mulut',
      description:
        'Poli Gigi memberikan pelayanan kesehatan gigi dan mulut yang komprehensif. Ditangani oleh dokter gigi profesional dengan peralatan modern untuk menjaga kesehatan gigi dan mulut Anda.',
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=800',
      jadwal: {
        weekday: 'Senin - Jumat: 08.00 - 13.00 WIB',
        saturday: 'Sabtu: 08.00 - 12.00 WIB',
        sunday: 'Minggu: Tutup'
      },
      layananTersedia: [
        'Pemeriksaan kesehatan gigi dan mulut',
        'Pembersihan karang gigi (scaling)',
        'Penambalan gigi berlubang',
        'Pencabutan gigi',
        'Perawatan saluran akar',
        'Konsultasi kesehatan gigi',
        'Edukasi cara menyikat gigi yang benar',
        'Fluoridasi untuk anak'
      ],
      persyaratan: [
        'Kartu identitas (KTP/KK)',
        'Kartu BPJS (untuk peserta BPJS)',
        'Sikat gigi terlebih dahulu sebelum periksa'
      ],
      tips: [
        'Sikat gigi minimal 2 kali sehari',
        'Ganti sikat gigi setiap 3 bulan sekali',
        'Kurangi konsumsi makanan dan minuman manis',
        'Periksa gigi minimal 6 bulan sekali',
        'Jangan menunggu sakit gigi untuk periksa ke dokter'
      ]
    },
    'poli-lansia': {
      title: 'Poli Lansia',
      subtitle: 'Pelayanan Kesehatan Lanjut Usia',
      description:
        'Poli Lansia memberikan pelayanan kesehatan khusus untuk lansia (lanjut usia) dengan pendekatan yang holistik. Fokus pada pencegahan, pemeriksaan rutin, dan pengelolaan penyakit degeneratif.',
      image: 'https://images.unsplash.com/photo-1691341114517-e61d8e2e2298?w=800',
      jadwal: {
        weekday: 'Rabu & Jumat: 08.00 - 12.00 WIB',
        info: 'Jadwal posyandu lansia mengikuti kalender bulanan'
      },
      layananTersedia: [
        'Pemeriksaan kesehatan rutin lansia',
        'Pemeriksaan tekanan darah',
        'Pemeriksaan gula darah',
        'Pemeriksaan kolesterol',
        'Konsultasi gizi lansia',
        'Senam lansia',
        'Pemberian vitamin dan suplemen',
        'Pengelolaan penyakit degeneratif (diabetes, hipertensi, dll)',
        'Deteksi dini dimensia'
      ],
      persyaratan: [
        'Kartu identitas (KTP/KK)',
        'Kartu BPJS atau kartu berobat',
        'Buku kontrol kesehatan lansia'
      ],
      tips: [
        'Rutin mengikuti posyandu lansia setiap bulan',
        'Jaga pola makan dengan gizi seimbang',
        'Tetap aktif dengan olahraga ringan seperti jalan pagi',
        'Minum obat secara teratur sesuai anjuran dokter',
        'Jaga komunikasi sosial dengan keluarga dan teman'
      ]
    },
    'poli-remaja': {
      title: 'Poli Remaja',
      subtitle: 'Pelayanan Kesehatan Remaja',
      description:
        'Poli Remaja adalah layanan kesehatan khusus untuk remaja usia 10-19 tahun. Memberikan konseling kesehatan reproduksi, gizi remaja, dan berbagai masalah kesehatan yang sering dialami remaja dalam suasana yang nyaman dan ramah.',
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=800',
      jadwal: {
        weekday: 'Selasa & Kamis: 13.00 - 15.00 WIB',
        saturday: 'Sabtu: 10.00 - 12.00 WIB',
        sunday: 'Minggu: Tutup'
      },
      layananTersedia: [
        'Konseling kesehatan reproduksi remaja',
        'Pemeriksaan gizi dan status pertumbuhan',
        'Konseling masalah pubertas',
        'Edukasi kesehatan mental remaja',
        'Konseling gaya hidup sehat',
        'Imunisasi HPV untuk remaja putri',
        'Pemeriksaan anemia',
        'Pemberian tablet tambah darah',
        'Edukasi pencegahan penyalahgunaan NAPZA'
      ],
      persyaratan: [
        'Kartu identitas atau kartu pelajar',
        'Kartu BPJS (jika ada)',
        'Dapat didampingi orang tua atau datang sendiri'
      ],
      tips: [
        'Jangan malu untuk berkonsultasi tentang masalah kesehatan',
        'Jaga pola makan dengan gizi seimbang',
        'Istirahat cukup minimal 8 jam per hari',
        'Hindari begadang dan konsumsi junk food berlebihan',
        'Aktif berolahraga minimal 3 kali seminggu'
      ]
    },
    'laboratorium': {
      title: 'Laboratorium',
      subtitle: 'Pelayanan Pemeriksaan Laboratorium',
      description:
        'Laboratorium Puskesmas Pasongsongan menyediakan berbagai pemeriksaan laboratorium untuk menunjang diagnosis dan pemantauan kondisi kesehatan. Dilengkapi dengan peralatan modern dan tenaga analis kesehatan yang kompeten.',
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=800',
      jadwal: {
        weekday: 'Senin - Jumat: 07.00 - 13.00 WIB',
        saturday: 'Sabtu: 07.00 - 11.00 WIB',
        sunday: 'Minggu: Tutup',
        info: 'Pengambilan sampel darah sebaiknya pagi hari'
      },
      layananTersedia: [
        'Pemeriksaan darah lengkap (hemoglobin, leukosit, trombosit)',
        'Pemeriksaan gula darah (sewaktu, puasa, 2 jam PP)',
        'Pemeriksaan kolesterol total',
        'Pemeriksaan asam urat',
        'Pemeriksaan fungsi ginjal (ureum, kreatinin)',
        'Pemeriksaan fungsi hati (SGOT, SGPT)',
        'Urinalisis (pemeriksaan urine)',
        'Pemeriksaan feses',
        'Tes kehamilan',
        'Tes malaria',
        'Tes widal (demam tifoid)'
      ],
      persyaratan: [
        'Kartu identitas dan kartu berobat',
        'Surat pengantar dari dokter',
        'Puasa 8-12 jam untuk pemeriksaan tertentu',
        'Datang pagi hari untuk hasil yang optimal'
      ],
      tips: [
        'Puasa minimal 8 jam untuk pemeriksaan gula darah dan kolesterol',
        'Hindari olahraga berat sebelum pemeriksaan',
        'Bawa botol untuk sampel urine dari rumah (jika perlu)',
        'Hasil pemeriksaan biasanya siap dalam 1-2 hari kerja',
        'Konsultasikan hasil lab dengan dokter untuk interpretasi yang tepat'
      ]
    },
    'imunisasi': {
      title: 'Imunisasi',
      subtitle: 'Program Imunisasi Lengkap',
      description:
        'Layanan imunisasi lengkap untuk bayi, balita, anak sekolah, dan dewasa sesuai dengan jadwal imunisasi nasional. Imunisasi adalah investasi kesehatan terbaik untuk mencegah berbagai penyakit berbahaya.',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800',
      jadwal: {
        weekday: 'Senin - Jumat: 08.00 - 12.00 WIB',
        saturday: 'Sabtu: Sesuai jadwal posyandu',
        info: 'Jadwal posyandu imunisasi setiap bulan di tiap desa'
      },
      layananTersedia: [
        'Imunisasi dasar bayi (BCG, DPT-HB-Hib, Polio, Campak)',
        'Imunisasi lanjutan baduta (DPT-HB-Hib, Campak)',
        'Imunisasi anak sekolah (Campak, DT, Td)',
        'Imunisasi HPV untuk anak perempuan',
        'Imunisasi ibu hamil (Td)',
        'Imunisasi MR (Measles Rubella)',
        'Imunisasi tambahan sesuai program pemerintah',
        'Konseling jadwal imunisasi',
        'Pencatatan di buku KIA/KMS'
      ],
      persyaratan: [
        'Buku KIA atau buku catatan imunisasi',
        'Kartu identitas orang tua/wali',
        'Anak dalam kondisi sehat (tidak demam)',
        'Beri tahu petugas jika anak memiliki riwayat alergi'
      ],
      tips: [
        'Ikuti jadwal imunisasi sesuai usia anak',
        'Jangan tunda imunisasi tanpa alasan medis',
        'Kompres hangat jika muncul bengkak di bekas suntikan',
        'Berikan ASI lebih sering setelah imunisasi',
        'Segera hubungi petugas jika muncul reaksi tidak biasa',
        'Catat setiap imunisasi di buku KIA'
      ]
    }
  };

  const pelayanan = slug ? pelayananData[slug] : null;

  if (!pelayanan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-700 mb-4">Pelayanan tidak ditemukan</h2>
          <Link to="/pelayanan">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali ke Pelayanan
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/pelayanan">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6 -ml-2"
              size="sm"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali
            </Button>
          </Link>
          <h1 className="text-4xl mb-2">{pelayanan.title}</h1>
          <p className="text-xl text-emerald-50">{pelayanan.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={pelayanan.image}
              alt={pelayanan.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Description */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl text-emerald-700 mb-4">Tentang Layanan</h2>
              <p className="text-gray-700 leading-relaxed">{pelayanan.description}</p>
            </CardContent>
          </Card>

          {/* Jadwal */}
          <Card className="mb-8 border-emerald-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl text-emerald-700">Jadwal Pelayanan</h2>
              </div>
              <div className="space-y-3">
                {pelayanan.jadwal.weekday && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">{pelayanan.jadwal.weekday}</span>
                  </div>
                )}
                {pelayanan.jadwal.saturday && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">{pelayanan.jadwal.saturday}</span>
                  </div>
                )}
                {pelayanan.jadwal.sunday && (
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600">{pelayanan.jadwal.sunday}</span>
                  </div>
                )}
                {pelayanan.jadwal.info && (
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{pelayanan.jadwal.info}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Layanan Tersedia */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl text-emerald-700">Layanan yang Tersedia</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {pelayanan.layananTersedia.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Persyaratan */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl text-emerald-700 mb-6">Persyaratan</h2>
                <ul className="space-y-3">
                  {pelayanan.persyaratan.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl text-emerald-700 mb-6">Tips untuk Anda</h2>
                <ul className="space-y-3">
                  {pelayanan.tips.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">💡</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
            <div className="text-center">
              <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl text-emerald-700 mb-3">
                Butuh Informasi Lebih Lanjut?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Hubungi kami untuk informasi lebih detail tentang layanan ini atau untuk membuat janji temu.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/hubungi-kami">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Hubungi Kami
                  </Button>
                </Link>
                <Link to="/pelayanan">
                  <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Lihat Layanan Lainnya
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
