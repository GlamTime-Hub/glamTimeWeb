import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("business/:businessId", "routes/business/layout.tsx", [
    index("routes/business/home.tsx"),
    route("professional", "routes/business/professional.tsx"),
    route("services", "routes/business/services.tsx"),
  ]),
] satisfies RouteConfig;
