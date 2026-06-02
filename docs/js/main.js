/* ============================================================
   Personal Portfolio Website — Main JavaScript
   Ruixiang Hu | AI & Wearable Sensing Algorithm Engineer
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ---------- DOM References ----------
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('back-to-top');

    // ---------- 1. Mobile Menu Toggle ----------
    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ---------- 2. Smooth Scroll for All Internal Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---------- 3. Navbar Shadow on Scroll ----------
    function updateNavbar() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateNavbar);
    // Run once on load
    updateNavbar();

    // ---------- 4. Back to Top Button ----------
    function updateBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', updateBackToTop);
    updateBackToTop();

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---------- 5. Copy Email Button ----------
    var copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var textToCopy = this.getAttribute('data-copy');
            if (!textToCopy) return;

            // Use Clipboard API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy).then(function () {
                    showCopyFeedback(btn);
                }).catch(function () {
                    fallbackCopy(textToCopy, btn);
                });
            } else {
                fallbackCopy(textToCopy, btn);
            }
        });
    });

    // Fallback copy method
    function fallbackCopy(text, btn) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showCopyFeedback(btn);
        } catch (err) {
            showToast('Failed to copy. Please copy manually.');
        }
        document.body.removeChild(textarea);
    }

    // Show feedback on copy button
    function showCopyFeedback(btn) {
        var originalHTML = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(function () {
            btn.classList.remove('copied');
            btn.innerHTML = originalHTML;
        }, 2000);
    }

    // ---------- 6. Toast Notification ----------
    function showToast(message) {
        // Remove existing toast
        var existing = document.querySelector('.toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        // Trigger show
        setTimeout(function () { toast.classList.add('show'); }, 10);

        // Auto hide
        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.remove(); }, 300);
        }, 2500);
    }

    // ---------- 7. Open External Links in New Window ----------
    // All external links already have target="_blank" in HTML.
    // Add rel="noopener noreferrer" for security on any missed links.
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        if (!link.rel.includes('noopener')) {
            link.rel = 'noopener noreferrer';
        }
    });

});
