# 🚀 Data Analyst Portfolio - Project Plan & Specifications

Dokumen ini merupakan panduan dan acuan utama (*Master Plan*) dalam membangun web portofolio interaktif untuk **Data Analyst**.

---

## 1. Ringkasan Proyek & Tech Stack

- **Jenis Web**: Single-page Landing Page Portfolio Data Analyst
- **Tech Stack**:
  - **HTML5**: Struktur semantik & SEO-friendly.
  - **CSS3**: Vanilla CSS dengan modern layout (Flexbox & CSS Grid), CSS Custom Properties (Variables), glassmorphism, dan micro-animations.
  - **JavaScript**: Vanilla JS (ES6+) untuk interaktivitas (mobile menu, smooth scrolling, active link indicator, skill interaction).
  - **Typography**: Font family `'Plus Jakarta Sans'`, sans-serif (Google Fonts).
  - **Deployment**: Vercel Ready.
- **Tema & Style**: **Modern Dark Tech** (desain elegan, futuristik, kontras tinggi, dan nyaman dibaca).

---

## 2. Variabel Desain & Sistem Warna (Design Tokens)

Berikut adalah variabel CSS yang akan didefinisikan dalam `style.css`:

```css
:root {
  /* Color Palette */
  --bg-primary: #0F172A;      /* Slate Dark (Background utama) */
  --bg-card: #1E293B;         /* Slate Card (Background container & kartu) */
  --accent-primary: #0EA5E9;   /* Sky Blue (Accent utama: button, link, highlight) */
  --accent-secondary: #10B981; /* Emerald Green (Accent sekunder: badge, status) */
  --text-primary: #F8FAFC;     /* Text Utama (Heading, teks tebal) */
  --text-secondary: #94A3B8;   /* Text Sekunder (Paragraf, deskripsi, caption) */

  /* Typography */
  --font-family: 'Plus Jakarta Sans', sans-serif;

  /* Glassmorphism & UI Accents */
  --border-color: rgba(255, 255, 255, 0.1);
  --glass-bg: rgba(30, 41, 59, 0.7);
  --shadow-glow: 0 0 20px rgba(14, 165, 233, 0.15);
}
```

---

## 3. Struktur Navigasi (Navbar)

Navbar akan melayang di bagian atas (*Fixed/Sticky*) dengan efek *glassmorphism* dan menu responsif untuk perangkat mobile:

1. **Home** (`#home`)
2. **About** (`#about`)
3. **Projects** (`#projects`)
4. **Experience** (`#experience`)
5. **Contact** (`#contact`)

---

## 4. Detail Struktur Halaman & Konten

Web ini dibangun dalam **satu halaman tunggal (Single-Page Application / SPA)** dengan section yang saling terhubung melalui *smooth scrolling*:

### 📍 Header / Navbar
- Logo / Brand Name (misal: `Name.analytics`).
- 5 Menu Navigasi Desktop (`Home`, `About`, `Projects`, `Experience`, `Contact`).
- **Hamburger Menu Toggle** & Slide-down Mobile Menu untuk tampilan layar kecil.
- Backdrop Blur (*Glassmorphism effect*) saat halaman di-scroll.

### 📍 Section 1: Home / Hero Section
- **Greeting**: Salam pembuka & pengenalan singkat.
- **Nama & Profession**: Headline nama lengkap & Jabatan **Data Analyst**.
- **Tagline**: Pernyataan nilai utama (contoh: *"Turning raw data into actionable business insights & visual stories"*).
- **Call-to-Action (CTA) Buttons**:
  - `Lihat Proyek` (Scroll ke `#projects`).
  - `Unduh CV` (Download link / preview CV).

### 📍 Section 2: About Section
- **Bio Ringkas**: Narasi latar belakang profesional, passion dalam pengolahan data, statistik, dan visualisasi data.
- **Sub-section Education**:
  - Riwayat pendidikan resmi (Gelar, Jurusan, Universitas, Tahun).
- **Sub-section Certificates**:
  - Daftar sertifikasi profesional (misal: Google Data Analytics, SQL for Data Science, Tableau Desktop Specialist, Python for Analytics) dilengkapi badge / credential link.

### 📍 Section 3: Projects Section (Showcase)
- Grid kartu proyek interaktif (*Project Cards*).
- **Setiap Kartu Proyek Mencakup**:
  - Judul Proyek & Deskripsi Masalah / Solusi Business Impact.
  - **Tech Stack Badges**: Tag visual (SQL, Python, Tableau, Power BI, Excel, Pandas, dll).
  - **Action Links**: Link ke Repository GitHub & Interactive Dashboard (Tableau/Power BI).

### 📍 Section 4: Experience & Skills Section
- **Timeline Experience**: Riwayat karir, posisi, perusahaan, periode, dan pencapaian utama (*key metrics & contributions*).
- **Interactive Skills**: Tampilan kategori keahlian yang dapat diklik/di-hover (misal: Data Analysis, Data Visualization, Database & SQL, Programming, Tools & Frameworks).

### 📍 Section 5: Contact Section & Footer
- **Form Kontak**: Input Nama, Email, Subjek, dan Pesan.
- **Social Media & Direct Contacts**: Link langsung ke LinkedIn, GitHub, Email, dan WhatsApp.
- **Footer**: Hak Cipta (*Copyright*), kredit singkat, & tombol *Back to Top*.

---

## 5. Tahapan Eksekusi & Roadmap Pengerjaan

| Tahap | Fokus Pengerjaan | Item Pekerjaan Utama |
| :--- | :--- | :--- |
| **Tahap 1** | **Foundation & Navigation** | Setup `index.html`, `style.css` (Reset CSS & Variables), serta Navbar responsif + hamburger menu. |
| **Tahap 2** | **Hero Section** | Pengerjaan komponen Home/Hero, headline, tagline, animasi halus, dan tombol CTA. |
| **Tahap 3** | **About Section** | Penyusunan Bio, layout Grid/Card untuk Education & Sertifikasi profesional. |
| **Tahap 4** | **Projects & Interactive Skills** | Desain Project Cards showcase, badging tech stack, link external, serta bagian Skills interaktif. |
| **Tahap 5** | **Experience, Contact & Footer** | Timeline riwayat kerja, Form Kontak, integrasi Link Sosmed, Footer, serta Pengujian Responsivitas & SEO. |

---

> Dokumen ini siap digunakan sebagai acuan utama pengembangan web portofolio.
