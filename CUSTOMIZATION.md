# 🎨 دليل التخصيص الكامل

## 📱 تغيير معلومات التواصل

### رقم الهاتف و WhatsApp

ابحث عن `+20 102 263 9193` في `index.html` وغيره في:

1. **Hero Section** (إذا أضفته)
2. **Contact Section**:
   ```html
   <a href="tel:+201022639193">+20 102 263 9193</a>
   <a href="https://wa.me/201022639193">+20 102 263 9193</a>
   ```
3. **Footer**
4. **Floating Buttons**:
   ```html
   <a href="https://wa.me/201022639193" class="whatsapp-float">
   <a href="tel:+201022639193" class="call-float">
   ```

غير الرقم لرقمك (بدون + أو صفر في أول واتساب)

---

## 🖼️ تغيير الصور

### الصورة الشخصية

في `index.html`، ابحث عن:
```html
<img src="https://via.placeholder.com/400x400/151515/00FF88?text=OMIER+AHMED">
```

غيرها لـ:
```html
<img src="images/profile.jpg" alt="Omier Ahmed">
```

ثم ضع صورتك في مجلد `images/profile.jpg`

### صور الأعمال (Portfolio)

1. أنشئ مجلد `images/portfolio/`
2. ضع صور أعمالك فيه
3. في `index.html`، غير:
```html
<img src="https://via.placeholder.com/600x400/..." alt="Project 1">
```

لـ:
```html
<img src="images/portfolio/project1.jpg" alt="Project 1">
```

### صور العملاء (Testimonials)

نفس الطريقة، ضع الصور في `images/clients/`

---

## 🎨 تغيير الألوان

افتح `style.css`، في البداية:

```css
:root {
    --color-black: #0A0A0A;        /* اللون الأسود الرئيسي */
    --color-dark-gray: #151515;    /* الرمادي الداكن */
    --color-white: #FFFFFF;        /* الأبيض */
    --color-emerald: #00FF88;      /* الأخضر الزمردي */
    --color-emerald-dark: #00CC6A; /* أخضر داكن */
}
```

### أمثلة لألوان بديلة:

**Blue & Gold:**
```css
--color-emerald: #FFD700;      /* ذهبي */
--color-emerald-dark: #FFA500; /* برتقالي ذهبي */
```

**Purple & Pink:**
```css
--color-emerald: #FF00FF;      /* وردي فاتح */
--color-emerald-dark: #8B00FF; /* بنفسجي */
```

**Red & Orange:**
```css
--color-emerald: #FF4500;      /* برتقالي محمر */
--color-emerald-dark: #FF0000; /* أحمر */
```

---

## ✏️ تعديل النصوص

### العنوان الرئيسي (Hero)

في `index.html`:
```html
<h1 class="hero-title">
    من تصميم إعلان يحقق الانتباه...
    <span class="gradient-text">إلى موقع إلكتروني يبني ثقة كاملة.</span>
</h1>
```

غيره لعنوانك المخصص

### الوصف (Hero Subtitle)

```html
<p class="hero-subtitle">
    أساعد الشركات والمدرسين واليوتيوبرز...
</p>
```

### عنوان الأقسام

كل قسم له:
```html
<h2 class="section-title">عنوان القسم</h2>
<p class="section-subtitle">وصف القسم</p>
```

---

## 📊 تعديل الإحصائيات

في `index.html`:
```html
<h3 class="stat-number" data-target="50">0</h3>
<p class="stat-label">مشروع مكتمل</p>
```

غير `data-target="50"` للرقم المطلوب

---

## 🛠️ تعديل الخدمات

### إضافة خدمة جديدة:

انسخ أي `.service-card` وعدّل:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-ICON-NAME"></i> <!-- غير الأيقونة -->
    </div>
    <h4 class="service-title">اسم الخدمة</h4>
    <p class="service-description">وصف الخدمة</p>
    <ul class="service-benefits">
        <li>ميزة 1</li>
        <li>ميزة 2</li>
        <li>ميزة 3</li>
    </ul>
    <a href="#contact" class="service-btn">اطلب الآن</a>
