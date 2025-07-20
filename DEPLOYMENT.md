# 🚀 Production Deployment Guide

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Setup
Create `.env.local` file with the following variables:

```env
# Required: Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: Analytics & Monitoring
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=Recco
```

### 2. Supabase Setup
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Create the following tables in your Supabase database:

```sql
-- Profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  username TEXT UNIQUE,
  bio TEXT,
  avatar_url TEXT,
  is_live BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Recommendations table
CREATE TABLE recommendations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  category_id TEXT,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  meta JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Build Testing
```bash
# Test build locally
npm run build

# Test production server
npm start
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

**Environment Variables in Vercel:**
- Go to Project Settings > Environment Variables
- Add all variables from `.env.local`

**Benefits:**
- ✅ Zero configuration
- ✅ Automatic deployments
- ✅ Edge functions support
- ✅ Built-in analytics

### Option 2: Netlify

**Steps:**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Option 3: Railway

**Steps:**
1. Connect repository to Railway
2. Add environment variables
3. Deploy automatically on push

### Option 4: Docker

**Steps:**
1. Create `Dockerfile` (already provided in README)
2. Build image: `docker build -t recco .`
3. Run container: `docker run -p 3000:3000 recco`

## 🔍 Post-Deployment Verification

### 1. Functionality Tests
- [ ] Dashboard loads without errors
- [ ] Icons display correctly
- [ ] Responsive design works on mobile
- [ ] Supabase connection established
- [ ] Forms submit successfully

### 2. Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Images optimize correctly
- [ ] No console errors
- [ ] Mobile performance acceptable

### 3. Security Tests
- [ ] Environment variables not exposed
- [ ] HTTPS enabled
- [ ] Security headers present
- [ ] No sensitive data in client bundle

## 🛠️ Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next
npm run build

# Check TypeScript errors
npx tsc --noEmit

# Fix package conflicts
rm package-lock.json
npm install
```

### Runtime Errors
1. **Supabase Connection Issues:**
   - Verify environment variables
   - Check Supabase project status
   - Test connection in browser console

2. **Icon Display Issues:**
   - Verify Lucide React installation
   - Check import statements
   - Clear browser cache

3. **Mobile Responsiveness:**
   - Test on actual devices
   - Check viewport meta tag
   - Verify Tailwind responsive classes

## 📊 Monitoring & Analytics

### Recommended Tools
1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics 4**
3. **Sentry** for error tracking
4. **Supabase Dashboard** for database monitoring

### Performance Monitoring
- Core Web Vitals
- Page load times
- Error rates
- User engagement metrics

## 🔒 Security Best Practices

1. **Environment Variables:**
   - Never commit `.env.local` to git
   - Use different keys for dev/prod
   - Rotate keys regularly

2. **Supabase Security:**
   - Enable Row Level Security (RLS)
   - Use service roles carefully
   - Monitor database access

3. **Application Security:**
   - Input validation on all forms
   - CSRF protection
   - XSS prevention
   - Rate limiting

## 📱 Mobile Optimization

### Testing Checklist
- [ ] iPhone (all sizes)
- [ ] Android devices
- [ ] Tablets
- [ ] Touch interactions
- [ ] Performance on slow networks

### Optimization Tips
- Use Next.js Image optimization
- Implement lazy loading
- Minimize bundle size
- Optimize for Core Web Vitals

## 🚨 Emergency Procedures

### Rollback Plan
1. Keep previous deployment URL
2. Use Git tags for releases
3. Have backup environment variables
4. Document rollback steps

### Support Contacts
- Supabase Support: [support.supabase.com](https://support.supabase.com)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

## 📈 Scaling Considerations

### When to Scale
- 1000+ daily active users
- Database query performance issues
- Image storage needs
- Real-time features

### Scaling Options
1. **Vercel Pro/Enterprise** for higher limits
2. **Supabase Pro** for database scaling
3. **CDN** for static assets
4. **Edge Functions** for global performance

---

**Last Updated:** $(date)
**Version:** 1.0.0 