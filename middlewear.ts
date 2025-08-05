export default (async (req) => {
   const { nextUrl } = req;
   const pathname = nextUrl.pathname;

   const session = await auth();
   const isLoggedIn = !!req.auth;
   const role = session?.user?.role;

   const isAuthRoute = authRoutes.includes(pathname);
   const isPublicRoute = publicRoutes.includes(pathname);
   const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);

   const isAdminRoute = pathname.startsWith("/admin-dashboard");
   const isSellerRoute = pathname.startsWith("/seller-dashboard");
   const isUserRoute = pathname.startsWith("/");

   // ✅ Let auth API routes pass through
   if (isApiAuthRoute) {
      return;
   }

   // ✅ Handle unauthenticated access to protected routes
   if (!isLoggedIn && !isPublicRoute && !isAuthRoute) {
      return Response.redirect(new URL("/sign-in", req.url));
   }

   // ✅ Prevent logged-in users from visiting login or register
   if (isLoggedIn && isAuthRoute) {
      const roleRedirectMap: Record<string, string> = {
         ADMIN: "/admin-dashboard",
         SELLER: "/seller-dashboard",
         USER: "/",
      };
      const redirectTo = roleRedirectMap[role as string];

      // ❌ Don't redirect if already on target
      if (pathname !== redirectTo) {
         return Response.redirect(new URL(redirectTo, req.url));
      }
   }

   // ✅ Role-based access control
   if (isLoggedIn) {
      if (isAdminRoute && role !== "ADMIN") {
         return Response.redirect(new URL("/sign-in", req.url));
      }
      if (isSellerRoute && role !== "SELLER") {
         return Response.redirect(new URL("/sign-in", req.url));
      }
      if (isUserRoute && role !== "USER") {
         return Response.redirect(new URL("/sign-in", req.url));
      }
   }

   return;
});

export const config = {
   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
