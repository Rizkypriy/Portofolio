# 📋 Laporan Audit & Rekomendasi Pembersihan Kode

> **Status Eksekusi**: ✅ **SELESAI DIBERSIHKAN**. Seluruh kode mati di `portofolio.html` serta file redundant (`style.css` dan `script.js`) telah berhasil dihapus.

Laporan ini memuat riwayat review menyeluruh terhadap seluruh file dan isi kode di dalam direktori `Portofolio`. Berdasarkan analisis terhadap relasi antar-file, struktur DOM, stylesheet CSS, dan JavaScript interaktif, seluruh kode yang tidak lagi berfungsi / mati (*dead code*) atau berlebih (*redundant*) telah diidentifikasi dan dieksekusi.

---

## 🗂️ 1. Ikhtisar Status File dalam Proyek

| File | Ukuran / Baris | Status Penggunaan | Keterangan Singkat |
| :--- | :--- | :--- | :--- |
| [`portofolio.html`](file:///d:/File%20Pribadi/Portofolio/portofolio.html) | 89 KB / 2.748 baris | **Aktif (Utama)** | Halaman portofolio utama yang berjalan mandiri (*all-in-one* dengan inline `<style>` dan `<script>`). Memiliki sisa-sisa dead code yang direkomendasikan dihapus. |
| [`style.css`](file:///d:/File%20Pribadi/Portofolio/style.css) | 29.5 KB / 1.483 baris | **Tidak Terpakai (Redundant)** | File stylesheet eksternal dari tahap awal rancangan. **Tidak dihubungkan sama sekali** di `portofolio.html` dan nama class/ID-nya berbeda. |
| [`script.js`](file:///d:/File%20Pribadi/Portofolio/script.js) | 4.6 KB / 156 baris | **Tidak Terpakai (Redundant)** | File script eksternal. **Tidak dihubungkan sama sekali** di `portofolio.html` dan memanggil ID lama yang tidak ada di DOM. |
| [`Kiki_1.jpg`](file:///d:/File%20Pribadi/Portofolio/Kiki_1.jpg) | 594 KB | **Aktif** | Digunakan sebagai foto profil utama (`src="Kiki_1.jpg"`). |
| [`Kiki.jpg`](file:///d:/File%20Pribadi/Portofolio/Kiki.jpg) | 1.18 MB | **Aktif (Fallback)** | Digunakan sebagai gambar cadangan saat error (`onerror="...src='Kiki.jpg'"`). |
| [`PORTFOLIO_PLAN.md`](file:///d:/File%20Pribadi/Portofolio/PORTFOLIO_PLAN.md) | 5.3 KB / 114 baris | **Dokumentasi** | Catatan rancangan spesifikasi proyek awal. |

---

## 🗑️ 2. Kode yang Tidak Berguna & Rekomendasi Hapus

Berikut rincian kode yang sudah tidak berfungsi dan direkomendasikan untuk dihapus:

### A. Di Dalam File [`portofolio.html`](file:///d:/File%20Pribadi/Portofolio/portofolio.html)

#### 1. Blok JavaScript Counter Animasi KPI (Dead Code)
- **Lokasi**: [`portofolio.html` baris 2609–2661](file:///d:/File%20Pribadi/Portofolio/portofolio.html#L2609-L2661)
- **Penyebab**: Sebelumnya elemen KPI/Statistik (*"10+ projects completed, 50+ datasets analyzed, 3.82 current IPK"*) telah dihapus dari HTML atas permintaan Anda. Namun fungsi JS yang mengamati `.hero-stats-row` dan menganimasikan `.stat-number` masih tertinggal dan dijalankan sia-sia di setiap pemuatan halaman.
- **Kode yang Direkomendasikan Dihapus**:
```javascript
      // 6. Number Counter Animation on Scroll
      const statNumbers = document.querySelectorAll('.stat-number');
      let statsAnimated = false;

      function animateStats() {
        statNumbers.forEach(stat => {
          const target = parseFloat(stat.getAttribute('data-target'));
          const isDecimal = stat.getAttribute('data-decimal') === 'true';
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = target * easeProgress;

            if (isDecimal) {
              stat.textContent = currentVal.toFixed(2);
            } else {
              stat.innerHTML = `${Math.floor(currentVal)}<span>+</span>`;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (isDecimal) {
                stat.textContent = target.toFixed(2);
              } else {
                stat.innerHTML = `${target}<span>+</span>`;
              }
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }

      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateStats();
          }
        });
      }, { threshold: 0.5 });

      const heroStatsRow = document.querySelector('.hero-stats-row');
      if (heroStatsRow) {
        statsObserver.observe(heroStatsRow);
      }
```

---

#### 2. Aturan CSS untuk Hero Stats & KPI (Dead CSS)
- **Lokasi Utama**: [`portofolio.html` baris 579–615](file:///d:/File%20Pribadi/Portofolio/portofolio.html#L579-L615)
- **Lokasi Responsive Media Query**:
  - [`portofolio.html` baris 1743–1745](file:///d:/File%20Pribadi/Portofolio/portofolio.html#L1743-L1745)
  - [`portofolio.html` baris 1797–1802](file:///d:/File%20Pribadi/Portofolio/portofolio.html#L1797-L1802)
- **Penyebab**: Class `.hero-stats-row`, `.stat-item`, `.stat-number`, `.stat-number.emerald`, dan `.stat-label` sudah tidak ada di elemen HTML manapun.
- **Kode yang Direkomendasikan Dihapus**:
```css
    /* Stats Counter Row */
    .hero-stats-row {
      display: flex;
      align-items: center;
      gap: 2.8rem;
      padding-top: 1.8rem;
      border-top: 1px solid var(--border-subtle);
    }

    .stat-item {
      display: flex;
      flex-direction: column;
    }

    .stat-number {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--cyan-bright);
      line-height: 1.1;
      font-family: var(--font-main);
      display: flex;
      align-items: center;
    }

    .stat-number.emerald {
      color: var(--emerald-accent);
    }

    .stat-label {
      font-size: 0.82rem;
      color: var(--text-secondary);
      font-weight: 500;
      margin-top: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
```
*Serta di bagian `@media`:*
```css
      /* Baris 1743-1745 */
      .hero-stats-row {
        justify-content: center;
      }
```
```css
      /* Baris 1797-1802 */
      .hero-stats-row {
        gap: 1.5rem;
      }
      .stat-number {
        font-size: 1.8rem;
      }
```

---

#### 3. Class Tombol Ungu `.btn-purple-gradient` (Unused CSS)
- **Lokasi**: [`portofolio.html` baris 302–313](file:///d:/File%20Pribadi/Portofolio/portofolio.html#L302-L313)
- **Penyebab**: Didefinisikan dalam stylesheet tetapi tidak pernah dipasangkan pada button/link mana pun di seluruh file HTML.
- **Kode yang Direkomendasikan Dihapus**:
```css
    .btn-purple-gradient {
      background: linear-gradient(135deg, #8b5cf6, #6d28d9);
      color: #ffffff;
      box-shadow: 0 4px 18px rgba(139, 92, 246, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-purple-gradient:hover {
      background: linear-gradient(135deg, #a78bfa, #7c3aed);
      box-shadow: 0 6px 24px rgba(139, 92, 246, 0.5);
      transform: translateY(-2px);
    }
```

---

#### 4. Animasi Donut Chart `.donut-anim` (Unused CSS & Keyframe)
- **Lokasi**: [`portofolio.html` baris 1118–1126](file:///d:/File%20Pribadi/Portofolio/portofolio.html#L1118-L1126)
- **Penyebab**: Sisa gaya untuk animasi SVG donut chart pada kartu proyek lama yang sudah diganti, sehingga class dan keyframes ini tidak pernah dipanggil.
- **Kode yang Direkomendasikan Dihapus**:
```css
    .donut-anim {
      transform-origin: center;
      animation: rotateDonut 15s linear infinite;
    }

    @keyframes rotateDonut {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
```

---

#### 5. Variabel CSS `:root` yang Tidak Pernah Digunakan
- **Lokasi**: [`portofolio.html` baris 26, 29, 33, 36, 38, 39, 56](file:///d:/File%20Pribadi/Portofolio/portofolio.html#L22-L57)
- **Penyebab**: Dideklarasikan di token tema `:root` tetapi tidak pernah dipanggil dengan `var(...)` di manapun.
- **Variabel yang Tidak Terpakai**:
  - `baris 26`: `--bg-elevated: #111a2e;`
  - `baris 29`: `--border-emerald: rgba(16, 185, 129, 0.35);`
  - `baris 33`: `--cyan-glow: rgba(14, 165, 233, 0.25);`
  - `baris 36`: `--emerald-glow: rgba(16, 185, 129, 0.25);`
  - `baris 38`: `--gold-accent: #f59e0b;`
  - `baris 39`: `--purple-accent: #8b5cf6;`
  - `baris 56`: `--transition-bounce: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);`

---

### B. File Eksternal yang Tidak Terpakai (Redundant Files)

#### 1. File [`style.css`](file:///d:/File%20Pribadi/Portofolio/style.css) (1.483 Baris / 29.5 KB)
- **Penyebab**:
  - File `portofolio.html` **tidak memuat tag `<link rel="stylesheet" href="style.css">`**. Semua styling website sudah berada di dalam tag `<style>` inline pada `portofolio.html`.
  - Selain itu, class dan ID di `style.css` (misal `.header`, `.nav-toggle`, `.btn-contact-nav`) tidak cocok dengan struktur HTML yang sekarang dipakai (`.navbar-wrapper`, `.mobile-toggle`, `.nav-cta-btn`).
- **Rekomendasi**: File ini dapat **dihapus** atau diarsipkan jika Anda menggunakan `portofolio.html` sebagai file mandiri.

#### 2. File [`script.js`](file:///d:/File%20Pribadi/Portofolio/script.js) (156 Baris / 4.6 KB)
- **Penyebab**:
  - File `portofolio.html` **tidak memuat tag `<script src="script.js"></script>`**. Seluruh logika interaktivitas (typing effect, 3D tilt, mobile menu, toast form alert) sudah terpasang rapi di dalam tag `<script>` inline pada `portofolio.html`.
  - Kode di `script.js` juga menargetkan ID yang sudah usang (`#nav-toggle`, `#header`, `#contact-form`, `#form-alert`, `#back-to-top`).
- **Rekomendasi**: File ini dapat **dihapus** atau diarsipkan karena 100% tidak terpakai oleh website.

---

## ✅ 3. Kode & File yang Berguna (Wajib Dipertahankan)

1. **[`portofolio.html`](file:///d:/File%20Pribadi/Portofolio/portofolio.html)**:
   - Seluruh markup section (Hero, About, Project Showcase, Experience magang PT Vinix & KPPS, Skills 4 kategori, Form Kontak, Sertifikat Modal).
   - Seluruh script interaktivitas aktif (Typing effect, 3D Tilt Card, Mobile drawer menu, Contact submission dummy handler, Certificate modal).
2. **[`Kiki_1.jpg`](file:///d:/File%20Pribadi/Portofolio/Kiki_1.jpg)** & **[`Kiki.jpg`](file:///d:/File%20Pribadi/Portofolio/Kiki.jpg)**:
   - Digunakan sebagai foto profil dan fallback image. Keduanya aktif dan wajib dipertahankan.
3. **[`PORTFOLIO_PLAN.md`](file:///d:/File%20Pribadi/Portofolio/PORTFOLIO_PLAN.md)**:
   - Berguna sebagai dokumentasi riwayat arsitektur dan deskripsi fitur proyek.

---

## 💡 Ringkasan & Saran Tindakan

Jika Anda menyetujui rekomendasi di atas:
1. **Bersihkan baris mati di `portofolio.html`**: Hapus baris JS counter stat (52 baris) dan baris CSS sisa stat/donut/warna ungu (~60 baris) agar file HTML lebih ringan dan performanya optimal tanpa proses listener yang sia-sia.
2. **Hapus file `style.css` dan `script.js`**: Menghapus kedua file ini akan menghemat ~34 KB dan merapikan struktur direktori proyek sehingga tidak membingungkan saat *deploy* ke hosting/Vercel/GitHub Pages.
