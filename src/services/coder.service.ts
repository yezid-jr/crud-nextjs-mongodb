import { connectDB } from "@/lib/mongodb";
import { User } from "@/types/user";
import { ObjectId } from "mongodb";

export async function getUsers() {
  const db = await connectDB();
  return db.collection("users").find().toArray();
}

export async function createUser(user: User) {
  const db = await connectDB();
  return db.collection("users").insertOne({
    ...user,
    createdAt: new Date(),
  });
}

export async function updateUser(id: string, user: Partial<User>) {
  const db = await connectDB();
  return db.collection("users").updateOne(
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
