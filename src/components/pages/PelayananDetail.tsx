import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
  ArrowLeft,
  CheckCircle,
  ClipboardList,
  DollarSign,
  Users,
} from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function PelayananDetail() {
  const { slug } = useParams<{ slug: string }>();

  const clusterData: Record<string, any> = {
    'klaster-1': {
      title: 'Klaster 1 – Manajemen',
      subtitle: 'Manajemen dan Administrasi Puskesmas',
      description:
        'Klaster Manajemen bertanggung jawab atas pengelolaan administrasi, sumber daya, dan sistem operasional Puskesmas untuk memastikan pelayanan kesehatan berjalan optimal dan terorganisir dengan baik.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      sections: [
        {
          title: '1. Promosi Kesehatan',
          details: [
            { label: 'Jam buka pelayanan', value: '07.30' },
            { label: 'Petugas', value: 'Tenaga Kesehatan Masyarakat' },
            { label: 'Sasaran', value: 'Masyarakat wilayah kerja Puskesmas Pasongsongan' }
          ],
          services: [
            'Pelayanan KIE (Komunikasi, Informasi, dan Edukasi) di dalam gedung dan luar gedung',
            'Sosialisasi kesehatan ke sekolah',
            'PHBS rumah tangga',
            'PHBS pondok pesantren',
            'Pembinaan Posyandu ILP',
            'Pembinaan Desa Siaga',
            'Pelaksanaan SBH',
            'Pemberdayaan masyarakat',
            'Advokasi dan edukasi GERMAS',
            'UKBM'
          ]
        },
        {
          title: '2. Manajemen Puskesmas',
          services: [
            'Perencanaan (P1)',
            'Penggerakan pelaksanaan (P2)',
            'Pengawasan, pengendalian, dan penilaian (P3)'
          ]
        },
        {
          title: '3. Manajemen Mutu Pelayanan dan Keselamatan',
          services: [
            'Pengukuran mutu',
            'Pencegahan dan Pengendalian Infeksi (PPI): Sterilisasi alat kesehatan oleh tim',
            'Keselamatan pasien',
            'Manajemen risiko',
            'Budaya mutu dan keselamatan',
            'Keselamatan dan Kesehatan Kerja (K3)',
            'Manajemen Fasilitas dan Keselamatan (MFK)'
          ]
        },
        {
          title: '4. Manajemen Jejaring Puskesmas',
          services: [
            'Kerjasama dan pembinaan ke Pustu, FKTP lain, Posyandu dan UKBM lain'
          ]
        },
        {
          title: '5. Manajemen Pengelolaan Sediaan Farmasi dan BMHP',
          services: [
            'Dalam pemenuhan dibutuhkan sumber daya, pengendalian mutu pelayanan kefarmasian serta formularium Puskesmas'
          ]
        },
        {
          title: '6. Sistem Informasi dan Penanganan Pengaduan',
          services: [
            'Puskesmas, Pustu, kegiatan Posyandu dan kunjungan rumah menggunakan sistem informasi yang terstandar dan terintegrasi ke Platform Satu Sehat'
          ],
          pengaduan: {
            title: 'Penanganan Pengaduan, Saran dan Masukan:',
            subtitle: 'Pasien / Pengguna Layanan menyampaikan melalui:',
            channels: [
              'Pengaduan secara langsung',
              'Kotak pengaduan dan saran',
              'Telp, SMS, WA: 085852236642',
              'Email: pkm.pasongsongan@gmail.com',
              'Pengaduan Pelayanan diakhir unit layanan (farmasi)'
            ]
          }
        }
      ],
      document: 'SK Struktur Organisasi'
    },
    'klaster-2': {
      title: 'Klaster 2 – Ibu dan Anak',
      subtitle: 'Pelayanan Kesehatan Ibu Hamil, Bersalin, Nifas, dan Anak',
      description:
        'Klaster Ibu dan Anak menyediakan pelayanan kesehatan komprehensif untuk ibu hamil, bersalin, nifas, serta bayi dan anak dari neonatal hingga remaja dengan pendekatan holistik dan terintegrasi.',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800',
      serviceTypes: [
        {
          typeName: 'Ibu dan Anak',
          sections: [
            {
              title: '1. Menyelenggarakan Pelayanan Kesehatan bagi Ibu hamil, bersalin, Nifas',
              details: [
                { label: 'Petugas', value: 'Bidan dan dokter' },
                { label: 'Sasaran', value: 'Ibu hamil, ibu nifas' }
              ],
              services: [
                'ANC',
                'Pemeriksaan Kespro Catin',
                'Persalinan normal dan sungsang tanpa komplikasi',
                'Neonatal esensial'
              ]
            },
            {
              title: '2. Menyelenggarakan Pelayanan bagi Kesehatan anak Balita dan Anak Pra Sekolah',
              details: [
                {
                  label: 'Petugas',
                  value: 'Dokter Umum, Dokter Gigi, Perawat D-3/S1 Profesi, Bidan D-3/S1 Profesi, Nutrisionis D-3, Perawat Terapis Gigi dan Mulut D-3, Promkes'
                },
                { label: 'Sasaran', value: 'Bayi dan balita, anak pra sekolah' }
              ],
              services: [
                'Pelayanan gizi bagi ibu dan anak',
                'SDIDTK',
                'Imunisasi'
              ]
            },
            {
              title: '3. Menyelenggarakan pelayanan bagi Kesehatan anak Usia sekolah dan remaja',
              details: [
                {
                  label: 'Petugas',
                  value: 'Dokter Umum, Dokter Gigi, Perawat D-3/S1 Profesi, Bidan D-3/S1 Profesi, Nutrisionis D-3, Perawat Terapis Gigi dan Mulut D-3, Promkes'
                },
                { label: 'Sasaran', value: 'Bayi dan balita, anak pra sekolah' }
              ],
              services: [
                'Skrining Penyakit',
                'Skrining Kesehatan Jiwa',
                'MTBS/MTBM',
                'Pengobatan Umum',
                'Komunikasi Antar Pribadi (KAP)',
                'Gadar Matneo',
                'Perkesmas',
                'Skrining kekerasan terhadap Perempuan dan anak'
              ]
            }
          ]
        },
        {
          typeName: 'VK Bersalin',
          sections: [
            {
              title: '1. Menyelenggarakan Pelayanan Kesehatan Ibu bersalin, Nifas',
              details: [
                { label: 'Petugas', value: 'Dokter umum, bidan, dr gigi, perawat, gizi, promkes' },
                { label: 'Sasaran', value: 'Masyarakat' }
              ],
              services: [
                'Persalinan normal dan sungsang tanpa komplikasi',
                'Perawatan Bayi Baru Lahir (Neonatal esensial)',
                'Penanganan pertama pada gawat darurat Maternal dan Neonatal'
              ]
            },
            {
              title: '2. Menyelenggarakan Pelayanan bagi Kesehatan Bayi Baru Lahir',
              details: [
                { label: 'Petugas', value: 'Dokter umum, bidan, dr gigi, perawat, gizi, promkes' },
                { label: 'Sasaran', value: 'Masyarakat' }
              ],
              services: [
                'Perawatan Ibu Nifas',
                'Melakukan Skrening Hipotiroit Kongenital (SHK) pada bayi 48 jam – 7 hari',
                'Melakukan skrening PJB pada bayi 24 Jam'
              ]
            }
          ]
        }
      ],
      document: 'SK Struktur Organisasi'
    },
    'klaster-3': {
      title: 'Klaster 3 – Usia Dewasa dan Lansia',
      subtitle: 'Pelayanan Kesehatan Usia Dewasa dan Lanjut Usia',
      description:
        'Klaster Usia Dewasa dan Lansia fokus pada pelayanan kesehatan preventif dan kuratif untuk usia produktif hingga lanjut usia, termasuk skrining penyakit tidak menular dan program kesehatan reproduksi.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      sections: [
        {
          title: '1. Menyelenggarakan pelayanan Kesehatan bagi Usia Dewasa',
          details: [
            { label: 'Petugas', value: 'Dokter umum, perawat, gizi, bidan' },
            { label: 'Sasaran', value: 'Masyarakat' }
          ],
          services: [
            'Skrining Penyakit menular',
            'Skrining Penyakit tidak menular',
            'Skrining kesehatan Jiwa',
            'Skrining Kebugaran Jasmani',
            'Skrining layak Hamil',
            'Skrining geriatri',
            'Skrining bagi Catin',
            'KB',
            'Pelayanan gizi bagi usia dewasa dan lansia',
            'Kesehatan Gigi dan Mulut',
            'Komunikasi Antar Pribadi (KAP)',
            'Gadar Matneo',
            'Perkesmas',
            'Skrining kekerasan terhadap Perempuan dan anak'
          ]
        },
        {
          title: '2. Menyelenggarakan Pelayanan Kesehatan bagi lanjut Usia',
          details: [
            { label: 'Petugas', value: 'Dokter umum, perawat, gizi, bidan' },
            { label: 'Sasaran', value: 'Masyarakat' }
          ],
          services: [
            'Skrining Penyakit menular',
            'Skrining Penyakit tidak menular',
            'Skrining kesehatan Jiwa',
            'Skrining Kebugaran Jasmani',
            'Skrining layak Hamil',
            'Skrining geriatri',
            'Skrining bagi Catin',
            'KB',
            'Pelayanan gizi bagi usia dewasa dan lansia',
            'Kesehatan Gigi dan Mulut',
            'Komunikasi Antar Pribadi (KAP)',
            'Gadar Matneo',
            'Perkesmas',
            'Skrining kekerasan terhadap Perempuan dan anak'
          ]
        }
      ],
      document: 'SK Struktur Organisasi'
    },
    'klaster-4': {
      title: 'Klaster 4 – Penanggulangan Penyakit Menular',
      subtitle: 'Pencegahan dan Pengendalian Penyakit Menular',
      description:
        'Klaster Penanggulangan Penyakit Menular bertugas melakukan surveilans, pencegahan, dan pengendalian penyakit menular melalui sistem kewaspadaan dini, penyelidikan epidemiologi, dan pengendalian vektor.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
      sections: [
        {
          title: '1. Pencegahan, kewaspadaan Dini dan Respon dan Pengawasan kualitas lingkungan',
          details: [
            { label: 'Petugas', value: 'Dokter umum, perawat, bidan, gizi, promkes, kesling' },
            { label: 'Sasaran', value: 'Masyarakat' }
          ],
          services: [
            'Surveilans',
            'Penemuan Kasus',
            'Penyelidikan epidemiologi',
            'Pengendalian Vektor',
            'OutBreak Respon Imunization (ORI)',
            'Pelayanan Kesehatan Lingkungan',
            'Komunikasi Antar Pribadi (KAP)'
          ]
        }
      ],
      document: 'SK Struktur Organisasi'
    },
    'lintas-klaster': {
      title: 'Lintas Klaster',
      subtitle: 'Pelayanan Pendukung Lintas Klaster',
      description:
        'Lintas Klaster menyediakan layanan pendukung yang melintasi semua klaster, termasuk pelayanan gawat darurat 24 jam, kefarmasian, dan laboratorium untuk mendukung diagnosis dan pengobatan.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800',
      sections: [
        {
          title: '1. Pelayanan gawat darurat',
          details: [
            { label: 'Petugas', value: 'Dokter, perawat' },
            { label: 'Sasaran', value: 'Masyarakat' }
          ],
          description: 'UGD Puskesmas memberikan pelayanan gawat darurat dasar 24 jam seperti pertolongan pertama pada kasus ringan-sedang (asma, kejang demam, luka kecil, diare, pingsan), tindakan medis (perawatan luka, oksigenisasi, nebulisasi, infus, bedah minor), stabilisasi, konseling, hingga rujukan ke RS jika diperlukan, dilengkapi dengan fasilitas dasar dan ambulans untuk penanganan awal sebelum pasien stabil atau dirujuk.',
          services: [
            'Triase & Penilaian Awal: Penentuan tingkat kegawatan pasien saat datang (prioritas penanganan)',
            'Pemeriksaan & Diagnosis: Anamnesis (wawancara) dan pemeriksaan fisik untuk menentukan masalah medis',
            'Tindakan Medis: Perawatan luka (jahit, bersih luka), Pemberian oksigen & nebulisasi, Pemasangan infus, Penanganan kasus seperti asma, kejang demam, gastritis, dehidrasi (diare), Tindakan bedah minor/operasi kecil, Kateterisasi urine (jika perlu)',
            'Stabilisasi & Observasi: Memantau kondisi vital pasien (tanda-tanda kehidupan) dan melakukan stabilisasi sebelum dipindahkan',
            'Konseling & Edukasi: Memberikan informasi kondisi dan perawatan lanjutan pada pasien/keluarga',
            'Rujukan: Mengantar atau merujuk pasien ke rumah sakit jika kasusnya lebih kompleks',
            'Pelayanan Penunjang: Seringkali dilengkapi laboratorium dasar, apotek, dan layanan ambulans 24 jam untuk evakuasi'
          ]
        },
        {
          title: '2. Pelayanan rawat inap',
          details: [
            { label: 'Petugas', value: 'Dokter, perawat, gizi, kesling, promkes' },
            { label: 'Sasaran', value: 'Masyarakat' }
          ],
          description: 'Pelayanan rawat inap di puskesmas mencakup observasi, diagnosa, pengobatan, perawatan (keperawatan), dan rehabilitasi medik terbatas untuk kasus yang tidak terlalu kompleks, biasanya dengan durasi maksimal 5 hari atau untuk stabilisasi sebelum rujukan ke rumah sakit.',
          services: [
            'Observasi dan Diagnosis: Pemantauan kondisi pasien secara intensif dan penentuan diagnosis',
            'Pengobatan dan Keperawatan: Pemberian obat, perawatan luka, dan tindakan keperawatan lain oleh perawat',
            'Pemeriksaan Penunjang: Layanan laboratorium dasar dan pemeriksaan oleh dokter',
            'Farmasi: Penyediaan obat-obatan yang dibutuhkan pasien',
            'Gizi: Pelayanan diet sesuai kebutuhan pasien',
            'Rehabilitasi Medik Terbatas: Sesuai indikasi medis',
            'Ruang Persalinan: Tersedia di puskesmas yang memiliki fasilitas rawat inap, terutama untuk kasus ibu dan anak',
            'Rujukan: Jika kondisi pasien memerlukan perawatan lebih lanjut (lebih dari 5 hari atau kasus berat), pasien akan dirujuk ke rumah sakit'
          ]
        },
        {
          title: '3. Pelayanan kefarmasian',
          details: [
            { label: 'Petugas', value: 'Apoteker, asisten apoteker, perawat' },
            { label: 'Sasaran', value: 'Masyarakat' }
          ],
          description: 'Pelayanan di apotek Puskesmas meliputi Pengelolaan Obat (perencanaan, penyimpanan, distribusi) dan Pelayanan Farmasi Klinik langsung ke pasien, seperti pengkajian resep, penyerahan obat dengan informasi lengkap (dosis, cara pakai, efek samping), konseling, Pelayanan Informasi Obat (PIO), hingga home care (kunjungan rumah) dan pemantauan efek samping, dengan tujuan menjamin keamanan, efektivitas, dan rasionalitas penggunaan obat untuk meningkatkan mutu pelayanan pasien.',
          services: [
            'Pengelolaan Obat: Perencanaan, penyimpanan, dan distribusi obat',
            'Pengkajian Resep: Verifikasi dan evaluasi resep dokter',
            'Penyerahan Obat: Pemberian obat dengan informasi lengkap (dosis, cara pakai, efek samping)',
            'Konseling: Edukasi dan konsultasi penggunaan obat kepada pasien',
            'Pelayanan Informasi Obat (PIO): Memberikan informasi obat yang akurat',
            'Home Care: Kunjungan rumah untuk pemantauan penggunaan obat',
            'Pemantauan Efek Samping: Monitoring dan pelaporan efek samping obat'
          ]
        },
        {
          title: '4. Pelayanan laboratorium',
          details: [
            { label: 'Petugas', value: 'Petugas laboratorium' },
            { label: 'Sasaran', value: 'Masyarakat' }
          ],
          description: 'Pelayanan laboratorium di Puskesmas meliputi pemeriksaan darah lengkap, gula darah, kolesterol, asam urat, urin lengkap, feses rutin, tes kehamilan (Plano test), serta pemeriksaan penyakit menular seperti Malaria, TB (BTA), HIV, Sifilis, Hepatitis (HBsAg), dan IMS (Infeksi Menular Seksual), yang semua bertujuan untuk menunjang diagnosis, pemantauan terapi, dan pencegahan penyakit bagi masyarakat.',
          services: [
            'Pemeriksaan Darah: Darah lengkap, gula darah, kolesterol, asam urat',
            'Pemeriksaan Urin: Urin lengkap',
            'Pemeriksaan Feses: Feses rutin',
            'Tes Kehamilan: Plano test',
            'Pemeriksaan Penyakit Menular: Malaria, TB (BTA), HIV, Sifilis, Hepatitis (HBsAg), IMS (Infeksi Menular Seksual)'
          ]
        }
      ],
      document: 'SK Struktur Organisasi'
    }
  };

  const cluster = slug ? clusterData[slug] : null;

  if (!cluster) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-gray-700 mb-4">Layanan Tidak Ditemukan</h1>
          <Link to="/pelayanan">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
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
      <section className="bg-maroon-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/pelayanan">
            <Button variant="ghost" className="text-white hover:bg-maroon-600 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
          </Link>
          <h1 className="text-4xl mb-2">{cluster.title}</h1>
          <p className="text-xl text-maroon-50">{cluster.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={cluster.image}
              alt={cluster.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Description */}
          <Card className="mb-8" style={{ borderColor: '#f9d5d5' }}>
            <CardContent className="p-8">
              <h2 className="text-2xl text-maroon-700 mb-4">Tentang Klaster</h2>
              <p className="text-gray-700 leading-relaxed">{cluster.description}</p>
            </CardContent>
          </Card>

          {/* Service Types - For clusters with multiple service types (klaster-2) */}
          {cluster.serviceTypes ? (
            <>
              {cluster.serviceTypes.map((serviceType: any, typeIndex: number) => (
                <div key={typeIndex} className="mb-8">
                  {/* Service Type Header */}
                  <div className="bg-maroon-600 text-white p-4 rounded-t-lg">
                    <h2 className="text-2xl font-bold">{serviceType.typeName}</h2>
                  </div>

                  {/* Service Type Sections */}
                  {serviceType.sections.map((section: any, sectionIndex: number) => (
                    <Card key={sectionIndex} className="mb-6 rounded-t-none" style={{ borderColor: '#f9d5d5' }}>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-maroon-600" />
                          <h3 className="text-xl text-maroon-700 font-semibold">{section.title}</h3>
                        </div>

                        {/* Section Details */}
                        {section.details && (
                          <div className="mb-6 space-y-3">
                            {section.details.map((detail: any, detailIndex: number) => (
                              <div
                                key={detailIndex}
                                className="flex items-start gap-3 p-3 bg-maroon-50 rounded-lg">
                                <span className="font-semibold text-maroon-700 min-w-[180px]">
                                  {detail.label}:
                                </span>
                                <span className="text-gray-700">{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Section Services */}
                        {section.services && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                              Pelayanan yang tersedia:
                            </h4>
                            <div className="space-y-2">
                              {section.services.map((service: string, serviceIndex: number) => (
                                <div
                                  key={serviceIndex}
                                  className="flex items-start gap-3 p-3 bg-maroon-50 rounded-lg">
                                  <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{service}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </>
          ) : cluster.sections ? (
            <>
              {/* Sections - For clusters with sections (klaster-1) */}
              {cluster.sections.map((section: any, sectionIndex: number) => (
                <Card key={sectionIndex} className="mb-8" style={{ borderColor: '#f9d5d5' }}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle className="w-6 h-6 text-maroon-600" />
                      <h2 className="text-2xl text-maroon-700">{section.title}</h2>
                    </div>

                    {/* Section Details (e.g., Jam buka, Petugas, Sasaran) */}
                    {section.details && (
                      <div className="mb-6 space-y-3">
                        {section.details.map((detail: any, detailIndex: number) => (
                          <div
                            key={detailIndex}
                            className="flex items-start gap-3 p-3 bg-maroon-50 rounded-lg">
                            <span className="font-semibold text-maroon-700 min-w-[180px]">
                              {detail.label}:
                            </span>
                            <span className="text-gray-700">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Section Description */}
                    {section.description && (
                      <p className="text-gray-700 mb-4 font-medium">{section.description}</p>
                    )}

                    {/* Section Services */}
                    {section.services && (
                      <div className={section.description ? "" : ""}>
                        {section.description && (
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Pelayanan yang tersedia:
                          </h3>
                        )}
                        <div className="space-y-2">
                          {section.services.map((service: string, serviceIndex: number) => (
                            <div
                              key={serviceIndex}
                              className="flex items-start gap-3 p-3 bg-maroon-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pengaduan Section (for Sistem Informasi) */}
                    {section.pengaduan && (
                      <div className="mt-6 pt-6 border-t border-maroon-200">
                        <h3 className="text-lg font-semibold text-maroon-700 mb-4">
                          {section.pengaduan.title}
                        </h3>
                        {section.pengaduan.subtitle && (
                          <p className="text-gray-700 mb-3 font-medium">
                            {section.pengaduan.subtitle}
                          </p>
                        )}
                        <div className="space-y-2">
                          {section.pengaduan.channels.map((channel: string, channelIndex: number) => (
                            <div
                              key={channelIndex}
                              className="flex items-start gap-3 p-3 bg-maroon-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{channel}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </>
          ) : cluster.layananTersedia ? (
            <Card className="mb-8" style={{ borderColor: '#f9d5d5' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-maroon-600" />
                  <h2 className="text-2xl text-maroon-700">Jenis Pelayanan</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {cluster.layananTersedia.map((layanan: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-maroon-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{layanan}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          ) : null}

          {/* Persyaratan */}
          {cluster.persyaratan && (
            <Card className="mb-8" style={{ borderColor: '#f9d5d5' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="w-6 h-6 text-maroon-600" />
                  <h2 className="text-2xl text-maroon-700">Persyaratan</h2>
                </div>
                <div className="space-y-3">
                  {cluster.persyaratan.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-maroon-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Biaya/Tarif */}
          {cluster.biaya && (
            <Card className="mb-8" style={{ borderColor: '#f9d5d5' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-maroon-600" />
                  <h2 className="text-2xl text-maroon-700">Biaya/Tarif</h2>
                </div>
                <div className="space-y-3">
                  {cluster.biaya.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-maroon-50 rounded-lg"
                    >
                      {typeof item === 'string' ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </>
                      ) : (
                        <div className="flex-1">
                          <div className="font-semibold text-maroon-700 mb-1">
                            {item.label}
                          </div>
                          <div className="text-gray-700">{item.value}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Jumlah Pelaksana */}
          {cluster.jumlahPelaksana && (
            <Card className="mb-8" style={{ borderColor: '#f9d5d5' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-maroon-600" />
                  <h2 className="text-2xl text-maroon-700">Jumlah Pelaksana</h2>
                </div>
                <div className="space-y-3">
                  {cluster.jumlahPelaksana.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-maroon-50 rounded-lg"
                    >
                      {typeof item === 'string' ? (
                        <>
                          <Users className="w-5 h-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </>
                      ) : (
                        <div className="flex-1 flex justify-between items-center">
                          <span className="font-medium text-gray-900">{item.label}</span>
                          <span className="text-maroon-700 font-semibold">{item.value}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </section >
    </div >
  );
}
