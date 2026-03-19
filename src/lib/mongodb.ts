import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

// Only throw error at runtime when actually trying to connect, not during build
if (!MONGODB_URI && process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
  console.warn('MONGODB_URI is not defined. Database features will not work.');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined. Please add it to environment variables.');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

declare global {
  var mongoose: any;
}
