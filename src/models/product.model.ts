import { BaseModel } from "@/models/base.model";
import type { Product } from "@/types";

export class ProductModel extends BaseModel implements Product {
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

    constructor(data: Product) {
        super(data);
        this.init(data);
    }

    /**
     * Initialize product properties
     * @param data
     */
    init(data: Product): void {
        this.id = data.id;
        this.title = data.title;
        this.price = data.price;
        this.description = data.description;
        this.images = data.images;
        this.creationAt = data.creationAt;
        this.updatedAt = data.updatedAt;
        this.category = data.category;
    }
}
