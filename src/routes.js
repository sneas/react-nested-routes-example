import React from "react";

export const routes = [
    {
        path: '',
        label: 'All categories',
        main: () => <div>All categories</div>,
        children: [
            {
                path: '/electronics',
                label: 'Electronics',
                main: () => <div>Electronics</div>,
                children: [
                    {
                        path: '/accessories',
                        label: 'Accessories',
                        main: () => <div>Accessories</div>
                    },
                    {
                        path: '/headphones',
                        label: 'Headphones',
                        main: () => <div>Headphones</div>
                    }
                ]
            },
            {
                path: '/computers',
                label: 'Computers',
                main: () => <div>Computers</div>,
                children: [
                    {
                        path: '/laptops',
                        label: 'Laptops',
                        main: () => <div>Laptops</div>
                    },
                    {
                        path: '/tablets',
                        label: 'Tablets',
                        main: () => <div>Tablets</div>
                    }
                ]
            },
            {
                path: '/books',
                label: 'Books',
                main: () => <div>Books</div>,
            },
        ]
    },
];
