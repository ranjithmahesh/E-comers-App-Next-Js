import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: ["/", "/project-deatils/(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
