// ========================================
// Premium Portfolio JavaScript - Omier Ahmed
// ========================================

// ===== Telegram Bot Configuration =====
const TELEGRAM_BOT_TOKEN = '8814133107:AAEujPUmnYpAnLeZOMMJhWyfsHl441Jhcsg';
const TELEGRAM_CHAT_ID = '8814133107';

// ===== Intro Animation =====
document.addEventListener('DOMContentLoaded', function() {
    const introShown = sessionStorage.getItem('introShown');
    
    if (!introShown) {
        const introAnimation = document.getElementById('intro-animation');
        const mainContent = document.getElementById('main-content');
        
        setTimeout(() => {
            introAnimation.classList.remove('active');
            mainContent.classList.add('visible');
            sessionStorage.setItem('introShown', 'true');
        }, 2800);
    } else {
        document.getElementById('intro-animation').style.display = 'none';
        document.getElementById('main-content').classList.add('visible');
    }
    
    initMobileMenu();
    initSmoothScroll();
    initStatsCounter();
    initPortfolioFilters();
    initTestimonialsCarousel();
    initSkillsBars();
    initContactForm();
    initScrollAnimations();
});

// ===== Mobile Menu =====
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            });
        });
    }
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ===== Stats Counter =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.floor(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target + '+';
                        }
                    };
                    updateCounter();
                });
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) observer.observe(statsSection);
}

// ===== Portfolio Filters =====
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
}

// ===== Portfolio Modal =====
function openPortfolioModal(id) {
    const modal = document.getElementById('portfolioModal');
    const modalBody = document.getElementById('modalBody');
    
    const projects = {
        1: { title: 'تصميم سوشيال ميديا', category: 'تصميم جرافيك', description: 'مجموعة متكاملة من تصاميم السوشيال ميديا', image: 'https://via.placeholder.com/800x600/151515/00FF88?text=Social+Media' },
        2: { title: 'موقع شركة', category: 'تطوير مواقع', description: 'موقع إلكتروني احترافي متجاوب', image: 'https://via.placeholder.com/800x600/151515/00FF88?text=Website' },
        3: { title: 'هوية بصرية', category: 'برanding', description: 'هوية بصرية متكاملة', image: 'https://via.placeholder.com/800x600/151515/00FF88?text=Branding' },
        4: { title: 'ثامبنيلات يوتيوب', category: 'تصميم جرافيك', description: 'ثامبنيلات جذابة', image: 'https://via.placeholder.com/800x600/151515/00FF88?text=Thumbnails' },
        5: { title: 'تصميم تعليمي - هاكر التاريخ', category: 'تصميم للمدرسين', description: 'تصميم احترافي للأستاذ علاء الدين العراقي - برنامج "هاكر التاريخ" يجمع بين التاريخ والتكنولوجيا بطريقة إبداعية مع تصميم جذاب يخاطب الطلاب', image: 'images/portfolio/teacher-design.jpg' },
        6: { title: 'صفحة هبوط', category: 'تطوير مواقع', description: 'صفحة هبوط احترافية', image: 'https://via.placeholder.com/800x600/151515/00FF88?text=Landing+Page' }
    };
    
    const project = projects[id];
    if (project) {
        modalBody.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:15px; margin-bottom:20px;">
            <h2 style="color: #00FF88; margin-bottom:10px;">${project.title}</h2>
            <p style="color: rgba(255,255,255,0.7); margin-bottom:10px;">${project.category}</p>
            <p style="line-height:1.8;">${project.description}</p>
        `;
        modal.style.display = 'flex';
        setTimeout(() => modal.style.opacity = '1', 10);
    }
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300);
}

// ===== Testimonials Carousel =====
function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dotsContainer = document.getElementById('testimonialDots');
    let currentIndex = 0;
    
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    function showTestimonial(index) {
        testimonials.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) card.classList.add('active');
        });
        
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        showTestimonial(currentIndex);
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    setInterval(nextSlide, 5000);
}

// ===== Skills Bars =====
function initSkillsBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ===== Contact Form =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                serviceType: document.getElementById('serviceType').value,
                budget: document.getElementById('budget').value,
                message: document.getElementById('message').value
            };
            
            const btnText = form.querySelector('.btn-text');
            const btnLoader = form.querySelector('.btn-loader');
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-block';
            
            form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
            
            const success = await sendToTelegram(formData);
            
            if (success) {
                showSuccessPopup();
                form.reset();
            } else {
                alert('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر الواتساب.');
            }
            
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
            form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = false);
        });
    }
}

// ===== Send to Telegram Bot =====
async function sendToTelegram(data) {
    const serviceTypes = {
        'graphic-design': 'تصميم جرافيك',
        'web-development': 'تطوير موقع',
        'branding': 'هوية بصرية',
        'both': 'تصميم وتطوير'
    };
    
    const budgets = {
        'less-1000': 'أقل من 1000 جنيه',
        '1000-3000': '1000 - 3000 جنيه',
        '3000-5000': '3000 - 5000 جنيه',
        'more-5000': 'أكثر من 5000 جنيه'
    };
    
    const now = new Date();
    const timeString = now.toLocaleString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const message = `
📩 طلب مشروع جديد

👤 الاسم: ${data.fullName}
📱 الهاتف: ${data.phone}
📧 البريد: ${data.email}
💼 الخدمة: ${serviceTypes[data.serviceType] || data.serviceType}
💰 الميزانية: ${budgets[data.budget] || data.budget || 'غير محدد'}

📝 تفاصيل المشروع:
${data.message}

⏰ وقت الإرسال: ${timeString}
    `.trim();
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            })
        });
        
        const result = await response.json();
        
        if (result.ok) {
            console.log('✅ تم الإرسال لـ Telegram بنجاح!');
            return true;
        } else {
            console.error('❌ خطأ:', result);
            return false;
        }
    } catch (error) {
        console.error('❌ خطأ في الإرسال:', error);
        return true;
    }
}

function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'flex';
    setTimeout(() => popup.style.opacity = '1', 10);
}

function closeSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.opacity = '0';
    setTimeout(() => popup.style.display = 'none', 300);
}

function sendAnotherMessage() {
    closeSuccessPopup();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    
    document.querySelectorAll('section, .client-card, .service-card, .why-card, .portfolio-item').forEach(el => {
        observer.observe(el);
    });
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 255, 136, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
