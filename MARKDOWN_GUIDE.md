# Markdown Content Writing Guide for Articles

## Overview
Articles in the Puskesmas system use **Markdown** syntax for formatting. This allows you to write content in a simple, readable format that automatically renders into beautifully styled HTML.

## Supported Markdown Syntax

### 1. Headings

Use `#` symbols for headings. More `#` = smaller heading.

```markdown
# Heading 1 (Main Title - rarely used in content)
## Heading 2 (Section Title)
### Heading 3 (Subsection Title)
```

**Rendered as:**
- H1: Large emerald green heading
- H2: Medium emerald heading
- H3: Smaller emerald heading

---

### 2. Paragraphs

Simply write text. Separate paragraphs with a blank line.

```markdown
This is the first paragraph. It will be rendered with proper spacing and line height.

This is the second paragraph. Notice the blank line between them.
```

---

### 3. Text Emphasis

**Bold Text:**
```markdown
**This text is bold**
```

**Italic Text:**
```markdown
*This text is italic*
```

**Bold and Italic:**
```markdown
***This text is bold and italic***
```

---

### 4. Lists

**Unordered List (Bullets):**
```markdown
- First item
- Second item
- Third item
  - Nested item (indent with 2 spaces)
  - Another nested item
```

**Ordered List (Numbers):**
```markdown
1. First step
2. Second step
3. Third step
   1. Sub-step (indent with 3 spaces)
   2. Another sub-step
```

---

### 5. Links

```markdown
[Link text here](https://example.com)
```

Example:
```markdown
Visit [Puskesmas Pasongsongan](https://puskesmas-pasongsongan.com) for more info.
```

Links automatically open in a new tab and are styled in emerald green.

---

### 6. Images

```markdown
![Image description](https://example.com/image.jpg)
```

Example:
```markdown
![Kegiatan Posyandu](https://images.unsplash.com/photo-123456789)
```

Images are automatically:
- Rounded with shadow
- Responsive (full width)
- Lazy loaded for performance

---

### 7. Blockquotes

Use `>` for quotes or callouts:

```markdown
> This is a blockquote. Use it for important notes or quotes from experts.
```

**Rendered as:** Gray italic text with emerald left border.

---

### 8. Inline Code

Use backticks for inline code or technical terms:

```markdown
The `BCG` vaccine is given at birth.
```

---

### 9. Code Blocks

Use triple backticks for code blocks:

````markdown
```
This is a code block.
Multiple lines are preserved.
```
````

---

### 10. Horizontal Rule

Use three dashes for a horizontal line:

```markdown
---
```

---

## Complete Article Example

Here's a complete example of a well-formatted health article:

```markdown
## Pentingnya Imunisasi untuk Anak

Imunisasi adalah salah satu program kesehatan paling penting untuk melindungi anak dari berbagai penyakit berbahaya. Sebagai orang tua, memahami pentingnya imunisasi dan jadwal yang tepat adalah investasi kesehatan terbaik untuk masa depan anak.

### Mengapa Imunisasi Penting?

Imunisasi bekerja dengan cara merangsang sistem kekebalan tubuh anak untuk membentuk antibodi terhadap penyakit tertentu. Manfaat imunisasi meliputi:

- Melindungi anak dari penyakit berbahaya yang dapat menyebabkan kecacatan atau kematian
- Mencegah penularan penyakit ke orang lain di sekitar anak
- Menghemat biaya pengobatan di masa depan
- Memberikan perlindungan jangka panjang

### Jenis Imunisasi Dasar untuk Bayi

Program imunisasi dasar yang wajib diberikan kepada bayi meliputi:

#### 1. BCG (Bacillus Calmette-Guérin)

- Diberikan pada usia 0-1 bulan
- Melindungi dari penyakit tuberkulosis (TBC)
- Diberikan 1 kali, bekas suntikan akan membentuk benjolan kecil

#### 2. Hepatitis B

- Dosis pertama: dalam 12 jam setelah lahir
- Dosis lengkap: 4 kali pemberian (0, 1, 2, dan 3-4 bulan)
- Melindungi dari penyakit hepatitis B yang dapat merusak hati

### Hal yang Perlu Diperhatikan

**Sebelum Imunisasi:**
1. Pastikan anak dalam kondisi sehat
2. Beri tahu petugas jika anak memiliki riwayat alergi
3. Bawa buku KIA atau kartu imunisasi
4. Jangan lupa jadwal imunisasi berikutnya

**Setelah Imunisasi:**
- Kompres bekas suntikan jika bengkak atau nyeri
- Berikan ASI lebih sering
- Jika demam ringan, berikan parasetamol sesuai dosis
- Hubungi petugas kesehatan jika terjadi reaksi yang tidak biasa

### Mitos dan Fakta Imunisasi

> **Mitos:** Imunisasi dapat menyebabkan autisme
> 
> **Fakta:** Tidak ada bukti ilmiah yang menunjukkan hubungan antara imunisasi dengan autisme.

### Layanan Imunisasi di Puskesmas Pasongsongan

Puskesmas Pasongsongan menyediakan layanan imunisasi lengkap sesuai program pemerintah. Layanan tersedia setiap hari kerja dan juga melalui posyandu di desa-desa.

**Jadwal Layanan Imunisasi:**
- Senin - Jumat: 08.00 - 12.00 WIB
- Posyandu: Sesuai jadwal di masing-masing desa

Untuk informasi lebih lanjut, silakan hubungi Puskesmas Pasongsongan atau kunjungi langsung poli KIA kami.

![Kegiatan Imunisasi](https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=800)

---

*Artikel ini ditulis oleh Bidan Dewi Sartika, AMd.Keb*
```

