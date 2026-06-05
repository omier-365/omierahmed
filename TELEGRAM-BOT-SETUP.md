# 🤖 دليل ربط Telegram Bot

## 📋 الخطوات الكاملة

### الخطوة 1️⃣: إنشاء البوت

1. **افتح Telegram**
2. **ابحث عن:** `@BotFather`
3. **ابدأ محادثة** واكتب: `/newbot`
4. **اسم البوت:** `Omier Ahmed Contact Bot` (أو أي اسم)
5. **Username البوت:** `omierahmed_contact_bot` (يجب ينتهي بـ bot)
6. **ستحصل على رسالة فيها:**
   ```
   Done! Congratulations on your new bot.
   You will find it at t.me/omierahmed_contact_bot
   
   Use this token to access the HTTP API:
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz123456789
   ```
7. **احفظ الـ Token** ده! 👆

---

### الخطوة 2️⃣: الحصول على Chat ID

#### الطريقة الأولى (سهلة):

1. **ابحث عن:** `@userinfobot` في Telegram
2. **ابدأ محادثة** معاه
3. **هيديك Chat ID** مباشرة (رقم مثل: `123456789`)

#### الطريقة الثانية:

1. **أرسل أي رسالة** لبوتك الجديد
2. **افتح في المتصفح:**
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
   غير `<YOUR_BOT_TOKEN>` بالتوكن بتاعك
3. **ابحث عن:** `"chat":{"id":123456789`
4. **الرقم ده هو Chat ID**

---

### الخطوة 3️⃣: تفعيل البوت في الموقع

1. **افتح ملف:** `main.js`
2. **ابحث عن السطر الأول:**
   ```javascript
   // ===== Telegram Bot Configuration =====
   const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
   const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
   ```
3. **غير البيانات:**
   ```javascript
   const TELEGRAM_BOT_TOKEN = '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz123456789';
   const TELEGRAM_CHAT_ID = '123456789';
   ```

---

### الخطوة 4️⃣: اختبار البوت

1. **افتح** `index.html` في المتصفح
2. **املأ نموذج التواصل**
3. **اضغط إرسال**
4. **افتح Telegram** - المفروض تستقبل الرسالة! 🎉

---

## 🔧 استكشاف الأخطاء

### المشكلة: "Failed to send message"

**الحل:**
1. تأكد أن Token صحيح
2. تأكد أن Chat ID صحيح
3. تأكد أن البوت مش محظور
4. افتح Console في المتصفح (F12) وشوف الخطأ

### المشكلة: CORS Error

**الحل:** البوت شغال بس المتصفح بيمنع الـ request. ده طبيعي في التجربة المحلية.

**الحلول:**
1. **انشر الموقع** على Cloudflare (هيشتغل تلقائياً)
2. أو استخدم **Cloudflare Worker** (الطريقة الآمنة)

---

## 🔒 الطريقة الآمنة (Cloudflare Worker)

### لماذا؟
- ✅ إخفاء Token من المتصفح
- ✅ حماية أفضل
- ✅ لا توجد مشاكل CORS

### الخطوات:

سأضيف ملف منفصل لهذا في `TELEGRAM-SECURE.md`

---

## 📱 شكل الرسالة على Telegram

عند إرسال النموذج، ستستقبل:

```
📩 طلب مشروع جديد

👤 الاسم: أحمد محمد
📱 الهاتف: +20 123 456 7890
📧 البريد: ahmed@example.com
💼 الخدمة: تصميم جرافيك
💰 الميزانية: 1000 - 3000 جنيه

📝 تفاصيل المشروع:
أحتاج تصميم لوجو احترافي لشركتي الناشئة...

⏰ وقت الإرسال: 5 يونيو 2026، 10:30 ص
```

---

## ⚙️ تخصيص الرسالة

في `main.js`، ابحث عن:
```javascript
const message = `
📩 طلب مشروع جديد
...
`;
```

غير المحتوى كما تريد!

---

## 🎯 نصائح

1. ✅ **احفظ Token** في مكان آمن
2. ✅ **لا تشارك Token** مع أحد
3. ✅ **اختبر البوت** قبل النشر
4. ✅ استخدم **Cloudflare Worker** للحماية (اختياري)

---

**جاهز؟ أكمل في `main.js`! 🚀**
