import { connectDB } from '@/lib/mongodb';
import Order from '@/models/Order';
import { sendEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

// Generate unique order number
function generateOrderNumber() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `ORD-${timestamp}${random}`;
}

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let query: any = {};
    if (status) {
      query.status = status;
    }

    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .lean();

    return Response.json({
      success: true,
      data: orders,
    });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message || 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'customerName',
      'customerEmail',
      'customerPhone',
      'shippingAddress',
      'items',
      'totalAmount',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return Response.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const order = await Order.create({
      ...body,
      orderNumber: generateOrderNumber(),
    });

    const adminEmail = process.env.ADMIN_EMAIL;
    const itemsHtml = body.items
      .map(
        (item: any) =>
          `<li>${item.name} x ${item.quantity} - Rs ${item.price * item.quantity}</li>`
      )
      .join('');

    await Promise.allSettled([
      sendEmail({
        to: body.customerEmail,
        subject: `Order ${order.orderNumber} confirmed | Zingking Masala`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>Order Confirmed</h2>
            <p>Hi ${body.customerName},</p>
            <p>Thank you for your order. Your reference number is <strong>${order.orderNumber}</strong>.</p>
            <ul>${itemsHtml}</ul>
            <p><strong>Total:</strong> Rs ${body.totalAmount}</p>
            <p>We will update you as your order is processed.</p>
          </div>
        `,
      }),
      ...(adminEmail
        ? [
            sendEmail({
              to: adminEmail,
              subject: `New order ${order.orderNumber}`,
              html: `
                <div style="font-family:Arial,sans-serif;line-height:1.6">
                  <h3>New order received</h3>
                  <p><strong>Order:</strong> ${order.orderNumber}</p>
                  <p><strong>Customer:</strong> ${body.customerName}</p>
                  <p><strong>Email:</strong> ${body.customerEmail}</p>
                  <p><strong>Phone:</strong> ${body.customerPhone}</p>
                  <p><strong>Total:</strong> Rs ${body.totalAmount}</p>
                </div>
              `,
            }),
          ]
        : []),
    ]);

    return Response.json(
      {
        success: true,
        data: order,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating order:', error);
    return Response.json(
      { success: false, error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}
