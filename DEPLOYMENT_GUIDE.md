# Zingking Masala - Complete Production Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the project and install dependencies:**
```bash
cd d:\zingking
npm install
```

2. **Create `.env.local` file** (already created, but verify these vars):
```bash
# MongoDB
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/zingking_masala?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_super_secret_key_min_32_chars_for_production
JWT_EXPIRE=7d

# Admin Credentials (default)
ADMIN_EMAIL=admin@zingkingmasala.com
ADMIN_PASSWORD=password123

# Email (optional - for future)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
MAIL_FROM=sales@zingkingmasala.com
```

3. **Initialize MongoDB with sample data:**
```bash
npm run seed:admin
npm run seed:products
```

4. **Start development server:**
```bash
npm run dev
```
Visit: `http://localhost:3000`

---

## 📁 Project Structure

```
zingking/
├── src/
│   ├── app/
│   │   ├── api/                    # API Routes (Backend)
│   │   │   ├── products/           # Product CRUD
│   │   │   ├── orders/             # Order management
│   │   │   ├── contact/            # Contact form
│   │   │   └── auth/               # Authentication
│   │   ├── admin/                  # Admin Dashboard
│   │   │   ├── page.tsx            # Login
│   │   │   ├── dashboard/          # Main dashboard
│   │   │   ├── products/           # Product management
│   │   │   ├── orders/             # Order management
│   │   │   └── contacts/           # Message management
│   │   ├── layout.tsx              # Root layout + AuthProvider
│   │   ├── page.tsx                # Homepage
│   │   ├── products/               # Product listing page
│   │   ├── recipes/                # Recipe pages
│   │   ├── about/                  # About page
│   │   ├── b2b/                    # B2B page
│   │   └── contact/                # Contact page
│   ├── components/                 # Reusable React components
│   ├── models/                     # MongoDB Mongoose models
│   │   ├── Product.ts
│   │   ├── Order.ts
│   │   ├── Admin.ts
│   │   └── Contact.ts
│   ├── lib/                        # Utilities
│   │   ├── mongodb.ts              # DB connection
│   │   └── auth.ts                 # JWT utilities
│   └── context/                    # React Context
│       └── AuthContext.tsx         # Auth state management
├── .env.local                      # Environment variables
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🔐 Admin Dashboard Access

### Login Credentials (Default)
- **Email:** admin@zingkingmasala.com
- **Password:** password123

### Access Dashboard
```
http://localhost:3000/admin
```

### Dashboard Features
✅ Product Management (Create, Edit, Delete)
✅ Order Management (View, Update Status)
✅ Customer Messages (View, Respond)
✅ Sales Statistics

---

## 🗄️ Database Setup (MongoDB)

### MongoDB Atlas Setup

1. **Create MongoDB Atlas Account:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free project

2. **Create Database Cluster:**
   - Select "M0 Cluster" (free tier)
   - Choose region closest to you
   - Wait for cluster to deploy

3. **Get Connection String:**
   - Click "Connect"
   - Choose "Connect Your Application"
   - Copy connection string
   - Replace `<username>` and `<password>`

### Example Connection String:
```
mongodb+srv://admin:password@cluster0.mongodb.net/zingking_masala?retryWrites=true&w=majority
```

### Create Initial Admin User

Create a script `scripts/seed-admin.js`:

```javascript
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

async function seedAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);

  const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    role: { type: String, default: 'admin' },
    isActive: { type: Boolean, default: true },
  });

  const Admin = mongoose.model('Admin', adminSchema);

  const existingAdmin = await Admin.findOne({
    email: 'admin@zingkingmasala.com',
  });

  if (existingAdmin) {
    console.log('Admin user already exists');
    process.exit(0);
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash('password123', salt);

  await Admin.create({
    email: 'admin@zingkingmasala.com',
    password: hashedPassword,
    name: 'Zingking Admin',
    role: 'super_admin',
  });

  console.log('✅ Admin user created successfully');
  process.exit(0);
}

