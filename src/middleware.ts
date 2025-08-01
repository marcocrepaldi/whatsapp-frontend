import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwtDecode from "jwt-decode";

interface JwtPayload {
  exp: number;
  iat: number;
  sub: string;
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Rotas públicas (exemplo: /login)
  if (pathname.startsWith("/login")) {
    if (token && isValidToken(token)) {
      // Usuário já logado tenta acessar login, redireciona para dashboard
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // Rotas privadas que requerem autenticação
  const protectedRoutes = ["/dashboard", "/tickets", "/messages"];
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token || !isValidToken(token)) {
      // Sem token válido, redireciona para login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Permite o acesso normalmente
  return NextResponse.next();
}

function isValidToken(token: string): boolean {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp !== undefined && decoded.exp > now;
  } catch (err) {
    console.error("Token inválido:", err);
    return false;
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
