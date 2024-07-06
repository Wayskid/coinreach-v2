import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("Token");
  const url = request.nextUrl.pathname;

  if (!currentUser && url.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (currentUser && url.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/login"],
};