seedAdmin().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
```

Run:
```bash
node scripts/seed-admin.js
```

---

## 📦 API Routes

### Products API
```
GET     /api/products              # List all products
GET     /api/products?category=xxx # Filter by category
GET     /api/products/[id]         # Get single product
POST    /api/products              # Create product (admin)
PUT     /api/products/[id]         # Update product (admin)
DELETE  /api/products/[id]         # Delete product (admin)
```

### Orders API
```
GET     /api/orders                # List orders
GET     /api/orders?status=xxx     # Filter by status
GET     /api/orders/[id]           # Get order details
POST    /api/orders                # Create order
PUT     /api/orders/[id]           # Update order status
```

### Contact API
```
GET     /api/contact               # List messages
GET     /api/contact?type=xxx      # Filter by type
POST    /api/contact               # Submit contact form
```

### Auth API
```
POST    /api/auth/login            # Admin login
POST    /api/auth/logout           # Admin logout
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/zingking.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to https://vercel.com/import
   - Select your GitHub repo
   - Add environment variables (MONGODB_URI, JWT_SECRET, etc.)
   - Deploy!

3. **Domain Setup:**
   - Add custom domain in Vercel dashboard
   - Update DNS records

### Deploy to Netlify

- Connect GitHub repo to Netlify
- Set build command: `npm run build`
- Set publish directory: `.next`
- Add environment variables
- Deploy!

### Deploy to Traditional Server (VPS/AWS/DigitalOcean)

1. **SSH into server:**
```bash
ssh user@your-server-ip
```

2. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Clone project:**
```bash
git clone <repo-url>
cd zingking
npm install
npm run build
```

4. **Setup PM2 (Process Manager):**
```bash
npm install -g pm2
pm2 start npm --name "zingking" -- start
pm2 startup
pm2 save
```

5. **Setup Nginx (Reverse Proxy):**
```nginx
server {
    listen 80;
    server_name zingkingmasala.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}
```

6. **SSL Certificate (Let's Encrypt):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d zingkingmasala.com
```

---

## 🔄 Continuous Integration (CI/CD)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run lint
      - run: npm run build
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: npx vercel --prod --token $VERCEL_TOKEN
```

---

## 🔍 Testing

### Run Tests:
```bash
npm test
```

### Linting:
```bash
npm run lint
```

---

## 📊 Performance Optimization

- Image optimization (Next.js Image component)
- Code splitting (automatic)
- CSS minification (Tailwind)
- Database indexing (MongoDB)
- Redis caching (optional)
- CDN for static assets (Vercel/Netlify)

---

## 🛡️ Security Best Practices

✅ **Environment Variables:** Keep secrets in `.env.local`
✅ **HTTPS Only:** Use SSL/TLS certificates
✅ **Password Hashing:** bcryptjs for password hashing
✅ **JWT Tokens:** Secure token generation and validation
✅ **Input Validation:** Zod for schema validation (ready to add)
✅ **CORS:** Configure for specific domains
✅ **Rate Limiting:** Implement for APIs
✅ **Data Sanitization:** Prevent XSS/SQL Injection

---

## 📝 Environment Variables Checklist

- [ ] MONGODB_URI (with real credentials)
- [ ] JWT_SECRET (strong 32+ char string)
- [ ] SMTP_HOST, SMTP_USER, SMTP_PASSWORD (for emails)
- [ ] NEXT_PUBLIC_APP_URL (your domain)
- [ ] Admin email and password changed

---

## 🆘 Troubleshooting

### MongoDB Connection Error
```bash
# Check connection string in .env.local
# Verify IP whitelist in MongoDB Atlas
# Check cluster is running
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Authentication Issues
```bash
# Clear browser cookies
# Reset admin password in MongoDB
# Check JWT_SECRET matches on server
```

---

## 📞 Next Steps for Production

1. ✅ Add real product images
2. ✅ Connect email service (Nodemailer/SendGrid)
3. ✅ Add payment gateway (Stripe/Razorpay)
4. ✅ Setup analytics (Google Analytics)
5. ✅ Add multi-language support
6. ✅ Set up customer authentication
7. ✅ Add shopping cart & checkout
8. ✅ Implement order notifications
9. ✅ Add inventory management
10. ✅ Setup customer support system

---

## 📧 Support

For issues or questions, check:
- API Routes: `/src/app/api`
- Components: `/src/components`
- Models: `/src/models`
- Documentation: This file

---

**Ready for launch! 🚀**
