import React from "react";

export const routes = [
    {
        path: '/',
        label: 'All categories',
        main: () => <div><img src="https://via.placeholder.com/640x480?text=All%20categories" alt="All categories" /></div>,
        children: [
            {
                path: '/electronics',
                label: 'Electronics',
                main: () => <div><img src="https://via.placeholder.com/640x480?text=Electronics" alt="Electronics" /></div>,
                children: [
                    {
                        path: '/accessories',
                        label: 'Accessories',
                        main: () => <div><img src="https://via.placeholder.com/640x480?text=Accessories" alt="Accessories" /></div>
                    },
                    {
                        path: '/headphones',
                        label: 'Headphones',
                        main: () => <div><img src="https://via.placeholder.com/640x480?text=Headphones" alt="Headphones" /></div>
                    }
                ]
            },
            {
                path: '/computers',
                label: 'Computers',
                main: () => <div><img src="https://via.placeholder.com/640x480?text=Computers" alt="Computers" /></div>,
                children: [
                    {
                        path: '/laptops',
                        label: 'Laptops',
                        main: () => <div><img src="https://via.placeholder.com/640x480?text=Laptops" alt="Laptops" /></div>
                    },
                    {
                        path: '/tablets',
                        label: 'Tablets',
                        main: () => <div><img src="https://via.placeholder.com/640x480?text=Tablets" alt="Tablets" /></div>
                    }
                ]
            },
            {
                path: '/books',
                label: 'Books',
                main: () => <div><img src="https://via.placeholder.com/640x480?text=Books" alt="Books" /></div>,
            },
        ]
    },
];
