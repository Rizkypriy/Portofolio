document.addEventListener('DOMContentLoaded', () => {

      // 1. Mobile Menu Toggle
      const mobileToggle = document.getElementById('mobile-toggle');
      const navMenu = document.getElementById('nav-menu');
      const navLinks = document.querySelectorAll('.nav-link, .nav-cta-btn');

      if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
          mobileToggle.classList.toggle('active');
          navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
          });
        });
      }

      // 2. Navbar Scrolled Background Effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });

      // 3. Cursor Spotlight Follower
      const spotlight = document.getElementById('cursor-spotlight');
      if (spotlight && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
          spotlight.style.left = `${e.clientX}px`;
          spotlight.style.top = `${e.clientY}px`;
        });
      }

      // 4. Typewriter Animation for Hero Subtitle
      const typingElement = document.getElementById('typing-text');
      if (typingElement) {
        const phrases = [
          'Data Analyst & Data Management',
          'Tableau Dashboard Specialist',
          'SQL & Python Enthusiast',
          'Data Storyteller & SPK Modeling'
        ];
        let phraseIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        const typeSpeed = 80;
        const deleteSpeed = 40;
        const holdTime = 2200;

        function typeLoop() {
          const currentPhrase = phrases[phraseIdx];
          
          if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
          } else {
            typingElement.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
          }

          if (!isDeleting && charIdx === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeLoop, holdTime);
          } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            setTimeout(typeLoop, 400);
          } else {
            setTimeout(typeLoop, isDeleting ? deleteSpeed : typeSpeed);
          }
        }

        typeLoop();
      }

      // 5. Interactive 3D Tilt on Profile Frame
      const tiltCard = document.getElementById('tilt-card');
      if (tiltCard && window.matchMedia('(pointer: fine)').matches) {
        tiltCard.addEventListener('mousemove', (e) => {
          const rect = tiltCard.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / rect.height) * 14;
          const rotateY = (x / rect.width) * 14;
          tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        tiltCard.addEventListener('mouseleave', () => {
          tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
      }


      // 6. Active Nav Link on Scroll Spy
      const sections = document.querySelectorAll('section[id]');
      window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(sec => {
          const sectionHeight = sec.offsetHeight;
          const sectionTop = sec.offsetTop - 140;
          const sectionId = sec.getAttribute('id');
          const navAnchor = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

          if (navAnchor) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              navAnchor.classList.add('active');
            } else {
              navAnchor.classList.remove('active');
            }
          }
        });
      });

      // 7. Contact Form Handling
      const contactForm = document.getElementById('portfolio-contact-form');
      const formToast = document.getElementById('form-toast-alert');
      const submitBtn = document.getElementById('submit-btn');

      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();

          // Button feedback state
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = `<span>Mengirim Pesan...</span>`;
          submitBtn.disabled = true;

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            if (formToast) {
              formToast.className = 'form-toast success';
              formToast.innerHTML = '🎉 <strong>Terima kasih!</strong> Pesan Anda telah berhasil terkirim. Saya akan segera menghubungi Anda kembali.';
              formToast.style.display = 'block';

              contactForm.reset();

              setTimeout(() => {
                formToast.style.display = 'none';
              }, 7000);
            }
          }, 1000);
        });
      }

      // 8. Back To Top Button
      const backToTopBtn = document.getElementById('btn-back-to-top');
      if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

    });

    // 9. Certificate Modal Popup Handler
    function openCertModal(title, issuer, desc) {
      const modal = document.getElementById('cert-modal');
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-issuer').textContent = `Dikeluarkan oleh: ${issuer}`;
      document.getElementById('modal-desc').textContent = desc;
      modal.classList.add('active');
    }

    function closeCertModal() {
      const modal = document.getElementById('cert-modal');
      modal.classList.remove('active');
    }

    window.addEventListener('click', (e) => {
      const modal = document.getElementById('cert-modal');
      if (e.target === modal) {
        closeCertModal();
      }
    });