import { connectDB } from '@/lib/mongodb';
import Order from '@/models/Order';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const order = await Order.findById(id).lean();

    if (!order) {
      return Response.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: order,
    });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message || 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const order = await Order.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!order) {
      return Response.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: order,
    });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message || 'Failed to update order' },
      { status: 500 }
    );
  }
}
