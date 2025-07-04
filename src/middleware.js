import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: [
    // Protect the Profile route
    "/profile",
  ],
};

export default authMiddleware;
