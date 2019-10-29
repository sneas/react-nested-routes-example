import All from "./pages/All";
import Electronics from "./pages/Electronics";
import Accessories from "./pages/Electronics/Accessories";
import Headphones from "./pages/Electronics/Headphones";
import Computers from "./pages/Computers";
import Laptops from "./pages/Computers/Laptops";
import Tablets from "./pages/Computers/Tablets";
import Books from "./pages/Books";

export const navigation = [
  {
    path: "/",
    label: "All categories",
    component: All,
    routes: [
      {
        path: "/electronics",
        label: "Electronics",
        component: Electronics,
        routes: [
          {
            path: "/accessories",
            label: "Accessories",
            component: Accessories
          },
          {
            path: "/headphones",
            label: "Headphones",
            component: Headphones
          }
        ]
      },
      {
        path: "/computers",
        label: "Computers",
        component: Computers,
        routes: [
          {
            path: "/laptops",
            label: "Laptops",
            component: Laptops
          },
          {
            path: "/tablets",
            label: "Tablets",
            component: Tablets
          }
        ]
      },
      {
        path: "/books",
        label: "Books",
        component: Books
      }
    ]
  }
];
