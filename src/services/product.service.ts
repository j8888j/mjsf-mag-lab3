import type { AxiosInstance } from "axios";
import type { Product } from "@/types";
import type { Createable, Deleteable, Readable, Updateable } from "@/services/types";
import { ProductModel } from "@/models/product.model";

export class ProductService implements Createable<Product>, Readable<Product>, Updateable<Product>, Deleteable<Product> {

    constructor(public httpClient: AxiosInstance) {}

    /**
     * Create a new product
     * @param data
     */
    async create(data: Product): Promise<Product> {
        const response = await this.httpClient.post<Product>('/products', data);
        return new ProductModel(response.data);
    }

    /**
     * Get products
     * @param params
     */
    async get(params: any): Promise<Product[]> {
        const response = await this.httpClient.get<Product[]>('/products', { params });
        return response.data.map((product) => new ProductModel(product));
    }

    /**
     * Get product by id
     * @param id
     */
    async getById(id: number): Promise<Product> {
        const response = await this.httpClient.get<Product>(`/products/${id}`);
        return new ProductModel(response.data);
    }

    /**
     * Update a product
     * @param id
     * @param data
     */
    async update(id: number, data: Product): Promise<Product> {
        const response = await this.httpClient.put<Product>(`/products/${id}`, data);
        return new ProductModel(response.data);
    }

    /**
     * Delete a product
     * @param id
     */
    async delete(id: number): Promise<Product> {
        const response = await this.httpClient.delete<Product>(`/products/${id}`);
        return new ProductModel(response.data);
    }
}
