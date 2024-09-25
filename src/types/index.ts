export interface Category {
    id: number
    name: string
    image: string
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
}

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
}
