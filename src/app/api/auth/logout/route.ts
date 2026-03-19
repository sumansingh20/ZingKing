import { removeTokenCookie } from '@/lib/auth';

export async function POST(_request: Request) {
  try {
    await removeTokenCookie();

    return Response.json({
      success: true,
      data: { message: 'Logged out successfully' },
    });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message || 'Logout failed' },
      { status: 500 }
    );
  }
}
