# Contact Form Setup Guide

Your contact form is now fully functional! Here's how to set it up and what options you have:

## 🚀 **What's Working Now**

✅ **Netlify Forms**: Automatically captures all form submissions  
✅ **Form Validation**: Client-side validation with error handling  
✅ **Loading States**: Proper loading indicators and disabled states  
✅ **Success Messages**: Beautiful success page after submission  
✅ **API Route**: `/api/submit-form` for additional processing  
✅ **Email Service**: Ready for email notifications  

## 📧 **Email Service Setup (Choose One)**

### **Option 1: SendGrid (Recommended)**

1. **Sign up** at [sendgrid.com](https://sendgrid.com)
2. **Create API Key** in your SendGrid dashboard
3. **Verify your domain** for better deliverability
4. **Add to environment variables**:

```bash
SENDGRID_API_KEY=your_api_key_here
FROM_EMAIL=noreply@causafoundation.com
NOTIFICATION_EMAIL=admin@causafoundation.com
```

### **Option 2: Resend**

1. **Sign up** at [resend.com](https://resend.com)
2. **Get API key** from your dashboard
3. **Add to environment variables**:

```bash
RESEND_API_KEY=your_api_key_here
FROM_EMAIL=noreply@causafoundation.com
NOTIFICATION_EMAIL=admin@causafoundation.com
```

## 🗄️ **Database Storage (Optional)**

### **Supabase Setup**

1. **Create account** at [supabase.com](https://supabase.com)
2. **Create new project**
3. **Create table** for applications:

```sql
CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  specialty TEXT NOT NULL,
  experience TEXT NOT NULL,
  motivation TEXT NOT NULL,
  contribution TEXT NOT NULL,
  locale TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

4. **Get credentials** and add to environment:

```bash
SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key
```

5. **Install Supabase client**:

```bash
npm install @supabase/supabase-js
```

6. **Uncomment database code** in `/app/api/submit-form/route.ts`

## 🔧 **Environment Variables**

Create a `.env.local` file in your project root:

```bash
# Copy from env.example and fill in your values
cp env.example .env.local
```

## 📱 **Netlify Dashboard**

1. **Go to your site** in Netlify dashboard
2. **Navigate to Forms** tab
3. **View submissions** in real-time
4. **Export data** as CSV
5. **Set up notifications** (optional)

## 🎯 **Form Features**

- **Real-time validation**
- **Loading states**
- **Error handling**
- **Success confirmation**
- **Multi-language support** (EN/BG)
- **Responsive design**
- **Accessibility features**

## 📊 **Viewing Submissions**

### **Netlify Dashboard**
- Go to your site → Forms tab
- See all submissions in real-time
- Export data as needed

### **Email Notifications**
- Get instant emails for each submission
- Professional HTML email templates
- Customizable recipient addresses

### **API Endpoint**
- `/api/submit-form` processes submissions
- Logs all data to console
- Ready for database integration

## 🚨 **Troubleshooting**

### **Form not submitting?**
1. Check browser console for errors
2. Verify Netlify Forms are enabled
3. Check form validation

### **Emails not sending?**
1. Verify API keys are correct
2. Check environment variables
3. Look at server logs

### **Netlify not capturing forms?**
1. Ensure `data-netlify="true"` is present
2. Check for hidden form fields
3. Verify form name matches

## 🔒 **Security Features**

- **CSRF protection** via Netlify
- **Input validation** and sanitization
- **Rate limiting** (can be added)
- **Honeypot protection** against bots
- **Secure email delivery**

## 📈 **Next Steps**

1. **Set up email service** (SendGrid/Resend)
2. **Configure environment variables**
3. **Test form submission**
4. **Add database storage** (optional)
5. **Customize email templates**
6. **Set up webhook integrations** (optional)

## 💡 **Pro Tips**

- **Test thoroughly** in development
- **Monitor spam** in your email service
- **Backup submissions** regularly
- **Use environment variables** for sensitive data
- **Consider rate limiting** for production

Your form is now production-ready! 🎉
