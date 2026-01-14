import { MongoClient } from "mongodb";
import { cache } from "react";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

const client = new MongoClient(uri);

const getClient = cache(async () => {
  return client.connect();
});

export async function connectDB() {
  const client = await getClient();
  return client.db(dbName);
}
