import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/en")) {
    console.log(request.nextUrl.pathname);
    return NextResponse.rewrite(
      new URL(`/code123${request.nextUrl.pathname}`, request.url),
    );
  }
  if (request.nextUrl.pathname.startsWith("/fr")) {
    return NextResponse.rewrite(
      new URL(`/code456${request.nextUrl.pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
