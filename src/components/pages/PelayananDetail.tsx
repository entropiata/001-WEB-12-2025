import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
  ArrowLeft,
  CheckCircle,
  FileText,
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
      layananTersedia: [
        'Manajemen inti Puskesmas',
        'Manajemen arsip',
        'Manajemen SDM',
        'Manajemen sarana, prasarana, dan perbekalan kesehatan',
        'Manajemen mutu pelayanan',
        'Manajemen keuangan dan aset/BMD',
        'Manajemen sistem informasi digital',
        'Manajemen jejaring',
        'Manajemen pemberdayaan masyarakat'
      ],
      document: 'SK Struktur Organisasi'
    },
    'klaster-2': {
      title: 'Klaster 2 – Ibu dan Anak',
      subtitle: 'Pelayanan Kesehatan Ibu Hamil, Bersalin, Nifas, dan Anak',
      description:
        'Klaster Ibu dan Anak menyediakan pelayanan kesehatan komprehensif untuk ibu hamil, bersalin, nifas, serta bayi dan anak dari neonatal hingga remaja dengan pendekatan holistik dan terintegrasi.',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800',
      layananTersedia: [
        'Pelayanan kesehatan ibu hamil, bersalin, nifas',
        'Pelayanan neonatal dan balita',
        'Pelayanan anak prasekolah, usia sekolah, dan remaja',
        'ANC, persalinan normal, nifas',
        'Neonatal esensial',
        'Imunisasi',
        'SDIDTK',
        'MTBS',
        'Pelayanan gizi ibu dan anak',
        'Skrining penyakit dan kesehatan jiwa',
        'Kesehatan gigi dan mulut',
        'Pengobatan umum',
        'Gawat Darurat Maternal Neonatal',
        'Perkesmas',
        'Skrining kekerasan terhadap perempuan dan anak'
      ],
      document: 'SK Struktur Organisasi'
    },
    'klaster-3': {
      title: 'Klaster 3 – Usia Dewasa dan Lansia',
      subtitle: 'Pelayanan Kesehatan Usia Dewasa dan Lanjut Usia',
      description:
        'Klaster Usia Dewasa dan Lansia fokus pada pelayanan kesehatan preventif dan kuratif untuk usia produktif hingga lanjut usia, termasuk skrining penyakit tidak menular dan program kesehatan reproduksi.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      layananTersedia: [
        'Pelayanan kesehatan usia dewasa',
        'Pelayanan kesehatan lanjut usia',
        'Skrining PTM dan penyakit menular',
        'Skrining kesehatan jiwa',
        'Skrining kebugaran jasmani',
        'Skrining layak hamil dan geriatri',
        'Kesehatan reproduksi (catin)',
        'KB',
        'Pelayanan gizi dewasa dan lansia',
        'Pengobatan umum',
        'Kesehatan gigi dan mulut',
        'Kesehatan kerja',
        'Perkesmas',
        'Skrining kekerasan terhadap perempuan dan anak'
      ],
      document: 'SK Struktur Organisasi'
    },
    'klaster-4': {
      title: 'Klaster 4 – Penanggulangan Penyakit Menular',
      subtitle: 'Pencegahan dan Pengendalian Penyakit Menular',
      description:
        'Klaster Penanggulangan Penyakit Menular bertugas melakukan surveilans, pencegahan, dan pengendalian penyakit menular melalui sistem kewaspadaan dini, penyelidikan epidemiologi, dan pengendalian vektor.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
      layananTersedia: [
        'Pencegahan, kewaspadaan dini, dan respon',
        'Surveilans penyakit',
        'Penemuan kasus',
        'Penyelidikan epidemiologi',
        'Pengendalian vektor',
        'ORI (Outbreak Response Immunization)',
        'Pelayanan kesehatan lingkungan',
        'Pengawasan kualitas lingkungan',
        'Komunikasi Antar Pribadi (KAP)'
      ],
      document: 'SK Struktur Organisasi'
    },
    'lintas-klaster': {
      title: 'Lintas Klaster',
      subtitle: 'Pelayanan Pendukung Lintas Klaster',
      description:
        'Lintas Klaster menyediakan layanan pendukung yang melintasi semua klaster, termasuk pelayanan gawat darurat 24 jam, kefarmasian, dan laboratorium untuk mendukung diagnosis dan pengobatan.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800',
      layananTersedia: [
        'Pelayanan gawat darurat',
        'Pelayanan kefarmasian',
        'Pelayanan laboratorium (manusia, vektor, reservoir, dan lingkungan)'
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
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/pelayanan">
            <Button variant="ghost" className="text-white hover:bg-emerald-600 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
          </Link>
          <h1 className="text-4xl mb-2">{cluster.title}</h1>
          <p className="text-xl text-emerald-50">{cluster.subtitle}</p>
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
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl text-emerald-700 mb-4">Tentang Klaster</h2>
              <p className="text-gray-700 leading-relaxed">{cluster.description}</p>
            </CardContent>
          </Card>

          {/* Layanan Tersedia */}
          <Card className="mb-8" style={{ borderColor: '#A7F3D0' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl text-emerald-700">Jenis Pelayanan</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {cluster.layananTersedia.map((layanan: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{layanan}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dokumen */}
          {cluster.document && (
            <Card style={{ borderColor: '#A7F3D0' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl text-emerald-700">Dokumen Terkait</h2>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-gray-700 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    {cluster.document}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
