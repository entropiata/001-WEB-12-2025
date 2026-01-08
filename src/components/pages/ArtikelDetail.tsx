import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ArtikelDetail() {
  const { slug } = useParams<{ slug: string }>();

  const artikelData: Record<string, any> = {
    'tips-menjaga-kesehatan-di-musim-hujan': {
      title: 'Tips Menjaga Kesehatan di Musim Hujan',
      excerpt: 'Musim hujan sering kali membawa berbagai penyakit. Pelajari cara menjaga kesehatan Anda dan keluarga dengan tips praktis dari kami.',
      date: '28 Desember 2024',
      author: 'dr. Ahmad Hidayat, M.Kes',
      category: 'Edukasi Kesehatan',
      image: 'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=800',
      content: `
        <p>Musim hujan telah tiba, dan bersamaan dengan itu datang berbagai tantangan kesehatan yang perlu kita waspadai. Cuaca yang tidak menentu, kelembaban tinggi, dan genangan air dapat menjadi tempat berkembang biaknya berbagai penyakit. Berikut adalah tips lengkap untuk menjaga kesehatan Anda dan keluarga di musim hujan.</p>

        <h2>1. Jaga Kebersihan Diri dan Lingkungan</h2>
        <p>Kebersihan adalah kunci utama pencegahan penyakit. Pastikan Anda:</p>
        <ul>
          <li>Mencuci tangan dengan sabun dan air mengalir, terutama sebelum makan dan setelah beraktivitas</li>
          <li>Mandi dengan air bersih minimal 2 kali sehari</li>
          <li>Mengganti pakaian basah sesegera mungkin</li>
          <li>Membersihkan rumah secara rutin, terutama area yang lembab</li>
          <li>Memastikan tidak ada genangan air di sekitar rumah</li>
        </ul>

        <h2>2. Konsumsi Makanan Bergizi</h2>
        <p>Sistem kekebalan tubuh yang kuat adalah pertahanan terbaik melawan penyakit. Tingkatkan konsumsi:</p>
        <ul>
          <li>Buah-buahan kaya vitamin C seperti jeruk, jambu biji, dan kiwi</li>
          <li>Sayuran hijau yang mengandung antioksidan</li>
          <li>Protein dari ikan, telur, dan daging tanpa lemak</li>
          <li>Makanan yang mengandung zinc seperti kacang-kacangan</li>
          <li>Minum air putih minimal 8 gelas per hari</li>
        </ul>

        <h2>3. Hindari Genangan Air dan Banjir</h2>
        <p>Genangan air hujan dapat mengandung berbagai kuman dan bakteri. Jika terpaksa melewati genangan air:</p>
        <ul>
          <li>Gunakan alas kaki yang tertutup dan anti air</li>
          <li>Segera bersihkan kaki dan tangan setelah terkena air hujan</li>
          <li>Hindari membiarkan luka terbuka terkena air genangan</li>
          <li>Waspadai tanda-tanda leptospirosis jika terpaksa kontak dengan banjir</li>
        </ul>

        <h2>4. Jaga Suhu Tubuh</h2>
        <p>Perubahan suhu yang drastis dapat menurunkan daya tahan tubuh:</p>
        <ul>
          <li>Gunakan jaket atau payung saat hujan</li>
          <li>Segera ganti pakaian basah dengan yang kering</li>
          <li>Minum minuman hangat untuk menjaga suhu tubuh</li>
          <li>Istirahat yang cukup minimal 7-8 jam per hari</li>
        </ul>

        <h2>5. Waspada Penyakit Musim Hujan</h2>
        <p>Beberapa penyakit yang sering muncul saat musim hujan:</p>
        <ul>
          <li><strong>Demam Berdarah Dengue (DBD):</strong> Lakukan 3M Plus untuk mencegah perkembangbiakan nyamuk</li>
          <li><strong>Diare:</strong> Jaga kebersihan makanan dan minuman</li>
          <li><strong>Influenza:</strong> Hindari kerumunan dan jaga kebersihan</li>
          <li><strong>Leptospirosis:</strong> Hindari kontak dengan air yang tercemar urine tikus</li>
          <li><strong>Penyakit kulit:</strong> Jaga kulit tetap kering dan bersih</li>
        </ul>

        <h2>Kapan Harus ke Puskesmas?</h2>
        <p>Segera periksakan diri ke Puskesmas jika mengalami:</p>
        <ul>
          <li>Demam tinggi lebih dari 3 hari</li>
          <li>Diare terus menerus disertai muntah</li>
          <li>Batuk yang tidak kunjung sembuh</li>
          <li>Gejala DBD seperti demam tinggi, nyeri sendi, dan bintik merah</li>
          <li>Luka yang terinfeksi atau tidak kunjung sembuh</li>
        </ul>

        <p><strong>Kesimpulan:</strong> Musim hujan bukan halangan untuk tetap sehat. Dengan menerapkan pola hidup sehat, menjaga kebersihan, dan waspada terhadap gejala penyakit, kita dapat melewati musim hujan dengan kondisi tubuh yang prima. Jangan ragu untuk berkonsultasi dengan petugas kesehatan di Puskesmas Pasongsongan jika mengalami keluhan kesehatan.</p>
      `
    },
    'pentingnya-imunisasi-untuk-anak': {
      title: 'Pentingnya Imunisasi untuk Anak',
      excerpt: 'Imunisasi merupakan investasi kesehatan terbaik untuk anak. Kenali jenis-jenis imunisasi dan jadwal yang tepat untuk si kecil.',
      date: '25 Desember 2024',
      author: 'Bidan Dewi Sartika, AMd.Keb',
      category: 'Imunisasi',
      image: 'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800',
      content: `
        <p>Imunisasi adalah salah satu program kesehatan paling penting untuk melindungi anak dari berbagai penyakit berbahaya. Sebagai orang tua, memahami pentingnya imunisasi dan jadwal yang tepat adalah investasi kesehatan terbaik untuk masa depan anak.</p>

        <h2>Mengapa Imunisasi Penting?</h2>
        <p>Imunisasi bekerja dengan cara merangsang sistem kekebalan tubuh anak untuk membentuk antibodi terhadap penyakit tertentu. Manfaat imunisasi meliputi:</p>
        <ul>
          <li>Melindungi anak dari penyakit berbahaya yang dapat menyebabkan kecacatan atau kematian</li>
          <li>Mencegah penularan penyakit ke orang lain di sekitar anak</li>
          <li>Menghemat biaya pengobatan di masa depan</li>
          <li>Memberikan perlindungan jangka panjang</li>
          <li>Mendukung program pemerintah dalam mencapai Indonesia bebas penyakit menular</li>
        </ul>

        <h2>Jenis Imunisasi Dasar untuk Bayi</h2>
        <p>Program imunisasi dasar yang wajib diberikan kepada bayi meliputi:</p>
        
        <h3>1. BCG (Bacillus Calmette-Guérin)</h3>
        <ul>
          <li>Diberikan pada usia 0-1 bulan</li>
          <li>Melindungi dari penyakit tuberkulosis (TBC)</li>
          <li>Diberikan 1 kali, bekas suntikan akan membentuk benjolan kecil</li>
        </ul>

        <h3>2. Hepatitis B</h3>
        <ul>
          <li>Dosis pertama: dalam 12 jam setelah lahir</li>
          <li>Dosis lengkap: 4 kali pemberian (0, 1, 2, dan 3-4 bulan)</li>
          <li>Melindungi dari penyakit hepatitis B yang dapat merusak hati</li>
        </ul>

        <h3>3. Polio</h3>
        <ul>
          <li>Diberikan 4 kali (saat lahir, 2, 3, dan 4 bulan)</li>
          <li>Melindungi dari penyakit polio yang dapat menyebabkan kelumpuhan</li>
          <li>Tersedia dalam bentuk tetes (OPV) dan suntikan (IPV)</li>
        </ul>

        <h3>4. DPT-HB-Hib (Pentavalent)</h3>
        <ul>
          <li>Diberikan 3 kali pada usia 2, 3, dan 4 bulan</li>
          <li>Melindungi dari 6 penyakit sekaligus: Difteri, Pertusis (batuk rejan), Tetanus, Hepatitis B, Pneumonia, dan Meningitis</li>
        </ul>

        <h3>5. Campak/MR (Measles Rubella)</h3>
        <ul>
          <li>Diberikan pada usia 9 bulan dan 18 bulan</li>
          <li>Melindungi dari penyakit campak dan rubella</li>
        </ul>

        <h2>Imunisasi Lanjutan</h2>
        <p>Setelah imunisasi dasar, anak memerlukan imunisasi lanjutan untuk memperkuat perlindungan:</p>
        <ul>
          <li><strong>Usia 18 bulan:</strong> DPT-HB-Hib dan Campak/MR</li>
          <li><strong>Usia 5 tahun (kelas 1 SD):</strong> DT dan Campak/MR</li>
          <li><strong>Usia 11-12 tahun (kelas 5-6 SD):</strong> Td dan HPV (untuk anak perempuan)</li>
        </ul>

        <h2>Hal yang Perlu Diperhatikan</h2>
        
        <h3>Sebelum Imunisasi:</h3>
        <ul>
          <li>Pastikan anak dalam kondisi sehat</li>
          <li>Beri tahu petugas jika anak memiliki riwayat alergi</li>
          <li>Bawa buku KIA atau kartu imunisasi</li>
          <li>Jangan lupa jadwal imunisasi berikutnya</li>
        </ul>

        <h3>Setelah Imunisasi:</h3>
        <ul>
          <li>Kompres bekas suntikan jika bengkak atau nyeri</li>
          <li>Berikan ASI lebih sering</li>
          <li>Jika demam ringan, berikan parasetamol sesuai dosis</li>
          <li>Hubungi petugas kesehatan jika terjadi reaksi yang tidak biasa</li>
        </ul>

        <h2>Mitos dan Fakta Imunisasi</h2>
        <p><strong>Mitos:</strong> Imunisasi dapat menyebabkan autisme<br>
        <strong>Fakta:</strong> Tidak ada bukti ilmiah yang menunjukkan hubungan antara imunisasi dengan autisme.</p>

        <p><strong>Mitos:</strong> Imunisasi tidak aman<br>
        <strong>Fakta:</strong> Vaksin telah melalui uji keamanan yang ketat sebelum digunakan.</p>

        <p><strong>Mitos:</strong> Lebih baik membiarkan anak sakit secara alami<br>
        <strong>Fakta:</strong> Penyakit yang dapat dicegah dengan vaksin sangat berbahaya dan dapat berakibat fatal.</p>

        <h2>Layanan Imunisasi di Puskesmas Pasongsongan</h2>
        <p>Puskesmas Pasongsongan menyediakan layanan imunisasi lengkap sesuai program pemerintah. Layanan tersedia setiap hari kerja dan juga melalui posyandu di desa-desa. Imunisasi untuk peserta BPJS dan masyarakat umum tersedia secara gratis.</p>

        <p><strong>Jadwal Layanan Imunisasi:</strong></p>
        <ul>
          <li>Senin - Jumat: 08.00 - 12.00 WIB</li>
          <li>Posyandu: Sesuai jadwal di masing-masing desa</li>
        </ul>

        <p>Untuk informasi lebih lanjut atau konsultasi imunisasi, silakan hubungi Puskesmas Pasongsongan atau kunjungi langsung poli KIA kami.</p>
      `
    },
    'program-posyandu-lansia-bulan-desember': {
      title: 'Program Posyandu Lansia Bulan Desember',
      excerpt: 'Kegiatan pemeriksaan kesehatan rutin untuk lansia telah dilaksanakan dengan sukses. Lebih dari 100 lansia mengikuti program ini.',
      date: '20 Desember 2024',
      author: 'Tim Puskesmas Pasongsongan',
      category: 'Kegiatan',
      image: 'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=800',
      content: `
        <p>Puskesmas Pasongsongan kembali mengadakan Program Posyandu Lansia pada bulan Desember 2024. Kegiatan yang berlangsung di 8 desa wilayah kerja kami ini diikuti oleh lebih dari 100 lansia dengan antusias yang tinggi.</p>

        <h2>Rangkaian Kegiatan</h2>
        <p>Program Posyandu Lansia bulan ini menyelenggarakan berbagai kegiatan pelayanan kesehatan yang komprehensif:</p>

        <h3>1. Pemeriksaan Kesehatan</h3>
        <ul>
          <li>Pemeriksaan tekanan darah</li>
          <li>Pemeriksaan gula darah sewaktu</li>
          <li>Pemeriksaan kolesterol</li>
          <li>Pemeriksaan asam urat</li>
          <li>Penimbangan berat badan dan pengukuran tinggi badan</li>
          <li>Konsultasi kesehatan dengan dokter dan perawat</li>
        </ul>

        <h3>2. Senam Lansia</h3>
        <p>Kegiatan senam lansia dipandu oleh instruktur berpengalaman dengan gerakan yang disesuaikan untuk kesehatan lansia. Senam rutin ini bertujuan untuk:</p>
        <ul>
          <li>Meningkatkan kebugaran tubuh</li>
          <li>Menjaga kelenturan sendi</li>
          <li>Meningkatkan sirkulasi darah</li>
          <li>Mengurangi risiko penyakit degeneratif</li>
          <li>Menciptakan suasana kebersamaan</li>
        </ul>

        <h3>3. Edukasi Kesehatan</h3>
        <p>Sesi edukasi kesehatan kali ini membahas topik:</p>
        <ul>
          <li>Pola makan sehat untuk lansia</li>
          <li>Manajemen penyakit kronis (diabetes, hipertensi)</li>
          <li>Pentingnya aktivitas fisik rutin</li>
          <li>Pencegahan jatuh pada lansia</li>
          <li>Kesehatan mental dan kognitif</li>
        </ul>

        <h3>4. Pemberian Vitamin dan PMT</h3>
        <p>Seluruh peserta mendapatkan:</p>
        <ul>
          <li>Vitamin sesuai kebutuhan</li>
          <li>Pemberian Makanan Tambahan (PMT) bergizi</li>
          <li>Tablet kalsium untuk kesehatan tulang</li>
        </ul>

        <h2>Hasil Pemeriksaan</h2>
        <p>Dari 105 lansia yang diperiksa, ditemukan kondisi sebagai berikut:</p>
        <ul>
          <li>42 lansia dengan hipertensi (tekanan darah tinggi)</li>
          <li>28 lansia dengan diabetes melitus</li>
          <li>35 lansia dengan kadar kolesterol tinggi</li>
          <li>18 lansia dengan asam urat tinggi</li>
          <li>52 lansia dalam kondisi sehat</li>
        </ul>

        <p>Lansia dengan hasil pemeriksaan di luar normal telah mendapatkan konseling dan pengobatan yang sesuai. Mereka juga dijadwalkan untuk kontrol rutin di Poli Lansia Puskesmas.</p>

        <h2>Testimoni Peserta</h2>
        <p><em>"Alhamdulillah, saya sangat senang dengan program posyandu lansia ini. Selain mendapat pemeriksaan kesehatan gratis, saya juga bisa bertemu dengan teman-teman sebaya dan berolahraga bersama. Terima kasih Puskesmas Pasongsongan."</em> - Ibu Siti (68 tahun)</p>

        <p><em>"Program ini sangat bermanfaat. Saya jadi tahu kondisi kesehatan saya dan mendapat saran dari dokter tentang pola makan yang baik. Semoga program ini terus berlanjut."</em> - Bapak Ahmad (72 tahun)</p>

        <h2>Jadwal Posyandu Lansia Januari 2025</h2>
        <p>Posyandu Lansia akan kembali dilaksanakan pada bulan Januari 2025 dengan jadwal sebagai berikut:</p>
        <ul>
          <li><strong>Desa Pasongsongan:</strong> 8 Januari 2025, 08.00 WIB</li>
          <li><strong>Desa Sokobanah:</strong> 10 Januari 2025, 08.00 WIB</li>
          <li><strong>Desa Bataal:</strong> 12 Januari 2025, 08.00 WIB</li>
          <li><strong>Desa Pandian:</strong> 15 Januari 2025, 08.00 WIB</li>
          <li><strong>Desa Banjar:</strong> 17 Januari 2025, 08.00 WIB</li>
          <li><strong>Desa Banbaru:</strong> 19 Januari 2025, 08.00 WIB</li>
          <li><strong>Desa Patemon:</strong> 22 Januari 2025, 08.00 WIB</li>
          <li><strong>Desa Kaduara Timur:</strong> 24 Januari 2025, 08.00 WIB</li>
        </ul>

        <h2>Ajakan untuk Lansia</h2>
        <p>Kami mengajak seluruh lansia di wilayah kerja Puskesmas Pasongsongan untuk aktif mengikuti Program Posyandu Lansia. Manfaatkan layanan kesehatan gratis ini untuk menjaga kesehatan dan kualitas hidup di masa tua.</p>

        <p>Untuk informasi lebih lanjut, silakan hubungi Puskesmas Pasongsongan atau kader kesehatan di desa masing-masing.</p>

        <p><strong>Mari bersama-sama mewujudkan lansia yang sehat, aktif, dan produktif!</strong></p>
      `
    },
    'cara-mencegah-stunting-pada-balita': {
      title: 'Cara Mencegah Stunting pada Balita',
      excerpt: 'Stunting dapat dicegah dengan nutrisi yang tepat. Pelajari cara memberikan asupan gizi yang baik untuk tumbuh kembang optimal anak.',
      date: '18 Desember 2024',
      author: 'Bidan Dewi Sartika, AMd.Keb',
      category: 'Ibu & Anak',
      image: 'https://images.unsplash.com/photo-1691341114517-e61d8e2e2298?w=800',
      content: `
        <p>Stunting adalah kondisi gagal tumbuh pada anak balita akibat kekurangan gizi kronis, terutama dalam 1000 hari pertama kehidupan. Kondisi ini tidak hanya mempengaruhi tinggi badan, tetapi juga perkembangan otak dan masa depan anak. Kabar baiknya, stunting dapat dicegah dengan langkah-langkah yang tepat.</p>

        <h2>Apa itu Stunting?</h2>
        <p>Stunting adalah kondisi di mana tinggi badan anak lebih pendek dibanding standar usianya. Anak dikatakan stunting jika panjang atau tinggi badannya berada di bawah -2 standar deviasi (SD) pada kurva pertumbuhan WHO.</p>

        <h3>Dampak Stunting:</h3>
        <ul>
          <li>Gangguan perkembangan otak dan kecerdasan</li>
          <li>Penurunan kemampuan kognitif dan prestasi belajar</li>
          <li>Sistem kekebalan tubuh lemah, mudah sakit</li>
          <li>Risiko penyakit kronis di masa dewasa (diabetes, hipertensi)</li>
          <li>Produktivitas dan kualitas hidup menurun</li>
        </ul>

        <h2>1000 Hari Pertama Kehidupan (HPK)</h2>
        <p>Periode kritis pencegahan stunting adalah 1000 HPK, yang terhitung sejak masa kehamilan hingga anak berusia 2 tahun. Pada periode ini, pertumbuhan dan perkembangan otak berlangsung sangat cepat.</p>

        <h2>Cara Mencegah Stunting</h2>

        <h3>A. Saat Masa Kehamilan</h3>
        <p><strong>1. Pemeriksaan Kehamilan Rutin (ANC)</strong></p>
        <ul>
          <li>Minimal 6 kali pemeriksaan selama kehamilan</li>
          <li>Minimal 2 kali diperiksa oleh dokter</li>
          <li>Deteksi dini komplikasi kehamilan</li>
        </ul>

        <p><strong>2. Konsumsi Gizi Seimbang</strong></p>
        <ul>
          <li>Makan dengan porsi lebih banyak dan beragam</li>
          <li>Konsumsi protein hewani (telur, ikan, daging, susu)</li>
          <li>Sayur dan buah-buahan segar</li>
          <li>Tambah 1 porsi makan untuk janin</li>
        </ul>

        <p><strong>3. Konsumsi Tablet Tambah Darah (TTD)</strong></p>
        <ul>
          <li>Minum TTD minimal 90 tablet selama kehamilan</li>
          <li>Mencegah anemia pada ibu hamil</li>
          <li>Diminum setelah makan dengan air putih atau jus</li>
        </ul>

        <p><strong>4. Hindari Asap Rokok dan Polusi</strong></p>
        <ul>
          <li>Hindari paparan asap rokok</li>
          <li>Jauhi lingkungan berpolusi</li>
          <li>Istirahat cukup</li>
        </ul>

        <h3>B. Saat Bayi (0-6 Bulan)</h3>
        <p><strong>1. ASI Eksklusif</strong></p>
        <ul>
          <li>Berikan ASI saja tanpa makanan/minuman lain sampai 6 bulan</li>
          <li>ASI mengandung nutrisi lengkap dan sempurna</li>
          <li>Susui sesering mungkin, minimal 8-12 kali sehari</li>
          <li>ASI melindungi bayi dari infeksi</li>
        </ul>

        <p><strong>2. Imunisasi Lengkap</strong></p>
        <ul>
          <li>Ikuti jadwal imunisasi dasar lengkap</li>
          <li>Melindungi bayi dari penyakit berbahaya</li>
          <li>Anak yang sering sakit berisiko stunting</li>
        </ul>

        <p><strong>3. Pemantauan Tumbuh Kembang</strong></p>
        <ul>
          <li>Timbang berat dan ukur panjang badan rutin di posyandu</li>
          <li>Catat hasil di buku KIA</li>
          <li>Konsultasi jika ada keterlambatan</li>
        </ul>

        <h3>C. Saat Anak (6-24 Bulan)</h3>
        <p><strong>1. MPASI Berkualitas</strong></p>
        <ul>
          <li>Mulai MPASI saat usia 6 bulan</li>
          <li>Tekstur disesuaikan dengan usia (lumat, lembik, cincang)</li>
          <li>Berikan makanan beragam dan bergizi</li>
          <li>Frekuensi makan: 6-8 bulan (2-3 kali), 9-23 bulan (3-4 kali)</li>
          <li>Berikan camilan bergizi 1-2 kali sehari</li>
        </ul>

        <p><strong>2. Protein Hewani Setiap Hari</strong></p>
        <ul>
          <li>Telur, ikan, ayam, daging sapi, hati</li>
          <li>Protein hewani penting untuk pertumbuhan tinggi dan otak</li>
          <li>Minimal 1-2 porsi per hari</li>
        </ul>

        <p><strong>3. Lanjutkan ASI</strong></p>
        <ul>
          <li>Berikan ASI bersama MPASI sampai 2 tahun</li>
          <li>ASI tetap memberikan nutrisi dan perlindungan</li>
        </ul>

        <p><strong>4. Jaga Kebersihan</strong></p>
        <ul>
          <li>Cuci tangan dengan sabun sebelum makan</li>
          <li>Gunakan air bersih untuk memasak</li>
          <li>Jaga kebersihan alat makan</li>
          <li>Buang air besar di jamban</li>
        </ul>

        <h2>Menu MPASI Anti Stunting</h2>
        <p><strong>Contoh Menu 1 Hari untuk Anak 9-11 Bulan:</strong></p>
        
        <p><strong>Pagi (Jam 07.00):</strong> ASI</p>
        
        <p><strong>Sarapan (Jam 08.00):</strong><br>
        Bubur nasi + telur rebus + wortel + minyak sayur</p>
        
        <p><strong>Snack (Jam 10.00):</strong> Pisang</p>
        
        <p><strong>Siang (Jam 12.00):</strong><br>
        Nasi tim + ikan + bayam + tempe + minyak sayur</p>
        
        <p><strong>Snack (Jam 15.00):</strong> Biskuit + ASI</p>
        
        <p><strong>Malam (Jam 18.00):</strong><br>
        Nasi lembek + ayam suwir + labu siam + tahu + minyak sayur</p>
        
        <p><strong>Sebelum Tidur:</strong> ASI</p>

        <h2>Peran Posyandu</h2>
        <p>Rutin datang ke posyandu setiap bulan untuk:</p>
        <ul>
          <li>Penimbangan dan pengukuran anak</li>
          <li>Pemantauan pertumbuhan di KMS</li>
          <li>Konseling gizi dan tumbuh kembang</li>
          <li>Pemberian vitamin A dan obat cacing</li>
          <li>Deteksi dini stunting</li>
        </ul>

        <h2>Program Puskesmas Pasongsongan</h2>
        <p>Puskesmas Pasongsongan berkomitmen mencegah stunting melalui:</p>
        <ul>
          <li>Pemeriksaan kehamilan gratis</li>
          <li>Pemberian TTD untuk ibu hamil</li>
          <li>Kelas ibu hamil dan balita</li>
          <li>Konseling gizi individu</li>
          <li>Pemantauan balita stunting</li>
          <li>Pemberian makanan tambahan untuk balita gizi kurang</li>
          <li>Kunjungan rumah untuk kasus stunting</li>
        </ul>

        <h2>Kesimpulan</h2>
        <p>Stunting dapat dicegah dengan pemberian gizi yang baik sejak masa kehamilan hingga anak berusia 2 tahun. Peran orang tua, keluarga, dan lingkungan sangat penting. Mari bersama-sama cegah stunting untuk generasi Indonesia yang lebih sehat dan cerdas!</p>

        <p><strong>Konsultasi Gratis:</strong> Datang ke Poli KIA Puskesmas Pasongsongan setiap hari kerja atau hubungi bidan desa Anda.</p>
      `
    },
  };

  const artikel = slug ? artikelData[slug] : null;

  if (!artikel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-700 mb-4">Artikel tidak ditemukan</h2>
          <Link to="/artikel">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali ke Artikel
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/artikel">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6 -ml-2"
              size="sm"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali ke Artikel
            </Button>
          </Link>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              {artikel.category}
            </span>
          </div>
          <h1 className="text-4xl mb-4">{artikel.title}</h1>
          <div className="flex items-center gap-4 text-emerald-50">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{artikel.date}</span>
            </div>
            <span>•</span>
            <span>{artikel.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={artikel.image}
              alt={artikel.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Share Buttons */}
          <Card className="mb-8 border-emerald-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Share2 className="w-5 h-5" />
                  <span>Bagikan artikel ini:</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-sky-600 text-sky-600 hover:bg-sky-50"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <Card>
            <CardContent className="p-8 prose prose-emerald max-w-none">
              <div
                className="artikel-content"
                dangerouslySetInnerHTML={{ __html: artikel.content }}
              />
            </CardContent>
          </Card>

          {/* Back to Articles */}
          <div className="mt-8 text-center">
            <Link to="/artikel">
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Lihat Artikel Lainnya
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .artikel-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #059669;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .artikel-content h3 {
          font-size: 1.375rem;
          font-weight: 600;
          color: #047857;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .artikel-content p {
          color: #374151;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .artikel-content ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          list-style-type: disc;
        }
        .artikel-content li {
          color: #374151;
          line-height: 1.75;
          margin-bottom: 0.5rem;
        }
        .artikel-content strong {
          font-weight: 600;
          color: #1f2937;
        }
        .artikel-content em {
          font-style: italic;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
