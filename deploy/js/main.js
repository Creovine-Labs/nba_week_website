// ============================================
// NBA WEEK 2026 — Main JavaScript
// ============================================

(function () {
    'use strict';

    // --- Flip-Clock Countdown ---
    const EVENT_DATE = new Date('2026-10-22T09:00:00');

    function createFlipCard(digit) {
        var card = document.createElement('div');
        card.className = 'flip-card';
        card.dataset.value = digit;
        card.innerHTML =
            '<div class="flip-card-inner">' +
                '<div class="flip-card-top"><span>' + digit + '</span></div>' +
                '<div class="flip-card-bottom"><span>' + digit + '</span></div>' +
                '<div class="flip-card-back"><span>' + digit + '</span></div>' +
            '</div>';
        return card;
    }

    function initDigits(containerId, numDigits) {
        var container = document.getElementById(containerId);
        if (!container) return;
        for (var i = 0; i < numDigits; i++) {
            container.appendChild(createFlipCard('0'));
        }
    }

    initDigits('days-digits', 3);
    initDigits('hours-digits', 2);
    initDigits('minutes-digits', 2);
    initDigits('seconds-digits', 2);

    function updateFlipCard(card, newDigit) {
        var current = card.dataset.value;
        if (current === String(newDigit)) return;

        card.dataset.value = String(newDigit);
        var topSpan = card.querySelector('.flip-card-top span');
        var bottomSpan = card.querySelector('.flip-card-bottom span');
        var backSpan = card.querySelector('.flip-card-back span');

        backSpan.textContent = current;
        topSpan.textContent = newDigit;
        bottomSpan.textContent = newDigit;

        card.classList.remove('flipping');
        void card.offsetWidth;
        card.classList.add('flipping');

        setTimeout(function () {
            card.classList.remove('flipping');
            backSpan.textContent = newDigit;
        }, 600);
    }

    function updateDigits(containerId, value, numDigits) {
        var container = document.getElementById(containerId);
        if (!container) return;
        var cards = container.querySelectorAll('.flip-card');
        var str = String(value).padStart(numDigits, '0');
        for (var i = 0; i < cards.length; i++) {
            updateFlipCard(cards[i], str[i]);
        }
    }

    function updateCountdown() {
        var now = new Date();
        var diff = EVENT_DATE - now;

        if (diff <= 0) {
            updateDigits('days-digits', 0, 3);
            updateDigits('hours-digits', 0, 2);
            updateDigits('minutes-digits', 0, 2);
            updateDigits('seconds-digits', 0, 2);
            return;
        }

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        updateDigits('days-digits', days, 3);
        updateDigits('hours-digits', hours, 2);
        updateDigits('minutes-digits', minutes, 2);
        updateDigits('seconds-digits', seconds, 2);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    const header = document.querySelector('.header');
    function handleHeaderScroll() {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    const scrollTopBtn = document.getElementById('scrollTop');
    function handleScrollTopVisibility() {
        if (!scrollTopBtn) return;
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const revealElements = document.querySelectorAll(
        '.event-card, .speaker-card, .pricing-card, ' +
        '.schedule-item, .stat-card, ' +
        '.testimonial-card, .press-quote, .faq-item, ' +
        '.sponsor-tier, .hero-visual, ' +
        '.venue-map, .cta-inner, .footer-grid, .video-wrapper'
    );

    revealElements.forEach(function (el) {
        el.classList.add('reveal');
    });

    document.querySelectorAll(
        '.speakers-grid, .events-grid, .pricing-grid, ' +
        '.testimonials-grid, .stats-grid'
    ).forEach(function (grid) {
        grid.classList.add('stagger-children');
    });

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    revealElements.forEach(function (el) {
        revealObserver.observe(el);
    });

    const tabs = document.querySelectorAll('.schedule-tab');
    const scheduleDays = document.querySelectorAll('.schedule-day');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) { t.classList.remove('active'); });
            tab.classList.add('active');
            var day = tab.getAttribute('data-day');
            scheduleDays.forEach(function (panel) {
                panel.style.display = panel.getAttribute('data-day') === day ? '' : 'none';
            });
        });
    });

    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var btn = item.querySelector('.faq-question');
        if (btn) {
            btn.addEventListener('click', function () {
                var isActive = item.classList.contains('active');
                faqItems.forEach(function (i) { i.classList.remove('active'); });
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 100;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });

                if (nav && mobileBtn && nav.classList.contains('mobile-open')) {
                    nav.classList.remove('mobile-open');
                    mobileBtn.querySelector('i').className = 'fas fa-bars';
                }
            }
        });
    });

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('mobile-open');
            mobileBtn.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
        });
    }
})();
