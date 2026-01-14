import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { MapPin, Phone, Mail, Facebook, Instagram, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

export function HubungiKami() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ nama: '', email: '', pesan: '' });

        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.message || 'Gagal mengirim pesan');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Tidak dapat terhubung ke server. Silakan coba lagi nanti.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Abubakar Siddiq, Benteng Utara, Panaongan, Kec. Pasongsongan, Kabupaten Sumenep, Jawa Timur 69457',
    },
    {
      icon: Phone,
      title: 'Telepon/No.Whatsapp',
      content: '085852236642',
      link: 'tel:+6285852236642',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'pkm.pasongsongan@gmail.com',
      link: 'mailto:pkm.pasongsongan@gmail.com',
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      link: 'https://facebook.com/puskesmaspasongsongan',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://instagram.com/puskesmaspasongsongan',
      color: 'bg-pink-600 hover:bg-pink-700',
    },
    {
      icon: Phone,
      name: 'WhatsApp',
      link: 'https://api.whatsapp.com/send/?phone=6285852236642&text=Halo+Puskesmas%2C%0ASaya+ingin+menanyakan+informasi+terkait+layanan+kesehatan.%0AMohon+informasinya%2C+terima+kasih.&type=phone_number&app_absent=0',
      color: 'bg-green-600 hover:bg-green-700',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-maroon-700 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl mb-4 font-bold">Hubungi Kami</h1>
          <p className="text-base sm:text-xl text-maroon-50">
            Kami siap melayani dan menjawab pertanyaan Anda
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-maroon-700 mb-6">Informasi Kontak</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} style={{ borderColor: '#f9d5d5' }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-maroon-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-maroon-600" />
                          </div>
                          <div>
                            <h4 className="text-gray-900 mb-1">{info.title}</h4>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-gray-600 hover:text-maroon-600 transition-colors"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-gray-600">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl text-gray-900 mb-4">Media Sosial</h3>
                <div className="flex gap-3">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 ${social.color} text-white rounded-lg flex items-center justify-center transition-colors`}
                        title={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Jam Pelayanan */}
              <Card className="mt-8 bg-maroon-50" style={{ borderColor: '#f9d5d5' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl text-maroon-700 mb-4">Jam Pelayanan</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span>08.00 - 14.00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu</span>
                      <span>08.00 - 12.00 WIB</span>
                    </div>
                    <div className="pt-3 border-t border-maroon-300">
                      <p className="text-sm text-gray-600">
                        Untuk layanan darurat 24 jam, hubungi nomor darurat kami
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-maroon-100">
                <CardContent className="p-8">
                  <h2 className="text-2xl text-maroon-700 mb-6">Kirim Pesan</h2>

                  {/* Success Message */}
                  {success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Pesan Berhasil Terkirim!</p>
                        <p className="text-sm text-green-700 mt-1">
                          Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nama">Nama Lengkap</Label>
                      <Input
                        id="nama"
                        name="nama"
                        type="text"
                        placeholder="Masukkan nama lengkap Anda"
                        value={formData.nama}
                        onChange={handleChange}
                        className="mt-2 border-maroon-200 focus:border-maroon-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail / No. Telepon</Label>
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Masukkan email atau nomor telepon Anda"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 border-maroon-200 focus:border-maroon-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="pesan">Pesan</Label>
                      <Textarea
                        id="pesan"
                        name="pesan"
                        placeholder="Tuliskan pesan atau pertanyaan Anda"
                        value={formData.pesan}
                        onChange={handleChange}
                        className="mt-2 border-maroon-200 focus:border-maroon-500 min-h-[150px]"
                        required
                        disabled={loading}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-maroon-600 hover:bg-maroon-700 text-white"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-maroon-700 mb-8 text-center">Lokasi Kami</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.8!2d113.66322117794408!3d-6.886455629332545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTMnMTEuMiJTIDExM8KwMzknNDcuNiJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
