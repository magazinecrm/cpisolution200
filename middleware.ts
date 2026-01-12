import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === "/mentalhealth") {
    url.pathname = "/mental-health";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}