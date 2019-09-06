import React from "react";

export const navigation = [
  {
    path: "/",
    label: "All categories",
    content: () => (
      <div>
        <img
          src="https://via.placeholder.com/640x480?text=All%20categories"
          alt="All categories"
        />
      </div>
    ),
    routes: [
      {
        path: "/electronics",
        label: "Electronics",
        content: () => (
          <div>
            <img
              src="https://via.placeholder.com/640x480?text=Electronics"
              alt="Electronics"
            />
          </div>
        ),
        routes: [
          {
            path: "/accessories",
            label: "Accessories",
            content: () => (
              <div>
                <img
                  src="https://via.placeholder.com/640x480?text=Accessories"
                  alt="Accessories"
                />
              </div>
            )
          },
          {
            path: "/headphones",
            label: "Headphones",
            content: () => (
              <div>
                <img
                  src="https://via.placeholder.com/640x480?text=Headphones"
                  alt="Headphones"
                />
              </div>
            )
          }
        ]
      },
      {
        path: "/computers",
        label: "Computers",
        content: () => (
          <div>
            <img
              src="https://via.placeholder.com/640x480?text=Computers"
              alt="Computers"
            />
          </div>
        ),
        routes: [
          {
            path: "/laptops",
            label: "Laptops",
            content: () => (
              <div>
                <img
                  src="https://via.placeholder.com/640x480?text=Laptops"
                  alt="Laptops"
                />
              </div>
            )
          },
          {
            path: "/tablets",
            label: "Tablets",
            content: () => (
              <div>
                <img
                  src="https://via.placeholder.com/640x480?text=Tablets"
                  alt="Tablets"
                />
              </div>
            )
          }
        ]
      },
      {
        path: "/books",
        label: "Books",
        content: () => (
          <div>
            <img
              src="https://via.placeholder.com/640x480?text=Books"
              alt="Books"
            />
          </div>
        )
      }
    ]
  }
];
