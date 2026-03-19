import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendEmail } from '@/lib/email';

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const isRead = searchParams.get('isRead');

    let query: any = {};
    if (type) query.type = type;
    if (isRead !== null) query.isRead = isRead === 'true';

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .lean();

    return Response.json({
      success: true,
      data: contacts,
    });
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        error: error.message || 'Failed to fetch contacts',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return Response.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const contact = await Contact.create(body);

    const adminEmail = process.env.ADMIN_EMAIL;

    await Promise.allSettled([
      sendEmail({
        to: body.email,
        subject: 'We received your message | Zingking Masala',
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>Thank you for contacting Zingking Masala</h2>
            <p>Hi ${body.name},</p>
            <p>We have received your message regarding <strong>${body.subject}</strong>.</p>
            <p>Our team will respond shortly.</p>
            <p>Regards,<br/>Zingking Masala Support Team</p>
          </div>
        `,
      }),
      ...(adminEmail
        ? [
            sendEmail({
              to: adminEmail,
              subject: `New ${body.type || 'inquiry'} message from ${body.name}`,
              html: `
                <div style="font-family:Arial,sans-serif;line-height:1.6">
                  <h3>New contact submission</h3>
                  <p><strong>Name:</strong> ${body.name}</p>
                  <p><strong>Email:</strong> ${body.email}</p>
                  <p><strong>Phone:</strong> ${body.phone}</p>
                  <p><strong>Subject:</strong> ${body.subject}</p>
                  <p><strong>Message:</strong><br/>${body.message}</p>
                </div>
              `,
            }),
          ]
        : []),
    ]);

    return Response.json(
      {
        success: true,
        data: contact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating contact:', error);
    return Response.json(
      {
        success: false,
        error: error.message || 'Failed to send message',
      },
      { status: 500 }
    );
  }
}
