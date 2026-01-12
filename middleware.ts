import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect ONLY the old path
  if (pathname === "/mentalhealth") {
    return NextResponse.redirect(
      new URL("/mental-health", request.url),
      301
    );
  }

  return NextResponse.next();
}