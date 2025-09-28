import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/home") {
    return NextResponse.redirect(new URL("/", req.url), 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/home"],
};