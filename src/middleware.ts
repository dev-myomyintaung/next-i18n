import { routing } from "@/libs/i18n-routing";
import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware(routing);

export default middleware;

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!_next|_vercel|monitoring|.*\\..*).*)",
};
