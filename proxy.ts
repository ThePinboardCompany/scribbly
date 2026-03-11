import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/changelog",
  "/docs",
  "/docs/(.*)",
  "/signin(.*)",
  "/signup(.*)",
];

const AUTH_ROUTES = ["/signin(.*)", "/signup(.*)"];

const isPublicRoute = createRouteMatcher(PUBLIC_ROUTES);
const isAuthRoute = createRouteMatcher(AUTH_ROUTES);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (userId && isAuthRoute(req)) {
    const url = new URL("/dashboard", req.url);
    return Response.redirect(url);
  }

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}