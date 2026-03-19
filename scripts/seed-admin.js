const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  role: { type: String, default: 'admin' },
  isActive: { type: Boolean, default: true },
});

async function seedAdmin() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const Admin = mongoose.model('Admin', adminSchema);

    const existingAdmin = await Admin.findOne({
      email: 'admin@zingkingmasala.com',
    });

    if (existingAdmin) {
      console.log('⚠️  Admin user already exists');
      process.exit(0);
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash('password123', salt);

    const admin = await Admin.create({
      email: 'admin@zingkingmasala.com',
      password: hashedPassword,
      name: 'Zingking Admin',
      role: 'super_admin',
    });

    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@zingkingmasala.com');
    console.log('🔑 Password: password123');
    console.log('⚠️  Change password immediately in production!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

seedAdmin();
