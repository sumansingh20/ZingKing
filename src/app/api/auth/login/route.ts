import { connectDB } from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { generateToken, setTokenCookie } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin) {
      return Response.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return Response.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    if (!admin.isActive) {
      return Response.json(
        { success: false, error: 'Account is disabled' },
        { status: 403 }
      );
    }

    // Generate JWT token
    const token = generateToken({
      adminId: admin._id.toString(),
      email: admin.email,
    });

    // Set cookie
    await setTokenCookie(token);

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    return Response.json({
      success: true,
      data: {
        token,
        admin: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        },
      },
    });
  } catch (error: any) {
    console.error('Login error:', error);
    return Response.json(
      { success: false, error: error.message || 'Login failed' },
      { status: 500 }
    );
  }
}
