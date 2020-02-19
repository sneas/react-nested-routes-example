import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/About/Team";
import Careers from "./pages/About/Careers";
import Pricing from "./pages/Pricing";
import Basic from "./pages/Pricing/Basic";
import Corporate from "./pages/Pricing/Corporate";
import Users from "./pages/Users";

export const routes = [
  {
    path: "/",
    label: "Home",
    component: Home,
    routes: [
      {
        path: "/about",
        label: "About",
        component: About,
        routes: [
          {
            path: "/our-team",
            label: "Our Team",
            component: Team
          },
          {
            path: "/careers",
            label: "Careers",
            component: Careers
          }
        ]
      },
      {
        path: "/users",
        label: "Users",
        component: Users
      },
      {
        path: "/pricing",
        label: "Pricing",
        component: Pricing,
        routes: [
          {
            path: "/basic",
            label: "Basic",
            component: Basic
          },
          {
            path: "/corporate",
            label: "Corporate",
            component: Corporate
          }
        ]
      }
    ]
  }
];
