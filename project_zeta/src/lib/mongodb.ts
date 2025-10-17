// MongoDB client helper with connection caching for Next.js
// - Reads MONGODB_URI from environment
// - Caches the client in development to avoid exhausting connections on hot reloads

import { MongoClient, MongoClientOptions } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI as string | undefined;
const options: MongoClientOptions = {};

if (!uri) {
  throw new Error('Please add MONGODB_URI to your environment (e.g., .env.local)');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;