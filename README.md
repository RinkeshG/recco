# Recco - Recommendation Dashboard

A beautiful, modern recommendation dashboard built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Pixel-Perfect UI**: Stunning dark theme with glass morphism effects
- **Responsive Design**: Mobile-first approach with perfect mobile compatibility
- **Dynamic Dashboard**: Manage recommendations across multiple categories
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Lucide Icons
- **Supabase Integration**: Backend-as-a-Service for data management

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd recco

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration (Required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Optional: Analytics and Monitoring
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=Recco
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🚀 Production Deployment

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Set Environment Variables** in Vercel Dashboard:
   - Go to your project settings
   - Add all environment variables from `.env.local`

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add all from `.env.local`

### Option 3: Railway

1. **Connect Repository** to Railway
2. **Set Environment Variables** in Railway dashboard
3. **Deploy** automatically on push

### Option 4: Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

## 🔍 Troubleshooting

### Build Issues

1. **Supabase Environment Variables Missing**:
   - Ensure all Supabase environment variables are set
   - Check that variables start with `NEXT_PUBLIC_`

2. **TypeScript Errors**:
   ```bash
   npm run lint
   npx tsc --noEmit
   ```

3. **Package Lock Conflicts**:
   ```bash
   rm package-lock.json
   npm install
   ```

### Runtime Issues

1. **Dashboard Not Loading**:
   - Check browser console for errors
   - Verify Supabase connection
   - Ensure environment variables are loaded

2. **Icons Not Displaying**:
   - Verify Lucide React is installed: `npm install lucide-react`
   - Check import statements

3. **Mobile Responsiveness**:
   - Test on various screen sizes
   - Check Tailwind responsive classes

## 📱 Mobile Compatibility

The dashboard is fully responsive and optimized for:
- ✅ iPhone (all sizes)
- ✅ Android devices
- ✅ Tablets
- ✅ Desktop browsers

## 🔒 Security

- Environment variables are properly configured
- Security headers are implemented
- Supabase Row Level Security (RLS) recommended
- Input validation on all forms

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS purging for minimal bundle size
- Lucide React icons for crisp, scalable graphics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section
2. Review environment variable setup
3. Check browser console for errors
4. Create an issue with detailed information
