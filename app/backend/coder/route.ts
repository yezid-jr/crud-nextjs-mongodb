import { NextResponse } from "next/server";
import {
  getCoders,
  createCoder,
  updateCoder,
  deleteUser,
} from "@/services/coder.service";

export async function GET() {
  const users = await getCoders();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const result = await createCoder(body);
  return NextResponse.json(result);
}

export async function PUT(req: Request) {
  const { id, ...data } = await req.json();
  await updateCoder(id, data);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await deleteUser(id);
  return NextResponse.json({ ok: true });
}
