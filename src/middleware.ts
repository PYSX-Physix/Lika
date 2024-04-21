import { authMiddleware } from "@clerk/nextjs";
export const runtime = 'experimental-edge';
export default authMiddleware({
  publicRoutes: ["/meeting/:id*"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