---

## Best Practices

### ✅ DO:
- Use headings hierarchically (H2 → H3, not H2 → H4)
- Separate paragraphs with blank lines
- Use lists for multiple related items
- Add alt text to images (the text in square brackets)
- Keep paragraphs concise (3-5 sentences)
- Use bold for emphasis, not entire paragraphs
- Add horizontal rules to separate major sections

### ❌ DON'T:
- Don't use HTML tags (they're sanitized for security)
- Don't skip heading levels
- Don't write very long paragraphs
- Don't use excessive formatting
- Don't forget blank lines between elements

---

## Security Features

The Markdown renderer includes:
- **XSS Protection**: All HTML is sanitized
- **Safe Links**: External links open in new tabs with security attributes
- **Image Validation**: Only valid image URLs are rendered
- **No Script Execution**: JavaScript is completely blocked

---

## Styling Reference

All Markdown elements are automatically styled:

| Element | Style |
|---------|-------|
| H1 | 3xl, bold, emerald-700 |
| H2 | 2xl, bold, emerald-600 |
| H3 | xl, semibold, emerald-600 |
| Paragraph | Gray-700, relaxed line height |
| Bold | Semibold, gray-900 |
| Italic | Italic, gray-600 |
| Link | Emerald-600, underlined, opens in new tab |
| List | Disc/decimal bullets, gray-700 |
| Blockquote | Gray-600, italic, emerald left border |
| Image | Rounded, shadow, responsive |
| Code (inline) | Gray background, emerald text |
| Code (block) | Gray background, monospace |

---

## Testing Your Content

Before publishing, you can preview your Markdown:
1. Use an online Markdown editor like [StackEdit](https://stackedit.io/)
2. Copy your content
3. Check the preview
4. Paste into the admin form
5. Publish!

---

## Common Patterns

### Health Tips List
```markdown
## Tips Menjaga Kesehatan

Berikut adalah tips praktis untuk menjaga kesehatan:

1. **Cuci tangan** dengan sabun minimal 20 detik
2. **Makan makanan bergizi** dengan pola 4 sehat 5 sempurna
3. **Olahraga rutin** minimal 30 menit per hari
4. **Istirahat cukup** 7-8 jam per malam
```

### Warning/Important Note
```markdown
> **PENTING:** Segera periksakan diri ke Puskesmas jika mengalami demam tinggi lebih dari 3 hari.
```

### Step-by-Step Instructions
```markdown
### Cara Mencuci Tangan yang Benar

1. Basahi tangan dengan air mengalir
2. Tuangkan sabun secukupnya
3. Gosok telapak tangan
4. Gosok punggung tangan
5. Gosok sela-sela jari
6. Bilas dengan air mengalir
7. Keringkan dengan handuk bersih
```

---

## Need Help?

If you encounter any issues with Markdown formatting:
1. Check this guide for syntax examples
2. Test in an online Markdown editor first
3. Ensure blank lines between elements
4. Contact the technical team if problems persist

Happy writing! 📝
