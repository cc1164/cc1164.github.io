# 🚀 Research Website Deployment Guide

## 📁 Project Overview
This is your modernized research website built with:
- **Next.js 15** (React framework)
- **TypeScript** (Type safety)
- **Tailwind CSS** (Styling)
- **shadcn/ui** (UI components)
- **Bun** (Package manager)

## 📦 What's Included
- ✅ All source code files
- ✅ Real content and publications from your original website
- ✅ Student photos and professor photo
- ✅ Mobile-responsive design
- ✅ Modern UI components
- ✅ All 7 pages: Home, Biography, Group, Publications, Teaching, Activities, Join Us

## 🛠️ Prerequisites
You'll need one of these installed on your system:
- **Node.js 18+** (recommended)
- **Bun** (faster alternative)
- **pnpm** or **npm**

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)
1. Install Vercel CLI: `npm install -g vercel`
2. In your project folder: `vercel`
3. Follow the prompts
4. Your site will be live in minutes!

### Option 2: Netlify (Free & Easy)
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod --dir=out`

### Option 3: Traditional Server (VPS/Dedicated Server)

#### Step 1: Install Dependencies
```bash
# Using npm
npm install

# Or using bun (faster)
bun install
```

#### Step 2: Build for Production
```bash
# Using npm
npm run build

# Or using bun
bun run build
```

#### Step 3: Static Export (for traditional hosting)
```bash
# This creates an 'out' folder with static files
npm run build && npm run export
```

#### Step 4: Upload to Your Server
- Upload the entire `out` folder to your web server
- Point your domain to the `out` folder
- Configure your web server (Apache/Nginx)

### Option 4: Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Server Configuration

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/out/folder;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Apache Configuration (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 📱 Mobile Testing
Your website is fully responsive and should work perfectly on:
- iPhone (Safari)
- Android (Chrome)
- iPad/tablets
- All desktop browsers

## 🔄 Making Updates
To update content:
1. Edit the relevant page files in `src/app/`
2. Rebuild: `npm run build`
3. Redeploy

## 📞 Support
If you need help:
1. Check the deployment logs for errors
2. Ensure all dependencies are installed
3. Make sure Node.js version is 18 or higher

## 🌐 Your Live Website
Current deployed version: https://same-y7aeqrmj8jy-latest.netlify.app

## 📂 Key Files Structure
```
chenchen-research-website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── biography/        # Biography page
│   │   ├── group/           # Group page
│   │   ├── publication/     # Publications page
│   │   ├── teaching/        # Teaching page
│   │   ├── activity/        # Activities page
│   │   └── join/           # Join Us page
│   ├── components/         # Reusable components
│   └── lib/               # Utilities
├── public/                # Images and assets
├── package.json          # Dependencies
└── next.config.js        # Next.js configuration
```

## 🎉 You're Ready to Deploy!
Your modern research website is ready for deployment with all your real content and publications!
