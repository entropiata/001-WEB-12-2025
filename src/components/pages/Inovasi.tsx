import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function Inovasi() {
  const inovasiList = [
    {
      slug: 'peniti-bidan',
      title: 'PENITI BIDAN',
      shortDesc: 'Pendampingan Ibu Hamil Risiko Tinggi Berbasis Teknologi dan Kolaborasi',
      color: 'from-rose-500 to-pink-600',
    },
    {
      slug: 'dinar-pousi',
      title: 'DINAR POUSI',
      shortDesc: 'Deteksi Penyakit Tidak Menular melalui Posyandu ILP',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      slug: 'gerpas-lima',
      title: 'GERPAS LIMA',
      shortDesc: 'Gerakan Pemberantasan Sarang Nyamuk untuk Pencegahan Penyakit',
      color: 'from-emerald-500 to-green-600',
    },
    {
      slug: 'delima',
      title: 'DELIMA',
      shortDesc: 'Desa Eliminasi Kusta dan TBC Melalui Pemberdayaan Masyarakat',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Inovasi Puskesmas Pasongsongan</h1>
          <p className="text-xl text-emerald-50">
            Berbagai inovasi untuk meningkatkan kualitas pelayanan kesehatan masyarakat
          </p>
        </div>
      </section>

      {/* Inovasi Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Puskesmas Pasongsongan terus berinovasi dalam memberikan pelayanan kesehatan yang lebih baik,
              efisien, dan mudah diakses oleh masyarakat melalui pemanfaatan teknologi dan metode pelayanan yang modern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inovasiList.map((inovasi, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none group"
              >
                <div className={`h-32 bg-gradient-to-br ${inovasi.color} p-6 flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <span className="text-white text-3xl">+</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3">{inovasi.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{inovasi.shortDesc}</p>
                  <Link to={`/inovasi/${inovasi.slug}`}>
                    <Button
                      variant="ghost"
                      className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto"
                    >
                      Lihat Detail
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden" style={{ borderColor: '#A7F3D0' }}>
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl text-emerald-700 mb-4">Punya Ide Inovasi?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Kami terbuka untuk saran dan masukan dari masyarakat untuk terus meningkatkan kualitas pelayanan kesehatan.
                Hubungi kami untuk berbagi ide inovasi Anda.
              </p>
              <Link to="/hubungi-kami">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Hubungi Kami
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
