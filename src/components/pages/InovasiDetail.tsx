import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Target, Users, TrendingUp, FileText, MapPin, Cog, Star } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function InovasiDetail() {
  const { slug } = useParams<{ slug: string }>();

  const inovasiData: Record<string, any> = {
    'peniti-bidan': {
      title: 'PENITI BIDAN',
      subtitle: 'Pendampingan Ibu Hamil Risiko Tinggi Berbasis Teknologi dan Kolaborasi',
      description:
        'PENITI BIDAN (Pendampingan Ibu Hamil Risiko Tinggi Berbasis Teknologi dan Kolaborasi) adalah program inovatif yang dirancang untuk memberikan pendampingan intensif kepada ibu hamil dengan risiko tinggi melalui pemanfaatan teknologi pemetaan dan kolaborasi tim kesehatan. Program ini mengintegrasikan sistem pemetaan titik koordinat ibu hamil, Tim Reaksi Cepat Maternal dan Neonatal, serta akses Antenatal Care (ANC) Terpadu untuk memastikan setiap ibu hamil mendapatkan pelayanan yang optimal.',
      latarBelakang:
        'Wilayah Pasongsongan memiliki kondisi geografis yang menantang dengan akses transportasi terbatas, sehingga ibu hamil risiko tinggi sering mengalami keterlambatan dalam mendapatkan pertolongan. Fenomena "3 Terlambat" (terlambat mengenali tanda bahaya, terlambat mengambil keputusan, dan terlambat mencapai fasilitas kesehatan) masih menjadi penyebab utama kematian maternal dan neonatal. PENITI BIDAN hadir sebagai solusi untuk mengatasi permasalahan tersebut melalui pendekatan proaktif dan terkoordinasi.',
      tujuan: [
        'Menurunkan angka kematian ibu dan bayi melalui deteksi dini dan penanganan cepat',
        'Mencegah terjadinya "3 Terlambat" dalam penanganan kasus ibu hamil risiko tinggi',
        'Meningkatkan akses pelayanan ANC Terpadu bagi ibu hamil di wilayah geografis sulit',
        'Membangun sistem koordinasi yang efektif antara tenaga kesehatan, kader, dan keluarga',
        'Meningkatkan kesiapsiagaan dalam menghadapi kegawatdaruratan maternal dan neonatal',
      ],
      sasaran:
        'Seluruh ibu hamil di wilayah kerja Puskesmas Pasongsongan, dengan prioritas pada ibu hamil risiko tinggi, ibu hamil di daerah terpencil, dan ibu hamil dengan riwayat komplikasi kehamilan sebelumnya.',
      mekanisme: [
        'Pemetaan dan Pendataan: Melakukan pemetaan titik koordinat GPS seluruh ibu hamil risiko tinggi untuk memudahkan akses dan monitoring',
        'Skrining Risiko: Melakukan skrining dan klasifikasi risiko kehamilan sejak kunjungan pertama ANC',
        'Pendampingan Intensif: Bidan dan kader kesehatan melakukan kunjungan rumah rutin untuk memantau kondisi ibu hamil',
        'Tim Reaksi Cepat: Membentuk Tim Reaksi Cepat Maternal dan Neonatal yang siap siaga 24 jam untuk menangani kegawatdaruratan',
        'ANC Terpadu: Menyelenggarakan pelayanan ANC Terpadu yang melibatkan berbagai tenaga kesehatan (bidan, dokter, ahli gizi, dan laboratorium)',
        'Sistem Rujukan: Membangun sistem rujukan yang terorganisir dengan ambulans siaga dan komunikasi yang efektif',
        'Edukasi Keluarga: Memberikan edukasi kepada keluarga tentang tanda bahaya kehamilan dan pentingnya persiapan persalinan',
      ],
      keunggulan: [
        'Pemanfaatan teknologi GPS untuk pemetaan lokasi ibu hamil memudahkan akses dan mempercepat waktu respons',
        'Pendekatan proaktif dengan kunjungan rumah rutin, tidak hanya menunggu ibu datang ke puskesmas',
        'Kolaborasi lintas sektor melibatkan tenaga kesehatan, kader, tokoh masyarakat, dan keluarga',
        'Tim Reaksi Cepat yang terlatih dan siap siaga 24 jam untuk kegawatdaruratan',
        'Sistem rujukan yang terstruktur dengan komunikasi efektif antara puskesmas dan rumah sakit',
        'Pelayanan ANC Terpadu yang komprehensif dalam satu waktu dan tempat',
      ],
      manfaat: [
        'Deteksi dini komplikasi kehamilan sehingga dapat ditangani sebelum menjadi kegawatdaruratan',
        'Penurunan angka kematian ibu dan bayi melalui penanganan yang cepat dan tepat',
        'Ibu hamil risiko tinggi mendapat perhatian dan pendampingan khusus',
        'Keluarga lebih siap menghadapi persalinan dengan pengetahuan tentang tanda bahaya',
        'Akses pelayanan kesehatan maternal lebih merata, termasuk di daerah terpencil',
        'Meningkatkan kepercayaan masyarakat terhadap pelayanan kesehatan',
        'Terciptanya sistem kesiapsiagaan yang solid dalam menghadapi kegawatdaruratan obstetri',
      ],
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800',
    },
    'dinar-pousi': {
      title: 'DINAR POUSI',
      subtitle: 'Deteksi Penyakit Tidak Menular melalui Posyandu ILP',
      description:
        'DINAR POUSI (Deteksi Penyakit Tidak Menular melalui Posyandu ILP) adalah program inovatif yang mengintegrasikan deteksi dini Penyakit Tidak Menular (PTM) seperti hipertensi, diabetes melitus, dan obesitas ke dalam kegiatan Posyandu Usia Produktif dan Lansia (ILP). Program ini memberikan akses skrining kesehatan yang mudah dijangkau oleh masyarakat usia produktif dan lansia melalui posyandu yang sudah ada di lingkungan mereka.',
      latarBelakang:
        'Penyakit Tidak Menular (PTM) seperti hipertensi, diabetes, stroke, dan penyakit jantung menjadi penyebab kematian tertinggi di Indonesia. Banyak kasus PTM yang tidak terdeteksi hingga mencapai stadium lanjut karena kurangnya akses skrining dan kesadaran masyarakat. Posyandu yang selama ini fokus pada ibu dan anak perlu diperluas fungsinya untuk menjangkau kelompok usia produktif dan lansia yang rentan terhadap PTM.',
      tujuan: [
        'Meningkatkan deteksi dini Penyakit Tidak Menular di masyarakat',
        'Memperluas jangkauan skrining PTM melalui posyandu yang dekat dengan masyarakat',
        'Meningkatkan kesadaran masyarakat tentang faktor risiko PTM',
        'Mencegah komplikasi PTM melalui deteksi dan intervensi dini',
        'Mendorong perilaku hidup sehat melalui edukasi CERDIK (Cek kesehatan berkala, Enyahkan asap rokok, Rajin aktivitas fisik, Diet seimbang, Istirahat cukup, Kelola stres)',
      ],
      sasaran:
        'Masyarakat usia produktif (15-59 tahun) dan lansia (60 tahun ke atas) di wilayah kerja Puskesmas Pasongsongan, dengan prioritas pada kelompok berisiko tinggi PTM seperti yang memiliki riwayat keluarga PTM, obesitas, atau gaya hidup tidak sehat.',
      mekanisme: [
        'Pembentukan Posyandu ILP: Membentuk atau mengaktifkan Posyandu Usia Produktif dan Lansia di setiap desa/kelurahan',
        'Pelatihan Kader: Melatih kader posyandu untuk melakukan skrining PTM dasar (pengukuran tekanan darah, gula darah, IMT, lingkar perut)',
        'Pelaksanaan Skrining Rutin: Menyelenggarakan kegiatan skrining PTM secara rutin setiap bulan di posyandu',
        'Pencatatan dan Pelaporan: Mencatat hasil skrining dan melaporkan ke puskesmas untuk tindak lanjut',
        'Rujukan Kasus: Merujuk kasus yang terdeteksi berisiko atau positif PTM ke puskesmas untuk pemeriksaan lanjutan',
        'Edukasi CERDIK: Memberikan edukasi tentang pencegahan PTM melalui perilaku CERDIK',
        'Monitoring dan Evaluasi: Memantau perkembangan kesehatan peserta posyandu secara berkala',
      ],
      keunggulan: [
        'Memanfaatkan infrastruktur posyandu yang sudah ada dan dekat dengan masyarakat',
        'Skrining dilakukan oleh kader terlatih sehingga lebih hemat biaya dan berkelanjutan',
        'Pendekatan komunitas yang membuat masyarakat lebih nyaman dan mudah mengakses layanan',
        'Integrasi dengan program posyandu lain sehingga efisien dan tidak membebani masyarakat',
        'Fokus pada pencegahan dan deteksi dini, bukan hanya pengobatan',
        'Edukasi CERDIK yang praktis dan mudah diingat oleh masyarakat',
      ],
      manfaat: [
        'Deteksi dini PTM sehingga dapat ditangani sebelum terjadi komplikasi serius',
        'Akses skrining kesehatan yang mudah dan dekat dengan tempat tinggal',
        'Meningkatkan kesadaran masyarakat tentang pentingnya cek kesehatan rutin',
        'Penurunan angka kesakitan dan kematian akibat PTM',
        'Masyarakat mendapat edukasi tentang gaya hidup sehat',
        'Mengurangi beban biaya pengobatan PTM stadium lanjut',
        'Terciptanya budaya hidup sehat di masyarakat melalui gerakan CERDIK',
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    },
    'gerpas-lima': {
      title: 'GERPAS LIMA',
      subtitle: 'Gerakan Pemberantasan Sarang Nyamuk',
      description:
        'GERPAS LIMA (Gerakan Pemberantasan Sarang Nyamuk) adalah program inovatif yang menggerakkan seluruh komponen masyarakat untuk melakukan pemberantasan sarang nyamuk secara serentak dan berkelanjutan. Program ini menggabungkan pendekatan 3M Plus (Menguras, Menutup, Mengubur, plus mencegah gigitan nyamuk) dengan kolaborasi lintas sektor untuk mencegah penyakit berbasis vektor seperti Demam Berdarah Dengue (DBD), Malaria, Chikungunya, dan Zika.',
      latarBelakang:
        'Penyakit berbasis vektor nyamuk seperti DBD masih menjadi masalah kesehatan masyarakat yang serius dengan kasus yang cenderung meningkat setiap tahun. Kondisi lingkungan yang kurang bersih, genangan air, dan kurangnya kesadaran masyarakat tentang pentingnya Pemberantasan Sarang Nyamuk (PSN) menjadi faktor utama penyebaran penyakit. Diperlukan gerakan massal yang melibatkan seluruh elemen masyarakat untuk menciptakan lingkungan bebas jentik nyamuk.',
      tujuan: [
        'Menurunkan angka kesakitan dan kematian akibat penyakit berbasis vektor nyamuk',
        'Meningkatkan kesadaran dan partisipasi masyarakat dalam PSN 3M Plus',
        'Menciptakan lingkungan yang bebas dari sarang nyamuk',
        'Membangun kolaborasi lintas sektor dalam pencegahan penyakit berbasis lingkungan',
        'Mewujudkan gerakan PSN yang berkelanjutan dan menjadi budaya masyarakat',
      ],
      sasaran:
        'Seluruh masyarakat di wilayah kerja Puskesmas Pasongsongan, dengan fokus pada daerah endemis DBD, pemukiman padat penduduk, sekolah, tempat ibadah, fasilitas umum, dan tempat-tempat yang berisiko menjadi sarang nyamuk.',
      mekanisme: [
        'Gerakan Serentak: Menyelenggarakan kegiatan PSN serentak setiap minggu atau bulan dengan melibatkan seluruh warga',
        '3M Plus: Menggerakkan masyarakat untuk Menguras bak mandi/tempat penampungan air, Menutup rapat tempat penampungan air, Mengubur atau mendaur ulang barang bekas, Plus menggunakan kelambu, obat anti nyamuk, dan memelihara ikan pemakan jentik',
        'Pemantauan Jentik Berkala: Melakukan pemantauan jentik nyamuk (jumantik) secara rutin oleh kader dan petugas kesehatan',
        'Penyuluhan dan Edukasi: Memberikan edukasi kepada masyarakat tentang bahaya penyakit DBD dan cara pencegahannya',
        'Kolaborasi Lintas Sektor: Melibatkan pemerintah desa, sekolah, organisasi masyarakat, dan sektor swasta dalam gerakan PSN',
        'Lomba Kebersihan: Menyelenggarakan lomba kebersihan lingkungan dan rumah bebas jentik untuk meningkatkan motivasi',
        'Fogging Selektif: Melakukan fogging pada daerah fokus kasus DBD sebagai upaya pengendalian vektor',
      ],
      keunggulan: [
        'Pendekatan gerakan massal yang melibatkan seluruh komponen masyarakat',
        'Kolaborasi lintas sektor yang memperkuat dukungan dan keberlanjutan program',
        'Kegiatan serentak dan berkala yang menciptakan momentum dan konsistensi',
        'Fokus pada pencegahan berbasis lingkungan yang mengatasi akar masalah',
        'Pemberdayaan kader jumantik sebagai penggerak di tingkat komunitas',
        'Kombinasi edukasi, aksi nyata, dan kompetisi untuk meningkatkan partisipasi',
      ],
      manfaat: [
        'Penurunan kasus penyakit DBD dan penyakit berbasis vektor lainnya',
        'Lingkungan menjadi lebih bersih dan sehat',
        'Meningkatnya kesadaran masyarakat tentang pentingnya kebersihan lingkungan',
        'Terciptanya budaya gotong royong dalam menjaga kesehatan lingkungan',
        'Penghematan biaya pengobatan penyakit DBD',
        'Lingkungan bebas jentik nyamuk yang berkelanjutan',
        'Meningkatnya kualitas hidup masyarakat dengan lingkungan yang sehat',
      ],
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800',
    },
    'delima': {
      title: 'DELIMA',
      subtitle: 'Desa Eliminasi Kusta dan TBC',
      description:
        'DELIMA (Desa Eliminasi Kusta dan TBC) adalah program inovatif yang bertujuan untuk mengeliminasi penyakit Tuberkulosis (TBC) dan Kusta melalui pemberdayaan masyarakat dan pengurangan stigma. Program ini melibatkan tokoh masyarakat, tokoh agama, dan kader desa sebagai penggerak untuk meningkatkan kesadaran, deteksi dini, dan dukungan sosial bagi penderita TBC dan Kusta, sehingga tercipta lingkungan yang inklusif dan bebas dari diskriminasi.',
      latarBelakang:
        'TBC dan Kusta masih menjadi masalah kesehatan masyarakat yang memerlukan perhatian serius. Stigma dan diskriminasi terhadap penderita TBC dan Kusta menjadi hambatan utama dalam upaya eliminasi karena membuat penderita enggan memeriksakan diri dan menjalani pengobatan. Diperlukan pendekatan berbasis komunitas yang melibatkan tokoh masyarakat untuk mengubah persepsi negatif dan membangun dukungan sosial bagi penderita.',
      tujuan: [
        'Mengeliminasi penyakit TBC dan Kusta di wilayah kerja Puskesmas Pasongsongan',
        'Meningkatkan deteksi dini kasus TBC dan Kusta melalui penemuan aktif',
        'Mengurangi stigma dan diskriminasi terhadap penderita TBC dan Kusta',
        'Meningkatkan angka kesembuhan dengan dukungan pengawas minum obat (PMO)',
        'Membangun komitmen bersama antara pemerintah desa, tokoh masyarakat, dan masyarakat dalam eliminasi TBC dan Kusta',
      ],
      sasaran:
        'Seluruh masyarakat di wilayah kerja Puskesmas Pasongsongan, dengan prioritas pada kelompok berisiko tinggi seperti kontak serumah penderita TBC/Kusta, kelompok rentan (lansia, penderita HIV, diabetes), dan masyarakat di daerah dengan kasus tinggi.',
      mekanisme: [
        'Deklarasi Desa DELIMA: Melakukan deklarasi komitmen desa untuk eliminasi TBC dan Kusta yang dihadiri tokoh masyarakat, tokoh agama, dan pemerintah desa',
        'Forum Group Discussion (FGD): Menyelenggarakan FGD dengan tokoh masyarakat untuk membahas strategi eliminasi dan pengurangan stigma',
        'Pelatihan Kader: Melatih kader desa untuk melakukan penemuan kasus aktif, edukasi, dan pendampingan penderita',
        'Penemuan Kasus Aktif: Melakukan skrining aktif di masyarakat untuk menemukan kasus TBC dan Kusta sedini mungkin',
        'Pengawas Minum Obat (PMO): Membentuk dan melatih PMO dari keluarga atau kader untuk memastikan penderita minum obat teratur',
        'Edukasi Massal: Memberikan edukasi kepada masyarakat tentang TBC dan Kusta, cara penularan, pengobatan, dan pentingnya tidak mendiskriminasi penderita',
        'Dukungan Sosial: Membangun sistem dukungan sosial bagi penderita melalui kelompok dukungan sebaya dan bantuan dari tokoh masyarakat',
        'Monitoring dan Evaluasi: Memantau perkembangan kasus, angka kesembuhan, dan tingkat stigma secara berkala',
      ],
      keunggulan: [
        'Melibatkan tokoh masyarakat dan tokoh agama yang berpengaruh dalam mengubah persepsi masyarakat',
        'Pendekatan berbasis komitmen desa yang mengikat seluruh elemen masyarakat',
        'Fokus pada pengurangan stigma sebagai kunci keberhasilan eliminasi',
        'Pemberdayaan masyarakat melalui kader dan PMO yang berasal dari komunitas sendiri',
        'Kombinasi penemuan aktif dan dukungan pengobatan yang komprehensif',
        'FGD sebagai media dialog dan pemecahan masalah bersama',
      ],
      manfaat: [
        'Penemuan kasus TBC dan Kusta lebih dini sehingga pengobatan lebih efektif',
        'Angka kesembuhan meningkat dengan dukungan PMO dan keluarga',
        'Penderita tidak lagi mengalami diskriminasi dan dapat hidup normal di masyarakat',
        'Penurunan angka penularan TBC dan Kusta di masyarakat',
        'Terciptanya lingkungan yang inklusif dan peduli terhadap penderita',
        'Meningkatnya kesadaran masyarakat tentang TBC dan Kusta',
        'Terwujudnya desa yang bebas dari TBC dan Kusta',
      ],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800',
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
              <h2 className="text-2xl text-emerald-700 mb-4">Deskripsi Singkat</h2>
              <p className="text-gray-700 leading-relaxed">{inovasi.description}</p>
            </CardContent>
          </Card>

          {/* Latar Belakang */}
          {inovasi.latarBelakang && (
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Latar Belakang</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{inovasi.latarBelakang}</p>
              </CardContent>
            </Card>
          )}

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

          {/* Sasaran */}
          {inovasi.sasaran && (
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Sasaran</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{inovasi.sasaran}</p>
              </CardContent>
            </Card>
          )}

          {/* Mekanisme / Cara Kerja */}
          {inovasi.mekanisme && (
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Cog className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Mekanisme / Cara Kerja</h2>
                </div>
                <ul className="space-y-3">
                  {inovasi.mekanisme.map((item: string, index: number) => (
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
          )}

          {/* Keunggulan / Nilai Inovatif */}
          {inovasi.keunggulan && (
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Keunggulan / Nilai Inovatif</h2>
                </div>
                <ul className="space-y-3">
                  {inovasi.keunggulan.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">★</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

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
          <div className="mt-12 p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border" style={{ borderColor: '#A7F3D0' }}>
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
