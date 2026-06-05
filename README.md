# 🎨 OMIER AHMED - Premium Portfolio Website

موقع بورتفوليو احترافي لـ **Omier Ahmed** - مصمم جرافيك ومطور مواقع

## ✨ المميزات

- ✅ تصميم بريميوم عصري
- ✅ أنيميشن مقدمة احترافي
- ✅ متجاوب بالكامل مع جميع الأجهزة
- ✅ أقسام شاملة (الخدمات، الأعمال، المهارات، آراء العملاء)
- ✅ نموذج تواصل متقدم
- ✅ تكامل مع WhatsApp
- ✅ تأثيرات وأنيميشن سلسة
- ✅ ألوان بريميوم (أسود، رمادي، أخضر زمردي)
- ✅ SEO محسّن
- ✅ سرعة تحميل عالية

## 📂 بنية المشروع

```
مشروع/
├── index.html       # الصفحة الرئيسية
├── style.css        # التنسيقات
├── main.js          # الأكواد البرمجية
├── .gitignore       # ملفات مستبعدة
├── wrangler.toml    # إعدادات Cloudflare
└── README.md        # هذا الملف
```

## 🚀 نشر الموقع على Cloudflare Pages

### الطريقة الأولى: رفع مباشر (الأسهل)

1. اذهب إلى: https://dash.cloudflare.com/
2. سجل دخول أو إنشاء حساب (مجاني)
3. اذهب لـ **Workers & Pages** من القائمة الجانبية
4. اضغط **Create Application** → **Pages** → **Upload assets**
5. اسحب مجلد المشروع أو اختر الملفات
6. اضغط **Deploy site**
7. ✅ تم! موقعك على الهواء

### الطريقة الثانية: ربط مع GitHub (موصى بها)

1. ارفع المشروع على GitHub:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git remote add origin رابط-الريبو
   git push -u origin main
   ```

2. في Cloudflare Pages:
   - اختر **Connect to Git**
   - ربط حساب GitHub
   - اختر المشروع
   - اضغط **Begin setup**

3. إعدادات Build:
   - **Build command**: اتركه فارغ (للمواقع الثابتة)
   - **Build output directory**: `/` أو اتركه فارغ
   - اضغط **Save and Deploy**

### 🎯 ملاحظات مهمة:

- الموقع سيكون على: `اسم-المشروع.pages.dev`
- يمكنك ربط دومين خاص من الإعدادات
- كل تحديث تعمله سيتم نشره تلقائياً (إذا ربطت GitHub)
- SSL/HTTPS مجاني ومفعل تلقائياً

## 📝 البنية الحالية:

```
مشروع/
├── index.html      # الصفحة الرئيسية (كامل الأقسام)
├── style.css       # التنسيقات الكاملة (Responsive)
├── main.js         # JavaScript متقدم
├── .gitignore      # ملفات مستبعدة
├── wrangler.toml   # إعدادات Cloudflare
└── README.md       # هذا الملف
```

## 🎯 الأقسام المتوفرة:

1. **Hero Section** - عنوان رئيسي + صورة + إحصائيات
2. **Target Clients** - 4 بطاقات (شركات، مدرسين، يوتيوبرز، براندات)
3. **Services** - تصميم جرافيك (6 خدمات) + تطوير مواقع (6 خدمات)
4. **Why Choose Me** - 4 أسباب لاختياري
5. **Portfolio** - معرض أعمال بنظام فلترة
6. **Work Process** - 6 خطوات عمل
7. **Skills** - مهارات مع progress bars
8. **Testimonials** - آراء عملاء بنظام carousel
9. **Contact** - نموذج تواصل متقدم + معلومات
10. **Footer** - روابط + معلومات تواصل

## ⚙️ التخصيص:

### تعديل المعلومات الشخصية:
- افتح `index.html`
- غير رقم الهاتف: ابحث عن `+20 102 263 9193`
- غير الصورة الشخصية: غير رابط `https://via.placeholder.com...`
- غير روابط السوشيال ميديا في قسم Footer و Contact

### تعديل الألوان:
- افتح `style.css`
- عدّل المتغيرات في بداية الملف:
```css
:root {
    --color-black: #0A0A0A;
    --color-dark-gray: #151515;
    --color-white: #FFFFFF;
    --color-emerald: #00FF88;
}
```

### إضافة أعمال Portfolio:
- أضف صور أعمالك في مجلد جديد `images/`
- عدّل روابط الصور في `index.html`
- عدّل بيانات المشاريع في `main.js` (دالة `openPortfolioModal`)

## 📱 مميزات التواصل:

- زر WhatsApp عائم (ثابت في كل الصفحات)
- زر اتصال للموبايل فقط
- نموذج تواصل متقدم مع Validation
- Success Popup بعد الإرسال

## 🔧 للمطورين:

### تشغيل محلي:
فقط افتح `index.html` في المتصفح

### إضافة Telegram Bot Integration:
1. أنشئ بوت على Telegram عبر [@BotFather](https://t.me/BotFather)
2. احصل على Token
3. احصل على Chat ID
4. افتح `main.js` وعدّل في دالة `sendToTelegram`

## 🔄 التحديثات المستقبلية:

إذا ربطت GitHub:
```bash
git add .
git commit -m "وصف التحديث"
git push
```
الموقع سيتحدث تلقائياً في خلال دقائق!

---
صنع بـ ❤️ مع Cloudflare Pages
