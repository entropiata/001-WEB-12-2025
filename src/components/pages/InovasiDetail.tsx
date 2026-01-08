import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Target, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function InovasiDetail() {
  const { slug } = useParams<{ slug: string }>();

  const inovasiData: Record<string, any> = {
    'simpus-pasongsongan': {
      title: 'SIMPUS Pasongsongan',
      subtitle: 'Sistem Informasi Manajemen Puskesmas',
      description:
        'SIMPUS Pasongsongan adalah sistem informasi berbasis web yang dirancang khusus untuk meningkatkan efisiensi dan efektivitas pengelolaan layanan kesehatan di Puskesmas Pasongsongan. Sistem ini mengintegrasikan berbagai aspek pelayanan mulai dari pendaftaran, rekam medis elektronik, hingga pelaporan.',
      tujuan: [
        'Meningkatkan efisiensi pelayanan kesehatan dengan sistem digital',
        'Mempercepat proses pendaftaran dan pencatatan data pasien',
        'Memudahkan akses informasi riwayat kesehatan pasien',
        'Meningkatkan akurasi data dan pelaporan',
      ],
      manfaat: [
        'Waktu tunggu pasien lebih singkat',
        'Data pasien tersimpan dengan aman dan terorganisir',
        'Memudahkan koordinasi antar petugas kesehatan',
        'Pelaporan otomatis dan akurat',
        'Mengurangi penggunaan kertas (paperless)',
      ],
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=800',
    },
    'antrian-online': {
      title: 'Antrian Online',
      subtitle: 'Sistem Antrean Digital',
      description:
        'Sistem Antrian Online memungkinkan pasien untuk mendaftar dan mengambil nomor antrean secara online melalui aplikasi atau website. Pasien dapat memantau nomor antrean secara real-time dan datang ke puskesmas pada waktu yang tepat, mengurangi waktu tunggu di ruang tunggu.',
      tujuan: [
        'Mengurangi kerumunan di ruang tunggu puskesmas',
        'Mengoptimalkan waktu pelayanan',
        'Memberikan kenyamanan bagi pasien dalam mengatur waktu kunjungan',
        'Meningkatkan disiplin waktu pelayanan',
      ],
      manfaat: [
        'Pasien tidak perlu menunggu lama di ruang tunggu',
        'Dapat memantau antrean dari rumah',
        'Lebih terorganisir dan tertib',
        'Mengurangi risiko penularan penyakit di ruang tunggu',
        'Pasien dapat merencanakan waktu kedatangan dengan baik',
      ],
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=800',
    },
    'edukasi-kesehatan-digital': {
      title: 'Edukasi Kesehatan Digital',
      subtitle: 'Platform Edukasi Kesehatan',
      description:
        'Platform Edukasi Kesehatan Digital adalah program penyebaran informasi kesehatan kepada masyarakat melalui berbagai media digital seperti website, media sosial, dan aplikasi pesan. Konten edukasi disajikan dalam bentuk yang menarik dan mudah dipahami oleh masyarakat umum.',
      tujuan: [
        'Meningkatkan literasi kesehatan masyarakat',
        'Menyebarkan informasi kesehatan yang akurat dan terpercaya',
        'Mencegah penyebaran informasi kesehatan yang keliru (hoax)',
        'Mendorong perilaku hidup bersih dan sehat',
      ],
      manfaat: [
        'Masyarakat mendapat akses informasi kesehatan yang mudah',
        'Meningkatkan kesadaran akan pentingnya kesehatan',
        'Pencegahan penyakit melalui edukasi dini',
        'Informasi dapat diakses kapan saja dan dimana saja',
        'Mengurangi miskonsepsi tentang kesehatan',
      ],
      image: 'https://images.unsplash.com/photo-1691341114517-e61d8e2e2298?w=800',
    },
    'monitoring-ibu-anak': {
      title: 'Monitoring Ibu & Anak',
      subtitle: 'Sistem Pemantauan Kesehatan Ibu dan Anak',
      description:
        'Sistem Monitoring Ibu & Anak adalah aplikasi digital untuk memantau kesehatan ibu hamil, ibu menyusui, dan balita secara berkala. Sistem ini mencatat jadwal pemeriksaan, imunisasi, pertumbuhan anak, dan memberikan pengingat otomatis kepada orang tua.',
      tujuan: [
        'Menurunkan angka kematian ibu dan bayi',
        'Memastikan ibu hamil mendapat pemeriksaan rutin',
        'Memantau tumbuh kembang balita secara optimal',
        'Mencegah stunting dan masalah gizi lainnya',
      ],
      manfaat: [
        'Pemeriksaan ibu dan anak lebih terjadwal',
        'Deteksi dini masalah kesehatan ibu dan anak',
        'Data pertumbuhan anak tercatat dengan baik',
        'Orang tua mendapat pengingat jadwal imunisasi',
        'Konsultasi dan edukasi yang lebih personal',
      ],
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800',
    },
    'posyandu-digital': {
      title: 'Posyandu Digital',
      subtitle: 'Digitalisasi Posyandu',
      description:
        'Posyandu Digital adalah sistem pencatatan dan pelaporan kegiatan posyandu secara digital. Kader posyandu dapat mencatat data penimbangan, imunisasi, dan pemberian vitamin menggunakan aplikasi, dan data otomatis tersimpan di sistem puskesmas.',
      tujuan: [
        'Meningkatkan akurasi data posyandu',
        'Mempermudah pelaporan kader posyandu',
        'Monitoring kegiatan posyandu secara real-time',
        'Meningkatkan kualitas layanan posyandu',
      ],
      manfaat: [
        'Data lebih akurat dan tidak hilang',
        'Pelaporan lebih cepat dan mudah',
        'Dapat memantau perkembangan program posyandu',
        'Mengurangi beban administrasi kader',
        'Integrasi data dengan sistem puskesmas',
      ],
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=800',
    },
    'telemedicine': {
      title: 'Telemedicine',
      subtitle: 'Konsultasi Kesehatan Jarak Jauh',
      description:
        'Layanan Telemedicine memungkinkan pasien untuk berkonsultasi dengan tenaga kesehatan melalui video call atau chat. Ini sangat membantu pasien yang memiliki keterbatasan untuk datang langsung ke puskesmas, seperti lansia, ibu hamil, atau pasien dengan kondisi khusus.',
      tujuan: [
        'Meningkatkan akses layanan kesehatan',
        'Memberikan kemudahan konsultasi bagi pasien',
        'Mengurangi beban kunjungan langsung ke puskesmas',
        'Memberikan layanan konsultasi di luar jam operasional',
      ],
      manfaat: [
        'Konsultasi dapat dilakukan dari rumah',
        'Menghemat waktu dan biaya transportasi',
        'Cocok untuk konsultasi lanjutan atau keluhan ringan',
        'Mengurangi risiko penularan penyakit menular',
        'Layanan lebih fleksibel dan mudah diakses',
      ],
      image: 'https://images.unsplash.com/photo-1691341114517-e61d8e2e2298?w=800',
    },
  };

  const inovasi = slug ? inovasiData[slug] : null;

  if (!inovasi) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-700 mb-4">Inovasi tidak ditemukan</h2>
          <Link to="/inovasi">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali ke Daftar Inovasi
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
          <Link to="/inovasi">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6 -ml-2"
              size="sm"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali
            </Button>
          </Link>
          <h1 className="text-4xl mb-2">{inovasi.title}</h1>
          <p className="text-xl text-emerald-50">{inovasi.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={inovasi.image}
              alt={inovasi.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Description */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl text-emerald-700 mb-4">Deskripsi</h2>
              <p className="text-gray-700 leading-relaxed">{inovasi.description}</p>
            </CardContent>
          </Card>

          {/* Tujuan */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl text-emerald-700">Tujuan Inovasi</h2>
              </div>
              <ul className="space-y-3">
                {inovasi.tujuan.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Manfaat */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl text-emerald-700">Manfaat bagi Masyarakat</h2>
              </div>
              <ul className="space-y-3">
                {inovasi.manfaat.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
            <div className="text-center">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl text-emerald-700 mb-3">
                Tertarik Menggunakan Layanan Ini?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Hubungi kami untuk informasi lebih lanjut tentang inovasi ini dan bagaimana Anda dapat memanfaatkannya.
              </p>
              <Link to="/hubungi-kami">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
