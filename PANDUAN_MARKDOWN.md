# Panduan Menulis Artikel dengan Markdown

## Pengenalan
Artikel di sistem Puskesmas menggunakan format **Markdown** untuk pemformatan. Markdown adalah cara menulis yang sederhana dan mudah dibaca yang otomatis berubah menjadi tampilan HTML yang indah.

## Sintaks Markdown yang Didukung

### 1. Judul (Headings)

Gunakan simbol `#` untuk membuat judul. Semakin banyak `#`, semakin kecil judulnya.

```markdown
# Judul 1 (Jarang digunakan dalam konten)
## Judul 2 (Judul Bagian)
### Judul 3 (Judul Sub-bagian)
```

---

### 2. Paragraf

Cukup tulis teks biasa. Pisahkan paragraf dengan baris kosong.

```markdown
Ini adalah paragraf pertama. Akan ditampilkan dengan jarak dan tinggi baris yang tepat.

Ini adalah paragraf kedua. Perhatikan baris kosong di antaranya.
```

---

### 3. Penekanan Teks

**Teks Tebal:**
```markdown
**Teks ini tebal**
```

**Teks Miring:**
```markdown
*Teks ini miring*
```

**Tebal dan Miring:**
```markdown
***Teks ini tebal dan miring***
```

---

### 4. Daftar (Lists)

**Daftar Tidak Berurutan (Bullet Points):**
```markdown
- Item pertama
- Item kedua
- Item ketiga
  - Item bersarang (indent dengan 2 spasi)
  - Item bersarang lainnya
```

**Daftar Berurutan (Angka):**
```markdown
1. Langkah pertama
2. Langkah kedua
3. Langkah ketiga
   1. Sub-langkah (indent dengan 3 spasi)
   2. Sub-langkah lainnya
```

---

### 5. Tautan (Links)

```markdown
[Teks tautan di sini](https://contoh.com)
```

Contoh:
```markdown
Kunjungi [Puskesmas Pasongsongan](https://puskesmas-pasongsongan.com) untuk info lebih lanjut.
```

---

### 6. Gambar

```markdown
![Deskripsi gambar](https://contoh.com/gambar.jpg)
```

Contoh:
```markdown
![Kegiatan Posyandu](https://images.unsplash.com/photo-123456789)
```

Gambar otomatis:
- Berbentuk rounded dengan bayangan
- Responsif (lebar penuh)
- Lazy loading untuk performa

---

### 7. Kutipan (Blockquotes)

Gunakan `>` untuk kutipan atau catatan penting:

```markdown
> Ini adalah kutipan. Gunakan untuk catatan penting atau kutipan dari ahli.
```

---

### 8. Kode Inline

Gunakan backtick untuk kode atau istilah teknis:

```markdown
Vaksin `BCG` diberikan saat lahir.
```

---

### 9. Garis Horizontal

Gunakan tiga tanda minus untuk garis horizontal:

```markdown
---
```

---

## Contoh Artikel Lengkap

Berikut contoh artikel kesehatan yang diformat dengan baik:

```markdown
## Pentingnya Imunisasi untuk Anak

Imunisasi adalah salah satu program kesehatan paling penting untuk melindungi anak dari berbagai penyakit berbahaya.

### Mengapa Imunisasi Penting?

Imunisasi bekerja dengan cara merangsang sistem kekebalan tubuh anak. Manfaat imunisasi meliputi:

- Melindungi anak dari penyakit berbahaya
- Mencegah penularan penyakit
- Menghemat biaya pengobatan
- Memberikan perlindungan jangka panjang

### Jenis Imunisasi Dasar

#### 1. BCG (Bacillus Calmette-Guérin)

- Diberikan pada usia 0-1 bulan
- Melindungi dari penyakit TBC
- Diberikan 1 kali

#### 2. Hepatitis B

- Dosis pertama: dalam 12 jam setelah lahir
- Dosis lengkap: 4 kali pemberian
- Melindungi dari hepatitis B

### Hal yang Perlu Diperhatikan

**Sebelum Imunisasi:**
1. Pastikan anak sehat
2. Beri tahu petugas jika ada alergi
3. Bawa buku KIA
4. Catat jadwal berikutnya

> **PENTING:** Hubungi petugas kesehatan jika terjadi reaksi tidak biasa.

![Kegiatan Imunisasi](https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800)
```

---

## Tips Penulisan

### ✅ LAKUKAN:
- Gunakan judul secara hierarkis (H2 → H3)
- Pisahkan paragraf dengan baris kosong
- Gunakan daftar untuk item terkait
- Tambahkan deskripsi pada gambar
- Buat paragraf singkat (3-5 kalimat)
- Gunakan tebal untuk penekanan

### ❌ JANGAN:
- Jangan gunakan tag HTML
- Jangan lewati level judul
- Jangan tulis paragraf sangat panjang
- Jangan lupa baris kosong antar elemen

---

## Keamanan

Sistem Markdown dilengkapi:
- **Proteksi XSS**: Semua HTML disanitasi
- **Link Aman**: Link eksternal dibuka di tab baru
- **Validasi Gambar**: Hanya URL gambar valid
- **Tanpa Script**: JavaScript diblokir sepenuhnya

---

## Pola Umum

### Daftar Tips Kesehatan
```markdown
## Tips Menjaga Kesehatan

1. **Cuci tangan** dengan sabun minimal 20 detik
2. **Makan bergizi** dengan pola 4 sehat 5 sempurna
3. **Olahraga rutin** minimal 30 menit per hari
```

### Catatan Penting
```markdown
> **PENTING:** Segera periksakan diri jika demam tinggi lebih dari 3 hari.
```

---

Selamat menulis! 📝
