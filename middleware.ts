import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const nextUrl = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url,
  );

  const response = NextResponse.rewrite(nextUrl, { request });

  const url = new URL(nextUrl);
  const parts = url.pathname.split("/").filter(Boolean);

  // Insert the precomputed code at the start of the path
  parts.unshift("code128");

  url.pathname = `/${parts.join("/")}`;
  // override the rewrite
  response.headers.set("x-middleware-rewrite", url.toString());

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