</div>
```

### حذف خدمة:

احذف كامل `<div class="service-card">...</div>`

---

## 🖼️ تعديل Portfolio

### إضافة مشروع جديد:

```html
<div class="portfolio-item" data-category="graphic">
    <div class="portfolio-image">
        <img src="images/portfolio/new-project.jpg" alt="Project">
        <div class="portfolio-overlay">
            <h3 class="portfolio-title">عنوان المشروع</h3>
            <p class="portfolio-category">تصميم جرافيك</p>
            <button class="portfolio-view-btn" onclick="openPortfolioModal(7)">
                <i class="fas fa-eye"></i> عرض التفاصيل
            </button>
        </div>
    </div>
</div>
```

ثم في `main.js`، أضف تفاصيل المشروع:
```javascript
const projects = {
    7: {
        title: 'المشروع الجديد',
        category: 'تصميم جرافيك',
        description: 'وصف المشروع...',
        image: 'images/portfolio/new-project.jpg'
    }
};
```

---

## 👥 تعديل آراء العملاء

في `index.html`:
```html
<div class="testimonial-card">
    <div class="testimonial-rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">
        "رأي العميل هنا..."
    </p>
    <div class="testimonial-author">
        <img src="images/clients/client1.jpg" alt="Client">
        <div class="author-info">
            <h4 class="author-name">اسم العميل</h4>
            <p class="author-role">وظيفة العميل</p>
        </div>
    </div>
</div>
```

---

## 🎯 تعديل المهارات

في `index.html`:
```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">اسم المهارة</span>
        <span class="skill-percent">95%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="95"></div>
    </div>
</div>
```

غير `data-progress="95"` للنسبة المئوية

---

## 🔗 تعديل روابط السوشيال ميديا

في `index.html`، ابحث عن:
```html
<div class="social-icons">
    <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
    <a href="#" class="social-icon"><i class="fab fa-behance"></i></a>
    <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
</div>
```

غير `#` لروابط حساباتك:
```html
<a href="https://facebook.com/yourprofile" class="social-icon">
<a href="https://instagram.com/yourprofile" class="social-icon">
<a href="https://behance.net/yourprofile" class="social-icon">
<a href="https://linkedin.com/in/yourprofile" class="social-icon">
```

---

## ⚙️ إعدادات متقدمة

### تغيير سرعة الأنيميشن

في `style.css`:
```css
:root {
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

غير `0.4s` لسرعة أسرع (0.2s) أو أبطأ (0.8s)

### تعطيل أنيميشن المقدمة

في `main.js`، غير:
```javascript
if (!introShown) {
```

لـ:
```javascript
if (false) { // Always skip intro
```

### تغيير مدة عرض Testimonials

في `main.js`:
```javascript
setInterval(nextSlide, 5000); // 5 seconds
```

غير `5000` للمدة بالميلي ثانية (3000 = 3 ثواني)

---

## 🎨 تغيير الخطوط

في `index.html`، غير رابط Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet">
```

ثم في `style.css`:
```css
:root {
    --font-ar: 'Cairo', sans-serif;
    --font-en: 'Poppins', sans-serif;
}
```

---

## 📧 إعداد نموذج التواصل

حالياً النموذج يعرض فقط Success Popup. 

### لإضافة Telegram Bot:

1. تابع الشرح في `DEPLOYMENT.md`
2. عدّل في `main.js` دالة `sendToTelegram`

### لإضافة Email Service:

استخدم خدمة مثل:
- **EmailJS**: https://www.emailjs.com/
- **Formspree**: https://formspree.io/
- **Web3Forms**: https://web3forms.com/

---

## ✅ Checklist قبل النشر

- [ ] غيّرت رقم الهاتف
- [ ] غيّرت روابط السوشيال ميديا
- [ ] رفعت صورتك الشخصية
- [ ] رفعت صور الأعمال
- [ ] عدّلت النصوص
- [ ] اختبرت الموقع محلياً
- [ ] اختبرت على الموبايل
- [ ] راجعت جميع الروابط

---

**جاهز للنشر؟** اتبع `DEPLOYMENT.md` 🚀
