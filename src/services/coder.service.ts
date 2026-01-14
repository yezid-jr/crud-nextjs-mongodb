import { connectDB } from "@/library/connMongoDb";
import { Coder } from "@/types/coder";
import { ObjectId } from "mongodb";

export async function getCoders() {
  const db = await connectDB();
  return db.collection("coders").find().toArray();
}

export async function createCoder(user: Coder) {
  const db = await connectDB();
  return db.collection("coders").insertOne({
    ...user,
    createdAt: new Date(),
  });
}

export async function updateCoder(id: string, user: Partial<Coder>) {
  const db = await connectDB();
  return db.collection("coders").updateOne(
    { _id: new ObjectId(id) },
    { $set: user }
  );
}

export async function deleteUser(id: string) {
  const db = await connectDB();
  return db.collection("users").deleteOne({
    _id: new ObjectId(id),
  });
}
