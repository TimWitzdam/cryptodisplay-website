import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.href.includes("dashboard")) {
    if (!context.cookies.get("cd_s")) {
      return context.redirect("/login");
    }
  }
  return next();
});
