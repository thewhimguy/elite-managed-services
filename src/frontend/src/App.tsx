import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/layout/Layout";
import { AboutSezPage } from "./pages/AboutSezPage";
import { AboutStpiPage } from "./pages/AboutStpiPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { AdminPage } from "./pages/AdminPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { DgftServicesPage } from "./pages/services/DgftServicesPage";
import { EouServicesPage } from "./pages/services/EouServicesPage";
import { GstServicesPage } from "./pages/services/GstServicesPage";
import { IncomeTaxPage } from "./pages/services/IncomeTaxPage";
import { LabourLawPage } from "./pages/services/LabourLawPage";
import { PayrollServicesPage } from "./pages/services/PayrollServicesPage";
import { SezServicesPage } from "./pages/services/SezServicesPage";
import { StpiServicesPage } from "./pages/services/StpiServicesPage";

// Root route with layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Page routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us",
  component: AboutUsPage,
});

const aboutSezRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-sez",
  component: AboutSezPage,
});

const aboutStpiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-stpi",
  component: AboutStpiPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

// Service routes
const sezServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/sez",
  component: SezServicesPage,
});

const stpiServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/stpi",
  component: StpiServicesPage,
});

const eouServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/eou",
  component: EouServicesPage,
});

const dgftServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/dgft",
  component: DgftServicesPage,
});

const gstServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/gst",
  component: GstServicesPage,
});

const incomeTaxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/income-tax",
  component: IncomeTaxPage,
});

const payrollRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/payroll",
  component: PayrollServicesPage,
});

const labourLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/labour-law",
  component: LabourLawPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutUsRoute,
  aboutSezRoute,
  aboutStpiRoute,
  contactRoute,
  adminRoute,
  sezServicesRoute,
  stpiServicesRoute,
  eouServicesRoute,
  dgftServicesRoute,
  gstServicesRoute,
  incomeTaxRoute,
  payrollRoute,
  labourLawRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
