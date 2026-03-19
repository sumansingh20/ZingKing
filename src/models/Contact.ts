import mongoose from 'mongoose';

export interface IContact {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: 'inquiry' | 'partnership' | 'feedback' | 'complaint';
  isRead: boolean;
  isResolved: boolean;
  response?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ContactSchema = new mongoose.Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
      minlength: [10, 'Message must be at least 10 characters'],
    },
    type: {
      type: String,
      enum: ['inquiry', 'partnership', 'feedback', 'complaint'],
      default: 'inquiry',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    isResolved: {
      type: Boolean,
      default: false,
    },
    response: String,
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model<IContact>('Contact', ContactSchema);
