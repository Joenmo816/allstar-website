import { NextRequest, NextResponse } from "next/server";

// TODO: move your real POST logic here if/when needed
export async function POST(req: NextRequest) {
  return NextResponse.json({ ok: true });
}
